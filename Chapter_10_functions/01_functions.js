// functions

// in js everything is all about function

// function - standalone callable 
// method - function stired as object property

function greet() {
    console.log("Hello , how are you ?");
} // definition of funtion

greet(); // call

// Types of function in js

/*
Basic function - no params , no return

Parameter vs argument  - 
Parameter — variable listed in function definition. Argument — actual value passed when calling.
function greet(name) { ... }  // name is a parameter
greet("Alice");               // "Alice" is an argument
Parameters are the placeholders; arguments are the concrete values supplied at invocation.

2. Function with parameter but no return 
3. Function without parameter but return 
4. Function with parameter and return 
*/

function greetByName(name) {
    console.log("Hi ", name);

}
let somevalue = greetByName("Jaskirat");
//console.log(somevalue);// no return

function sumOfTwoNumbers(a, b) {
    return a + b;
}

console.log(sumOfTwoNumbers(2, 3));
console.log(sumOfTwoNumbers("Jaspal", "Bassi"));

