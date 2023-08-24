
// Jeito tradicional de declarar função
function apresentar(nome){
    return `Meu nome é ${nome}`;
}

console.log(apresentar("Marlon"));

// ---------------------

// Declarando uma Arrow Function que recebe apenas 1 atributo
const apresentarArrow = nome => `Meu nome é aaa ${nome}`;

// Declarando uma Arrow Function que recebe 2 atributos
const soma = (n1, n2) => n1 + n2;

// Declarando uma Arrow Function com + de 1 linha de instrução
const somaNumerosPequenos = (n1, n2) => {
    if(n1 >= 10 || n2 >= 10){
        return "Somente números de 1 a 9."
    }else{
        return n1 + n2;
    } 
}

// Printando retornos
console.log(apresentarArrow("Marlon"));
console.log(soma(1, 2));
console.log(somaNumerosPequenos(3,9));