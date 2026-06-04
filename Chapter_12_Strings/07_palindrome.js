// String Reverse | Palindrome program -- without using reverse method

let str = "PRAMOD";
let reverse = "";

for (let i = -1; i >= -str.length; i--) {
    reverse += str.at(i);
}

if (reverse === str) {
    console.log(`${str} is palindrome`);
}
else {
    console.log(`${str} is not palindrome`);
}