# JavaScript na Web: armazenando dados no navegador

Essa pasta / projeto foi criado para armazenar os conteúdos do curso de JavaScript da Alura. Nele vamos aprender a criar a lógica por trás de um site que armazena uma lista de itens que não podem ser esquecidos para uma viagem.

O HTML e CSS permanecerão os mesmos, no máximo com pequenas modificações. O foco do curso é o `JavaScript`.

## Índice

- [JavaScript na Web: armazenando dados no navegador](#javascript-na-web-armazenando-dados-no-navegador)
  - [Índice](#índice)
  - [Apresentação](#apresentação)
  - [Capturando os dados da tela](#capturando-os-dados-da-tela)

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
