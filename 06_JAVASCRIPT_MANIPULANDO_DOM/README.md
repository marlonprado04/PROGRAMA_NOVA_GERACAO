# Javascript: manipulando o DOM

Nesse curso vamos aprender a manipular o DOM (Document Object Model), interagindo diretamente com o HTML da tela a partir do JavaScript.

O curso é focado em FrontEnd.

## Índice

- [Javascript: manipulando o DOM](#javascript-manipulando-o-dom)
  - [Índice](#índice)
  - [Manipular um elemento](#manipular-um-elemento)
  - [Entendendo o DOM](#entendendo-o-dom)
  - [Desafio 01 - Consolidando o seu conhecimento](#desafio-01---consolidando-o-seu-conhecimento)
  - [Eventos com JavaScript](#eventos-com-javascript)
  - [Desafio 02 - Consolidando o seu conhecimento](#desafio-02---consolidando-o-seu-conhecimento)
  - [Alterando um item na página](#alterando-um-item-na-página)
  - [Reaproveitando código](#reaproveitando-código)
  - [Alterando vários componentes](#alterando-vários-componentes)
  - [Desafio 03 - Consolidando o seu conhecimento](#desafio-03---consolidando-o-seu-conhecimento)
  - [Alterando o elemento](#alterando-o-elemento)
  - [Código à prova de falhas](#código-à-prova-de-falhas)
  - [Para saber mais: data-attribute](#para-saber-mais-data-attribute)
  - [Desafio 04 - Consolidando o seu conhecimento](#desafio-04---consolidando-o-seu-conhecimento)
  - [Interagindo com objetos](#interagindo-com-objetos)
  - [Cálculos dinâmicos](#cálculos-dinâmicos)
  - [Compartilhando com o mundo](#compartilhando-com-o-mundo)

## Manipular um elemento

Para manipular um elemento do HTML ou CSS com JS existem algumas funções, como por exemplo `document.getElementById()`, `document.getElementByClassName()` ou `document.querySelector()`. Após uma dessas funções podemos incluir `.value` e passar o valor. Um exemplo ficaria assim: `document.getElementById("texto").value="Olá mundo!"`.

## Entendendo o DOM

O DOM (Document Object Model) o por onde o JS percorre para interagir com nosso HTML. O que o JS faz é converter o HTML em um Modelo que permite interação.

Para verificar isso podemos abrir o console do navegador em um site qualquer e digitar `document`. O que o console vai retornar é toda a estrutura em HTML do site em questão.

## Desafio 01 - Consolidando o seu conhecimento

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

## Alterando um item na página

Para alterar um elemento na página podemos usar os conhecimentos aprendidos até então.

Abaixo o código `main.js` alterado dentro da pasta `projeto_robo`, que será o projeto principal:

```javascript
// Criando variáveis de acesso 
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// Criando evento para somar os pontos do braço ao clicar
somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
});

// Criando evento para subtrair os pontos do braço ao clicar
subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
});

```

## Reaproveitando código

Para reaproveitar o código do projeto podemos criar uma função que recebe como parâmetro o tipo de operação `somar` ou `subtrair` e a partir disso realizar a operação necessária.

Nó código abaixo foi realizada essa alteração e também foi criada uma nova variável para iniciar o tratamento de dados a partir da seleção de `classes` dos elementos, ou seja, trabalharemos com `array` (já que classes pertencem à varios elementos).

O código:

```javascript
// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// Criando variável para acessar todos botões de controle (array)
const controle = document.querySelectorAll(".controle-ajuste");

// Criando evento para somar os pontos do braço ao clicar a partir da função criada
somar.addEventListener("click", () => manipulaDados("somar"));

// Criando evento para subtrair os pontos do braço ao clicar a partir da função criada
subtrair.addEventListener("click", () => manipulaDados("subtrair"));

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado
function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}
```

## Alterando vários componentes

Para dar início à refatoração do código e deixá-lo muito mais dinâmico podemos utilizar a classe ao invés do id no `querySelector`.

Dessa forma, o JS retorna um `array` que pode ser trabalhado com o método `forEach`, por exemplo. A partir desse método podemos passar o `elemento` que está sendo clicado como parâmetro da função callback e para cada elemento clicado realizar a função `manipulaDados` para realizar a manipulação dos dados, onde ela recebe como parâmetro o `target` do evento realizado ao receber um clique de botão.

Dessa forma, toda vez que qualquer botão do HTML for clicado os braços terão 1 ponto adicionado ou removido.

Abaixo o código refatorado:

```javascript
// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// Criando variável para acessar todos botões de controle (array)
const controle = document.querySelectorAll(".controle-ajuste");

// Realizando a operação forEach para que a cada clique no elemento da classe .controle-ajuste a função manipulaDados seja chamada e receba o texto do target do evento clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { manipulaDados(evento.target.textContent) });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}
```

## Desafio 03 - Consolidando o seu conhecimento

Chegou a hora de praticar! No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:

`var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];`

Para esse desafio a resposta é:

```javascript
// Criando array
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

// Removendo a cor vermelha do array
lista.splice(lista.indexOf("Vermelho"), 1);

// Printando array atualizado
console.log(lista);
```

## Alterando o elemento

Para manipular os elementos de forma dinâmica podemos fazer alguns ajustes no código, por exemplo, utilizar o método `evento.target.parentNode` para buscar a `tag pai` onde o botão clicado se encontra.

Podemos passar isso como parâmetro na função `manipulaDados` com nome de atributo `controle`. Com isso deixamos a busca da classe `.controle-contador` dinâmica, pois o código `controle.querySelector(".controle-contador")` irá buscar apenas a essa classe se estiver dentro da tag pai.

Abaixo o código completamente ajustado:

```javascript
// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

// Criando variável para acessar todos botões de controle (array)
const controle = document.querySelectorAll(".controle-ajuste");

// Realizando a operação forEach para a cada clique no elemento da classe .controle-ajuste, a função manipulaDados seja chamada e receba o texto do target do evento clicado
// Incluí passagem como parâmetro a classe da tag pai onde o botão está sendo clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Passando o texto de conteúdo dentro da tag + a tag pai onde ela se encontra
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao, controle) {
     // Criando variável genérica para trabalhar com a peças, onde ela recebe
     // a tag irmâ da operação como parâmetro ao filtrar a classe dessa tag
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
```

## Código à prova de falhas

Para tornar o código mais responsivo evitando possiveis erros caso o CSS ou valores mudem, podemos usar `data attibutes`, que servem para armazenar informações extras dentro das tags HTML e nos permitem não depender de classes e ids para trablhar com elas em JS.

Por exemplo, ao adicionar os data attibutes `data-controle` e `data-contador` na tag de botão e contador do HTML, conforme abaixo:

```html
 <div class="peca">
    <label for="" class="peca-titulo">Foguetes</label>
    <div class="controle">
        <buttom class="controle-ajuste" data-controle="-">-</buttom>
        <input type="text" class="controle-contador" value="00" data-contador>
        <buttom class="controle-ajuste" data-controle="+">+</buttom>
    </div>
</div>
```

Precisamos alterar o arquivo JS nas linhas em que trabalhamos com os botões e contadores através das classes `controle-contador` e `controle-ajuste` e substituir essas classes por `[data-controle]`, `[data-contador]` e `evento.target.dataSet.controle` para buscar as tags e textos contidos nela.

Abaixo o código ajustado:

```javascript
// Criando variáveis de acesso individual (por id)
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

// Criando variável para acessar todos botões de controle via data attributes
const controle = document.querySelectorAll("[data-controle]");

// Realizando a operação forEach para a cada clique no elemento da classe .controle-ajuste, a função manipulaDados seja chamada e receba o texto do target do evento clicado
// Incluí passagem como parâmetro a classe da tag pai onde o botão está sendo clicado
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Passando o texto de conteúdo dentro da tag via data attibutes + a tag pai onde ela se encontra via parentNode
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

// Declarando função que realiz a operação de soma ou subtração de pontos de acordo com o parâmetro passado (+ ou -)
function manipulaDados(operacao, controle) {
     // Criando variável genérica para trabalhar com a peças, onde ela recebe
     // a tag irmâ da operação como parâmetro ao filtrar o atributo via data attibutes
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
```

## Para saber mais: data-attribute

Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Abaixo um exemplo de código HTML:

```html
  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li data-cor="vermelho" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li data-cor="branco" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li data-cor="amarelo" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li data-cor="rosa" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>
```

Um exemplo de código em JavaScript demonstrando como acessar esses dados:

```javascript
function mudaCores(elementos){
    var cores = elementos.getAttribute("[data-cor]");
    var tipoElemento = elementos.getAttribute("[data-tipo]");
  }
```

## Desafio 04 - Consolidando o seu conhecimento

Apenas com teoria não é possível aprender código, então, vamos exercitar a utilização do data-attribute em funções neste desafio. Temos uma lista de cores disponibilizada no código abaixo. Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

## Interagindo com objetos

Nessa aula apenas adicionamos o objeto contendo as estatístiscas no arquivo `main.js` e também adicionamos outros atributos no HTML, que foram os `data-peca` nos botões de + ou -, de acordo com cada peça. E também adicionamos o `data-estatistica` de acordo com cada estatística que iremos incrementar depois.

## Cálculos dinâmicos

Nessa aula adicionamos a função `atualizaEstatisticas` que serve para atualizar as estatísticas de acordo com o botão clicado e com o objeto previamente passado com dados incrementais.

Abaixo o código JS:

```javascript
// Criando variável para acessar os botões de controle via data attibutes
const controle = document.querySelectorAll("[data-controle]");

// Criando variável para acessar todos os campos das estatísticas
const estatisticas = document.querySelectorAll("[data-estatistica");

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
function atualizaEstatisticas(peca){ 
    // Criando forEach para percorrer todos elementos de estatística
    estatisticas.forEach((elemento) => {
        // A cada elemento percorrido, atuliza o "text content" (conteúdo) com o valor do conteúdo +  o valor dentro do objeto de valores incrementais no índice certo
        // pecas[peca[elemento.dataset.estatistica]] = peças (obj) -> peça (conteúdo do data attribute sendo clicado) -> elemento.dataset.estatistica (valor das estatísticas no site para ser incrementado);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    } )
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
```

## Compartilhando com o mundo

Para publicar o projeto na internet podemos usar o site [Vercel](https://vercel.com/).

