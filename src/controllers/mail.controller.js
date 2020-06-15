const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
})


exports.welcome = (req, res, next) => {

    const msg = {
        to: req.user.email,
        from: process.env.EMAIL_FROM,
        subject: 'Welcome to Code Rage!',
        text: 'Welcome to Code Rage. Share your ideas and knowledge with developers all around the world or read the articles and learn more. Enjoy!'
    }

    transporter.sendMail(msg, (err, info) => {
        if (err) return next(err)

        return res.send({message: 'registration_complete_mail_sent', info: info.response})
    })
}

exports.forgotPassword = (req, res, next) => {

}

exports.changePassword = (req, res, next) => {

}