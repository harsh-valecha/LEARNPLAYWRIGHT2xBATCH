let str = "  Hello World. ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: Fail Retry Pass FAIL"
console.log(msg.replace("Fail", "Jaskirat"));
console.log(msg.replaceAll("Fail", "Kulhad"));


// concatenation
"Hello" + "World";
"Hello".concat("World");


let r = "path,fail,skip".split(",");
console.log(r);// returns array

console.log("Test_Pass_Fail".split("_").join("?"));
