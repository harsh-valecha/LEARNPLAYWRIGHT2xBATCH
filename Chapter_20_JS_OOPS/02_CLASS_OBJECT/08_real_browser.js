class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() { // method
        console.log(this.name + " ->" + this.status + "->" + this.priority);
    }
}

function f1() { // function

}

let loginTC = new TestCase("Login Test", "Pass", "P0");
let signupTC = new TestCase("sinup Test", "Pass", "P1");

loginTC.display();

// method is functions but inside the class