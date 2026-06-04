import { google } from "googleapis";
import path from "path";

const SPREADSHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

export async function appendSheetRow(
  values: (string | number)[],
  options?: { spreadsheetId?: string; range?: string }
) {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), "credentials.json"),
    scopes: [SPREADSHEETS_SCOPE],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId =
    options?.spreadsheetId ||
    process.env.GOOGLE_CONTACT_SHEET_ID ||
    "1Zz0f8dm4ZTOHXSDvMdSQ006ZcppfdOgFVUKN6BRvTBg";

  const range =
    options?.range || process.env.GOOGLE_CONTACT_SHEET_RANGE || "Contact!A:F";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}
