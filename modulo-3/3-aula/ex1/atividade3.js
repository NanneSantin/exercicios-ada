class ContadorDePalavras {
    constructor(texto) {
        this.texto = texto;
    }

    contarPalavras() {
        const palavras = this.texto.trim().split(' ');

        const totalDePalavras = palavras.filter(palavra => palavra !== '').length;

        return totalDePalavras;
    }
}

const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

const contagem = contadorPalavras.contarPalavras();

console.log(`Número de palavras: ${contagem}`);