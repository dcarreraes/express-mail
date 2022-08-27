var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', function (req, res, next) {
  const { to, host, port, title, from, pass, subject, message } = req.body;

  let prom = new Promise((resolve) => {
    let transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: true,
      auth: {
        user: from,
        pass: pass,
      },
    })
    var mailOptions = {
      from: `${title} <${from}>`,
      to: to,
      subject: subject,
      text: message
    }

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        resolve({
          status: false,
          message: error
        })
      } else {
        resolve({
          status: true,
          message: info.response
        })
      }
    })
  })
  prom.then(data => {
    res.send(data)
  })
});

router.get('/test', function (req, res, next) {
  let prom = new Promise((resolve) => {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS,
      },
    })
    var mailOptions = {
      from: `TEST <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: 'Subject',
      text: 'Message'
    }

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        resolve({
          status: false,
          message: error
        })
      } else {
        resolve({
          status: true,
          message: info.response
        })
      }
    })
  })
  prom.then(data => {
    res.send(data)
  })
});

module.exports = router;
