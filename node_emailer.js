var email = require('nodemailer');

var trans = email.createTransport({
    service: 'gmail',
    auth: {
        user: 'lokeshkumar12471@gmail.com',
        password: 'Mother@143'
    }
})

var options = {
    from: 'lokeshkumar12471@gmail.com',
    to: 'lokeshkumar70194@gmail.com',
    subject: 'Testing Mail',
    text: 'Thats easy to use',
}

trans.sendMail(options, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Email is Sent' + info.response);
    }
})