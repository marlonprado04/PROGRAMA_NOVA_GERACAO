// conversão implicita

const numero = 456;
const numeroString = "456";

// Ao usar 2 operadores de = o javascript converte os valores em string
console.log(numero == numeroString); // retorna true

console.log(numero === numeroString); // retorna false

console.log(numero + numeroString); // concatena, retornando 456456

// ---------------

// conversão explícita

// Number()
console.log(typeof Number(numeroString)) // retorna number

console.log(numero + Number(numeroString)); // retorna a soma 912

console.log(Number("123a")) // retorna NaN

// String()