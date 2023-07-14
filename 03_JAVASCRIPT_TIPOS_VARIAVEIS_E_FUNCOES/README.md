# JavaScript: tipos, variáveis e funções

## Índice

- [JavaScript: tipos, variáveis e funções](#javascript-tipos-variáveis-e-funções)
  - [Índice](#índice)
  - [Links e artigos](#links-e-artigos)
  - [Tipo number](#tipo-number)
  - [Tipo string](#tipo-string)
  - [Para saber mais: Codificação de strings](#para-saber-mais-codificação-de-strings)
  - [Tipo boolean](#tipo-boolean)
  - [Para saber mais: Tipos null e undefined](#para-saber-mais-tipos-null-e-undefined)
  - [Var, let e const](#var-let-e-const)
  - [Truthy e falsy](#truthy-e-falsy)
  - [Conversão de tipos](#conversão-de-tipos)
  - [Para saber mais: Conversão de valores](#para-saber-mais-conversão-de-valores)
  - [Para saber mais: Palavras reservadas](#para-saber-mais-palavras-reservadas)
  - [JavaScript e NodeJS](#javascript-e-nodejs)
  - [Erros e stacktrace](#erros-e-stacktrace)
  - [Console.api](#consoleapi)
  - [Operadores de comparação](#operadores-de-comparação)
  - [Para saber mais: Mais sobre operadores](#para-saber-mais-mais-sobre-operadores)
  - [Operador ternário](#operador-ternário)
  - [Template literal](#template-literal)
  - [Faça como eu fiz: Utilizando ternários e templates](#faça-como-eu-fiz-utilizando-ternários-e-templates)
  - [Funções](#funções)
  - [Parâmetros e argumentos](#parâmetros-e-argumentos)
  - [Expressão de função](#expressão-de-função)
  - [Arrow Function](#arrow-function)

## Links e artigos

VSCode: Dicas e truques: [Link](https://www.youtube.com/watch?v=C3o9KwOHeCk)

Como utilizar o terminal integrado no VSCode: [Link](https://www.alura.com.br/artigos/como-utilizar-terminal-integrado-visual-studio-code?_gl=1*1um01ax*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzU0MzMuNjAuMC4w*_fplc*T0d2JTJGSUwlMkZkbzhNSVM2MGI0TWxWRlNCRUoxVktBWlhWMiUyRnlCUnJEcm9VaGxMSUZEbVhncmtERCUyQkl1QlZpcWlzSGY3cDY3Y0NMYzRvWSUyQjJ3SUhlTDBQcDhFdFI4JTJCUkFEcVcxeGo4NEVzTTFYWkRaUVJtclh4b3NxV2NjT3lBJTNEJTNE)

Trabalhando com caminhos e pastas no terminal: [Link](https://www.alura.com.br/artigos/trabalhando-com-caminhos-e-pastas-no-terminal?_gl=1*1qdg7uc*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzU0NzMuMjAuMC4w*_fplc*TnNYM0h5SlJPYVRXQ2NtQmtpZCUyRlA3ZXdaR3Y2OVNXam5WRXFvOXg1SFZib0tuc0wlMkJvRTdFejkxSURYSiUyRlhWQzZWM3RuVk5ndzZEZDhITXlJS2olMkZmSkZMNXJsZllZbXQ5UUhiOEgzSmNwJTJGZW5lS3YlMkYxWENqTGJlM2FPUUp3JTNEJTNE)

Formatar números no JavaScript: [Link](https://www.alura.com.br/artigos/formatando-numeros-no-javascript?_gl=1*da0r6x*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzY3NDIuNTkuMC4w*_fplc*NWNWZ0ZQOSUyQkRsTldRNG5NUyUyRjBUZ1ZqNmdjeHJVTDF2MFpFY2psZ3FKdGh3NzBBa0gwUG5aaFVBQnBSelBnODZkYTJOUWtncm5neUVTT0pMNnIxbEF6NUNrS3pKRXZYSXBuQTNKMDdnQ1dIWEpFOHI0NGolMkZValRNRld0Q0R3JTNEJTNE)

Ordenação de números no JavaScript: [Link](https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona?_gl=1*eu6s41*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzY4MTEuNjAuMC4w*_fplc*Z0NpeVVTY2ZBOUJmak5Zd1VJTjZEWDIlMkZ5bVNRZUlEY2t4VlElMkJHV0JXVzVYblRmWE84YUUwdmxqd05wQ3Z2b0oySUhxJTJCd2d4NDQzSVJjVkQydmFvd0lCVGElMkZLenQ1a0ZjeEtNdDRRV05lMWg3NzVudjhRQlNTSVhrRnBDdXclM0QlM0Q.)

## Tipo number

Variaveis do tipo number podem ser inteiras e de ponto flutuante, sendo que variaveis de ponto flutuante permitem declaração sem o 0 na frente.

Ao tentar multiplicar algo que não é number por um number, o retorno será "NaN" que significa "Not a Number".

Abaixo um código de exemplo:

```javascript
// Variáveis do tipo number

// Criando constante
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 4;

const operacao = primeiroNumero + segundoNumero;

console.log(operacao);


// Ṕonto flutuante

const numeroPontoFlutuante = 3.5;

// Javascript permite declarar ponto flutuante sem o zero na fente
const pontoFlutuanteSemZero = .3;

const novaOperacao = numeroPontoFlutuante / pontoFlutuanteSemZero;

// Printando na tela
console.log(novaOperacao);

// Testando impressao do NaN

const alura = "Alura";
console.log(alura * primeiroNumero);

```

## Tipo string

Variáveis do tipo `string` servem para armazenar uma cadeia de caracteres.

O JS interpreta qualquer coisa entre aspas simples ou aspas dupla como uma string.

O operador para concatenar strings em JavaScript é o `+`.

Abaixo um código de exemplo:

```javascript


// Criando variaveis do tipo string
const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";

// Quando usar aspas duplas ou simples
// Resposta: Quando for necessário incluir uma das duas dentro do texto de string
const citacao = 'O Marlon disse "Olá pessoas" e aí foi embora.';
console.log(citacao);

// O operador de concatenação é o +
const citacao2 = "Meu nome é: ";
const meuNome = "Marlon";
console.log(citacao2 + meuNome);

```

## Para saber mais: Codificação de strings

A codificação de caracteres, também conhecida como character encoding, é um sistema que permite que os computadores processem caracteres especiais, como acentos, ideogramas e emojis. Ao longo das décadas, foram desenvolvidos conjuntos de caracteres especiais, como o ASCII e o Unicode, que possuem códigos para cada caractere.

O Unicode é amplamente utilizado e possui códigos para caracteres de mais de 150 idiomas, símbolos matemáticos e emojis. O JavaScript utiliza o UTF-16 como padrão de codificação de caracteres. No entanto, bancos de dados podem aceitar outras codificações, embora o UTF-16 seja amplamente suportado pelas tecnologias atuais.

A codificação de caracteres é fundamental para garantir a correta exibição e processamento de diferentes idiomas e caracteres especiais em sistemas computacionais.

## Tipo boolean

O tipo boleano serve para armazenar `true` ou `falso` e costuma ser utilizado para comparar valores.

Abaixo um exemplo de código:

```javascript

// Criando variaveis e constante
const n1 = 5;
const n2 = 10;

// Comparando valores das constantes

console.log(n1 === n2); // retorna false

// Criando uma 3 constante com valor igual à 1
const n3 = 5;

console.log(n1 === n3); // retorna true

// Criando constantes de string

const texto1 = "Alura";
const texto2 = "a";

console.log(texto1 === texto2); // retorna false

```

## Para saber mais: Tipos null e undefined

O JS possui 2 tipos de valores para representar a ausência de informação que são o tipo `null` o `undefined`.

A diferença deles é que o `null` é o valor atribuído à uma variável vazia que foi inicializada e o `undefined` é o valor padrão de uma variável criada mas não inicializada.

> `undefined` também é o valor retornado por uma função que não tem cláusula `return`

É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada.

Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.

## Var, let e const

O JavaScript possui 3 formas de criar variáveis que são `var`, `let` e `const`.

A variáverl do tipo `var` permite o uso mesmo antes de ser declarada, ou seja, podemos criar uma variável sem informar que ela é var e já sair usando e só no final do uso declara-la.

A variável do tipo `let` foi criada justamente para corrigir possíveis problemas que a variável `var` pode gerar, pois ela impede o uso sem que seja inicializada. Dessa forma, fica impossível criar 2 variáveis com o mesmo nome por acidente.

A variável do tipo `const` na verdade é uma constante. Uma característica dela é que ao ser declarada ela obriga a atribuição de algum valor.

Abaixo um código de exemplo:

```javascript

// Criando e trabalhando com var

var varAltura = 5;
var varComprimento = 7;

// O JS permite usar uma variável do tipo VAR antes de cria-la
varArea = varAltura * varComprimento;
console.log(varArea);

// Aqui estou criando a variável utilizada
var varArea;

// ---------------------------
// Criando e trabalhando com LET

let letForma = "retângulo" 
let letAltura = 5;
let letComprimento = 7;
let letArea;

if(letForma==="retângulo"){
    letArea = letAltura * letComprimento;
}else{
    letArea = (letAltura * letComprimento) / 2;
}

console.log(letArea);

// Ao tentar criar a variável usada acima na linha abaixo, o js apresenta erro
    // let letArea;

// -------------------------------
// Trabalhando com CONST

// Criando constantes
const constForma = "quadrado";
const constAltura = 5;
const constComprimento = 7; 
let constArea;

if(constForma === "quadrado"){
    constArea = constAltura * constComprimento;
}else{
    constArea = (constAltura * constComprimento) / 2;
}
console.log(constArea);

```

## Truthy e falsy

Dentro do JS existem outras informações que são tratadas como `true` e `false` pela linguagem.

Por exemplo, variáveis de string vazias e o número 0 se comparados com `false` retornam que a comparação é verdadeira, ou seja, para o JS são a mesma coisa.

> Um detalhe para se atentar é o uso de `null` em variáveis. Diferente de `undefined` o `null` possui um comportamento de `objeto`, o que pode ocasionar bugs em códigos.

Abaixo um código de exemplo:

```javascript
// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

let n1 = 0; // 0 => false
let n2 = 1;// 1 => true
let texto = "";// "" => false

console.log(n1 == false);
console.log(texto == false);
console.log(n2 == true);

// null ou undefined

let varUndefined; // undefined
let varNull = null; // null | object (bug)
let numero = 3; // tipo number
let string = "Alura"; // tipo string

console.log(typeof varUndefined); // retorna undefined
console.log(typeof varNull); // retorna object (o que é um bug do JavaScript)
console.log(typeof numero); // retorna number
console.log(typeof string); // retorna string

```

## Conversão de tipos

Quando falamos de conversão de tipos, o JS possui 2 formas de conversão, a conversão `implícita` e a conversão `explícita`.

A conversão implicita ocorre quando, por exemplo, tentamos somar uma variável `number` com uma variável `string`. O retorno da soma será uma concatenação, pois o JS converte a number em string.

A conversão explícita ocorre através de funções executadas propositalmente, ou seja, quando desejamos converter um valor em outro. Um exemplo é a função `Number()`que converte um valor em `number`.

> Um detalhe para se atentar é é que ao tentar converter um caractere não numérico o retorno será `NaN`(Not a Number).

Abaixo um código de exemplo:

```javascript
// conversão implicita

const numero = 456;
const numeroString = "456";

// Ao usar 2 operadores de = o javascript converte os valores em string
console.log(numero == numeroString); // retorna true

console.log(numero === numeroString); // retorna false

console.log(numero + numeroString); // concatena, retornando 456456

// ---------------

// conversão explícita

// Number()
console.log(typeof Number(numeroString)) // retorna number

console.log(numero + Number(numeroString)); // retorna a soma 912

console.log(Number("123a")) // retorna NaN
```

## Para saber mais: Conversão de valores

É possível converter valores no JS com mais de uma forma.

Por exemplo, para a conversão de `string` para `number`, podemos usar a função `Number()`, assim como usando o operador de `+` antes da variável.

No caso de string, podemos usar o operador `String()` ou `toString()` após a variável.

Podemos converter `boolean` para number e string também através dos comandos acima.

> Se atentar à forma de uso dos conversores de string

Abaixo um código de exemplo:

```javascript

// String()

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); // retorna "12341234"

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // também retorna "12341234"

// Podemos converter boleano para String e para Number também

// String

let usuarioConectado1 = false;
console.log(String(usuarioConectado1)); // retorna "false"
usuarioConectado1 = true;
console.log(String(usuarioConectado1)); // retorna "true"

// Number

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // retorna 0
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // retorna 1

```

## Para saber mais: Palavras reservadas

Diferente de algumas outras linguagens, o JS não permite uso de palavras reservadas pelo sistema na criação de variáveis.

Por exemplo, se tentarmos criar uma variável chamada `const` ou `if` ou `var`, o JS não vai reconhecer essas palavras como identificadoees e nem interpretar o que será executado nessa linha.

Abaixo a lista de palavras que o JS não permite que sejam usadas:

```javascript
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield
enum
implements
interface
package
private
protected
public
```

## JavaScript e NodeJS

O JS possui algumas caracteristicas que precisam ser levadas em conta na hora de se programar.

O JavaScript é uma linguagem com `tipagem dinâmica`, ou seja, não é necessário informar o tipo de variável ao declara-la. Ele permite que as variáveis tenham o tipo modificado durante a execução do código.

O JS é uma linguagem `multiparadigma`, ou seja, ele funciona com mais de um paradigma de programação, permitindo que o programa seja executado das mais diversas formas.

O que é o ES6 e o ES2015? É a versão do JavaScript que saiu em 2015, onde quando a linguagem começou a receber atualizações anuais.

O JavaScript é uma linguagem `interpretada` e não compilada. De forma simples, linguagens interpretadas são "convertidas em tempo real" para a linguagem de máquina, dessa forma ela perde em desempenho. Enquanto linguagens compiladas são convertidas para a linguagem de máquina antes de o programa ser executado.

O que é o NodeJS? O node é um ambiente que permite a execução do JavaScript sem precisar de um `interpretador` da linguagem (que no caso do JS costuma ser um navegador com suporte para linguagem).

## Erros e stacktrace

É necessário saber interpretar erros para poder solucionar eles.

Por exemplo, ao tentar executar o código `const numero` o sistema apresentará o erro de que a variável não foi inalizada ao ser declarada.

A mensagem de erro sai com o caminho do arquivo e a linha onde o erro foi identificado, além da descrição de erro, por exemplo, `SyntaxError: Missing initializer in const declaration`.

```javascript
/home/marlon/Documentos/GitHub/PROJETO_CALDEIRA/3_JAVASCRIPT_TIPOS_VARIAVEIS_E_FUNCOES/ERROS.js:1
const numero;
      ^^^^^^

SyntaxError: Missing initializer in const declaration
    at wrapSafe (internal/modules/cjs/loader.js:915:16)
    at Module._compile (internal/modules/cjs/loader.js:963:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```

Abaixo o código completo (comentado) com diversos erros de execução:

```javascript

// Códigos com erro

// Variáveis do tipo const não permitem criação sem definição de valor

// const numero;

// ----------------------

// Não podemos usar o comando console.log sem finalizar a fecha de parenteses 

// console.log(minhaVar;

// ----------------------

// Nâo podemos imprimir na tela variáveis que nem foram criadas
// console.log(minhaVariavel);
```

## Console.api

O comando `console.log` é apenas um dos diversos comandos que o `console` possui.

Por exemplo, ao executar o comando `console.error`o JS mostra uma mensagem de erro (dependendo do interpretador a mensagem pode sair diferente de um `console.log` comum).

Abaixo um código de exemplo:

```javascript
const minhaVar = true;

console.log(123);
console.log("eu sou um texto");
console.log(minhaVar);

// Tratamento de erros

console.error("deu erro!");

```

## Operadores de comparação

Uma característica bem específica do JS é que ele possui 2 operadores de comparação, sendo o `==` e o `===`.

O comando `==` realiza a conversão implícita de uma informação antes de realizar a comparação, enquanto o `===` sempre compara os valores sem a conversão.

Exemplo de código:

```javascript

// == comparação implícita

const numero = 5;
const texto = "5";

console.log(numero == texto); // retorna true


// === comparação exata / precisa


console.log(numero === texto); // retorna false

// typeof para ver o tipo de cada variável

console.log(typeof numero);
console.log(typeof texto);

```

## Para saber mais: Mais sobre operadores

O JS possui varios outros operadores padrão.

Abaixo alguns:

- `||`: Operador “ou”, retorna `true` caso uma condição seja válida;
- `&&`: Operador “e”, retorna `true` somente se todas as condições forem válidas;
- `!=` e `!==`: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que `==` e `===` retornam `true` ou `false`.

## Operador ternário

Como alternativa para o operador `if` podemos usar o operador `ternário`, que serve para poupar linhas de código.

Ele se chama assim pois são usados 3 operadores para ser executado.

Abaixo um código de exemplo:

```javascript
const idadeMinima = 18;
const idadeCliente = 19;

// Código com if
if(idadeCliente>=idadeMinima){ 
    console.log("Cerveja");
}else{ 
    console.log("Suco");
}

// Alternativa com operador ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");

```

## Template literal

Template string serve para poupar e deixar o código mais legível na hora de trabalhar com strings.

Para isso, precisamos usar um acento de crase para identificar a string ao invés de `aspas normal` ou `aspas simples`.

Fazendo isso, podemos usar o operador `${}` para incluir uma variável ou função dentro desse trecho.A

Abaixo um código de exemplo:

```javascript


const nome = "Ju";
const idade = 2021- 1981;
const cidadeDeNascimento = "São Paulo";

// Print com concatenação padrão
const apresentacao1 = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento + ".";

console.log(apresentacao1);

// Template String

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}.`;

console.log(apresentacao2);
```

## Faça como eu fiz: Utilizando ternários e templates

Podemos juntar conceitos aprendidos utilizando o `operador ternário` e os `template strings`.

Pegando o exemplo de código que valida a idade para definir qual bebida tomar:

```javascript
// Declarando variável
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// Usando template string e operador ternário juntos 
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
```

## Funções

Funções servem para organizar e poupar código. Elas executam operações de forma dinâmica.

Exemplo de código:

```javascript
// Executando código da forma aprendida até agora
let x = "";
console.log(x);
x = "oi";

// Declarando função
function imprimeTexto(texto){
    console.log(texto);
}

// Executando função
imprimeTexto("Oi");

// Existem 3 formas de escrever funções

function soma(){ 
    return 2 + 2;
}

// Usando função dentro de função
imprimeTexto(soma());
```

## Parâmetros e argumentos

Para deixar o código reaproveitavel podemos criar funções com parâmetro. Dessa forma, sempre que a função for executada ela precisa de um argumento passado.

> A não ser que seja passado um parâmetro padrão na função para evitar erros de código durante a execução.

Exemplo:

```javascript
// Parâmetros de função

// Criando função com 2 parâmetros de entrada
function soma(n1, n2){
    return n1+n2;
}

// Chamando a função e somando alguns numeros
console.log(soma(2,2));
console.log(soma(354, 131));
console.log(soma(1313,1331));

// ---------------------------------------------

// Ordem dos parâmetros

// Criando função para concatenar texto
function nomeIdade(nome, idade){
    return `Seu nome é ${nome} e sua idade é ${idade}`;
}

// Passando informações na ordem correta 
console.log(nomeIdade("Marlon", 23));

// Passando informações na ordem errada
console.log(nomeIdade(23, "Marlon"));

// -----------------------------------

// Criando função que multiplica 2 numeros para exemplo
function multiplica(n1, n2){
    return n1 * n2;
}

// Passando para função multiplica o resultado da função soma chamada 2 vezes
console.log(multiplica(soma(4, 3), soma(3, 3))); // Retorna 42

// Executando o mesmo código acima, porém passando apenas 1 argumento para a função que exige 2
console.log(multiplica(soma(4, 3))); // retorna NaN

// ---------------------------------------------

// Criando função que divide 2 numeros para exemplo e atribuindo um valor padrão (para evitar erro de NaN quando passar só 1 parâmetro)
function divide(n1 = 1, n2 = 1){
    return n1 * n2;
}

// Executando função divide e passando 1 só parâmetro
console.log(divide(soma(4, 3))); // retorna 7

```

## Expressão de função

É possível declarar uma expressão de função, que consiste em atribuir uma função à uma variável.

Boas práticas sugerem que usemos variáveis do tipo `const` para evitar que as informações nela sejam substituidas.

A principal diferença de uma função declarada e expressão de função é que as expressões de função não podem ser usadas antes de declaradas.

Exemplo:

```javascript
// Forma declarativa e forma de expressão de função

// Declarando uma função da forma convencional
function exemplo(n1, n2){
    return n1 + n2;
}

// Declarando uma EXPRESSÃO de função
// Criando ela como CONST para não correr risco de apagar as informações durente o código
// Como pe uma expressão de função, não é necessário atribuir nome à função (ex: function SOMA(){})
const soma = function(n1, n2) { return n1 + n2};
console.log(soma(1,1));

// -----------------------------------

// Diferenças entre função declarada e expressão de função

// Diferença principal: HOISTING (içar)
// Funções e var são "listadas" no topo, mas funções const e let não.

// Função declarada
console.log(apresentar()); // retorna "olá"
function apresentar(){
    return "Olá";
}

// Expressão de função
console.log(somar(1,2)); // Retorna erro de "não possível acessar antes da inicialização"
const somar = function (n1, n2){ return n1 + n2}; 

```

## Arrow Function

Uma 3ª forma de criar functions no JS é a `arrow function`, que é parecida com a expressão de função.

Para criar uma Arrow Function usamos a estrutura `const exemplo = nome => return "Olá " + nome;`

Abaixo o código com mais exemplos:

```javascript
// Jeito tradicional de declarar função
function apresentar(nome){
    return `Meu nome é ${nome}`;
}

console.log(apresentar("Marlon"));

// ---------------------

// Declarando uma Arrow Function que recebe apenas 1 atributo
const apresentarArrow = nome => `Meu nome é aaa ${nome}`;

// Declarando uma Arrow Function que recebe 2 atributos
const soma = (n1, n2) => n1 + n2;

// Declarando uma Arrow Function com + de 1 linha de instrução
const somaNumerosPequenos = (n1, n2) => {
    if(n1 >= 10 || n2 >= 10){
        return "Somente números de 1 a 9."
    }else{
        return n1 + n2;
    } 
}

// Printando retornos
console.log(apresentarArrow("Marlon"));
console.log(soma(1, 2));
console.log(somaNumerosPequenos(3,9));

```
