// Criando objeto com array de informações
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1311444441"],
};

// Adicionando ao objeto cliente um outro objeto do tipo endereço para deixar eles aninhados
cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1234,
    apartamento: true,
    complemento: "Ap 901",
}

// Printando objeto cliente
console.log(cliente);

// Printando objeto endereço
console.log(cliente.endereco);