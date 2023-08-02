const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

// Dividindo o array o índice 0 até 9, pois javascript não considera o último valor
alunos.slice(0, 10);

// Printando a lista completa, já que o método slice não altera o array original
console.log(alunos);

// Atribuindo novo array à uma variável
const sala1 = alunos.slice(0,10);

// Printando lista do novo array
console.log(sala1);

// Criando outro array pra sala 2
// Nâo é necessário informar o 2 parâmetro, pois javascript entende que queremos cortar do parâmetro informado até o final
const sala2 = alunos.slice(10);

// Printando sala 2
console.log(sala2);
