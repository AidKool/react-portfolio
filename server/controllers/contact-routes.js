require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.PW,
    },
    debug: false,
    logger: false,
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `PORTFOLIO: New message from ${email}`,
    text: `Message from: ${name}\nEmail: ${email}\n\nText: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).json(error);
    } else {
      return res.status(200).json(info.response);
    }
  });
});

module.exports = router;
