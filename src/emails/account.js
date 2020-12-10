const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  return sgMail.send({
    to: email,
    from: 'yalovyysanya@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}.`,
  });
};

const sendByeEmail = (email, name) => {
  return sgMail.send({
    to: email,
    from: 'yalovyysanya@gmail.com',
    subject: 'Bye!',
    text: `Have a nice day, ${name}.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail
}