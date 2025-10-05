import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Replace with your real email credentials
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // For Gmail
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // app password if using Gmail
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // receive email at your own address
      subject: subject || "Portfolio Contact Form",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
