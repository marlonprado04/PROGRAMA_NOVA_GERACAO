// Criando variáveis de acesso ao DOM
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

// Criando array com os itens do localStorage parseados ou vazio se o localStorage não tiver itens
const itens = JSON.parse(localStorage.getItem("itens")) || [];

// Laço para criar elemento com dados do localstorage
itens.forEach((item) => {
    console.log(item); // Printando no console
    criaElemento(item); // Criando elementos
});

// Criando listener para o formulário
form.addEventListener("submit", (evento) => {
    // Impedindo reload da página submitar
    evento.preventDefault();

    // Criando variáveis para acessar campos de input
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    // Criando objeto de item para adicionar valores ao localStorage
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // Chamando função para criar item na lista
    criaElemento(itemAtual);

    // Adicionando objeto de itemAtual ao array de itens já cadastrados
    itens.push(itemAtual);

    // Adicionando array de objetos como string no localStorage
    localStorage.setItem("itens", JSON.stringify(itens));

    // Limpando formulário após submit
    nome.value = "";
    quantidade.value = "";

})

// Criando função para criar novo elemento e incluir na lista
function criaElemento(item) {
    // Exemplo de tag item: <li class="item"><strong>7</strong>Camisas</li>

    // Declarando variável para criar "li"
    const novoItem = document.createElement("li");
    // Atribuindo à variável "li" a classe "item"
    novoItem.classList.add("item");

    // Declarando variável para criar o "strong"
    const numeroItem = document.createElement("strong");
    // Passando quantidade informada no formulário para variável do "strong"
    numeroItem.innerHTML = item.quantidade;

    // Adicionando à variável "li" a tag "strong"
    novoItem.appendChild(numeroItem);
    // Adicionando à variável "li" o valor do nome
    novoItem.innerHTML += item.nome;

    // Adicionando a tag "li" à tag "ul" (variável lista)
    lista.appendChild(novoItem);

}

