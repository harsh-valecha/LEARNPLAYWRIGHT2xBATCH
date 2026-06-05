const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));// returns all the keys as array
console.log(Object.values(obj));;// returns all the value as array

console.log(Object.entries(obj));// key value in arr

for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
}

// Rule -- we will always use const