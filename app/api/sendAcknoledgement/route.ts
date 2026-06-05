import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  const { name, email, phone } = requestBody;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.HRMS_EMAIL,
        pass: process.env.HRMS_APP_PASSWORD,
      },
    });

    const subject = "Application Acknowledgement - Vanshiv";

    const htmlMessage = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .header h2 { margin: 0; color: #222; }
            .content { margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            .highlight { color: #0066cc; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank you for applying to Vanshiv</h2>
            </div>
            
            <div class="content">
              <p>Dear <span class="highlight">${name}</span>,</p>
              
              <p>We have received your application and our recruitment team will review your profile. If your application is shortlisted, we will contact you for the next steps.</p>
              
              <p>Thank you again for your interest and patience.</p>
            </div>
            
            <div class="footer">
              <p><strong>Vanshiv – Hiring Team</strong></p>
              <p>This is an automated email. Please do not reply to this message.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      to: email,
      subject,
      html: htmlMessage,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Acknowledgement email sent successfully",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 },
    );
  }
}
