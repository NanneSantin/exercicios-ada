class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }

    exibirDetalhes() {
        console.log(`Autor: ${this.nome}\nNacionalidade: ${this.nacionalidade}`);
    }
}

class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }

    detalhesDoLivro() {
        this.autor.exibirDetalhes();
        console.log(`Título: ${this.titulo}\nAno de Publicação: ${this.anoPublicacao}\n`);
    }
}

class Biblioteca {
    static livros = [];

    static adicionarLivro(livro) {
        const indice = this.livros.findIndex((element) => element === livro);
        if (indice >= 0) {
            return console.log("Livro já cadastrado!");
        }
        this.livros.push(livro);
    }

    static listarLivros() {
        this.livros.forEach((livro) => console.log(livro.titulo));
    }

    static buscarLivrosPorAutor(nome) {
        if (!nome) {
            return console.log('Informe um autor.');
        }

        const autorEncontrado = this.livros.findIndex((livro) => livro.autor.nome === nome);
        if (autorEncontrado < 0) {
            return console.log('Autor não encontrado.');
        }

        console.log(`Livros do autor ${nome}:`)
        this.livros.forEach((livro) => {
            if (nome === livro.autor.nome) {
                console.log(`\nTítulo: ${livro.titulo}\nAno de Publicação: ${livro.anoPublicacao}`);
            }
        })
    }

    static listarLivrosDetalhados() {
        this.livros.forEach((livro) => livro.detalhesDoLivro());
    }
}

const autor1 = new Autor("J.K. Rowling", "Britânica");
const autor2 = new Autor("Stephen King", "Americano");

const livro1 = new Livro("Harry Potter e a Pedra Filosofal", 1997, autor1);
const livro2 = new Livro("Harry Potter e a Câmara Secreta", 1998, autor1);
const livro3 = new Livro("O Iluminado", 1977, autor2);
const livro4 = new Livro("Carrie, a Estranha", 1974, autor2);

// autor1.exibirDetalhes();
// livro1.detalhesDoLivro();

Biblioteca.adicionarLivro(livro1);
Biblioteca.adicionarLivro(livro2);
Biblioteca.adicionarLivro(livro3);
Biblioteca.adicionarLivro(livro4);

// Biblioteca.listarLivros();
// Biblioteca.buscarLivrosPorAutor("J.K. Rowling");
Biblioteca.listarLivrosDetalhados();
