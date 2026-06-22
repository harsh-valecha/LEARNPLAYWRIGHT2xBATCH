class Car {
    // CAB - constructor , Attributes , Behavior
    // constructor
    constructor(name_given) {
        this.name = name_given;
    }

    //attribute

    // behavior
    drive() {
        console.log(`I am driving ${this.name}`);
    }
}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("grand i10");
i10.drive();
