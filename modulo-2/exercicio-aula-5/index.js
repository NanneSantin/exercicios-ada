const calcularIMC = (altura, peso) => {
    const imc = (peso / (altura * altura));

    if (imc < 18.5) {
        return `<p>Seu IMC é ${imc.toFixed(2)} e você encontra-se abaixo do peso.</p>`
    }
    if (imc < 24.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)} e seu peso está normal.</p>`
    }
    if (imc < 29.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso.</p>`
    }

    return `<p>Seu IMC é ${imc.toFixed(2)} e você está com obesidade.</p>`
}

function mostrarResultado() {
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);

    const resultadoElement = document.getElementById('resultado');

    const mensagem = calcularIMC(altura, peso);
    resultadoElement.innerHTML = mensagem;
}
