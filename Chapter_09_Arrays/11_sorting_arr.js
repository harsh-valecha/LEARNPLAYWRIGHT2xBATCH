let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// capitals are sorted to first before small case

let number = [10, 1, 2, 10];
number.sort();
console.log(number);

// Natural / lexical sorting 

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);

// for normal sorting 
// nums.sort((a, b) => a - b); // ascending order
// console.log(nums);

nums.sort((a, b) => b - a); // descending order
console.log(nums);