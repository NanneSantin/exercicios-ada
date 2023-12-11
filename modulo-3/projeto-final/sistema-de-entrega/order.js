class Order {
    constructor(customer, restaurant, items, status = 'pendente') {
        this.customer = customer;
        this.restaurant = restaurant;
        this.items = items;
        this.status = status;
    }

    amountOrder() {
        const itemsArray = [];
        for (const itemKey of Object.keys(this.items)) {
            itemsArray.push({ description: itemKey, quantity: this.items[itemKey] });
        }

        const menu = this.restaurant.getMenu();

        let total = 0;
        for (const item of itemsArray) {
            const findItem = menu.find((element) => element.description == item.description);

            if (!findItem) {
                throw new Error('Item não encontrado no menu do restaurante!');
            }

            total += (findItem.value * item.quantity);
        }

        return total;
    }

    updateStatus(status) {

        if (!status || (status !== 'Em andamento' && status !== 'Entregue')) {
            throw new Error('Statu informado inválido!');
        }

        this.status = status;
    }
}

module.exports = Order;