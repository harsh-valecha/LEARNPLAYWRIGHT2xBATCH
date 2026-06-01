// Rest of parameters or spread operator

function logResult(suitName, ...results) {
    console.log(suitName);
    console.log(results); // printed as arr
}

logResult("Login Test", "Jaspal", "Bhinda", 123, "Kool");
logResult("Registration Test", "Took");


// ...results cant be first argument 

/*
function testInvalid(...rest, testName) {
    console.log(rest);
    console.log(testName);
}

testInvalid("Login Test", "Jaspal", "Bhinda", 123, "Kool");

SyntaxError: Rest parameter must be last formal parameter
*/

