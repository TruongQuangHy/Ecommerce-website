const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true cho port 465, false cho các port khác
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  // Gọi trực tiếp hàm gửi email
  const info = await transporter.sendMail({
    from: `"Your App Name" <${process.env.MAIL_ID}>`,
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  });

  console.log("Message sent: %s", info.messageId);
});

module.exports = sendEmail;
