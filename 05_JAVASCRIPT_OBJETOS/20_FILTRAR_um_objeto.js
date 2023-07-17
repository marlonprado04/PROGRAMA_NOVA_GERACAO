// Criando variável com objeto
const clientes = require("./clientes.json")

// Criando função para consultar clientes que possuem apartamento, mas não possuem complemento
function filtrarApartamentoSemComplemento(clientes) {
    // Retornando o resultado da função "filter" (própria de objetos)
    return clientes.filter((cliente) => {
        // Retornando resultado da função callback que filtra clientes que possuem apartamento como true e que NÂO (!) possuem a propriedade "complemento" preenchida
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

// Passando resultado do filtro para uma variável
const filtrados = filtrarApartamentoSemComplemento(clientes);

// Printando resultado
console.log(filtrados);