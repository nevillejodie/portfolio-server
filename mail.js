const mailer = require("nodemailer");
const {USER} = require('./config');
const {PASS} = require('./config');
const {Hello} = require('./hello_template');

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello":
        data = {
            from: "jodie-1992@outlook.com",
            to: "jodie-1992@outlook.com",
            subject: `From ${name}`,
            html: Hello()
        }
        break;
        default: 
        data;
    }
    return data; 
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: "outlook",
        auth: {
            user: `${USER}`,
            pass: `${PASS}`
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log("email send ")
        }
        smtpTransport.close();
    }
    )
}

module.exports = {sendEmail}