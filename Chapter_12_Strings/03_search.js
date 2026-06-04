let url = "https://staging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("staging"));

console.log(url.startsWith("https"));// true
console.log(url.endsWith("false"));// flase
console.log(url.startsWith("http://"));//false


// indexOf / lastIndexOf
console.log(url.indexOf("ag"));//10
console.log(url.lastIndexOf("ps:"));//3
console.log(url.indexOf("nowhere")); // -1

// search
console.log(url.search("/login"));// 27 - /login starts from 27 return -1 when not found
console.log(url.search("vwo"));// 16