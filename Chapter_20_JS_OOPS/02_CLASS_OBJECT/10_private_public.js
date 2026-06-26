class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.#apiKey = key;
        this.user = user;
    }

    getKey() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_123");
console.log(cred.user);
// console.log(cred.apiKey); -- undefined
// console.log(cred.#apiKey); -- error

console.log(cred.getKey());