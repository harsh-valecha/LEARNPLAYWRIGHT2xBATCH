// *****

// ****

// ***

// **

// *

console.log("---Pattern 1 ------");
for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}
console.log();
console.log("----Pattern 2 ------");

const height = 5;


for (let i = 1; i <= height; i += 2) {
    let spaces = " ".repeat((height - i) / 2);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}