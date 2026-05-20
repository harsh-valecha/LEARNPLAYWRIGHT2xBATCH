// even odd

let num = 44;
if (num % 2 === 0) {
    console.log("number is even", num);
}
else {
    console.log("number is odd", num);
}

// student grade

let marks = 50;
if (marks >= 90) {
    console.log("Above A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else {
    console.log("fail");
}

//leap year check 
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year");
}