const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Removendo Ana e Caio do array
// 1º parâmetro -> índice do elemento a ser excluído
// 2º parâmetro -> número de elementos (a partir do 1º) a ser excluídos
// 3º parâmetro -> substitui os itens excluídos pelo informado
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);
