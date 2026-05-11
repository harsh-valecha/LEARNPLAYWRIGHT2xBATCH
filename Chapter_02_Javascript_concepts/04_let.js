// block scoped

// can be reassigned but cant be redeclared

let retryCount = 0;
retryCount += 1; // reassignment is possible 
console.log("Retry count:", retryCount);

// let retryCount = 13; // not possible SyntaxError: Identifier 'retryCount' has already been declared

/*
examples of blocks -
{}
if (){}
function (){}
*/
