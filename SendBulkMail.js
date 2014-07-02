var nodemailer = require("nodemailer");
var async = require("async");


var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "Dummy_ID@gmail.com",
        pass: "**********"
    }
});

var List = ['amit.raj@intelligrape.com', 'kashish.gupta@intelligrape.com', 'sandeep.kumar@intelligrape.com', 'mohit.tyagi@intelligrape.com'];
//console.log(List);


var Task = [];


for (var id in List) {
    (function (ids) {
        Task.push(function () {
            smtpTransport.sendMail({
                from: "Mohit",
                to: ids,
                subject: "Bulk testing ",
                text: "Plz tell me "
            }, function (error, response) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: !!!!!!");
                }
            })
        });
    })(List[id]);
}


async.parallel(Task, function (err, result) {

    if (err) console.log("Error ::"+ err);
    else console.log("ALL SENDING COMPLETE");


});


