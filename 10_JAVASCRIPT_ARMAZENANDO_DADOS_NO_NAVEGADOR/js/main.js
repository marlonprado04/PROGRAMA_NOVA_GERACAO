// Criando variáveis de acesso ao DOM
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

// Criando array para armazenar localStorage
const itens = [];

// Criando listener para o formulário
form.addEventListener("submit", (evento) => {
    // Impedindo reload da página submitar
    evento.preventDefault();

    // Criando variáveis para acessar campos de input
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    // Chamando função para criar item na lista
    criaElemento(nome.value, quantidade.value);

    // Limpando formulário após submit
    nome.value = "";
    quantidade.value = "";

})

// Criando para criar novo elemento e incluir na lista
function criaElemento(nome, quantidade) {
    console.log(nome); // para testar se está imprimindo valor do nome
    console.log(quantidade); // para testar se está imprimindo valor da quantidade

    // Exemplo de tag item: <li class="item"><strong>7</strong>Camisas</li>

    // Declarando variável para criar "li"
    const novoItem = document.createElement("li");
    // Atribuindo à variável "li" a classe "item"
    novoItem.classList.add("item");

    // Declarando variável para criar o "strong"
    const numeroItem = document.createElement("strong");
    // Passando quantidade informada no formulário para variável do "strong"
    numeroItem.innerHTML = quantidade;

    // Adicionando à variável "li" a tag "strong"
    novoItem.appendChild(numeroItem);
    // Adicionando à variável "li" o valor do nome
    novoItem.innerHTML += nome;

    // Adicionando a tag "li" à tag "ul" (variável lista)
    lista.appendChild(novoItem);

    // Printando variável novoItem para confirmar se funcionou
    console.log(novoItem);

    // Criando objeto de item para adicionar ao localStorage
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    // Adicionando objeto de itemAtual ao array de itens já cadastrados
    itens.push(itemAtual);

    // Adicionando array de objetos como string no localStorage
    localStorage.setItem("item", JSON.stringify(itens));
}

