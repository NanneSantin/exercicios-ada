// Exercício 1

const somaQuadradoPares = (numeros) => {
    const result = numeros.reduce((acumulador, valorAtual) => {
        if (valorAtual % 2 === 0) {
            return acumulador += (valorAtual ** 2)
        }
        return acumulador
    }, 0)

    return result
}

// Exercício 2

const ordenarLista = (palavras) => {
    return palavras.sort((itemA, itemB) => {
        return itemA.length - itemB.length
    });
}

// Exercício 3

const mediaNumerosImpares = (numeros) => {
    let totalImpares = 0;

    const result = numeros.reduce((acumulador, valorAtual) => {
        if (valorAtual % 2 !== 0) {
            totalImpares++
            return acumulador += (valorAtual)
        }
        return acumulador
    }, 0)

    return result / totalImpares
}

