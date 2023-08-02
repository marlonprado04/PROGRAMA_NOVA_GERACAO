// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

let n1 = 0; // 0 => false
let n2 = 1;// 1 => true
let texto = "";// "" => false

console.log(n1 == false);
console.log(texto == false);
console.log(n2 == true);

// null ou undefined

let varUndefined; // undefined
let varNull = null; // null | object (bug)
let numero = 3; // tipo number
let string = "Alura"; // tipo string

console.log(typeof varUndefined); // retorna undefined
console.log(typeof varNull); // retorna object (o que é um bug do JavaScript)
console.log(typeof numero); // retorna number
console.log(typeof string); // retorna string




