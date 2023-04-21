const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (to, subject, html) => {
    let testAccount = await nodemailer.createTestAccount();

    //connecting with the ethereal
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "nola98@ethereal.email",
            pass: "xMBchyXK8rW9KTU46S"
        },
    });

    let info = await transporter.sendMail({
        from: '"Zubair" <info@boostenhance.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
      });
}

module.exports = { sendMail };