// Variáveis...

var toy = 'boneca';
console.log(toy); // boneca

toy = 'carrinho';
console.log(toy); // carrinho

let number = 1;
console.log(number); // 1

number = 2;
console.log(number); // 2

const fixa = true;
console.log(fixa); // true
//não permite reatribuição.

console.clear(); //limpa o terminal e mostra apenas daqui para baixo

// Tipos Primitivos
// * Strings --> cadeia de caracteres.
// * Number --> pode ser números inteiros ou decimais.
// * Boolean --> pode ter apenas dois valores literais true e false.
// * null --> é uma palavra-chave que indica valor nulo
// * undefined --> é uma propriedade superior cujo valor é indefinido.

console.log(typeof toy);
console.log(typeof number);
console.log(typeof fixa);

// ! Coerção é converter o tipo primitivo da variável
let numero1 = 10
let numero2 = '10'
console.log(numero1 + Number(numero2))

console.clear();

//input de usuário
// const numero3 = Number(prompt('Digite um número: '));
// console.log(numero3)
// o prompt sempre retorna uma string

// Operadores

// * Operador de coerção: +, Number, parseInt, parseFloat

// Operadores aritméticos

// * Adição: +
// * Subtração: -
// * Divisão: /
// * Multiplicação: *
// * Exponenciação: ** 
// * Módulo (resto): %

// Operadores de atribuição
// * = : atribui / reatribui um valor
// * += : reatribui a variável o valor da soma do valor a esquerda do operador com o valor a direita.
// * -= : reatribui a variável o valor da subtração do valor a esquerda do operador do valor a direita.
// * /= e *= segue a mesma ideia dos de cima.

// Operador de coerção: 
// *, Number, parseInt, parseFloat

// Operadores de comparação:
// * > : maior que
// * < : menor que
// * >= : maior ou igual a
// * <= : menor ou igual a 
// * == : igual a 
// * === : estritamente igual (tipo e valor)
// * != : diferente de
// * !== : estritamente diferente (tipo e valor)

// Operadores lógicos:
// * && : E --> todas as condições precisam ser atendidas.
// * || : OU --> pelo menos uma das condições precisa ser atendida.
// * ! : NOT --> faz a negação (se true, vira false, se false, vira true.)
