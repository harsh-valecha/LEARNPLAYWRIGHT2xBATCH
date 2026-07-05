interface Calculator {
    add(a: Number, b: number): number;
    subtract(a: Number, b: number): number;
    multiply(a: Number, b: number): number; // alternative syntax
}
// abstraction -- to hide the functions 
const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc.add(1, 2));
console.log(calc.multiply(3, 4));
console.log(calc.subtract(9, 7));