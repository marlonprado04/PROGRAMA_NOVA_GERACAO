// Criando array com nomes duplicados
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Criando nova variável com o array a partir do método padrão do JS chamado Set (ele não permite valores duplicados internamente)
const meuSet = new Set(nomes);

// passando valor do set para um novo array
const nomesAtualizados = [...meuSet];

// Printando valores do novo array
console.log(nomesAtualizados);
