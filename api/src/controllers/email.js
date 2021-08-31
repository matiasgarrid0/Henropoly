"use strict";
const nodemailer = require("nodemailer");
var transporter;
const runAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};
runAccount();

const sendCode = async (email, code) => {
  console.log(email)
  await transporter.sendMail({
    from: '"mail recovery" <admin@henropoly.com>',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?",
    html: `<b>code: ${code}</b>`,
  });
};

module.exports = {
  sendCode,
};
