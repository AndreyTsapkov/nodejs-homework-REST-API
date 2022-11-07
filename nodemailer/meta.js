const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2255
  secure: true,
  auth: {
    user: "andriitsapkov@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
  to: "tsapkov1994@gmail.com",
  from: "andriitsapkov@meta.ua",
  subject: "Hello, dude, it`s last lesson",
  html: "Just wait a little, it`s almost over",
};

const sendMailbyNodemailer = (mail) => {
  transport
    .sendMail(mail)
    .then(() => {
      console.log("Email send success");
    })
    .catch((error) => console.log(error.message));
};

sendMailbyNodemailer(mail);

module.exports = sendMailbyNodemailer;
