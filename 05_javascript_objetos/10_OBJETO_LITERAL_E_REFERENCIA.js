// Criando obj personagem
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// Criando novo objeto a partir do já criado
const objPersonagem2 = objPersonagem;

// Mudando o nome do objeto personagem 2
objPersonagem2.nome = "Gandalf, o Cinzento";

// Printando ambos objetos para exemplificar saida
console.log(objPersonagem.nome); //Gandalf, o Cinzento
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

// Ambos objetos retornam o mesmo valor, pois o JS apenas aponta os valores para a mesma posição na memória do computador

// Para resolver esse problema criamos um objeto através do método object.create()

// Criando novo objeto a partir do anterior
const objPersonagem3 = Object.create(objPersonagem);

// Atribuindo novo valor ao nome do objeto criado
objPersonagem3.nome = "Gandalf, o Branco";

// Printando novas informações
console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem3.nome); //Gandalf, o Cinzento
