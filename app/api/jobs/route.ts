// app/api/jobs/route.ts
import { google } from "googleapis";
import path from "path";
import { NextResponse } from "next/server";

type AnyAuthClient = any;

// Configure Google Auth
const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), "credentials.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// Fetch data helper
async function getSheetData(sheetId: string, range: string) {
    const client: AnyAuthClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range,
    });

    return response.data.values;
}

export async function GET() {
    try {
        const sheetId = "1Zz0f8dm4ZTOHXSDvMdSQ006ZcppfdOgFVUKN6BRvTBg";
        const range = "A:N";
        const rawData = await getSheetData(sheetId, range);

        if (!rawData || rawData.length < 2) {
            return NextResponse.json(
                { error: "Insufficient data in sheet" },
                { status: 400 }
            );
        }

        const headers = rawData[0];
        const rows = rawData.slice(1);

        // Map headers from sheet → schema keys
        const keyMap: Record<string, string> = {
            "Job ID": "jobId",
            Title: "title",
            Type: "type",
            Requirements: "requirements",
            "Key Responsibilities": "keyResponsibilities",
            "Nice To Have": "niceToHave",
            "Work Mode": "workMode",
            Location: "location",
            "Open Positions": "openPositions",
            "Last Date": "lastDate",
            "Is Active": "isActive",
            "Experience Min": "experienceRequired.min",
            "Experience Max": "experienceRequired.max",
            "Working Hours ": "workingHours",
        };

        const formattedData = rows
            .filter((row) => row.length > 0 && row.some((cell) => cell.trim() !== ""))
            .map((row) => {
                const obj: any = {
                    experienceRequired: {},
                };

                headers.forEach((header, index) => {
                    const key = keyMap[header];
                    if (!key) return;

                    const value = row[index] || "";

                    if (key.includes(".")) {
                        // Handle nested keys like experienceRequired.min
                        const [parent, child] = key.split(".");
                        obj[parent] = obj[parent] || {};
                        obj[parent][child] =
                            child === "min" || child === "max" ? Number(value) || 0 : value;
                    } else if (
                        key === "requirements" ||
                        key === "keyResponsibilities" ||
                        key === "niceToHave"
                    ) {
                        obj[key] = value ? value.split(">").map((s: string) => s.trim()) : [];
                    } else if (key === "openPositions") {
                        obj[key] = Number(value) || 1;
                    } else if (key === "lastDate") {
                        obj[key] = value ? new Date(value) : null;
                    } else if (key === "isActive") {
                        obj[key] = value.toString().toLowerCase() === "true";
                    } else {
                        obj[key] = value;
                    }
                });

                return obj;
            });

        return NextResponse.json({
            message: "Jobs fetched successfully",
            count: formattedData.length,
            data: formattedData,
        });
    } catch (error: any) {
        console.error("Sheet data fetch error:", error);
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
