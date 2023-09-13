const nodemailer = require("nodemailer");

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "your-email-service-provider",
  auth: {
    user: "your-email@example.com",
    pass: "your-email-password",
  },
});

// Define email data
const mailOptions = {
  from: "nwekecynthia2015@gmail.com",
  to: "cynthiachinenye716@gmail.com",
  subject: "from Node",
  text: "This is a test email sent from Node.js.",
};

// Send email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
