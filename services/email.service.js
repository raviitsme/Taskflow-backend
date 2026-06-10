const { welcomeEmailTemplate } = require('../utils/templates/emailTemplates');

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.EMAIL,
        pass : process.env.EMAIL_PASS,
    }
})

const sendWelcomeEmail = async(user) => {
    await transporter.sendMail({
        from : `"Taskflow" <${process.env.EMAIL}>`,
        to : user.email,
        subject : "Welcome to taskflow",
        html : welcomeEmailTemplate(user.name),
    })
}

module.exports = { sendWelcomeEmail };