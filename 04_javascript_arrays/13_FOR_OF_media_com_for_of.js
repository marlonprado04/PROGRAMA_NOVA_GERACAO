// Criando array
const notas = [10, 6.5, 8, 7.5];


// Criando variável para soma das notas
let somaDasNotas = 0;

// Criando FOR OF, que serve para percorrer o array de início ao fim
for (let nota of notas) {
    somaDasNotas += nota;
}

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)
