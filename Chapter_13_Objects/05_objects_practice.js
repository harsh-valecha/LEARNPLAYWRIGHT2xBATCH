let a = 10;
let b = a; // primitive variable -- new variable created with value 10
b = 99;
console.log(a);// a remains same in case of normal variable -- copy by value


let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); // original value replaced as copy by reference
