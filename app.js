require('dotenv').config()
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

app.post("/", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.USER,
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.log(err);
            res.send("error")
        } else {
            console.log("Email Sent!");
            res.send("success");
        }
    });
    
});

app.get("/download", (req, res) => {
    const file = __dirname + "/public/resume/pawansargar.pdf";
    res.download(file);
});



app.listen(process.env.PORT|| 3000, () => {
    console.log(`Server is running on Port: 3000`);
});