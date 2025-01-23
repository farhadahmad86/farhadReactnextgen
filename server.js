// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jack78943644@gmail.com",
    pass: "bdtxwlubhkqmvmck", // Replace with OAuth2.0 token if using OAuth
  },
});

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Email configuration
  const mailOptions = {
    from: email,
    to: "farhadsfz86@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "There was an error sending your message. Please try again later." });
    } else {
      return res.status(200).json({ success: "Your message has been sent successfully." });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
