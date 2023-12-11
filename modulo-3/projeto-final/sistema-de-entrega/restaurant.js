class Restaurant {
    #orders;
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.#orders = [];
    }

    getMenu() {
        const items = [];
        for (const itemKey of Object.keys(this.menu)) {
            items.push({ description: itemKey, value: this.menu[itemKey] });
        }
        return items;
    }

    receiveOrder(customer, order) {
        return this.#orders.push({ customer, order });
    }
}

module.exports = Restaurant;