
// Criando variável
const nome = "Alura"; // ["A", "l", "u", "r", "a"]
let nomeMaiusculas = "";

// Criando for para percorrer a string e colocar todas as letras em maiúsculo
for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase()
}
// Printando novo nome
console.log(nome);//Alura
console.log(nomeMaiusculas); //ALURA