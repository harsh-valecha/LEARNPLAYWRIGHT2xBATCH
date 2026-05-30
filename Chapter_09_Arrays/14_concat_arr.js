let a = [1, 2];
let b = [3, 4];
// let c = a + b;// combines as string 
let c = a.concat(b); // use concat method
console.log(c);


// spread concatenation (...)
let d = [...a, ...b];
console.log(d);

//join
let s = ["Pass", "Fail", "Pending"].join("|");
console.log(s);
