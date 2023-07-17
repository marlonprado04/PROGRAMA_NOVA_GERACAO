// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// Criando variável para acessar todos botões de controle (array)
const controle = document.querySelectorAll(".controle-ajuste");

// Realizando a operação forEach para a cada clique no elemento da classe .controle-ajuste, a função manipulaDados seja chamada e receba o texto do target do evento clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { manipulaDados(evento.target.textContent) });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}