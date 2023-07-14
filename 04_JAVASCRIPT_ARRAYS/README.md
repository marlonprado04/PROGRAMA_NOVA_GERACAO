# Javascript: Arrays

## Índice

- [Javascript: Arrays](#javascript-arrays)
  - [Índice](#índice)
  - [Introdução a Arrays](#introdução-a-arrays)
  - [Adicionando elementos](#adicionando-elementos)
  - [Deletando elementos](#deletando-elementos)
  - [Dividindo com slice()](#dividindo-com-slice)
  - [Alterando com splice()](#alterando-com-splice)
  - [Concatenando arrays](#concatenando-arrays)
  - [Lista com 2 dimensões](#lista-com-2-dimensões)
  - [Procurando na lista](#procurando-na-lista)
  - [Desestruturando uma lista](#desestruturando-uma-lista)
  - [Para saber mais: desestruturação](#para-saber-mais-desestruturação)
  - [For clássico](#for-clássico)
  - [Média com for](#média-com-for)
  - [Média com for of](#média-com-for-of)
  - [Média com forEach](#média-com-foreach)
  - [Revisando callbacks](#revisando-callbacks)
  - [Método map()](#método-map)
  - [Alterando strings com map()](#alterando-strings-com-map)
  - [Para saber mais: strings são arrays?](#para-saber-mais-strings-são-arrays)
  - [Filtrando elementos](#filtrando-elementos)
  - [Somando com reduce](#somando-com-reduce)
  - [Clonando com spread operator](#clonando-com-spread-operator)
  - [Removendo elementos repetidos](#removendo-elementos-repetidos)

## Introdução a Arrays

Arrays servem para armazenar várias informações junto.

Abaixo um código de exemplo:

```javascript
// Exemplo de calculo de média com multiplas variáveis

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(media);

// Exemplo com uso de arrays

const notas = [10, 6.5, 8, 7.5];

const mediaNotas = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length);

console.log(mediaNotas);


```

## Adicionando elementos

Para adicionar valores a arrays criados usamos o comando `push`.

Uma particularidade do javascript é permitir inclusão de valores em arrays, mesmo que eles tenham sido criados dentro de uma `const`.

Abaixo um código de exemplo:

```javascript

// Criando array com alguns valores
const notas = [10, 6, 8];

// Adicionando um valor ao array
// Uma particularidade do JS é permitir que seja adicionada informação no array mesmo que seja uma constante
notas.push(7);

// Criando variável para calcular a média
const media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length);

console.log(media);

```

## Deletando elementos

Para deletar elementos usamos o comando `pop()`.

Abaixo um exemplo de código:

```javascript
// Criando array
const notas = [10, 6, 8, 5.4, 12];

// Removendo último elemento do array
notas.pop();

// Printando array
console.log(notas);

// Criando variável para calcular a média
const media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length);

// Printando média dos valores que sobraram no array
console.log(media);
```

## Dividindo com slice()

O método `slice` serve para cortar o array em javascrpt.

Importante se atentar que diferente do metodo `pop` e `push`, o método slice não afeta o array original, sendo necessário atribuir o valor à uma nova variável.

Abaixo o código de exemplo:

```javascript
const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

// Dividindo o array o índice 0 até 9, pois javascript não considera o último valor
alunos.slice(0, 10);

// Printando a lista completa, já que o método slice não altera o array original
console.log(alunos);

// Atribuindo novo array à uma variável
const sala1 = alunos.slice(0,10);

// Printando lista do novo array
console.log(sala1);

// Criando outro array pra sala 2
// Nâo é necessário informar o 2 parâmetro, pois javascrip entende que queremos cortar do parâmetro informado até o final
const sala2 = alunos.slice(10);

// Printando sala 2
console.log(sala2);

```

## Alterando com splice()

O método `splice()` permite `remover` e `substituir` itens do array e substituí-los por outro na mesma posição.

Ele suporta 3 parâmetros, onde o 1º indica o índice do elemento a ser excluído, o 2º indica o número de elementos para excluir e o 3º permite colocar alguma coisa no lugar.

Abaixo um exemplo:

```javascript

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Removendo Ana e Caio do array
// 1º parâmetro -> índice do elemento a ser excluído
// 2º parâmetro -> número de elementos (a partir do 1º) a ser excluídos
// 3º parâmetro -> substitui os itens excluídos pelo informado
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);// retorna [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

```

## Concatenando arrays

O método `concat()` permite concatenar arrays, porém ele não modifica o array de origem, ou seja, `é necessário atribuir o resultado à um novo array`.

Abaixo um código de exemplo:

```javascript
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

// Concatenando arrays
const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas);

```

## Lista com 2 dimensões

O JS permite criar arrays com 2 dimensões, basta criar um novo array contendo os 2 (ou mais) arrays desejados.

Para acessar um item específico dentro de um array específico, passamos primeiro a posição do array e depois a posição do item dentro do array.

Abaixo um código de exemplo:

```javascript
// Criando listas
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Criando lista unificada 
const listaDeAlunosEMedias = [alunos, medias];

//Printando lista completa
console.log(listaDeAlunosEMedias);

// Printando itens da 1ª posição em ambas listas
console.log(`A aluna da 1ª posição é ${listaDeAlunosEMedias[0][1]} e a nota na 1ª posição é ${listaDeAlunosEMedias[1][1]}`);

```

## Procurando na lista

Para encontrar determinado valor no array é usado o método `includes(item)`, onde passamos como parâmetro o `item` que desejamos buscar.

No código abaixo foi usado também o método `indexof[item]` que retorna o índice do `item` buscado dentro do array.

> OBS: Conforme [documentação oficial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), o JS retorna o índice do primeiro item encontrado. Ou seja, se houver 2 itens iguais no array, o resultado da consulta será o 1º valor localizado, a não ser que seja passado qual o índice desejamos buscar.

Abaixo o código:

```javascript
// Criando listas de alunos e notas
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Criando lista com 2 dimensões de alunos e notas
const listaDeAlunosEMedias = [alunos, medias];

// Criando função para consultar aluno cadastrado
function consultaAlunoENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // Criando variável com índice descoberto
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        // Criando variável com média do aluno de acordo com o índice descoberto
        const media = listaDeAlunosEMedias[1][indice];

        // Retornando nome e média do aluno
        return `${aluno} está cadastrado e sua média é ${media}`;
    }else{
         return `${aluno} não encontrado!`;
    }
}

// Chamando a função para ver se funciona
console.log(consultaAlunoENota("João"));
```

## Desestruturando uma lista

Para deixar o código anterior mais legível podemos separar os arrays em 2 listas com o código `const alunos = listaDeAlunosEMedias[0]` para os `alunos` e `const medias = listaDeAlunosEMedias[1]` para as `médias`.

Uma alternativa do JS para poupar linha de código é a desestruturação de listas. Usando isso, o código seria `const [alunos, medias] = listaDeAlunosEMedias`, pois assim estamos atribuindo à posição `0` e `1` do array os nomes de `alunos` e `média`, respectivamente.

Abaixo o código:

```javascript

// Criando listas de alunos e notas
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Criando lista com 2 dimensões de alunos e notas
const listaDeAlunosEMedias = [alunos, medias];

// Criando função para consultar aluno cadastrado
function consultaAlunoENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // Criando variaveis para separar os arrays da forma tradicional
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        // Atribuindo aos arrays nomes específicos com a nova sintaxe suportada
        const [alunos, medias] = listaDeAlunosEMedias;

        // Criando variável com índice descoberto
        const indice = alunos.indexOf(aluno);

        // Criando variável com média do aluno de acordo com o índice descoberto
        const media = medias[indice];

        // Retornando nome e média do aluno
        return `${aluno} está cadastrado e sua média é ${media}`;
    }else{
         return `${aluno} não encontrado!`;
    }
}

// Chamando a função para ver se funciona
console.log(consultaAlunoENota("João"));

```

## Para saber mais: desestruturação

O `destructuring` do JS permite deixar o código muito mais semântico, legível e funcional, poupando muitas linhas de código.

Abaixo alguns exemplos de uso para trabalhar com `arrays`e `funções`:

```javascript
// Testes com destructuring do array

// Criando arrays
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// Essa linha faz com que o array seja "aberto" e os dados sejam passados para o novo array de forma unificada, sem criar um array de arrays
const numeros = [...numerosPares, ...numerosImpares];

// Printando
console.log(numeros);

// ------------------------------------

// Criando código onde defino um nome dos 2 primeiros números e a partir do 3 coloco tudo junto em um array separado
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

// Printando 
console.log(num1, num2, outrosNumeros);


// -------------------------------------

// Criando um array com valor padrão para quando o valor do item não for atribuído
// Útil para quando não temos certeza do conteúdo que vamos receber no array
const [nome1 = "Juliana"] = [];

// Printando

console.log(nome1);

// ----------------------------

// Destructuring serve para objetos também, por exemplo, se precisarmos adicionar alguma informação não contida antes

// Criando pessoa sem telefone
const pessoa = {
    nome: "Ju",
    idade: 25
}

//Todo o objeto pessoa sem telefone para uma nova variável, porém adicionando o telefone
const pessoaComTelefone = {
    ...pessoa,
    telefone: 1234131414
}

// Printando:
console.log(pessoa);
console.log(pessoaComTelefone);

// -----------------------------------------------------

// Criando uma variável com o nome do atributo dentro do objeto e passando o mesmo valor do atributo para ela
const { idade } = pessoa;

// Printando 
console.log(idade);

// ----------------------------------------


// Também podemos usar o conceito anterior como parãmetro de função
// Assim podemos passar o objeto que a função fará o mesmo procedimento
function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa);

```

## For clássico

For é o laço de repetição tradicional que existe em praticamente todas as linguagens de programação.

Abaixo um exemplo em JS:

```javascript
// Criando array
const numeros = [100, 200, 300, 400, 500, 600];

// Criando for
for (let indice = 0; indice < numeros.length; indice++){
    // Printando todos valores do array
    console.log(numeros[indice]);
}
```

## Média com for

Podemos usar o FOR como alternativa para varrer a lista de notas criadas anteriormente e calcular a média.

Abaixo o código de exemplo:

```javascript
// Criando array com notas
const notas = [10, 6.5, 8, 7.5];

// Criando variável que vai conter a soma das notas
let somaDasNotas = 0;

// Criando for para varrer e somar o array de notas
for (let i = 0; i < notas.length; i++){
    // Adicionando à variável o valor da nota na posição atual
    somaDasNotas += notas[i];   
}

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)

```

## Média com for of

O `FOR OF` serve para substituir o FOR quando é necessário percorrer toda a lista de elementos, item  a item.

Ele é menos flexível que o for tradicional, já que obriga percorrer o array inteiro, então acaba sendo usado só para situações específicas. Porém, ele deixa o código bem mais enxuto.

Abaixo o código de exemplo:

```javascript

// Criando array
const notas = [10, 6.5, 8, 7.5];


// Criando variável para soma das notas
let somaDasNotas = 0;

// Criando FOR OF, que serve para percorrer o array de início ao fim
for (let nota of notas) {
    somaDasNotas += nota;
}

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)

```

## Média com forEach

O `forEach` é um método do array que funciona de forma parecida com o `for of`, a diferença é que ao varrer todo o array ele permite trabalhar com o índice do array além do item na posição.

> OBS: O `forEach` depende de uma função anônima para seu uso

Exemplo de código:

```javascript

const notas = [10, 6.5, 8, 7.5];

// Criando arquivo com a soma das notas
let somaDasNotas = 0;

// Usando o método forEach do array
// e passando uma função anônima como callback para o método
notas.forEach(
    
    // função anônima
    // recebe a nota e imprime a nota a na posição a cada execução (varrendo todo array)
    function(nota, indice){

        // imprimindo a nota
        console.log(`A nota ${nota} está na posição ${indice} do array.`);
        somaDasNotas +=nota;
});

// Criando variável com a média das notas
const media = somaDasNotas / notas.length;

// Printando
console.log(`A média das notas é ${media}.`)

```

## Revisando callbacks

Funções callback podem ser usadas das 3 formas já apresentadas até o momento.

Exemplo de código:

```javascript

// Declarando array
const nomes = ["Evaldo", "Mari", "Camis"];

// Usando função declarada como callback
nomes.forEach(function (nome) {
  console.log(nome);
});

// Usando arrow function como callback
nomes.forEach((nome) => {
  console.log(nome);
});

// Usando função externa como callback
function imprimeNome(nome){
    console.log(nome);
}

// Passando apenas a referência da função, sem os (). 
// dessa forma estamos passando a função completa sem executar
nomes.forEach(imprimeNome);

```

## Método map()

A função `map()` serve como um laço de repetição que mapeia todos os dados de um array e permite atribuir novos valores a ele.

Esse método recebe uma função callback como parâmetro.

Abaixo o código de exemplo:

```javascript

const notas = [10, 9.5, 8, 7, 6];

// Usando método map para percorrer o array e atribuir novo valor em cada item do array
const notasAtualizadas = notas.map((nota)=>{
    return nota + 1 >= 10 ? 10: nota + 1;
})

// Printando valor novo

console.log(notasAtualizadas);


```

## Alterando strings com map()

O método `map` permite trabalhar com strings também.

Um exemplo de uso é o tratamento de letras maiúsculas em strings.

Abaixo um código:

```javascript
// Criando array com várias strings
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Criando novo array com função map que coloca todos nomes em uppercase
const nomesPadrozinados = nomes.map((nome) => {
    return nome.toUpperCase();
})

// Outra forma de escrever com arrowfunction (mais sucinta)
const nomesPadrozinados2 = nomes.map((nome) => nome.toUpperCase());

// Printando ambas variáveis
console.log(nomes);
console.log(nomesPadrozinados);
console.log(nomesPadrozinados2);

```

## Para saber mais: strings são arrays?

Strings podem ser tratadas como arrays se necessário.

Podemos percorrer todos os caracteres de uma string para deixá-la em letra maiúscula, por exemplo.

Código:

```javascript
// Criando variável
const nome = "Alura"; // ["A", "l", "u", "r", "a"]
let nomeMaiusculas = "";

// Criando for para percorrer a string e colocar todas as letras em maiúsculo
for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase()
}
// Printando novo nome
console.log(nome);//Alura
console.log(nomeMaiusculas); //ALURA

```

## Filtrando elementos

O método `filter` serve para filtrar elementos de um array.

Ele também recebe uma função callback como parâmetro, porém a função precisa retornar um `boleano` para que o filtro funcione.

> Como convenção sempre devemos declarar o 1º atributo da função, no JS é permitido usaro _ como primeiro parâmetro quando ele não estiver sendo usado.

Código de exemplo:

```javascript
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Criando variável com o filtro de reprovados
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

// Printando lista de reprovados
console.log(reprovados);

```

## Somando com reduce

A função `reduce` tem um propósito bem definido que é incrementar valores de um array. Ela substitui linhas de código para somar todos os valores.

Essa função também exige uma função callback e não retorna nada, porém a função callback é bem específica, exigindo um parâmetro adicional após a declaração onde é atribuido o valor inicial do incrementador (geralmente 0).

Ou seja, definimos reduce com um `acumulador`, `valor` e o `valor inicial do acumulador`. Dentro da função retornamos a soma do acumulador e do valor.

Um exemplo de uso:

```javascript

// Criando variáveis das notas
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Criando função para calcular a média com o método reduce
function calculaMedia(notasDaSala) {

    // Criando variável para conter as notas, já que o método reduce não retorna um novo array
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {

        return acumulador + nota; // Incrementando a nota ao acumulador 

    }, 0); // -> Atribuindo 0 ao valor inicial do acumulador

    // Criando variável para média
    const media = somaDasNotas / notasDaSala.length;

    // Retornando média
    return media;
}


// Uma alternativa na criação do método reduce para reduzir linhas
function calculaMedia2(notasDaSala) {

    // Criando variável e função callback resumida
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    // Criando variável para média
    const media = somaDasNotas / notasDaSala.length;

    // Retornando média
    return media;
}


// Printando a mensagem com cada sala
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

```

## Clonando com spread operator

Para criar um novo array a partir de outro sem que eles se interfiram, é necessário usar o `spread operator` que serve para "destrinchar" o array antigo e passar para o novo.

Isso é necessário porque o javascript trata arrays criados a partir de outros como o mesmo objeto, apontando sempre pro mesmo endereço da memória.

O `spread operator` está disponível desde a versão mais recente do Ecmascript 6.

> A partir do código `const novasNotas = notas`, o JavaScript entende que `novasNotas` e `notas` passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória.
>
> Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.
>
> Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

Abaixo um exemplo de código:

```javascript
// Criando variável com notas
const notas = [7, 7, 8, 9];

// Criando nova variável de notas para modificar os valors
const novasNotas = notas;

// Adicionando numero 10 no array novo (de forma errada)
novasNotas.push(10);

// Printando listas
console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas antigas são ${notas}`);

// Adicionando numero 9 no array novo (da forma certa)
const novasNotas2 = [...notas, 9];

// Printando listas
console.log(`As novas notas são ${novasNotas2}`);
console.log(`As notas antigas são ${notas}`);

```

## Removendo elementos repetidos

Para facilitar o trabalho de remover valores duplicados de arrays podemos usar a classe `Set` que é padrão do javascript.

Essa classe não permite que os valores internos se repitam, dessa forma basta passar o array com valores repetidos como parâmetro para a classe.

Abaixo o código de exemplo:

```javascript
// Criando array com nomes duplicados
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Criando nova variável com o array a partir do método padrão do JS chamado Set (ele não permite valores duplicados internamente)
const meuSet = new Set(nomes);

// passando valor do set para um novo array
const nomesAtualizados = [...meuSet];

// Printando valores do novo array
console.log(nomesAtualizados);
```
