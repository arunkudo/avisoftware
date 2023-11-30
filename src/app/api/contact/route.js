import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const reqJson = await req.json();
  const template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        max-width: 100px;
      }
      .message {
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="https://www.avi.software/logo.svg" alt="Company Logo">
      </div>
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${reqJson.name}</p>
      <p><strong>Contact Number:</strong> ${
        reqJson.country + " " + reqJson.contact
      }</p>
      <p><strong>Email:</strong> ${reqJson.email}</p>
      <p><strong>Company Name:</strong> ${reqJson.cname}</p>
      <p><strong>Company Website:</strong> <a href="${
        reqJson.website
      }" target="_blank">${reqJson.website}</a></p>
      <div class="message">
        <p><strong>Message:</strong></p>
        <p>${reqJson.message}</p>
      </div>
    </div>
  </body>
  </html>
  `;
  if (
    !reqJson.name ||
    !reqJson.cname ||
    !reqJson.website ||
    !reqJson.email ||
    !reqJson.brequire ||
    !reqJson.message
  ) {
    return NextResponse.json(
      { message: "Missing parameter", success: false },
      { status: 400 }
    );
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: reqJson.brequire + " Inquiry",
      html: template,
    });
    return NextResponse.json(
      {
        message:
          "We appreciate your inquiry through our website form and will connect with you shortly.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 400 }
    );
  }
}
