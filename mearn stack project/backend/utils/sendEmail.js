import nodeMailer from "nodemailer";

export const sendEmail = async(Options)=>{

    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port:  process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE ,
        auth: {
          user: process.env.SMTP_MAIL,
          pass:  process.env.SMTP_PASSWORD ,
        },
    });

    const mailoptions ={
        from:process.env.SMTP_MAIL,
        to:Options.email,
        subject:Options.subject,
        text:`${Options.message} \n\n email of user sent the message :${Options.userEmail }`
    }

    await transporter.sendMail(mailoptions)

}