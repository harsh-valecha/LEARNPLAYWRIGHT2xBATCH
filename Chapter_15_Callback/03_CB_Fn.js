function cafe(item, callWhenTableReady) {
    console.log("Finding table ....1");
    console.log("Finding table ....2");
    console.log("Finding table ....3");

    callWhenTableReady();
}

function callWhenTableReady() {
    console.log("calling ---->");
}

cafe("Burger", callWhenTableReady);

cafe("Momos", () => {
    console.log("Kashi aaye ?");
})
