let str = "Login_Test_Pass_101";
console.log(str.slice(0, 5));// Login
console.log(str.slice(11));
console.log(str.slice(-3));


console.log(str.includes("Pass")); // includes is case sensitive pass return fail


console.log(str.substring(6, 10)); // negative index not allowed