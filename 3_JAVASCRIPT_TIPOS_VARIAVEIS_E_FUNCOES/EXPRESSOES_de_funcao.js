// Forma declarativa e forma de expressão de função

// Declarando uma função da forma convencional
function exemplo(n1, n2){
    return n1 + n2;
}

// Declarando uma EXPRESSÃO de função
// Criando ela como CONST para não correr risco de apagar as informações durente o código
// Como pe uma expressão de função, não é necessário atribuir nome à função (ex: function SOMA(){})
const soma = function(n1, n2) { return n1 + n2};
console.log(soma(1,1));

// -----------------------------------

// Diferenças entre função declarada e expressão de função

// Diferença principal: HOISTING (içar)
// Funções e var são "listadas" no topo, mas funções const e let não.

// Função declarada
console.log(apresentar()); // retorna "olá"
function apresentar(){
    return "Olá";
}

// Expressão de função
console.log(somar(1,2)); // Retorna erro de "não possível acessar antes da inicialização"
const somar = function (n1, n2){ return n1 + n2}; 

