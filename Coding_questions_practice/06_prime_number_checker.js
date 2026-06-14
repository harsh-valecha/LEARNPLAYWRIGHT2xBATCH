// prime number have only 2 factor 1 and the number itself

function isPrime(number) {
    let factors = 0;
    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            factors += 1;
        }
    }
    if (factors === 0) {
        return `${number} is prime`;
    }
    else {
        return `${number} is not prime`;
    }
}

let number = 55;
console.log(isPrime(number));
console.log(isPrime(23));
console.log(isPrime(57));
console.log(isPrime(2));
console.log(isPrime(1));