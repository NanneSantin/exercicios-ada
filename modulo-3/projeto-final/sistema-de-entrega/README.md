# Tema do Exercício: Sistema de Entrega (Delivery) usando Programação Orientada a Objetos em JavaScript

## Requisitos:

1. Criar um sistema simples de entrega (delivery) que consistirá em clientes, restaurantes e pedidos.
2. Cada cliente pode fazer pedidos em um ou mais restaurantes.
3. Cada restaurante possui um menu com itens e preços.
4. Cada pedido contém itens do menu, a quantidade desejada e o cliente que fez o pedido.
5. O sistema deve calcular o valor total de cada pedido e rastrear o status da entrega (pendente, em andamento, entregue).
6. Implementar métodos para exibir informações relevantes, como o menu do restaurante, os pedidos do cliente e o status da entrega.

## Diagrama de Classes:

1. Classe `Client`

| **Client** |
|:-----------|
| - name: string |
| - email: string |
| - password: string  |
| - address: string   |
| - orders: Array     |
| + getCustomer(): Object |
| + getInfosClient(): Object |
| + makeOrder(restaurant: Restaurant,order: Object): void    |
| + checkOrders(): Array |
_________________

2. Classe `LoginSystem`

|  **LoginSystem**   |
|:-------------------|
| - users: Array     |
| + login(email: string, password: string): boolean |
| + createUser(name: string, email: string, password: string, address: string): Client |
_________

3. Classe `Order`

|      **Order**      |
|:--------------------|
| - customer: Object  |
| - restaurant: Restaurant |
| - items: Object     |
| - status: string    |
| + amountOrder(): Number |
| + updateStatus(status: string): void |
_____________

4. Classe `Restaurant`

|     Restaurant      |
|:--------------------|
| - name: string      |
| - menu: Object      |
| - orders: Array     |
| + getMenu(): Array <Object> |
| + receiveOrder(customer: Object, order: Object): void |

## Exemplo de Uso:

```javascript
// Criar Clientes e Restaurantes
const cliente1 = LoginSystem.createUser('Elaine', 'elaine@email.com', '1234', 'Rua das flores, 12');
const restaurante1 = new Restaurant('Rest A', {
    Pizza: 15,
    Hamburguer: 10,
    Salada: 8,
});

//Cliente faz o login
const userLogged = LoginSystem.login('elaine@email.com', '1234');

//Exibir o menu do Restaurante
console.log(restaurante1.getMenu());

// Cliente faz um pedido
cliente1.makeOrder(restaurante1, { Pizza: 2, Hamburguer: 1 });

// Restaurante recebe o pedido
restaurante1.receiveOrder(cliente1.getInfosClient(), { Pizza: 2, Hamburguer: 1 });

// Consultar pedidos do cliente
console.log(cliente1.checkOrders());

// Consultar um pedido e Calcular total do mesmo
const pedidoCliente1 = cliente1.checkOrders()[0];
console.log(pedidoCliente1)
console.log(`Total do pedido: R$ ${(pedidoCliente1.amountOrder()).toFixed(2)}`)

// Atualizar status do pedido
pedidoCliente1.updateStatus('Em andamento');

// Exibir status do pedido
console.log(`Status do pedido: ${pedidoCliente1.status}`);
```

---
