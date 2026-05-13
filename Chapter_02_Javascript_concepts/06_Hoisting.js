// console.log(greeting);
// var greeting = "Hello";
// console.log(greeting);

// console.log(testing);
// let testing = "test"; // Reference error cant access testing before initialization
// console.log(testing);

// function hoisting
getUserStatus(); // called before initialisation -- still works funnnnyyy
function getUserStatus() {
    console.log(status_code);
    var status_code = "online";
    console.log(status_code);
}

