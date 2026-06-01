// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

let add = (a, b) => a + b;
console.log(add(3, 4));

// function sayHi() {
//     console.log("Hi");
// }
// sayHi();

let sayHi = () => console.log("Hi");
// sayHi();

// multiline

const greet = name => {
    const message = `Hi ${name}`;
    return message;
}
console.log(greet("Jaspal"));