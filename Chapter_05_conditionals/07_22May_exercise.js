// triangle checker 

let a = 2;
let b = 3;
let c = 4;

if (a === b && b === c) {
    console.log("Equiletral triangle");
}
else if (a === b || b === c || c === a) {
    console.log("Isosceles triangle");
}
else {
    console.log("Scalene triangle");
}

// Fizz buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}