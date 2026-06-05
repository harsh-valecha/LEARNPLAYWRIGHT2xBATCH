const obj1 = { a: 1, b: 2 };
let copy = { ...obj1 }; // spread all value available in copy
copy.b = 10;

console.log(copy);
console.log(obj1); // original object is not affected when copied

