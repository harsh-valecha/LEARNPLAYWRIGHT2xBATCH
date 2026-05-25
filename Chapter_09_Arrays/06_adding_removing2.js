let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);


// splice(start,deletecount,...itemstoadd); 
// arr.splice(2, 1);// deletes 3
// console.log(arr);


// arr.splice(2, 0, 99); // 0 means dont delete but insert 99 at 2
// console.log(arr);


// arr.splice(2, 1, 99); // replaces 3 with 99
// console.log(arr);

arr.splice(1, 2, 10, 20, 30);
console.log(arr);