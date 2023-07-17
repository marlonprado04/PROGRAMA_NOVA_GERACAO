# Javascript: manipulando o DOM

Nesse curso vamos aprender a manipular o DOM (Document Object Model), interagindo diretamente com o HTML da tela a partir do JavaScript.

O curso é focado em FrontEnd.

## Índice

- [Javascript: manipulando o DOM](#javascript-manipulando-o-dom)
  - [Índice](#índice)
  - [Manipular um elemento](#manipular-um-elemento)
  - [Entendendo o DOM](#entendendo-o-dom)
  - [Consolidando o seu conhecimento](#consolidando-o-seu-conhecimento)
  - [Eventos com JavaScript](#eventos-com-javascript)
  - [Desafio 02 - Consolidando o seu conhecimento](#desafio-02---consolidando-o-seu-conhecimento)

## Manipular um elemento

Para manipular um elemento do HTML ou CSS com JS existem algumas funções, como por exemplo `document.getElementById()`, `document.getElementByClassName()` ou `document.querySelector()`. Após uma dessas funções podemos incluir `.value` e passar o valor. Um exemplo ficaria assim: `document.getElementById("texto").value="Olá mundo!"`.

## Entendendo o DOM

O DOM (Document Object Model) o por onde o JS percorre para interagir com nosso HTML. O que o JS faz é converter o HTML em um Modelo que permite interação.

Para verificar isso podemos abrir o console do navegador em um site qualquer e digitar `document`. O que o console vai retornar é toda a estrutura em HTML do site em questão.

## Consolidando o seu conhecimento

Para testar os conhecimentos passados incial, criei uma pasta com arquivos necessários chamada `01_desafio`.

Nessa pasta incluí o código HTML e CSS necessário para realizar a manipulação do texto dentro da tag `<p> </p>` através do console do navegador.

Pra isso usei o código: `document.getElementById('texto').innerText="O inverno já passou!"`

## Eventos com JavaScript

Para iniciar o trabalho de interação com a página podemos criar uma pasta chamada `js` e nela incluir o arquivo `main.js`, que é uma convenção para estrutura de arquivos em javascript.

Para lincar o arquivo js com o HTML podemos usar a tag `<script src="caminho/do/arquivo"></script>`.

> Por boas práticas o ideal é colocar essa tag na última linha possível, pois assim o `navegador irá ler todo o HTML antes do arquivo JS`, dessa forma ele não irá travar a página executando o arquivo JS sem que o HTML seja carregado antes.

Abaixo o código adicionado no arquivo `main.js` para que ao clicar no robotron apareca uma mensagem no console:

```javascript
// PAssando o acesso ao id robotron para uma variável
const robotron = document.querySelector("#robotron");

// Adicionando evento de imprimir no console ao clicar no robo
robotron.addEventListener("click", dizOi);

// Criando variável para impressão no console
function dizOi() {
    console.log('oi');
}
```

## Desafio 02 - Consolidando o seu conhecimento

> Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.

Como fazer:

- Utilize os códigos HTML e CSS disponibilizados;
- Crie o arquivo de código JS;
- Referencie o arquivo JS no HTML.

O arquivo HTML e CSS foram inclídos na pasta `02_desafio`.

Código JavaScript utilizado:

```javascript
// Criando variável para acessar botão
const botao = document.querySelector("#calcular");

// Adicionando um evento ao clicar no botão
// Imprimindo mensagem de "fui clicado" no console
botao.addEventListener("click", () =>{return console.log("fui clicado")});
```
