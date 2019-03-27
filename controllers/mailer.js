const nodemailer = require('../models/nodemailer');

const mailer = {
    sendConfirmationEmail: function(callback, email) {
        const { transporter, mailOptions } = nodemailer;

        const injectedOptions = { ...mailOptions, to: email };
        transporter.sendMail(injectedOptions, function(err, info) {
            if (err) {
                callback({ message: 'unable to send confirmation email' });
                return;
            }
            callback({ message: 'successfully sent confirmation email' });
        });
    },
};

module.exports = mailer;
