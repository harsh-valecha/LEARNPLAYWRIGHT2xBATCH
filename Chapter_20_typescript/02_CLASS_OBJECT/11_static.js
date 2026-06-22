// static and non static variable

class Student {
    constructor(name, age, phone) {
        this.name_student = name;
        this.age = age;
        this.phone = phone;
    }
    // static
    static name = "Playwright2x";
    static mentor = "Pramod";
    // non static
    name_student;
    age;
    phone;

    static display() {
        console.log("Hi i am a common fn");
    }
}

let s1 = new Student("yashu", 35, '686786876876');
let s2 = new Student("Sharad", 22, "658767867867");


console.log(s1.name_student);
console.log(s2.name_student);
console.log(Student.name);
console.log(Student.mentor);

Student.display();