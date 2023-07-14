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

// Criando variável para conter as chaves do objeto cliente através do método KEYS próprio de objetos
const chavesDoObjeto = Object.keys(cliente);

// Printando chaves existentes dentro do objeto
console.log(chavesDoObjeto);

// Verificando se o objeto cliente não possui (!) um endereço incluído através do método INCLUDES que é próprio de objetos
if(!chavesDoObjeto.includes("enderecos")){ // Fazendo verificação
    console.error("Erro. É necessário ter um endereço cadastrado.") // Printando mensagem de erro caso o cliente não possua endereço
}