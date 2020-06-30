const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
var path = require('path');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());




app.get('/contact', () => {
    resizeBy.send("Welcome to my forma !!!")
});

app.post('/api/forma', (req, res) => {
    let data = req.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        transportMethod: 'SMTP', 
        auth: {
            user: 'visitsevaninfo@mail.ru', 
            pass: 'sevinf.2020'
        }
    });

    let mailOptions = {
        from: `Client <visitsevaninfo@mail.ru>`,
        to: 'visitsevaninfo@mail.ru',
        subject: `Message from ${data.body}`,
        html: ` 

            <h3>Info</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>LastName: ${data.lastname} </li>
                <li>Mobile: ${data.mobile} </li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>

        `
    };

    transporter.sendMail(mailOptions, (error, response) => {
        if(error) {
            res.send(error)
        }else {
            res.send("Success")
        }
    })

    transporter.close();
})

const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
    console.log(`Server starting at port ${PORT}`);
})