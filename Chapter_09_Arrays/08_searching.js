let results = ["pass", "fail", "error", "pass", "tool"];

console.log(results.indexOf("fail")); // returns 1st index
console.log(results.lastIndexOf("pass")); // returns last index

// returns first matching value
let nums = [10, 25, 30, 40];
console.log(nums.find(x => x > 20)); // 25

//findIndex
console.log(nums.findIndex(n => n > 20));

console.log(nums.findLast(n => n > 20));
console.log(nums.findLastIndex(n => n > 20));