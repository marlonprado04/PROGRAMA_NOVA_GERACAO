// Criando array com notas
const notas = [10, 6.5, 8, 7.5];

// Criando variável que vai conter a soma das notas
let somaDasNotas = 0;

// Criando for para varrer e somar o array de notas
for (let i = 0; i < notas.length; i++){
    // Adicionando à variável o valor da nota na posição atual
    somaDasNotas += notas[i];   
}

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)
