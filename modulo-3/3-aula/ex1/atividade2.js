class ConversorDeMoeda {
    constructor(taxaCambio) {
        this.taxaCambio = taxaCambio;
    }

    converter(valor, moedaOrigem, moedaDestino) {
        try {
            if (!Number(valor)) {
                throw new Error('Valor informado inválido!');
            }
            return `Valor convertido ${(Number(valor) * this.taxaCambio).toFixed(2)} ${moedaDestino}`
        } catch (error) {
            return error.message;
        }
    }
}

const conversorMoeda = new ConversorDeMoeda(5.0);
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');

console.log(valorConvertido);
