class Produto {
    #estoque;

    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.#estoque = estoque;
    }

    getEstoque() {
        return this.#estoque;
    }

    setEstoque(quantidade) {
        if (quantidade <= 0) {
            return console.log('Quantidade inválida.')
        }

        this.#estoque = quantidade;
    }

    precoComDesconto(percentualDesconto) {
        if (!percentualDesconto || percentualDesconto === 0) {
            return this.preco;
        }
        return this.preco * (1 - (percentualDesconto / 100));
    }
}

class ProdutoEletronico extends Produto {
    constructor(nome, preco, estoque, garantiaMeses) {
        super(nome, preco, estoque);
        this.garantiaMeses = garantiaMeses;
    }
}

class ProdutoAlimenticio extends Produto {
    constructor(nome, preco, estoque, validade) {
        super(nome, preco, estoque);
        this.validade = validade;
    }

    precoComDesconto(percentualDesconto) {
        const hoje = new Date();
        const prazo = new Date(hoje.getTime() + (60 * 24 * 60 * 60 * 1000));

        if (this.validade.getTime() <= prazo.getTime()) {
            if (!percentualDesconto || percentualDesconto <= 30) {
                return this.preco * 0.7;
            } else {
                return this.preco * (1 - (percentualDesconto / 100));
            }
        }

        if (percentualDesconto && percentualDesconto > 30) {
            return this.preco * (1 - (percentualDesconto / 100));
        }

        return this.preco;
    }
}

class Carrinho {
    #produtos;

    constructor() {
        this.#produtos = [];
    }

    adicionarProduto(produto, quantidade, percentualDesconto) {
        if (quantidade > produto.estoque) {
            return console.log(`Estoque insuficiente!`)
        }

        produto.estoque -= quantidade;

        this.#produtos.push({
            nome: produto.nome,
            preco: produto.precoComDesconto(percentualDesconto),
            quantidade,
        });
    }

    removerProduto(produto) {
        const produtoEncontrado = this.#produtos.findIndex((item) => item.nome === produto.nome);

        if (produtoEncontrado < 0) {
            return console.log(`Produto não encontrado.`);
        }

        this.#produtos.splice(produtoEncontrado, 1);
    }

    calcularTotalCarrinho() {
        const total = this.#produtos.reduce((acumulador, valorAtual) => {
            return acumulador += (valorAtual.preco * valorAtual.quantidade);
        }, 0)

        return `Total da compra: R$ ${total.toFixed(2)}`;
    }

    getCarrinho() {
        console.log(`Carrinho:\n--------`)
        this.#produtos.forEach((produto) => {
            console.log(`${produto.nome} - Preço: R$ ${(produto.preco).toFixed(2)} - Quantidade: ${produto.quantidade} - Total: R$ ${(produto.preco * produto.quantidade).toFixed(2)}`);
        });
        console.log('--------')
        console.log(this.calcularTotalCarrinho());
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.carrinho = new Carrinho();
    }
}

const produto1 = new Produto('Caderno', 15.99, 10);
const produto2 = new Produto('Lápis', 10.99, 5);
const produto3 = new ProdutoAlimenticio('Chocolate', 18.50, 8, new Date(2023, 11, 10));
const produto4 = new ProdutoEletronico('Mouse', 148.59, 5, 3);

const cliente1 = new Cliente('Elaine');
const cliente2 = new Cliente('Felipe');

cliente1.carrinho.adicionarProduto(produto1, 2, 10);
cliente1.carrinho.adicionarProduto(produto2, 1);
cliente1.carrinho.adicionarProduto(produto3, 2);
cliente1.carrinho.adicionarProduto(produto4, 1);
cliente1.carrinho.removerProduto(produto2);

cliente1.carrinho.getCarrinho();

