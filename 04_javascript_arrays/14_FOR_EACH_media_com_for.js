const notas = [10, 6.5, 8, 7.5];

// Criando arquivo com a soma das notas
let somaDasNotas = 0;

// Usando o método forEach do array
// e passando uma função anônima como callback para o método
notas.forEach(
    
    // função anônima
    // recebe a nota e imprime a nota a na posição a cada execução (varrendo todo array)
    function(nota, indice){

        // imprimindo a nota
        console.log(`A nota ${nota} está na posição ${indice} do array.`);
        somaDasNotas +=nota;
});

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)
