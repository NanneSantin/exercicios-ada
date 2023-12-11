const LoginSystem = require("./login");
const Restaurant = require("./restaurant");

try {
    const cliente1 = LoginSystem.createUser('Elaine', 'elaine@email.com', '1234', 'Rua das flores, 12');
    const restaurante1 = new Restaurant('Rest A', {
        Pizza: 15,
        Hamburguer: 10,
        Salada: 8,
    })

    const userLogged = LoginSystem.login('elaine@email.com', '1234');

    if (!userLogged) {
        throw new Error('Usuário não logado.');
    }

    console.log(restaurante1.getMenu());

    cliente1.makeOrder(restaurante1, { Pizza: 2, Hamburguer: 1 });
    restaurante1.receiveOrder(cliente1.getInfosClient(), { Pizza: 2, Hamburguer: 1 });

    const pedidoCliente1 = cliente1.checkOrders()[0];
    console.log(pedidoCliente1)
    console.log(`Total do pedido: R$ ${(pedidoCliente1.amountOrder()).toFixed(2)}`)

    pedidoCliente1.updateStatus('Em andamento');
    console.log(pedidoCliente1.status)

} catch (error) {
    console.log(error.message);
}
