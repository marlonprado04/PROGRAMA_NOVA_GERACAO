# JavaScript na Web: armazenando dados no navegador

Essa pasta / projeto foi criado para armazenar os conteúdos do curso de JavaScript da Alura. Nele vamos aprender a criar a lógica por trás de um site que armazena uma lista de itens que não podem ser esquecidos para uma viagem.

O HTML e CSS permanecerão os mesmos, no máximo com pequenas modificações. O foco do curso é o `JavaScript`.

## Índice

- [JavaScript na Web: armazenando dados no navegador](#javascript-na-web-armazenando-dados-no-navegador)
  - [Índice](#índice)
  - [Apresentação](#apresentação)
  - [Capturando os dados da tela](#capturando-os-dados-da-tela)
  - [Criando as validações](#criando-as-validações)

## Apresentação

Vamos partir do ZERO do JS, aproveitando apenas o código HTML e CSS.

O projeto final deve ficar assim:

![Imagem de exemplo do projeto finalizado](exemplo_projeto_final.png)

## Capturando os dados da tela

Incialmente adicionamos a pasta de CSS e arquivo index.html no projeto.

Após, podemos adicionar uma pasta chamada js para conter os códigos JavaScript. Linkar o `main.js` dentro do `html`.

Dando início ao código JavaScript podemos testar se a conexão funcionou usando o código abaixo que faz request do formulário do site:

```javascript
console.log(document.getElementById("novoItem"));
```

O código acima nos retorna o HTML do formulário no console do navegador. Após confirmar que deu tudo certo, podemos continuar o código.

No código abaixo estamos passando o código HTML do formulário para uma variável. Após isso, criamos um _event listenet_ para o botão de `submit` do formulário.

Ao ser clicado, esse botão redireciona para a própria página, portanto os dados se perdem se tentarmos imprimi-los via `console.log`. Dessa forma, é necessário adicionar um __"previnidor de ação default"__ para bloqueaar a ação default do botão `submit` com o código `evento.preventDefault()`.

Depois, acessamos o valor contido no campo `nome` e `quantidade` através da estrutura `evento -> target -> elements -> nome-do-elemento`.

Código:

```javascript
// Criando variável para armazenar o formulário
const form = document.getElementById("novoItem");

// Criando escutador de evento para ao clicar no "submit" printar no console "funcionou" 
form.addEventListener("submit", (evento) => {
    // Criando comando para previnir ação padrão do evento, que nesse caso seria o submit para a própria página, assim o console.log vai funcionar ao clicar no submit
    evento.preventDefault();
    
    // Imprimindo no console os dados dos campos nome e quantidade através da chave do elemento dentro do target do evento
    console.log(evento.target.elements["nome"].value);
    console.log(evento.target.elements["quantidade"].value);

})
```

## Criando as validações

Para facilitar a leitura das modificações, iniciamos a aula excluíndo alguns itens da lista de itens contida no HTML.

Após, começamos a complementar o código JS incluíndo a função `criaElemento()` para criação de elementos na tag HTML.

Nessa função, passamos como parâmetro o `nome` e `quantidade` que será preenchida no formulário.

Logo de cara, incluímos a função criada dentro do evento `submit` e passamos como parâmetro as informações pegas anteriormente.

Dentro da função, declaramos uma variável para conter a tag `li` que será a tag comportando o item novo, isso através do código `const novoItem = document.createElement("li")`.

Depois, adicionamos à esse elemento criado anteriormente a mesma classe dos seus irmãos, com o código `novoItem.classList.add("item")`.

Fazemos então o mesmo processo, criando agora a tag que contém a quantidade informada e fica dentro do elemento `strong`. Para passar o valor da quantidade para a tag, usamos a variável criada e usamos o método `innerHTML = quantidade`.

Após, adicionamos a tag com a quantidade dentro da tag pai com o código `novoItem.appendChild(numeroItem);`. Então adicionamos o `nome` à tag com um incremento.

Por fim, usamos a variável `lista` que foi criada no início do código contendo a __lista completa de itens__ para armazenar o conteúdo da variável `novoItem`.

Abaixo o código completo:

```javascript
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
```
