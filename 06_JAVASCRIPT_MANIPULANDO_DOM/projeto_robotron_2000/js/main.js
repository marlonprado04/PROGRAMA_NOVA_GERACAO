// Criando variável para acessar os botões de controle via data attibutes
const controle = document.querySelectorAll("[data-controle]");

// Criando variável para acessar todos os campos das estatísticas
const estatisticas = document.querySelectorAll("[data-estatistica");

// Função para trocar cor do robô
function trocaImagem(cor) {
    document.querySelector(".robo").src = "img/robotron_" + cor + ".png";
}


// Mapeando todos os botões de controle via forEach e adicionando evento de verificação de clique para cada um deles
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Chamando método manipulaDados para cada evento de clique nos botões de controle
        // Método recebe como parâmetro o valor do data attributes + a tag pai do evento clicado
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);

        // Chamando método atualizaEstatisticas e passando como parâmetro o valor do data attribute da peça clicada
        atualizaEstatisticas(evento.target.dataset.peca);
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

// Declarando função para atualizar estatísticas a partir do atributo peça sendo passado
function atualizaEstatisticas(peca) {
    // Criando forEach para percorrer todos elementos de estatística
    estatisticas.forEach((elemento) => {
        // A cada elemento percorrido, atuliza o "text content" (conteúdo) com o valor do conteúdo +  o valor dentro do objeto de valores incrementais no índice certo
        // pecas[peca[elemento.dataset.estatistica]] = peças (obj) -> peça (conteúdo do data attribute sendo clicado) -> elemento.dataset.estatistica (valor das estatísticas no site para ser incrementado);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
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