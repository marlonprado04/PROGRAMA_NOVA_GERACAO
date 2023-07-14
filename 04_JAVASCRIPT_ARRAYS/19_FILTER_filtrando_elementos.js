const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Criando variável com o filtro de reprovados
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

// Printando lista de reprovados
console.log(reprovados);