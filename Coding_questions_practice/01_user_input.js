// 1. how to take user input in javascript 
import readline from 'node:readline';

// You have to create the interface first in standard Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close(); // Crucial, otherwise your terminal will hang forever
});