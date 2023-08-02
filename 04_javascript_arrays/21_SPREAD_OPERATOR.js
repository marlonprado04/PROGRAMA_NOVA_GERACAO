// Criando variável com notas
const notas = [7, 7, 8, 9];

// Criando nova variável de notas para modificar os valors
const novasNotas = notas;

// Adicionando numero 10 no array novo (de forma errada)
novasNotas.push(10);

// Printando listas
console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas antigas são ${notas}`);

// Adicionando numero 9 no array novo (da forma certa)
const novasNotas2 = [...notas, 9];

// Printando listas
console.log(`As novas notas são ${novasNotas2}`);
console.log(`As notas antigas são ${notas}`);
