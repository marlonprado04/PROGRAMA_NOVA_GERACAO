// Criando array com alguns valores
const notas = [10, 6, 8];

// Adicionando um valor ao array
// Uma particularidade do JS é permitir que seja adicionada informação no array mesmo que seja uma constante
notas.push(7);

// Criando variável para calcular a média
const media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length);

console.log(media);