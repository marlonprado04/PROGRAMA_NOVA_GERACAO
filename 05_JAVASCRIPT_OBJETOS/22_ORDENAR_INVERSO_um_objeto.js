// Passando JSON para variável
const clientes = require("./clientes.json");

// Criando função para ordenar lista a partir da propriedade passada
function ordenar(lista, propriedade) {

    // Criando variável para armazenar o resultado
    // Passando para variável um resultado do método sort (próprio de arrays), que recebe como parâmetro uma função callback que exige retorno 0, -1 ou 1
    const resultado = lista.sort((a, b) => {

        // Comparando elementos a<b, retorna -1 se verdadeiro 
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        // Comparando elementos a<b, retorna 1 se for verdadeiro
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        // Retorna 0 se os elementos forem iguais
        return 0;
    });

    // Retornando variável resultado
    return resultado;
}

// Passando retorno da função ordenar para uma variável
const ordenadoNome = ordenar(clientes, "nome");

// Realizando ordenação inversa com o método reverse
const ordenadoNomeInverso = ordenadoNome.reverse();

// Printando resultado das variáveis
console.log(ordenadoNome);
console.log(ordenadoNomeInverso);