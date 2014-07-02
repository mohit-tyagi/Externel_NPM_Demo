var nodemailer = require("nodemailer");
var fs=require("fs");

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "Dummy_ID@gmail.com",
        pass: "**********"
    }
});

var data=fs.readFileSync("AsyncWaterFallDemo.js");

//console.log(data.toString());


var mailOptions = {
    from: "mohit Kumar Tyagi",
    to: "mohit.tyagi@intelligrape.com",
    subject: "Download Attechment ",
    text: "Demo",
    attachments: [
        {   // utf-8 string as an attachment
            fileName: "AsyncWaterFallDemo.js",
            contents: data
        }]
}


smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }


});

