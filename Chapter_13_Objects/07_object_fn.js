const user = {
    name: "pramod",
    age: 43
};

const calculator = {
    value: 0,
    add(n) {
        // value += n; -- access not possible
    },
    subtract(n) {
        // value -= n;
    }
};

console.log(calculator.value, calculator.add);

calculator.add(10);
console.log(calculator.value);