const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const welcomeEmailTemplate = require("../utils/templates/emailTemplates");
const otpEmailTemplate = require("../utils/templates/emailTemplates");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (user) => {
  await transporter.sendMail({
    from: `"TaskFlow 🚀" <${process.env.EMAIL}>`,
    to: user.email,
    subject: "Welcome to TaskFlow",
    html: welcomeEmailTemplate(user.name),
  });
};

// export both
module.exports = sendWelcomeEmail;