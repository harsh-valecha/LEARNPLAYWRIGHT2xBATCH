// Difference between null and undefined

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined

// null: intentional absence of any object value
let b = null;
console.log(b); // null

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug in JS)

// null vs undefined comparison
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)

// undefined is the default value
function greet(name) {
  console.log(name); // undefined if no argument passed
}
greet();

// null is often used to explicitly reset a value
let user = { name: "John" };
user = null; // explicitly clear the reference
console.log(user); // null
