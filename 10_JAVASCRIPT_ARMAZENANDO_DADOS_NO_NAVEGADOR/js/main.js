// Criando variável para armazenar o acesso ao formulário
const form = document.getElementById("novoItem");

// Criando variável para armazenar o acesso à lista de itens
const lista = document.getElementById("lista");

// Criando escutador de evento para ao clicar no "submit" printar no console "funcionou" 
form.addEventListener("submit", (evento) => {
    // Criando comando para previnir ação padrão do evento, que nesse caso seria o submit para a própria página, assim o console.log vai funcionar ao clicar no submit
    evento.preventDefault();

    // PCriando variável para conter nome e quantidade preenchidos no formulário do site
    const nome = evento.target.elements["nome"].value;
    const quantidade = evento.target.elements["quantidade"].value;

    // Chamando função criaElemento toda vez que o botão submit for clicado e passando nome e quantidade
    criaElemento(nome, quantidade);

})

// Criando função que recebe nome e quantidade para criar um novo elemento
function criaElemento(nome, quantidade) {
    console.log(nome); // para testar se está imprimindo valor do nome
    console.log(quantidade); // para testar se está imprimindo valor da quantidade

    // Exemplo de tag item: <li class="item"><strong>7</strong>Camisas</li>

    // Criando variável para conter um novo "li" criado no html 
    const novoItem = document.createElement("li");
    // Atribuindo ao novo item criado a classe "item"
    novoItem.classList.add("item");

    // Criando variável para conter um novo elemento "strong" criado no html
    const numeroItem = document.createElement("strong");
    // Passando a quantidade informada no formulário para o valor dentro da tag html criada na variavel numeroItem (innerHTML -> passa valor para dentro da tag)
    numeroItem.innerHTML = quantidade;

    // Passando a variável numeroItem para dentro da novoItem via metodo appendChield (para comportar toda tag HTML, sem que seja adicionada como um objeto)
    novoItem.appendChild(numeroItem);
    // Agora adicionando a variável nome à variável novoItem via innerHTML, pois ela já está com a quantidade dentro da tag
    novoItem.innerHTML += nome;

    // Adicionando a variável novoItem à variável que contem toda a tag com a lista de itens
    lista.appendChild(novoItem);

    // Printando variável novoItem para confirmar se o innerHTML funcionou
    console.log(novoItem);
}

