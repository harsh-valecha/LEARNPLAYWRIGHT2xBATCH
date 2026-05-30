// slice wont modify original array , splice can modify the original array

// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4);
// console.log(s);
// console.log(arr);

let arr = [10, 20, 30, 40, 50];
let s = arr.splice(1, 4);
console.log(s);
console.log(arr);