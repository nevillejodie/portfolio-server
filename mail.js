const mailer = require("nodemailer");
import {USER, PASS} from './config'

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello":
        data = {
            from: "",
            to,
            subject: `hello ${name}`,
            html: hello()
        }
        break;
        default: 
        data;
    }
    return data; 
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
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