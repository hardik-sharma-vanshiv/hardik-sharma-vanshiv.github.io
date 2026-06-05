import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    // const coverLetter = formData.get("coverLetter") as string
    const resume = formData.get("resume") as File;
    const jobId = formData.get("jobId") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobType = formData.get("jobType") as string;

    if (
      !name ||
      !email ||
      !phone ||
      !resume ||
      !jobId ||
      !jobTitle ||
      !jobType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Determine recipient email based on job type
    const recipientEmail = jobType.toLowerCase().includes("internship")
      ? "hiring.intern@vanshiv.com"
      : "hiring@vanshiv.com";

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.HRMS_EMAIL,
        pass: process.env.HRMS_APP_PASSWORD,
      },
    });

    // Convert resume file to buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // Email content
    const emailContent = `
            New Job Application Received
            
            Position: ${jobTitle}
            Job ID: ${jobId}
            Job Type: ${jobType}
            
            Applicant Details:
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            
            Please find the resume attached.`;

    // Send email
    await transporter.sendMail({
      to: recipientEmail,
      subject: `New Application: ${jobTitle} - ${name}`,
      text: emailContent,
      attachments: [
        {
          filename: `${name.replace(/\s+/g, "_")}_Resume.${resume.name.split(".").pop()}`,
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
