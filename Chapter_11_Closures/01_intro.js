// closure is when a function rememebers from its outer scope even if outer function finished running
// rarely used in automation

function outer() {
    let message = "hello";
    console.log("Outer call");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();

// inner(); -- direct calling outside not allowed

function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count }
    }
}
let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());
