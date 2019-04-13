const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jono@plynth.com',
        subject: 'Thanks for signing up',
        text: `Welcome to the app, ${name}. Let us know how you like it!` 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jono@plynth.com',
        subject: 'Sorry to see you go',
        text: `Sorry to see you go ${name}. Is there anything we could have done to keep you?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}