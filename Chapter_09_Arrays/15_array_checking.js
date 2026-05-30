let result = Array.isArray([1, 2, 3]);
console.log(result);

// let result = Array.isArray("a");
// console.log(result);


// every - all element must pass the condition
console.log([80, 75, 90].every(s => s >= 70)); // true
console.log([10, 55, 30].every(s => s >= 70)); // false


// some -- atleast one must pass
console.log([20, 70, 65].some(s => s >= 70)); // true