// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

// Criando variável para acessar todos botões de controle (array)
const controle = document.querySelectorAll(".controle-ajuste");

// Realizando a operação forEach para a cada clique no elemento da classe .controle-ajuste, a função manipulaDados seja chamada e receba o texto do target do evento clicado
// Incluí passagem como parâmetro a classe da tag pai onde o botão está sendo clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Passando o texto de conteúdo dentro da tag + a tag pai onde ela se encontra
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao, controle) {
     // Criando variável genérica para trabalhar com a peças, onde ela recebe
     // a tag irmâ da operação como parâmetro ao filtrar a classe dessa tag
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}