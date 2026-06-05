// rule keys will not be in double quote 
// if key provided in double quote it will become json
let student1 = { name: "Amit", age: 23 };
let student2 = { name: "Pramod" };


let a = { status: "Pass" };
let b = a; // b pointing to a

console.log(b);
b.status = "Fail";
console.log(b.status, a.status); // both fail

// objects are copied by reference so any change in value displayed 
// original object as well