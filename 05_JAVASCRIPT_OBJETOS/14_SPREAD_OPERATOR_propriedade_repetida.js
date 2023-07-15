// Criando objeto ficha guerreiro
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
// Criando equipamento guerreiro
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

// Exemplo de criação de objeto literal
const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro1)

// Exemplo de criação com spread operator
const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)

// ------------------------

// Exemplo onde os objetos possuam chaves / propriedades com o mesmo nome

// criando objetos
const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

// Passando todos as classes criadas
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens) // O resultado será o último valor passado, pois o JS sobrescreve a cada ocorrência

