// Criando array com várias strings
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Criando novo array com função map que coloca todos nomes em uppercase
const nomesPadrozinados = nomes.map((nome) => {
    return nome.toUpperCase();
})

// Outra forma de escrever com arrowfunction (mais sucinta)
const nomesPadrozinados2 = nomes.map((nome) => nome.toUpperCase());

// Printando ambas variáveis
console.log(nomes);
console.log(nomesPadrozinados);
console.log(nomesPadrozinados2);