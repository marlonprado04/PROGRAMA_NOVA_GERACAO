# Javascript: manipulando o DOM

Nesse curso vamos aprender a manipular o DOM (Document Object Model), interagindo diretamente com o HTML da tela a partir do JavaScript.

O curso é focado em FrontEnd.

## Índice

- [Javascript: manipulando o DOM](#javascript-manipulando-o-dom)
  - [Índice](#índice)
  - [Manipular um elemento](#manipular-um-elemento)
  - [Entendendo o DOM](#entendendo-o-dom)
  - [Consolidando o seu conhecimento](#consolidando-o-seu-conhecimento)

## Manipular um elemento

Para manipular um elemento do HTML ou CSS com JS existem algumas funções, como por exemplo `document.getElementById()`, `document.getElementByClassName()` ou `document.querySelector()`. Após uma dessas funções podemos incluir `.value` e passar o valor. Um exemplo ficaria assim: `document.getElementById("texto").value="Olá mundo!"`.

## Entendendo o DOM

O DOM (Document Object Model) o por onde o JS percorre para interagir com nosso HTML. O que o JS faz é converter o HTML em um Modelo que permite interação.

Para verificar isso podemos abrir o console do navegador em um site qualquer e digitar `document`. O que o console vai retornar é toda a estrutura em HTML do site em questão.

## Consolidando o seu conhecimento

Para testar os conhecimentos passados incial, criei uma pasta com arquivos necessários chamada `aula_1`.

Nessa pasta incluí o código HTML e CSS necessário para realizar a manipulação do texto dentro da tag `<p> </p>` através do console do navegador.

Pra isso usei o código: `document.getElementById('texto').innerText="O inverno já passou!"`
