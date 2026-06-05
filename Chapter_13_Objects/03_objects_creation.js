let c = { status: "pass" };
let d = { status: "pass" };

console.log(c === d);// false both references are diff
let e = c;
console.log(e === c);// true because same references