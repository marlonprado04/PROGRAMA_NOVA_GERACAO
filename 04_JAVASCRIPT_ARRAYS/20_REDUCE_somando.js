// Criando variáveis das notas
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Criando função para calcular a média com o método reduce
function calculaMedia(notasDaSala) {

    // Criando variável para conter as notas, já que o método reduce não retorna um novo array
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {

        return acumulador + nota; // Incrementando a nota ao acumulador 

    }, 0); // -> Atribuindo 0 ao valor inicial do acumulador

    // Criando variável para média
    const media = somaDasNotas / notasDaSala.length;

    // Retornando média
    return media;
}


// Uma alternativa na criação do método reduce para reduzir linhas
function calculaMedia2(notasDaSala) {

    // Criando variável e função callback resumida
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    // Criando variável para média
    const media = somaDasNotas / notasDaSala.length;

    // Retornando média
    return media;
}


// Printando a mensagem com cada sala
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

