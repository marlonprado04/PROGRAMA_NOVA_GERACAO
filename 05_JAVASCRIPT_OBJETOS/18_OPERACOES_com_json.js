// Criando variável para armazenar os dados do JSON
const dados = require("./exemplo.json");

// Printando conteúdo da variável dados
console.log(dados);

// Printando tipo da variável dados
console.log(typeof dados);

// -------------------------------------

// Usando a função stringify do objeto global JSON para transformar dados em string
const clienteEmString = JSON.stringify(dados);

// Printando nova variavel para exemplificar
console.log(clienteEmString);

// Printando tipo da nova variável
console.log(typeof clienteEmString);

// Como a nova variável é uma string, ela não permite operações de objetos, como abaixo
console.log(clienteEmString.nome); // retorna undefined

// --------------------------------------

// Para transformar a nova variável em objeto novamente podemos usar outra função do JSON
const objetoCliente = JSON.parse(clienteEmString);

// Printando informação da variavel objetoCliente 
console.log(objetoCliente);

// Printando tipo da variável objetoCliente
console.log(typeof objetoCliente);