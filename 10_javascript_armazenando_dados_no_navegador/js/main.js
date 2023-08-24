// Criando variáveis de acesso ao DOM
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

// Criando array com os itens do localStorage parseados ou vazio se o localStorage não tiver itens
const itens = JSON.parse(localStorage.getItem("itens")) || [];

// Laço para criar elemento com dados do localstorage
itens.forEach((item) => {
    criaElemento(item); // Criando elementos
});

// Criando listener para o formulário
form.addEventListener("submit", (evento) => {
    // Impedindo reload da página submitar
    evento.preventDefault();

    // Criando variáveis para acessar campos de input
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    // Criando variável para consultar se item está cadastrado no localStorage
    const existe = itens.find(elemento => elemento.nome === nome.value);

    // Criando objeto de item para adicionar valores ao localStorage
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // Criando if para verificar se item já existe e atualizá-lo ou criá-lo, de acordo
    if (existe) {
        // Atribuindo ao item atual o id do item existente
        itemAtual.id = existe.id;

        // Atualizando a quantidade do item existente
        atualizaElemento(itemAtual);

        // Atualizando item no localStorage ao passar posição do item buscando o index através do id exato na lista de elementos
        itens[itens.findIndex(elemento => elemento.id === existe.id)] =  itemAtual;
    } else {
        // Adicionando ao item atual um "id" com tamanho do array na hora do cadastro, caso não exista atribuindo 0
        itemAtual.id = itens[itens.length-1] ? itens[itens.length-1].id+1 : 0;

        // Chamando função para criar item na lista
        criaElemento(itemAtual);

        // Adicionando objeto de itemAtual ao array de itens já cadastrados
        itens.push(itemAtual);
    }

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
    // Adicionando "id" para a tag "strong"
    numeroItem.dataset.id = item.id;

    // Adicionando à variável "li" a tag "strong"
    novoItem.appendChild(numeroItem);
    // Adicionando à variável "li" o valor do nome
    novoItem.innerHTML += item.nome;

    // Adicionando à lista o botão criado pela função botaoDeleta
    novoItem.appendChild(botaoDeleta(item.id));

    // Adicionando a tag "li" à tag "ul" (variável lista)
    lista.appendChild(novoItem);

}

// Criando função para atualizar elemento de acordo com id
function atualizaElemento(item){
    // Declarando variável para armazenar tag strong com mesmo id do item passado
    const quantidade = document.querySelector("[data-id='"+item.id+"']");

    // Atribuindo ao valor dentro da tag strong já criada a quantidade atual
    quantidade.innerHTML = item.quantidade;
}

// Criando função para criar botão de deletar
function botaoDeleta (id){
    // Criando variável para armazenar elemento button criado
    const elementoBotao = document.createElement("button");
    // Adicionando ao texto do button um X 
    elementoBotao.innerText = "X";

    // Criando listener para botão que não tem um evento por ser criado dinâmicamente
    elementoBotao.addEventListener("click", function(){ // criando function completa porque arrow function não carrega o this
        // Chamando função para deletar a tag pai desse botão
        deletaElemento(this.parentNode, id);
    });
    
    // Retornando botão criado
    return elementoBotao;
}

// Criando função para deletar tag
function deletaElemento(tag, id){
    // Deletando tag passada
    tag.remove();
    
    // Removendo elemento do array de acordo com id encontrado dentro da lista de elementos
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    console.log(itens)

    // Passando lista de itens atualizada para localStorage
    localStorage.setItem("itens", JSON.stringify(itens));
}