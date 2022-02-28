const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(textMail){

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "user", // generated ethereal user
            pass: "pass" // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"robot@bytelandia.ru', // sender address
        to: "no-reply.prozhektor.ru", // list of receivers
        subject: "Hello ✔", // Subject line
        text: textMail, // plain text body
        //html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);

}

main("Приветик").catch(console.error);
