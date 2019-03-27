const nodemailer = require('nodemailer');
const config = require('../config/keys');

const transporter = nodemailer.createTransport({
    service: config.mailService,
    auth: {
        user: config.mailUser,
        pass: config.mailPass,
    },
});

const mailOptions = {
    from: config.mailUser,
    subject: 'Thanks for signing up',
    text:
        'Congratulations on joining the Empire. We expect great things from you ',
};

module.exports = {
    transporter,
    mailOptions,
};
