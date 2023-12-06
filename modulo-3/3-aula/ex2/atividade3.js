class Funcionario {
    #salarioHora;
    constructor(nome, idade, salarioHora) {
        this.nome = nome;
        this.idade = idade;
        this.#salarioHora = salarioHora;
    }

    getSalario() {
        return this.#salarioHora;
    }

    calcularSalario(horasNormaisMes, horasExtrasMes) {
        return ((this.#salarioHora * horasNormaisMes) + (this.#salarioHora * horasExtrasMes)).toFixed(2);
    }
}

class Analista extends Funcionario {
    constructor(nome, idade, salarioHora) {
        super(nome, idade, salarioHora);
        this.cargo = 'Analista'
    }

    calcularSalario(horasNormaisMes) {
        return (this.getSalario() * horasNormaisMes).toFixed(2);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, salarioHora) {
        super(nome, idade, salarioHora);
        this.cargo = 'Gerente'
    }

    calcularSalario(horasNormaisMes) {
        return (this.getSalario() * horasNormaisMes).toFixed(2);
    }
}

class Departamento {
    constructor(nome, gerente) {
        this.nome = nome;
        this.gerente = gerente;
        this.funcionario = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionario.push(funcionario);
    }

    listarFuncionarios() {
        return this.funcionario;
    }
}

const gerente1 = new Gerente('João', 42, 5.22);
const financeiro = new Departamento('financeiro', gerente1);

const funcionario1 = new Analista('Roberta', 30, 3.39);
const funcionario2 = new Funcionario('Maria', 32, 2.80);

financeiro.adicionarFuncionario(funcionario1)
financeiro.adicionarFuncionario(funcionario2)

console.log(funcionario1.calcularSalario(945));
console.log(funcionario2.calcularSalario(945, 12));
console.log(gerente1.calcularSalario(945));

console.log(financeiro.gerente)
console.log(financeiro.listarFuncionarios())


