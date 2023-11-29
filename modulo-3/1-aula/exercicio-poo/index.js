// Atividade 1

console.log(`Atividade 1
--------------------------------`)

class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    calcularIdadeBissextos(ano) {
        const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        const anoNascimento = new Date().getFullYear() - this.idade;

        if (ehBissexto && new Date().getMonth() < 2) {
            return ano - anoNascimento - 1;
        }
        return ano - anoNascimento;
    }
}

const elaine = new Pessoa('Elaine', 31, 'Curitiba');

console.log(elaine.calcularIdadeBissextos(2004));

// !Antes de rodar o código abaixo, comentar as linhas 25 a 27.
console.log(`
Atividade 2
--------------------------------`)

// Atividade 2

class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

class Mamifero extends Animal {
    amamentar() {
        console.log('Este animal amamenta!');
    }
}

class Ave extends Animal {
    voar() {
        console.log('Este animal voa!');
    }
}

const girafa = new Mamifero('girafa', 'mamifero');
girafa.amamentar();

const aguia = new Ave('águia', 'aves');
aguia.voar();

// !Antes de rodar o código abaixo, comentar as linhas 55 a 59.
console.log(`
Atividade 3
--------------------------------`)

// Atividade 3

class Carro {
    constructor(modelo, ano, ligado) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
    }

    aceleracao = 0;

    ligar() {
        if (this.ligado) {
            return console.log('O carro já está ligado!');
        }

        return this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            return console.log('O carro já está desligado!');
        }

        if (this.aceleracao > 0) {
            return console.log(`A velocidade está em ${this.aceleracao}. Você deve reduzir até zero para desligar o carro!`);
        }

        return this.ligado = false;
    }

    acelerar() {
        if (!this.ligado) {
            return console.log('Você deve ligar o carro antes de acelerar!');
        }

        return this.aceleracao += 10;
    }

    frear() {
        if (!this.ligado) {
            return console.log('O carro está desligado!');
        }

        if (this.aceleracao <= 0) {
            return console.log('O carro está ligado, mas está parado!');
        }

        return this.aceleracao -= 10;
    }

    status() {
        if (this.ligado) {
            return console.log(`O carro está ligado e com aceleração em ${this.aceleracao}`);
        }

        if (!this.ligado) {
            return console.log(`O carro está desligado.`);
        }
    }
}

const meuCarro = new Carro('fox', 2016, false);
meuCarro.acelerar();
meuCarro.frear();
meuCarro.desligar();
meuCarro.ligar();
meuCarro.frear();
meuCarro.acelerar();
meuCarro.desligar();
meuCarro.frear();
meuCarro.desligar();
meuCarro.status();
