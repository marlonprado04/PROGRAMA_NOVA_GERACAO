// PAssando o acesso ao id robotron para uma variável
const robotron = document.querySelector("#robotron");

// Adicionando evento de imprimir no console ao clicar no robo
robotron.addEventListener("click", dizOi);

// Criando variável para impressão no console
function dizOi() {
    console.log('oi');
}

