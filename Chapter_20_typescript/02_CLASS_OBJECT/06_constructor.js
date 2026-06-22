class Person {

    constructor() {
        console.log("I will be called as soon as object created");
    }

    // attributes
    name;
    email;
    salary;
    address;
    //behavior
    sleep() { }
    eat() { }
    walk() { }
}

let obj_ref = new Person();
console.log(obj_ref);