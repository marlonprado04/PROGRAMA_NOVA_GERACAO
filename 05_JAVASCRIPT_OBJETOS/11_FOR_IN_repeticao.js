// Criando objeto cliente
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

// Adicionando o endereço ao objeto cliente
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Varrendo objeto cliente
for (let chave in cliente) { // Aqui estou varrendo cada "chave" (atributo) do objeto cliente
    let tipo = typeof cliente[chave]; // Criando variável para armazenar o tipo do atributo
    if (tipo !== "object" && tipo !== "function") { // Verificando se o atributo é tipo object ou function para remover do print
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); // Printando tanto a chave (nome do atributo) quanto o valor contido nele
    }
}