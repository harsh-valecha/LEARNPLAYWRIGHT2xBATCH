class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
console.log(account.getBalance());
account.deposit(45);
console.log(account.getBalance());