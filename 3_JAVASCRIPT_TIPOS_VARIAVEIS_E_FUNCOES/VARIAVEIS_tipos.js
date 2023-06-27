// Criando e trabalhando com var

var varAltura = 5;
var varComprimento = 7;

// O JS permite usar uma variável do tipo VAR antes de cria-la
varArea = varAltura * varComprimento;
console.log(varArea);

// Aqui estou criando a variável utilizada
var varArea;

// ---------------------------
// Criando e trabalhando com LET

let letForma = "retângulo" 
let letAltura = 5;
let letComprimento = 7;
let letArea;

if(letForma==="retângulo"){
    letArea = letAltura * letComprimento;
}else{
    letArea = (letAltura * letComprimento) / 2;
}

console.log(letArea);

// Ao tentar criar a variável usada acima na linha abaixo, o js apresenta erro
    // let letArea;

// -------------------------------
// Trabalhando com CONST

// Criando constantes
const constForma = "quadrado";
const constAltura = 5;
const constComprimento = 7; 
let constArea;

if(constForma === "quadrado"){
    constArea = constAltura * constComprimento;
}else{
    constArea = (constAltura * constComprimento) / 2;
}
console.log(constArea);