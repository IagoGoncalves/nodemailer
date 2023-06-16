const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587, 
    secure: false, //true para 465
    auth:{ 
        user: '',
        pass: '', //senha de app do gmail para 465
    }
});

transport.sendMail({
    from: 'Nome <email>',
    to: '',
    subject: 'Email do NodeMailer',
    html: '<h1>Olá, teste de email</h1><p>Esse email foi enviado pelo nodemailer</p>',
    text: 'Olá, esse email foi enviado usando o nodemailer'
})
.then(() => console.log('Email enviado com sucesso'))
.catch((err) => console.log('O email não foi enviado, erro: ', err))