// Criando variável e passando arquivo JSON com dados de clientes
const clientes = require("./clientes.json");

// Criando função para consultar cliente
// Passando como parâmetro: a lista onde será buscado, a chave e o valor a ser pesquisado
function encontrar(lista, chave, valor){ 

    // Retornando valor a partir de uma pesquisa dentro do array (método find) e passando uma função callback para consultar o item específico a partir da chave consultada, com o método includes (pŕoprio de array e strings)
    return lista.find((item) => item[chave].includes(valor));
}

// Criando variáveis para testar consulta da lista de clientes
const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860");

// Printando resultados
console.log(encontrado);
console.log(encontrado2);