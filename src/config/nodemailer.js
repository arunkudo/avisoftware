import nodemailer from "nodemailer";
const user = process.env.EMAIL;
const pass = process.env.PASSWORD;
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

export const mailOptions = {
  from: "Business Inquiry " + user,
  to: user,
  subject: "Message title",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>",
};
