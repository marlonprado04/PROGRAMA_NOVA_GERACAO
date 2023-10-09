# Exercícios do caldeira

## Número 17

Dada uma lista de números inteiros arr, conte quantas vezes o menor elemento aparece na lista.

Entrada

Uma lista de números inteiros.

Saída

Um único número inteiro indicando quantas vezes o menor elemento de arr aparece na lista.

Exemplos

Exemplo 1

Entrada:

Primeiro parâmetro: [5, 4, 9, 4]

Saída:

2

Explicação:

O menor elemento da lista é o número 4, que ocorre duas vezes na lista.

Exemplo 2

Entrada:

[8]

Saída:

1

Explicação:

O menor elemento da lista é o número 8, que ocorre apenas uma vez na lista.

Resposta:

```javascript
// Declarando função para contar número de ocorrencias
function contadorDeOcorrencias(arr) {
    // Verificando se a entrada é um array válido e se possui pelo menos um elemento
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Por favor, forneça uma lista de números inteiros válida.");
        return;
    }

    // Encontrando o menor elemento no array
    const menorNumero = Math.min(...arr);

    // Contando o número de ocorrências do menor elemento no array
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === menorNumero) {
            contador++;
        }
    }

    // Imprimindo o resultado
    console.log(contador);
}

// Realizando teste com o número 1 aparecendo 4 vezes
const listaNumeros = [5, 3, 2, 2, 1, 1, 1, 1, 2, 8, 2, 4, 2];
contadorDeOcorrencias(listaNumeros);
```

## Número 18

Dada uma lista de números inteiros arr de tamanho n, informe o valor da maior e menor soma utilizando todos os elementos da lista exceto um, ou seja, de n - 1 elementos de arr.

Entrada

Uma lista de números inteiros.

Saída

Uma lista contendo apenas dois elementos. O primeiro elemento indicando a maior soma possível de n - 1 elementos de arr, e o segundo elemento indicando a menor soma.

Exemplos

Exemplo 1

Entrada:

Primeiro parâmetro: [1, 2, 3, 4, -5]

Saída:

[10, 1]

Explicação:

As possíveis somas de 4 elementos são:

2 + 3 + 4 + (-5) = 4

1 + 3 + 4 + (-5) = 3

1 + 2 + 4 + (-5) = 2

1 + 2 + 3 + (-5) = 1

1 + 2 + 3 + 4 = 10

A maior dessas somas é 10, e a menor é 1.

Exemplo 2

Entrada:

Primeiro parâmetro: [10, 10, 20, 20, 30, 30]

Saída:

[110, 90]

Explicação:

As possíveis somas de 5 elementos são:

10 + 20 + 20 + 30 + 30 = 110

10 + 20 + 20 + 30 + 30 = 110

10 + 10 + 20 + 30 + 30 = 100

10 + 10 + 20 + 30 + 30 = 100

10 + 10 + 20 + 20 + 30 = 90

10 + 10 + 20 + 20 + 30 = 90

A maior dessas somas é 110, e a menor é 90.

Resposta:

```javascript
// Declarando função para encontrar maior e menor soma
function calcularSomas(arr) {
    // Declarando variável com soma de todo array
    const somaTotal = arr.reduce((acc, curr) => acc + curr, 0);

    // Declarando variáveis com maior e menor elemento do array
    const menorElemento = Math.min(...arr);
    const maiorElemento = Math.max(...arr);

    // Calculando a menor soma possível
    const menorSoma = somaTotal - maiorElemento;

    // Calculando a maior soma possivel
    const maiorSoma = somaTotal - menorElemento;

    // Retornando a lista com as duas somas
    return [maiorSoma, menorSoma];
}

// Realizando o teste seguindo o exemplo do exercício
const exemplo = [1, 2, 3, 4, -5]
console.log(calcularSomas(exemplo));
```

## Número 19

João participou de uma prova de sua escola e recebeu a sua nota atrasada esta semana.

Em sua escola, foi disponibilizado um mural com a nota de todos os alunos que realizaram a prova e João precisa consultar este mural para, com sua nota, saber qual foi a sua posição final no ranking deste exame, pois ela foi disponibilizada somente após a publicação do mural.

Este mural está em ordem decrescente, de forma que a primeira pessoa está no 1º lugar do ranking. Participantes que obtiveram a mesma nota ocupam o mesmo lugar no ranking.

Por exemplo, considerando o mural ranking = [50, 45, 45, 42, 40, 30] e a nota de João j = 41, as posições de quem está no ranking (sem considerar a nota de João) são 1º, 2º, 2º, 3º, 4º e 5º, respectivamente. Se compararmos a nota de João com o mural, sua posição final seria 4º lugar.

Seu objetivo é, dado o mural e a nota de João, informar a posição final de João no ranking.

Entrada

Primeiro parâmetro: uma lista de números inteiros (que são os elementos do ranking)

Segundo parâmetro: um número inteiro que representa a nota de João.

Saída

Um único número inteiro indicando a posição final de João no ranking.

Exemplos

Exemplo 1

Entrada:

Primeiro parâmetro: [100, 90, 80, 90]

Segundo parâmetro: 80

Saída:

3

Explicação:

A nota 100 está na 1ª colocação, a nota 90 está na 2ª colocação e as notas 80 estão na 3ª colocação. Como João obteve 80 de nota, também está em 3º lugar.

Exemplo 2

Entrada:

Primeiro parâmetro: [30, 30, 20, 20, 10, 10]

Segundo parâmetro: 35

Saída:

1

Explicação:

Como a nota de João é 35, ela se sobrepõe à maior nota do ranking (30). Logo, João está em 1º lugar.

Resposta:

```javascript
// Declarando função para localizar posição da nota do João no ranking
function posicaoNoRanking(ranking, notaJoao) {
    // Declarando variável para 1ª posição no ranking
    let posicao = 1;

    // Criando laço de repetição para varrer o ranking e encontrar a posição do João de acordo com sua nota
    for (let i = 0; i < ranking.length; i++) {
        
        // Declarando variável para armazenar a nota atualmente sendo percorrida no laço
        const notaAtual = ranking[i];

        // Comparando nota do João com a nota atual no laço. 
        // Se a do João for maior, ele recebe a posição atual
        if (notaJoao > notaAtual) {
            return posicao;
        }

        // Comparando nota do João com a nota atual no laço.
        // Se forem iguais, ele também recebe a posição atual da lista
        if (notaJoao === notaAtual) {
            return posicao;
        }

        // Incrementando posição para o caso da nota do João ser menor que a nota atual
        posicao++;
    }

    // Retornando a última posição para o caso do João ter a última nota da lista
    return posicao;
}

// Realizando o teste seguindo o exemplo do exercício
const ranking = [100, 90, 80, 90];
const notaJoao = 80;
console.log(posicaoNoRanking(ranking, notaJoao));
```

## Número 20

20 - aria está brincando de pular ladrilhos. Existem dois tipos de ladrilhos: azuis e vermelhos. Nesta brincadeira, há um número n de ladrilhos sequenciais ladrilhos. O objetivo de Maria é pular de ladrilho em ladrilho até chegar novamente no ladrilho inicial.

Maria começa com uma quantidade de energia e = 100 e gasta uma unidade de energia a cada pulo; quando ela pula para um ladrilho vermelho, isto é, ladrilhos[i] = 1, ela gasta duas unidades de energia adicionais. Maria começa do ladrilho de índice 0 e usa 1 unidade de energia para fazer um pulo de tamanho k para o ladrilho de índice (i + k) % n. A brincadeira acaba quando Maria retorna ao ladrilho de índice 0.

Seu objetivo é criar um programa que retorne a quantidade de energia restante de Maria após finalizar a brincadeira.

Entrada

Primeiro parâmetro: uma lista de números inteiros, que são os elementos de ladrilhos, sendo ladrilhos[i] o tipo do i-ésimo ladrilho, onde:

ladrilhos[i] = 0 indica que o i-ésimo ladrilho é azul;

ladrilhos[i] = 1 indica que o i-ésimo ladrilho é vermelho.

Segundo parâmetro: um número inteiro k representando o tamanho do pulo que Maria deve dar.

Saída

Um único número inteiro indicando a energia restante de Maria após o término da brincadeira, isto é, após retornar ao ladrilho inicial.

Exemplos

Exemplo 1

Entrada:

Primeiro parâmetro: [0, 1, 1, 0]

Segundo parâmetro: 2

Saída:

96

Explicação:

Maria inicia a brincadeira no ladrilho de índice 0 com energia e = 100:

ela pula para o ladrilho de índice 0 + 2 = 2 e gasta 3 unidades de energia (1 unidade com o pulo e 2 unidades porque o ladrilho no índice 2 é vermelho, ou seja, ladrilhos[2] = 1); a energia total de Maria após o pulo é e = 100 - 3 = 97;

ela pula para o ladrilho de índice (2 + 2) % 4 = 0 e gasta 1 unidade de energia; a energia total após o pulo é e = 97 - 1 = 96; como Maria retornou ao ladrilho de índice 0, a brincadeira é encerrada.

A energia final de Maria, após todos os pulos, é e = 96.

Exemplo 2

Entrada:

Primeiro parâmetro: [1, 1, 1, 1, 1, 1]

Segundo parâmetro: 1

Saída:

82

Explicação:

Como k = 1, Maria deve pular em todos os ladrilhos até retornar ao início; como todos os ladrilhos são vermelhos, ela sempre gasta 3 unidades de energia em seus pulos. Logo, a energia final de Maria é e = 100 - 3 - 3 - 3 - 3 - 3 - 3 = 82.

Resposta:

```javascript

// Declarando função para calcular a energia restante
function calcularEnergiaRestante(ladrilhos, k) {

    // Declarando variável com tamanho da lista de ladrilhos
    const n = ladrilhos.length;
    // Declarando variável com energia inicial de maria
    let energia = 100;
    // Declarando variável com índice da posição inicial de Maria
    let i = 0;

    // Criando laço de repetição para calcular energia restante enquanto brincadeira continuar
    while (true) {
        
        // Criando if para decrementar quantidade de energia de acordo com próximo ladrilho a ser pulado
        if (ladrilhos[(i + k) % n] === 1) {
            // Decrementando 3 unidades de energia se o próximo ladrilho for vermelho (1)
            energia -= 3;
        } else {
            // Decrementando 1 unidade de energia se o próximo ladrilho for azul (0)
            energia -= 1;
        }

        // Atualizando o índice para o próximo salto
        i = (i + k) % n;

        // Criando if para verificar se Maaria voltou para o início (índice 0) para encerrar a brincadeira
        if (i === 0) {
            break;
        }
    }

    // Retornando energia final
    return energia;
}

// Realizando o teste seguindo o exemplo do exercício
const ladrilhos = [0, 1, 1, 0];
const k = 2;
console.log(calcularEnergiaRestante(ladrilhos, k));
```
