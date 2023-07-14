// Criando objeto com array de informações
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1311444441"],
};

// Adicionando uma lista de objetos (endereços) ao objeto pessoa
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1234,
        apartamento: true,
        complemento: "Ap 901",
    }
]

// Adicionando outro objeto à lista de objetos endereços
cliente.enderecos.push({
    rua: "R. Oswaldo Aranha",
    numero: 404,
    apartamento: false,
}
)

// Printando objeto cliente
console.log(cliente);

// Printando objeto endereço
console.log(cliente.enderecos);

//-------------------------

// Exemplo dos benefícios de se ter um array de objetos

//Criando uma variável que contem os endereços filtrados
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true // filtrando os que são apartamento e passando para lista
);

// Printando lista de apartramentos
console.log(listaApenasApartamentos);