class Conta {
    #saldo;

    constructor(cliente) {
        this.cliente = cliente;
        this.#saldo = 0;
    }

    depositar(valor) {
        try {
            if (!Number(valor) || valor <= 0) {
                throw new Error('Valor inválido!');
            }

            this.#saldo += valor;

            return `${this.cliente.nome}, o valor de R$ ${Number(valor).toFixed(2)} foi depositado com sucesso.`
        } catch (error) {
            return error.message;
        }
    }

    sacar(valor) {
        try {
            if (!Number(valor) || valor <= 0) {
                throw new Error('Valor inválido!');
            }

            if (valor > this.#saldo) {
                throw new Error('Saldo insuficiente.');
            }

            this.#saldo -= valor;

            return `${this.cliente.nome}, você sacou R$ ${Number(valor).toFixed(2)}`;
        } catch (error) {
            return error.message;
        }
    }

    consultarSaldo() {
        return `${this.cliente.nome}, o seu saldo atual é R$ ${this.#saldo.toFixed(2)}.`;
    }
}

class ContaPoupanca extends Conta {
    #saldo;
    constructor(cliente) {
        super(cliente);
        this.#saldo = 0;
    }
};

class ContaCorrente extends Conta {
    #saldo;

    constructor(cliente, limite) {
        super(cliente);
        this.limite = limite;
        this.#saldo = 0;
    }

    sacar(valor) {
        try {
            if (!Number(valor) || valor <= 0) {
                throw new Error('Valor inválido!');
            }

            if (valor > (this.#saldo + this.limite)) {
                throw new Error('Saldo insuficiente.');
            }

            return `${this.cliente.nome}, você sacou R$ ${Number(valor).toFixed(2)}`;
        } catch (error) {
            return error.message;
        }
    }
};

class Cliente {
    constructor(nome, idade) {
        const nomeFormatado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
        this.nome = nomeFormatado;
        this.idade = idade;
        this.contas = [];
    }

    adicionarConta(conta) {
        this.contas.push(conta);
    }
}

const cliente1 = new Cliente('elaine', 30);

const corrente = new ContaCorrente(cliente1, 1000);
const poupanca = new ContaPoupanca(cliente1);

cliente1.adicionarConta(corrente);
cliente1.adicionarConta(poupanca);

console.log(corrente.depositar(500));
console.log(corrente.sacar(800));
console.log(corrente.sacar(1200));
console.log(corrente.depositar(1000));
console.log(corrente.consultarSaldo());
