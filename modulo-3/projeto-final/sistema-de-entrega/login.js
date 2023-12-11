const Client = require("./client");

class LoginSystem {
    static #users = [];

    static #checkExistingEmail(email) {
        const indexEmail = this.#users.findIndex((user) => user.email === email);

        return indexEmail;
    }

    static login(email, password) {
        if (!email || !password) {
            throw new Error('Senha ou e-mail inválido!');
        }

        const indexEmail = this.#checkExistingEmail(email);

        if (indexEmail < 0) {
            throw new Error('Senha ou e-mail inválido!');
        }

        const comparePassword = this.#users[indexEmail].password === password;

        if (!comparePassword) {
            throw new Error('Senha ou e-mail inválido!');
        }

        return true;
    }

    static createUser(name, email, password, address) {
        if (!name || !email || !password || !address) {
            throw new Error('Todos os campos são obrigatórios!');
        }

        const indexEmail = this.#checkExistingEmail(email);

        if (indexEmail >= 0) {
            throw new Error('O e-mail informado já está sendo utilizado!');
        }

        const newClient = new Client(name, email, password, address);

        this.#users.push(newClient.getCustomer());

        console.log(`Usuário ${newClient.getCustomer().email} criado com sucesso!`);

        return newClient;
    }
}

module.exports = LoginSystem;

