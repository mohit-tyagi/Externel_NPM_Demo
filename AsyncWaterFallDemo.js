

(function () {
// For Module Design Pattren

    var mongoose = require("mongoose");
    var async = require("async");

    var UriSting = 'mongodb://localhost/Intelligrape';//define database name
    console.log('Server started');


//to connect with data base

    mongoose.connect(UriSting, function (err) {
        if (err) console.log('Error Connection to db' + err); //if error
        else console.log('Connected sussefully');      // if connection done
    });




// to create schema like a TABLE (field name:data type );

    var Person = new mongoose.Schema({
        EmpID: Number,
        name: String,
        age: Number,
        address: String,
        job: String,
        sal: Number
    });

    var Employee = mongoose.model('emp', Person); //collection name -to-model


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// to select data...limit for range 0-all other for count

    function outData(callback) {
        Employee.find({}).limit(0).exec(function (err, result) {
            if (err) console.log("Error inretriving data");
            // else console.log("data ::" + result);
            callback(err,result);

        });
    }



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//to Operation on  data
    function oprData(data,callback) {

        var TotalSal=0;
        for(var id in data) {
            console.log(data[id].name)
            TotalSal += data[id].sal;
        }
        callback(null,TotalSal)

    }//save sample user to db.users.insert(sampleUser) where sampleUser--> {name:"Mohit Kumar Tyagi",age:23};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    async.waterfall([outData,oprData], function (err, result) {

        if(err) console.log("Error inretriving data");
        else console.log("Total Salary ::"+result);


    });



})();

