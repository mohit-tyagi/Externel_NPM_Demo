var _=require('underscore');


var obj={
    "name": "application-name",
    "version": "0.0.1",
    "main":"app.js",
    "dependencies": {
        "async": "^0.9.0",
        "request": "^2.36.0",
        "underscore": "^1.6.0"
    }
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//For convert obj to Array
var arr=[];
for(var obj1 in obj)
{
    arr.push(obj[obj1]);
}
console.log(arr);



// or use this

console.log(">>>>>>>>>>>>>>>>>>>",_.toArray(obj));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// For delete duplicate elements

var DupArray=[1,3,5,7,8,5,3,2,3,1,4,7,6,1,1,1,1,1,1,1,1,1,1];
var myArray=[];
for(var i in DupArray)
{
    if(myArray.indexOf(DupArray[i])==-1)
    {
        myArray.push(DupArray[i]);
    }

}

console.log(myArray);

// or use this method

console.log(_.unique(DupArray));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//For Flat array

var UnFlatarray=[1,2,[3,4,6,[7,8],10]];


console.log(_.flatten(UnFlatarray));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


