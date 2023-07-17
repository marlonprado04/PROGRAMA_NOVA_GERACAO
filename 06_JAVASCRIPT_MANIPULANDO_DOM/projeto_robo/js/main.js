// Criando variável para acessar todos botões de controle via data attributes
const controle = document.querySelectorAll("[data-controle]");

// Realizando a operação forEach para a cada clique no elemento da classe .controle-ajuste, a função manipulaDados seja chamada e receba o texto do target do evento clicado
// Incluí passagem como parâmetro a classe da tag pai onde o botão está sendo clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Passando o texto de conteúdo dentro da tag via data attibutes + a tag pai onde ela se encontra via parentNode
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao, controle) {
    // Criando variável genérica para trabalhar com a peças, onde ela recebe
    // a tag irmâ da operação como parâmetro ao filtrar o atributo via data attibutes
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

// Objeto com valores a serem incrementados nas estatisticas do robo
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}