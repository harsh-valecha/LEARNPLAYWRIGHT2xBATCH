class Person {
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() { // getter
        return this.#child1;
    }

    setChild1(name) { // setter
        this.#child1 = name;
    }
}

let p1 = new Person("Pramod", "Jenny", "Akbar");
console.log(p1.getChild1());
p1.setChild1("Kabir")
console.log(p1.getChild1());