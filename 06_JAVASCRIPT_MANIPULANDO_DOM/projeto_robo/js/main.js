// Criando variável para acessar os botões de controle via data attibutes
const controle = document.querySelectorAll("[data-controle]");

// Mapeando todos os botões de controle via forEach e adicionando evento de verificação de clique para cada um deles
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Chamando método manipulaDados para cada evento de clique nos botões de controle
        // Método recebe como parâmetro o valor do data attributes + a tag pai do evento clicado
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

// Declarando função que realiza adição ou subtração nos pontos(controle) de acordo com o botão clicado(operação)
function manipulaDados(operacao, controle) {
    // Criando variável para trabalhar dinamicamente com a peça de acordo com o controle passado
    const peca = controle.querySelector("[data-contador]");

    // Verificando se operação do data attributo é soma ou subtração 
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