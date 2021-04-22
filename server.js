const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/public/cotactform.html');
});

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail', //smtp.gmail.com  //in place of service use host...
    secure: false, //true
    port: 25, //465
    auth: {
      user: 'hamid.azizy@gmail.com',
      pass: 'Dardesar@123',
    },
  });

  const mailOption = {
    from: req.body.name,
    to: req.body.email,
    subject: `Message from ${req.body.name} Email: ${req.body.email}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email Sent' + info.response);
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running`);
});
