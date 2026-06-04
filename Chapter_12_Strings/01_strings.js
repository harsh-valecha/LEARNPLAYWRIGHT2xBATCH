console.log("A".charCodeAt(0));// returns ASCII code 

// single quote -- valid string
let a = 'Hello';

// double quote -- valid string
let b = "World";

// template string -- valid
let name = "Jaskirat";
console.log(`Hello this is ${name}`);

// multiline
let report = `
This is a report
and you are 
seeing it as 
a multiline string
`;
console.log(report);


// String function converts to string
// String(null) -> "null"
// String(200) -> "200"
// String(true) -> "true"
// String([1,2]) -> "[1,2]"