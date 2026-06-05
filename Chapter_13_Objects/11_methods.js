const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};


// this -- means current value in object
console.log(user.fullName);
user.fullName = "Jaskirat Rangi";
console.log(user.fullName);

// old method -- will not be used in automation 

