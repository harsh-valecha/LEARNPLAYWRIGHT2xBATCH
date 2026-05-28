let arr = [1, 2, 3, 4, 5];
// slicing returns a new array does not return original

console.log(arr.slice(1, 3));

console.log(arr.slice(2, 4));

console.log(arr.slice(1, 10));// high end no error
console.log(arr.slice(1,)); // no end no error
console.log(arr.slice(-2));