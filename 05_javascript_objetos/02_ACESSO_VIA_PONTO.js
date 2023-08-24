// Criando objeto do tipo cliente
const cliente = {
    nome:"André",
    idade:32,
    cpf:"1111111111",
    email:"andre@gmail.com"
};

// Printando informações contidas no objeto
console.log(`O nome do cliente é ${cliente.nome} e a idade é ${cliente.idade}`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`);