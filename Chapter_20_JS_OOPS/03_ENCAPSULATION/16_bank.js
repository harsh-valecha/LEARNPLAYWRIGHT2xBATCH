class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(Balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;

        }
        else {
            console.log("Not Allowed");
        }
    }
}

let pramod = new ICICI("Pramod", 1000);
console.log(pramod.getBalance());
pramod.setBalance(100000, false);


let pramod_father = new ICICI("Pramod", 2000);
console.log(pramod_father.getBalance());
pramod_father.setBalance(300000, true);