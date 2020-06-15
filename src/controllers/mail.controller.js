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

    var msg = {
        to: req.user.email,
        from: process.env.EMAIL_FROM,
        subject: '<Code Rage> Welcome!',
        text: 'Welcome to Code Rage. Share your ideas and knowledge with developers all around the world or read the articles and learn more. Enjoy!'
    }

    transporter.sendMail(msg, (err, info) => {
        if (err) return next(err)

        return res.send({message: 'registration_complete_mail_sent', info: info.response})
    })
}

exports.forgotPassword = (req, res, next) => {

    var url = process.env.LINK + '/forgotPassword/' + req.token

    var msg = {
        to: req.body.email,
        from: process.env.EMAIL_FROM,
        subject: '<Code Rage> Password Reset',
        text: `You have requested to reset your password. Please click the link below.
                ${url}`
        
    }

    transporter.sendMail(msg, (err, info) => {
        if (err) return next(err)

        return res.send({message: 'reset_password_mail_sent', info: info.response})
    })

}

exports.changePassword = (req, res, next) => {

}