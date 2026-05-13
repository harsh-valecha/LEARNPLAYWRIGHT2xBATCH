// String literals in JavaScript

// --- Three ways to create strings ---

// 1. Single quotes
let single = 'Hello World';

// 2. Double quotes
let double = "Hello World";

// 3. Template literals (backticks)
let template = `Hello World`;

// --- Template literal features ---

// String interpolation
let name = "John";
let greeting = `Hello, ${name}!`; // "Hello, John!"
console.log(greeting);

// Multi-line strings
let multi = `Line 1
Line 2
Line 3`;
console.log(multi);

// Expression evaluation
let price = 10;
let tax = 0.2;
let message = `Total: $${price + price * tax}`;
console.log(message);

// --- Escape sequences ---

console.log('It\'s a string');      // single quote
console.log("He said \"Hi\"");     // double quote
console.log('Line 1\nLine 2');     // newline
console.log('Tab\there');          // tab
console.log('Backslash: \\');      // backslash

// --- String length and access ---

let str = "JavaScript";
console.log(str.length);       // 10
console.log(str[0]);           // "J"
console.log(str[str.length - 1]); // "t"

// --- Common string methods ---

let text = "  Hello World  ";
console.log(text.toUpperCase());      // "  HELLO WORLD  "
console.log(text.toLowerCase());      // "  hello world  "
console.log(text.trim());             // "Hello World"
console.log(text.includes("World"));  // true
console.log(text.indexOf("World"));   // 8
console.log(text.slice(2, 7));        // "Hello"
console.log(text.replace("World", "JS")); // "  Hello JS  "
console.log("a,b,c".split(","));     // ["a", "b", "c"]
