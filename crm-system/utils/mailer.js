// utils/mailer.js

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

const sendLeadEmail = async (lead) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "🔥 New Client Lead",
    html: `
      <h2>New Booking Received</h2>
      <p><b>Name:</b> ${lead.name}</p>
      <p><b>Email:</b> ${lead.email}</p>
      <p><b>Service:</b> ${lead.service}</p>
      <p><b>Date:</b> ${lead.date}</p>
      <p><b>Message:</b> ${lead.message}</p>
    `
  });
};

module.exports = sendLeadEmail;