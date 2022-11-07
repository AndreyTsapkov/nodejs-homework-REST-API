const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "tsapkov1994@gmail.com" };
  await sgMail.send(mail);
  console.log("Mail send success");
  return true;
};

module.exports = sendEmail;
