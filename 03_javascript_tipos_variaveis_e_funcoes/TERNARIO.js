const idadeMinima = 18;
const idadeCliente = 19;

// Código com if
if(idadeCliente>=idadeMinima){ 
    console.log("Cerveja");
}else{ 
    console.log("Suco");
}

// Alternativa com operador ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");