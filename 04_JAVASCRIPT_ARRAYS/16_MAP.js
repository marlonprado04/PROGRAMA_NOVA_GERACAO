const notas = [10, 9.5, 8, 7, 6];

// Usando método map para percorrer o array e atribuir novo valor em cada item do array
const notasAtualizadas = notas.map((nota)=>{
    return nota + 1 >= 10 ? 10: nota + 1;
})

// Printando valor novo

console.log(notasAtualizadas);

