const Order = require("./order");
class Client {
    #name;
    #email;
    #password;
    #address;
    #orders;

    constructor(name, email, password, address) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#address = address;
        this.#orders = [];
    }

    getCustomer() {
        return {
            name: this.#name,
            email: this.#email,
            password: this.#password,
            address: this.#address
        };
    }

    getInfosClient() {
        return {
            name: this.#name,
            email: this.#email,
            address: this.#address
        };
    }

    makeOrder(restaurant, order) {
        const newOrder = new Order(this.getInfosClient(), restaurant, order);

        this.#orders.push(newOrder);
    }

    checkOrders() {
        return this.#orders;
    }
}

module.exports = Client;