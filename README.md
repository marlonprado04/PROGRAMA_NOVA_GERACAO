# PROJETO_CALDEIRA

Repositório com aulas, exercícios e conteúdos do Projeto Caldeira

## Índice

- [PROJETO\_CALDEIRA](#projeto_caldeira)
  - [Índice](#índice)
  - [HTML e CSS](#html-e-css)
    - [Unidade de Medida REM](#unidade-de-medida-rem)
    - [Aplicando o REM](#aplicando-o-rem)
    - [Descubra a super unidade de medida](#descubra-a-super-unidade-de-medida)
    - [Media Queries](#media-queries)
    - [Cabeçalho responsivo](#cabeçalho-responsivo)
    - [Conteúdo responsivo](#conteúdo-responsivo)
    - [Git e GitHub](#git-e-github)
    - [Colocando o projeto no ar](#colocando-o-projeto-no-ar)
  - [Lógica de programação](#lógica-de-programação)
    - [Concatenação](#concatenação)
    - [Tornando o programa dinâmico com variáveis](#tornando-o-programa-dinâmico-com-variáveis)
    - [Melhorando a manutenção do código](#melhorando-a-manutenção-do-código)
    - [Funções](#funções)
    - [Funções com parâmetros](#funções-com-parâmetros)
    - [Calculando o IMC](#calculando-o-imc)
    - [Retorno de funções](#retorno-de-funções)
    - [Entendendo a fundo o retorno de funções](#entendendo-a-fundo-o-retorno-de-funções)
    - [Interagindo com o usuário](#interagindo-com-o-usuário)
    - [Convertendo texto em números](#convertendo-texto-em-números)
    - [Trabalhando com condições](#trabalhando-com-condições)
    - [Melhorando programa de IMC](#melhorando-programa-de-imc)
    - [Jogo de advinhação](#jogo-de-advinhação)
    - [Repetir enquanto](#repetir-enquanto)
    - [Outra forma de repetir](#outra-forma-de-repetir)
    - [Acumulando valores](#acumulando-valores)
    - [Interrompendo uma repetição](#interrompendo-uma-repetição)
    - [Repetições aninhadas](#repetições-aninhadas)
    - [Campo de texto e botão](#campo-de-texto-e-botão)
    - [Melhorando a usabilidade](#melhorando-a-usabilidade)
    - [Armazenando muitos dados](#armazenando-muitos-dados)
    - [Manipulando Array](#manipulando-array)
    - [Links e artigos](#links-e-artigos)
  - [JavaScript: tipos, variáveis e funções](#javascript-tipos-variáveis-e-funções)
    - [Links e artigos](#links-e-artigos-1)
    - [Tipo number](#tipo-number)
    - [Tipo string](#tipo-string)
    - [Para saber mais: Codificação de strings](#para-saber-mais-codificação-de-strings)
    - [Tipo boolean](#tipo-boolean)
    - [Para saber mais: Tipos null e undefined](#para-saber-mais-tipos-null-e-undefined)
    - [Var, let e const](#var-let-e-const)
    - [Truthy e falsy](#truthy-e-falsy)
    - [Conversão de tipos](#conversão-de-tipos)

## HTML e CSS

### Unidade de Medida REM

O CSS permite vários tipos de medidas que são divididas em 2 grupos: medidas relativas e medidas absolutas.

As medidas interessantes de se usar são medidas relativas, pois se adaptam de acorco com as configurações do usuário.

Nesse caso vamos usar a escala de REM, que equivale a 16 pixels. Ou seja, 1 rem = 16 pixel.

### Aplicando o REM

Nessa aula vamos alterar todas as medidas de fonte que usamos pixels para rem.

### Descubra a super unidade de medida

Podemos usar a unidade de medida de %, porém como diz no W3SCHOOL, a % é uma unidade relativa que respeita o tamanho do "pai".

<https://www.w3schools.com/cssref/css_units.php>

### Media Queries

Media queries serve para tornar o site mais responsivo e dinâmico, por exemplo, quando a imagem ocupa metade da tela sozinha em telas menores do que x pixels.

O media querie permite manipular os elementos de acordo com certas informações.

<https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries>

Exemplo: Dentro do CSS atribuindo certos valores se a tela tiver um max-width de 1200px.

```css
@media (max-width: 1200px){
    .apresentacao{
        flex-direction: column-reverse;
    }

}
```

### Cabeçalho responsivo

Para deixar o cabeçalho responsivo, podemos adicionar um padding entre os elementos e depois centralizando o menu.

```css
... Resto do código...

    .cabecalho{
        padding: 10%; /*Atribuindo padding para separar os botões de navegação*/

    }

    .cabecalho__menu{
        justify-content: center; /*Centralizando menu de navegação*/

    }

... Resto do código...
```

### Conteúdo responsivo

Para deixar o conteúdo responsivo é necessário diminuir o **espaçamento lateral entre o conteúdo e a borda da seção completa** e depois atribuir alguma propriedade que faça a seção de conteúdo (dentro da seção completa) **consumir 100% do valor restante que não estiver sendo usado**.

Ou seja, atribuir um padding menor para o conteúdo pai e fazer o conteúdo filho consumir esse padding que foi diminuído e ficou sem uso.

Dessa forma, o código fica assim:

```css
... Restante do código...

    .apresentacao{
        flex-direction: column-reverse;
        padding: 5%; /*Diminuindo o espaçamento lateral para 5%, já que o superior e inferior já estavam esse valor, não é necessário atribuir 2 valores*/
    }

    .apresentacao__conteudo {
        width: auto; /*Atribuindo valor automático para a "seção" de apresentação de conteúdo*/

    }

... Restante do código...


```

### Git e GitHub

Link: <https://www.youtube.com/watch?v=UBAX-13g8OM>

Link do meu repositório: <https://github.com/marlonprado04/testando_git>

### Colocando o projeto no ar

Para colocar o projeot no ar podemos usar o site Vercel que permite hospedar repositórios do GitHub de forma gratuita.

OBS: Necessário que os arquivos do respositório estejam na pasta raiz para que o site funcione corretamente, ou seja, pastas com vários projetos dentro não servirão.

Link do vercel: <https://vercel.com/>

## Lógica de programação

Para começar a programar é necessário ter um programa que sirva de editor para o código.

Alguns exemplos incluem o Sublime Text, Visual Studio Code ou mesmo o Notepad++.

No curso de JavaScript vamos usar o Google Chrome para interpretar o código escrito, então não é necessário um compilador ou etc (algumas linguagens necessitam disso para funcionar).

### Concatenação

Antes de concatenar o texto do alert, foi substituido o comando alert do JavaScript pelo comando documento.write.

Para concatenar no JavaScript usamos o operador +.
A linguagem permite concatenar numeros inteiros com texto, pois ela faz a conversão do número para texto por baixo dos panos.

Sendo assim, um exemplo de código é:

```javascript

 // Concatenando
    document.write("A idade do Flávio é " + 18)

```

### Tornando o programa dinâmico com variáveis

Para declarar uma variável em JS fazemos conforme o código abaixo:

```javascript
<meta charset="UTF-8">

<script>
    var ano = 2020;

    document.write("Mário tem " + (ano - 1997) + " anos.");
    document.write("<br>");
    document.write("Marcos tem " + (ano - 1989) + " anos.");
    document.write("<br>");
    document.write("Maria tem " + (ano - 1993) + " anos.");
</script>

```

Outro exemplo de uso para poupar código:

```javascript
<meta charset="UTF-8">

<script>
    var ano = 2023;

    var idadeMario =  ano - 1997
    var idadeMarcos = ano - 1989
    var idadeMaria = ano - 1993

    var media = (idadeMarcos + idadeMaria + idadeMario)/3

    document.write("Mário tem " + idadeMario + " anos.");
    document.write("<br>");
    document.write("Marcos tem " + idadeMarcos + " anos.");
    document.write("<br>");
    document.write("Maria tem " + idadeMaria + " anos.");
    document.write("<br>");
    document.write("A média das idades é: " + Math.round(media));

</script>

```

### Melhorando a manutenção do código

Para melhorar a manutenção do código, podemos usar e abusar de recursos que as variáveis nos dão.

Por exemplo, ao invés de colocar `document.write("<br>")` para pular uma linha, podemos criar uma variável que possua essa informação.

Assim, sempre que necessário, podemos pular quantas linhas quisermos ou aumentar o número de pulos que a variável dá.

```javascript
  // Ao invés disso:

  document.write("Olá");
  document.write("<br>");
  document.write("Mundo");
  document.write("<br>");

  // Usar isso:

  var pulaLinha = "<br>";

  document.write("Olá");
  document.write(pulaLinha);
  document.write("Mundo");
  document.write(pulaLinha);
  
```

### Funções

Para declarar funções no JS o código é parecido com a criação de variáveis:

```javascript
function pulaLinha(){
  document.write("<br>");
}
```

### Funções com parâmetros

É possível criar funções que recebem parâmetros e trabalham com eles dentro da área de função.

Não é necessário criar a variável que será o passada como parâmetro para a função. Ela pode ser criada dentro da própria função, ou seja, será uma variável local dentro do escopo da função.

Exemplo:

```javascript

<meta charset="UTF-8" />

<script>
    // Criando função com parâmetro para
    // receber a mensagem quando chamada
    function mostra(mensagem){
    
        // Printando mensagem passada
        document.write(mensagem);
        // Pulando a linha
        document.write("<br>");
    }

    // Chamando a função e passando a mensagem necessária
    mostra("Olá pessoas");
</script>

```

### Calculando o IMC

Para calcular o IMC usando o que já foi aprendido, pode ser criada uma função que realiza a operação e aproveitar as funções anteriores para mostrar a mensagem em tela.

Dessa forma o cálculo fica dinâmico e poupa linhas de código:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
  }

  // Criando função para calcular IMC
  function calculaImc(altura, peso) {
    // Criando variável para armazenar IMC calculado
    var imc = peso / (altura * altura);

    // Printando mensagem na tela
    mostra("O IMC calculado é: " + imc);
  }

  // Executando função para calular IMC
  calculaImc(1.65, 77);
</script>

```

### Retorno de funções

Para deixar o código ainda mais dinâmico, podemos criar retorno para as funções.

Dessa forma, a função pode servir para realizar certas operações e após executar, retornar determinado valor.

Abaixo uma adaptação no código anterior incluindo essas alterações:

```javascript

  // Criando função para calcular IMC
  function calculaImc(altura, peso) {
    // Criando variável para armazenar IMC calculado
    var imc = peso / (altura * altura);

    // Retornando o IMC quando a função for chamada
    return imc;
  }

  // Criando uma variável para conter o IMC de cada pessoa
  var imcFlavio = calculaImc(1.65, 77);
  var imcMario = calculaImc(1.77, 89);

  // Mostrando o resultado atribuido em cada variável
  mostra(imcFlavio);
  mostra(imcMario);
```

### Entendendo a fundo o retorno de funções

Uma outra forma de lidar com o retorno de funções é realizar o cálculo no próprio retorno.

Por exemplo, ao invés de criar variáveis dentro da função e realizar o calculo para só então retornar o resultado do cálculo, podemos realizar todo o cálculo dentro do retorno da função.

Abaixo a adaptação do código:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criando função para calcular IMC
  function calculaImc(altura, peso) {
    // Retornando o cálculo de IMC quando a função for chamada
    return peso / (altura * altura);
  }

  // Criando uma variável para conter o IMC de cada pessoa
  var imcFlavio = calculaImc(1.65, 77);
  var imcMario = calculaImc(1.77, 89);
  var totalImc = imcFlavio + imcMario;

  // Mostrando o resultado atribuido em cada variável
  mostra(imcFlavio);
  mostra(imcMario);
  mostra(totalImc);
</script>

```

### Interagindo com o usuário

Para deixar o código ainda mais funcional e dinâmico, nós podemos coletar informações passadas pelo usuário. Para isso existe a função `prompt()` do JS.

Abaixo o código adaptado que recebe o nome, altura e peso do usuário e mostra o resultado do cálculo na tela:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criando função para calcular IMC
  function calculaImc(altura, peso) {
    // Retornando o cálculo de IMC quando a função for chamada
    return peso / (altura * altura);
  }

  // Criando uma variável para conter a altura e peso
  var nome = prompt("Informe seu nome:");
  var alturaInformada = prompt(nome + ", informe sua altura: ");
  var pesoInformado = prompt(nome + ", informe seu peso: ");
  var imc = calculaImc(alturaInformada, pesoInformado);

  // Mostrando o resultado atribuido em cada variável
  mostra(nome + ", o seu IMC é:" + imc);
</script>
```

### Convertendo texto em números

A função `prompt()` do JS por padrão retorna um texto. Sendo assim, é necessário converter a informação retornada para realizar operações matemáticas.

OBS: Como o JS é uma linguagem com **variáveis dinâmicas**, as operações de **multiplicação e divisão** funcionam sem conversão, mas **ao somar os números eles acabam sendo _concatenados_**.

Para converter um valor do tipo `string` para o tipo `int` podemos usar a função padrão do JS `parseInt()` onde colocamos o valor ou variável do tipo string como parâmetro na função.

Abaixo um exemplo de código com conversão:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Base do programa para calcular a pontuação de um time de futebol

  // Criando variáveis necessárias
  var vitorias = parseInt(prompt("Entre com o número de vitórias: "));
  var empates = parseInt(prompt("Entre com o número de empates: "));
  var pontos = (vitorias *3) + empates;

  // Mostrando mensagem com resultado
  mostra("Seu time tem " + pontos + " ponto(s).")
   
</script>

```

### Trabalhando com condições

Para criar condições e comparações dentro do JS usamos a função nativa `if(){}` onde passamos os parâmetros que desejamos comparar e após colocamos os cálculos desejados.

Exemplo:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Base do programa para calcular a pontuação de um time de futebol

  // Criando variáveis necessárias
  var vitorias = parseInt(prompt("Entre com o número de vitórias: "));
  var empates = parseInt(prompt("Entre com o número de empates: "));
  var pontos = vitorias * 3 + empates;

  // Mostrando mensagem com resultado
  mostra("Seu time tem " + pontos + " ponto(s).");


  // Criando condições para mensagem
  if (pontos > 28) {
    mostra("Seu time está MELHOR que ano passado.");
  }

  if (pontos < 28) {
    mostra("Seu time está PIOR que ano passado.");
  }
  if (pontos == 28) {
    mostra("Seu time está IGUAL ao ano passado.");
  }
</script>

```

### Melhorando programa de IMC

Para deixar o programa de cálculo de IMC criado anteriormente mais funcional, vamos incluir o conteúdo aprendido até então.

Abaixo o código alterado:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criando função para calcular IMC
  function calculaImc(altura, peso) {
    // Retornando o cálculo de IMC quando a função for chamada
    return peso / (altura * altura);
  }

  // Criando uma variável para conter a altura e peso
  var nome = prompt("Informe seu nome:");
  var alturaInformada = prompt(nome + ", informe sua altura: ");
  var pesoInformado = prompt(nome + ", informe seu peso: ");
  var imc = calculaImc(alturaInformada, pesoInformado);

  // Mostrando o resultado atribuido em cada variável
  mostra(nome + ", o seu IMC é:" + imc);

  // Criando operador para comparar IMC do usuário com o ideal
  if (imc < 18.5) {
    mostra("Seu IMC está ABAIXO do recomendado!");
  }

  if (imc > 35) {
    mostra("Seu IMC está ACIMA do recomendado!");
  }

  if (imc >= 18.5 && imc <= 35) {
    mostra("Seu IMC está EXCELENTE!");
  }
</script>
```

### Jogo de advinhação

Com tudo aprendido até aqui podemos criar um jogo de adivinhação, conforme código abaixo:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criando variável que recebe um número aleatório gerado a partir das funções round() e random() da biblioteca Math
  var numeroPensado = Math.round(Math.random() * 10);

  // Criando variável para receber chute do usuário
  var chute = parseInt(prompt("Digite um chute: "));

  // Comparando chute com o número gerado
  if (chute == numeroPensado) {
    mostra("Você acertou!");
  } else {
    mostra("Você errou, o número pensado foi " + numeroPensado);
  }
</script>

```

> Desafio:
>1 - Você pode criar uma função sorteia que recebe um número n e sorteia um número entre 0 a n, retornando esse valor. Dessa forma, em vez de escrever var numeroPensado = Math.round(Math.random() * n);, você escreveria var numeroPensado = sorteia(n);. Faça essa modificação, criando a nova função e utilize-a.

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criano função para sortear número
  function sorteia(n){
    // Retornando número de acordo com sugestão do usuário
    return Math.round(Math.random() * n);
  }

  // Criando variável para receber o número máximo de sorteio sugerido pelo usuário
  var numeroMaximo = parseInt(prompt("Digite até que número deseja o sorteio: "));

  // Criando variável de número sorteado
  var numeroSorteado = sorteia(numeroMaximo);

  // Criando variável para receber chute do usuário
  var chute = parseInt(prompt("Digite um chute: "));
  
  // Comparando chute com o número gerado
  if (chute == numeroSorteado) {
    mostra("Você acertou!");
  } else {
    mostra("Você errou, o número pensado foi " + numeroSorteado);
  }
</script>

```

### Repetir enquanto

Para repetir operações podemos usar o laço de repetição `while(){}`. Nele atribuimos uma condição e enquanto ela estiver sendo `true`, o código dentro dela permanece sendo executado.

Abaixo um programa que lista todos os anos em que houveram copa adicionando + 4 a cada ano, de acordo com data limite que o usuário estipular:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Programa para calcular o ano em que haverá copa

  // Declarando variáveis
  var anoCopa = 1930;
  var dataLimite = parseInt(prompt("Digite a data limite: "));

  // Criando laço de repetição para gerar alerta informando anos que houveram copa
  while(anoCopa <= dataLimite){
    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa+4;
  }

  mostra("FIM");
 
</script>
```

### Outra forma de repetir

Uma alternativa ao `while` é o `for`, que funciona da mesma forma, porém não é necessário criar variáveis antes da excução.

Abaixo um código que calcula a tabuada:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Programa para calcular tabuada

  // Criando laço de repetição com for

  for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {

    mostra("7*" + multiplicador + "=" + (7*multiplicador));
  }
</script>

```

### Acumulando valores

Podemos usar os laços de repetição para acumular valores e realizar operações de acordo.

Por exemplo, perguntar para o usuário um numero de pessoas que ele deseja calcular a média de idades e criar um laço para pedir todas as idades e depois realizar o calculo da média.

Abaixo o código de exemplo:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Progrma para calcular a média das idades de acordo com o número de pessoas informado pelo usuário

  // Criando variáveis
  var totalPessoas = parseInt(prompt("Quantas pessoas? "));
  var numero = 1;
  var totalIdades = 0;
  var mediaDasIdades = 0;

  // Criando laço de repetição
  while(numero <= totalPessoas){
    var idade = parseInt(prompt("Informe a idade: "));
    totalIdades = totalIdades + idade;
    numero ++;
  }

  // Atribuindo cálculo de média das idades à variável
  mediaDasIdades = totalIdades / totalPessoas;

  // Mostrando mensagem na tela
  mostra("A média das idades é: " + mediaDasIdades);

</script>

```

### Interrompendo uma repetição

Para interromper um laço de repetição podemos usar o comando `break`.

Isso é útil em situações em que, por exemplo, se for atingida uma certa condição dentro de um laço de repetição, o laço pare.

Abaixo o código do jogo de advinhação com o comando break que o torna mais funcional:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Criano função para sortear número
  function sorteia(n) {
    // Retornando número de acordo com sugestão do usuário
    return Math.round(Math.random() * n);
  }

  // Criando variável para receber o número máximo de sorteio sugerido pelo usuário
  var numeroMaximo = parseInt(
    prompt("Você quer sortear um número de 1 até quanto?")
  );

  // Criando variável de número sorteado
  var numeroSorteado = sorteia(numeroMaximo);

  var tentativas = 1;

  while (tentativas <= 3) {
    // Criando variável para receber chute do usuário
    var chute = parseInt(prompt("Digite um chute: "));

    // Comparando chute com o número gerado
    if (chute == numeroSorteado) {
      mostra("Você ACERTOU! O número sorteado foi: " + numeroSorteado);
      break;
    } else {
      mostra("Você ERROU! O número sorteado foi: " + numeroSorteado);
    }

    tentativas++;
  }
</script>

```

### Repetições aninhadas

Podemos aproveitar laços de repetição e colocalos um dentro do outro. Dessa forma, tornamos o código um pouco mais dinâmico.

Por exemplo, supondo que queremos imprimir 3 linhas na tela onde cada linha vai ter 10 asteriscos, ao invés do código abaixo:

```javascript

<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Programa para mostrar estrelas na tela
  for (var linha = 1; linha <= 3; linha++) {
    mostra("**********");
  }
</script>

```

Podemos substituir por:

```javascript
<meta charset="UTF-8" />

<script>
  // Criando função para pular linha
  function pulaLinha() {
    document.write("<br>");
  }

  // Criando função para printar uma mensagem
  function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
  }

  // Programa para mostrar estrelas na tela

  // Criando for para criar 3 linhas com estrelas na tela
  for (var linha = 1; linha <= 3; linha++) {
    // Criando for para mostrar 1 estrela na tela 10 vezes
    for (var coluna = 1; coluna <= 10; coluna++) {
      document.write("*");
    }

    //Pulando linha após printar a primeira linha de 10 estrelas
    pulaLinha();
  }
</script>

```

### Campo de texto e botão

Para aprimorar o programa de adivinhação podemos incluir um campo input e um botão no HTML.

Dessa forma, o código funciona ao usuário preencher o input e clicar no botão.

Abaixo o código de exemplo:

```javascript

<meta charset="UTF-8" />
<h1>Jogo de adivinhação:</h1>

<input />

<button>Compare com meu segredo</button>

<script>
  // Criando variáveis necessárias
  var segredo = 5;
  var input = document.querySelector("input");
  var button = document.querySelector("button");

  // Criando função para verificar se informação contida no input do usuário é igual ao segredo
  function verifica() {
    if (input.value == segredo) {
      alert("Você ACERTOU!");
    } else {
      alert("Você ERROU!");
    }
  }

  // Atribuindo código da função "verifica" à variável button, porém somente ao ser clicada.
  button.onclick = verifica;
</script>

```

### Melhorando a usabilidade

Para melhorar ainda mais a interação do usuário podemos fazer com que o campo de input fique em foco, ou seja, fazer o mouse ir para o campo de input automaticamente. Para isso usarmos o comando `input.focus()`.

Também podemos incluir na função uma linha que paga a informação da tentativa anterior, assim o usuário não precisa digitar novamente. Para isso basta atribuir ao input um valor em branco, com o seguinte código `input.value = "";`

Abaixo os códigos com as modificações:

```javascript

<meta charset="UTF-8" />
<h1>Jogo de adivinhação:</h1>

<input />

<button>Compare com meu segredo</button>

<script>
  // Criando variáveis necessárias
  var segredo = 5;
  var input = document.querySelector("input");
  var button = document.querySelector("button");
  
  // Fazendo mouse focar no campo de input assim que página é carregada
  input.focus();

  // Criando função para verificar se informação contida no input do usuário é igual ao segredo
  function verifica() {
    if (input.value == segredo) {
      alert("Você ACERTOU!");
    } else {
      alert("Você ERROU!");
    }

    // Atribuindo ao input o valor em branco 
    input.value = "";
    
    // Fazendo o mouse voltar para o botão de input assim que o código acima for executado
    input.focus();

  }

  // Atribuindo código da função "verifica" à variável button, porém somente ao ser clicada.
  button.onclick = verifica;
</script>


```

### Armazenando muitos dados

Para lidar com muitos dados, como por exemplo, comparar um chute de um usuário com uma lista de números, podemos usar outro tipo de variável chamado `array`.

Um array é declarado da seguinte forma `var exemplo = [1, 4. 3]`.

Outra dica é usar um laço de repetição para varrer a comparação em cada elemento do array. Para garantir que a lista percorra o número exato de elementos contidos no array, podemos usar a função nativa do js `length`. Essa função retorna o número de elementos do array.

Abaixo o código do jogo de adivinhação adaptado:

```javascript
<meta charset="UTF-8" />
<h1>Jogo de adivinhação:</h1>

<input />

<button>Compare com meu segredo</button>

<script>
  // Criando variáveis necessárias
  var segredos = [5, 7, 10, 2];
  var input = document.querySelector("input");
  var button = document.querySelector("button");

  // Fazendo mouse focar no campo de input assim que página é carregada
  input.focus();

  // Criando função para verificar se informação contida no input do usuário é igual ao segredo
  function verifica() {
    // Criando variável para verificar se o segredo foi achado
    achou = false;

    // Criando laço de repetição para varrer o array e testar cada número
    for (var posicao = 0; posicao < segredos.length; posicao++) {
      if (input.value == segredos[posicao]) {
        alert("Você ACERTOU!");

        // Mudando valor da variável para true no caso dp chute ter sido correto
        achou = true;

        // Parando a comparação se o chute for encontrado na lista de numeros
        break;
      }
    }

    // Printando na tela que o usuário errou o chute
    if (achou == false) {
      alert("Você ERROU!");
    }

    // Atribuindo ao input o valor em branco
    input.value = "";

    // Fazendo o mouse voltar para o botão de input assim que o código acima for executado
    input.focus();
  }

  // Atribuindo código da função "verifica" à variável button, porém somente ao ser clicada.
  button.onclick = verifica;
</script>

```

### Manipulando Array

Seguindo nos estudos, podemos adicionar informações em um array com o comando `push`. Dessa forma, conseguimos deixar o código mais dinâmico, permitindo que os números sorteados sejam gerados aleatoriamente toda vez que o código for rodado.

No código abaixo também incluímos uma função para deixar o código mais funcional, evitando que `um número seja sorteado duas vezes` dentro da lista de segredos.

Código:

```javascript

<meta charset="UTF-8" />
<h1>Jogo de adivinhação:</h1>

<input />

<button>Compare com meu segredo</button>

<script>
  // Criando função para sortear números aleatórios
  function sorteia() {
    // Criando variavel do número
    var numero = 0;

    // Criando while para atribuir um numero maior que 0
    while (numero == 0) {
      numero = Math.round(Math.random() * 10);
    }

    return numero;
  }

  // Criando função para sortear números de forma que não se repitam, onde permite informar quantos números serão sorteados
  function sorteiaNumeros(quantidade) {
    // Criando variável local para armazenar os números sorteados
    var segredos = [];

    // Criando variável para servir de contagem de segredos
    var numero = 1;

    // Criando laço de repetição para gerar os segredos de forma que não se repitam
    while (numero <= quantidade) {
      // Criando variáveis necessárias
      var numeroAleatorio = sorteia();
      var achou = false;

      // Criando for para verificar se numero gerado já está dentro da lista de segredos
      for (var posicao = 0; posicao < segredos.length; posicao++) {
        // If que verifica se item foi localizado dentro da lista de segredos
        if (segredos[posicao] == numeroAleatorio) {
          achou = true;
          break;
        }
      }

      // If para adicionar o número aleatório gerado caso não tenha sido encontrado na lista
      if (achou == false) {
        segredos.push(numeroAleatorio);
        //Incrementando variável de apoio para while somente quando um número for adicionado à lista de segredos
        numero++;
      }
    }

    return segredos;
  }

  // Criando variáveis necessárias
  var input = document.querySelector("input");
  var button = document.querySelector("button");

  // Criando array para conter os segredos e adicionando os segredos
  var segredos = sorteiaNumeros(3);
  console.log(segredos);

  // Fazendo mouse focar no campo de input assim que página é carregada
  input.focus();

  // Criando função para verificar se informação contida no input do usuário é igual ao segredo
  function verifica() {
    // Criando variável para verificar se o segredo foi achado
    achou = false;

    // Criando laço de repetição para varrer o array e testar cada número
    for (var posicao = 0; posicao < segredos.length; posicao++) {
      if (input.value == segredos[posicao]) {
        alert("Você ACERTOU!");

        // Mudando valor da variável para true no caso dp chute ter sido correto
        achou = true;

        // Parando a comparação se o chute for encontrado na lista de numeros
        break;
      }
    }

    // Printando na tela que o usuário errou o chute
    if (achou == false) {
      alert("Você ERROU!");
    }

    // Atribuindo ao input o valor em branco
    input.value = "";

    // Fazendo o mouse voltar para o botão de input assim que o código acima for executado
    input.focus();
  }

  // Atribuindo código da função "verifica" à variável button, porém somente ao ser clicada.
  button.onclick = verifica;
</script>


```

### Links e artigos

Guia da Alura de unidades no CSS: <https://www.alura.com.br/artigos/guia-de-unidades-no-css>

Podcast Alura: <https://cursos.alura.com.br/extra/hipsterstech/css-cansei-de-ser-simples-hipsters-09-a577>

5 dúvidas de quem quer começar com TI: <https://www.alura.com.br/artigos/5-duvidas-de-quem-quer-iniciar-na-carreira-de-programacao>

Como escolher minha carreira em TI: <https://www.alura.com.br/artigos/como-escolher-minha-carreira-em-ti>

Diferença entre backend e frontend: <https://cursos.alura.com.br/extra/alura-mais/qual-e-a-diferenca-entre-back-end-e-front-end--c174>

## JavaScript: tipos, variáveis e funções

### Links e artigos

VSCode: Dicas e truques: [Link](https://www.youtube.com/watch?v=C3o9KwOHeCk)

Como utilizar o terminal integrado no VSCode: [Link](https://www.alura.com.br/artigos/como-utilizar-terminal-integrado-visual-studio-code?_gl=1*1um01ax*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzU0MzMuNjAuMC4w*_fplc*T0d2JTJGSUwlMkZkbzhNSVM2MGI0TWxWRlNCRUoxVktBWlhWMiUyRnlCUnJEcm9VaGxMSUZEbVhncmtERCUyQkl1QlZpcWlzSGY3cDY3Y0NMYzRvWSUyQjJ3SUhlTDBQcDhFdFI4JTJCUkFEcVcxeGo4NEVzTTFYWkRaUVJtclh4b3NxV2NjT3lBJTNEJTNE)

Trabalhando com caminhos e pastas no terminal: [Link](https://www.alura.com.br/artigos/trabalhando-com-caminhos-e-pastas-no-terminal?_gl=1*1qdg7uc*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzU0NzMuMjAuMC4w*_fplc*TnNYM0h5SlJPYVRXQ2NtQmtpZCUyRlA3ZXdaR3Y2OVNXam5WRXFvOXg1SFZib0tuc0wlMkJvRTdFejkxSURYSiUyRlhWQzZWM3RuVk5ndzZEZDhITXlJS2olMkZmSkZMNXJsZllZbXQ5UUhiOEgzSmNwJTJGZW5lS3YlMkYxWENqTGJlM2FPUUp3JTNEJTNE)

Formatar números no JavaScript: [Link](https://www.alura.com.br/artigos/formatando-numeros-no-javascript?_gl=1*da0r6x*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzY3NDIuNTkuMC4w*_fplc*NWNWZ0ZQOSUyQkRsTldRNG5NUyUyRjBUZ1ZqNmdjeHJVTDF2MFpFY2psZ3FKdGh3NzBBa0gwUG5aaFVBQnBSelBnODZkYTJOUWtncm5neUVTT0pMNnIxbEF6NUNrS3pKRXZYSXBuQTNKMDdnQ1dIWEpFOHI0NGolMkZValRNRld0Q0R3JTNEJTNE)

Ordenação de números no JavaScript: [Link](https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona?_gl=1*eu6s41*_ga*MTY3MDI0NzMxLjE2ODY0MjQ0MjQ.*_ga_59FP0KYKSM*MTY4NzgzNDY5Mi4yMC4xLjE2ODc4MzY4MTEuNjAuMC4w*_fplc*Z0NpeVVTY2ZBOUJmak5Zd1VJTjZEWDIlMkZ5bVNRZUlEY2t4VlElMkJHV0JXVzVYblRmWE84YUUwdmxqd05wQ3Z2b0oySUhxJTJCd2d4NDQzSVJjVkQydmFvd0lCVGElMkZLenQ1a0ZjeEtNdDRRV05lMWg3NzVudjhRQlNTSVhrRnBDdXclM0QlM0Q.)

### Tipo number

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

### Tipo string

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

### Para saber mais: Codificação de strings

A codificação de caracteres, também conhecida como character encoding, é um sistema que permite que os computadores processem caracteres especiais, como acentos, ideogramas e emojis. Ao longo das décadas, foram desenvolvidos conjuntos de caracteres especiais, como o ASCII e o Unicode, que possuem códigos para cada caractere.

O Unicode é amplamente utilizado e possui códigos para caracteres de mais de 150 idiomas, símbolos matemáticos e emojis. O JavaScript utiliza o UTF-16 como padrão de codificação de caracteres. No entanto, bancos de dados podem aceitar outras codificações, embora o UTF-16 seja amplamente suportado pelas tecnologias atuais.

A codificação de caracteres é fundamental para garantir a correta exibição e processamento de diferentes idiomas e caracteres especiais em sistemas computacionais.

### Tipo boolean

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

### Para saber mais: Tipos null e undefined

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

### Var, let e const

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

### Truthy e falsy

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

### Conversão de tipos

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
