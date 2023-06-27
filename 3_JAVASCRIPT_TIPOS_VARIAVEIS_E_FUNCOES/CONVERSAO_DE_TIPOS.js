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

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); // retorna "12341234"

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // também retorna "12341234"

// Podemos converter boleano para String e para Number também

// String

let usuarioConectado1 = false;
console.log(String(usuarioConectado1)); // retorna "false"
usuarioConectado1 = true;
console.log(String(usuarioConectado1)); // retorna "true"

// Number

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // retorna 0
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // retorna 1


