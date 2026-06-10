function print() {
    console.log("Normal function");
}

function placeOrder(item, callback) {
    console.log("Hi your order is placed: " + item);
    callback();
}


// way 1 
placeOrder("chai", print);

// way 2

placeOrder("Burger", function () {
    console.log("Hey bro how are you ?");
})

// way 3 
placeOrder("Momos", () => {
    console.log("Calling via arrow");
});