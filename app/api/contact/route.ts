import { appendSheetRow } from "@/lib/google-sheets";
import { verifyRecaptchaToken } from "@/lib/recaptcha";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      recaptchaToken,
    } = body as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      message?: string;
      recaptchaToken?: string;
    };

    const captcha = await verifyRecaptchaToken(recaptchaToken);
    if (!captcha.ok) {
      return NextResponse.json({ error: captcha.error }, { status: 400 });
    }

    const trimmed = {
      firstName: firstName?.trim() ?? "",
      lastName: lastName?.trim() ?? "",
      email: email?.trim() ?? "",
      phone: phone?.trim() ?? "",
      message: message?.trim() ?? "",
    };

    if (
      !trimmed.firstName ||
      !trimmed.lastName ||
      !trimmed.email ||
      !trimmed.message
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await appendSheetRow([
      new Date().toISOString(),
      trimmed.firstName,
      trimmed.lastName,
      trimmed.email,
      trimmed.phone,
      trimmed.message,
    ]);

    return NextResponse.json({
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your message right now. Please try again or email contact@vanshiv.com.",
      },
      { status: 500 }
    );
  }
}
