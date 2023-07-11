// Declarando array
const nomes = ["Evaldo", "Mari", "Camis"];

// Usando função declarada como callback
nomes.forEach(function (nome) {
  console.log(nome);
});

// Usando arrow function como callback
nomes.forEach((nome) => {
  console.log(nome);
});

// Usando função externa como callback
function imprimeNome(nome){
    console.log(nome);
}

// Passando apenas a referência da função, sem os (). 
// dessa forma estamos passando a função completa sem executar
nomes.forEach(imprimeNome);

