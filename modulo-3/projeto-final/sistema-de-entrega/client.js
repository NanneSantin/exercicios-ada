class Client {
    #name;
    #email;
    #password;
    #address;

    constructor(name, email, password, address) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#address = address;
    }

    getClient() {
        return {
            name: this.#name,
            email: this.#email,
            password: this.#password,
            address: this.#address
        };

    }
}

module.exports = Client;