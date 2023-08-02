// Criando listas
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Criando lista unificada 
const listaDeAlunosEMedias = [alunos, medias];

//Printando lista completa
console.log(listaDeAlunosEMedias);

// Printando itens da 1ª posição em ambas listas
console.log(`A aluna da 1ª posição é ${listaDeAlunosEMedias[0][1]} e a nota na 1ª posição é ${listaDeAlunosEMedias[1][1]}`);
