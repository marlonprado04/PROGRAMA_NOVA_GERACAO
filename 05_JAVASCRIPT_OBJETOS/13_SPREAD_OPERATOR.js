// Criando objeto cliente
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Criando função para ligar para os 2 números contidos no array
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// Usando o expalhamento para não precisar informar cada posição do array contendo os números
ligaParaCliente(...cliente.telefone);

// Criando variável para simular como seria passar cada campo do objeto cliente
const dadosParaEntrega = {
    destinatario: cliente.nome, // passando nome do cliente
    rua: cliente.enderecos[0].rua, // passando rua que está dentro do objeto que está no array de endereços na posição 0
    numero: cliente.enderecos[0].numero, // passando numero que está dentro do objeto que está no array de endereços na posição 0
    complemento: cliente.enderecos[0].complemento, // passando complemento que está dentro do objeto que está no array de endereços na posição 0
}

// Usando a mesma função do espalhamento para espalhar todos os dados contidos dentro do OBJETO endereço que está no do ARRAY de endereços, na posição 0.
const dadosParaEntrega2 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

// Printando dados para entrega 1
console.log(dadosParaEntrega);
// Printando dados para entrega 2
console.log(dadosParaEntrega2);