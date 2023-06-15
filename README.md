# PROJETO_CALDEIRA

Repositório com aulas, exercícios e conteúdos do Projeto Caldeira

# Índice

- [PROJETO\_CALDEIRA](#projeto_caldeira)
- [Índice](#índice)
- [Curso 4: HTML e CSS: trabalhando com responsividade e publicação de projetos](#curso-4-html-e-css-trabalhando-com-responsividade-e-publicação-de-projetos)
  - [Unidades de medidas](#unidades-de-medidas)
    - [Unidade de Medida REM](#unidade-de-medida-rem)
    - [Aplicando o REM](#aplicando-o-rem)
  - [Adaptando elementos](#adaptando-elementos)
    - [Descubra a super unidade de medida](#descubra-a-super-unidade-de-medida)
  - [Responsividade](#responsividade)
    - [Media Queries](#media-queries)
    - [Cabeçalho responsivo](#cabeçalho-responsivo)
  - [Responsividade e GitHub](#responsividade-e-github)
    - [Conteúdo responsivo](#conteúdo-responsivo)
    - [Git e GitHub](#git-e-github)
    - [Colocando o projeto no ar](#colocando-o-projeto-no-ar)
- [Aprender a lógica de programação](#aprender-a-lógica-de-programação)
  - [Comece a programar hoje](#comece-a-programar-hoje)
  - [Comunique-se com o usuário](#comunique-se-com-o-usuário)
    - [Concatenação](#concatenação)
    - [Tornando o programa dinâmico com variáveis](#tornando-o-programa-dinâmico-com-variáveis)
  - [Crie suas próprias funcionalidades](#crie-suas-próprias-funcionalidades)
    - [Melhorando a manutenção do código](#melhorando-a-manutenção-do-código)
- [Links e artigos](#links-e-artigos)

# Curso 4: HTML e CSS: trabalhando com responsividade e publicação de projetos

## Unidades de medidas

### Unidade de Medida REM

O CSS permite vários tipos de medidas que são divididas em 2 grupos: medidas relativas e medidas absolutas.

As medidas interessantes de se usar são medidas relativas, pois se adaptam de acorco com as configurações do usuário.

Nesse caso vamos usar a escala de REM, que equivale a 16 pixels. Ou seja, 1 rem = 16 pixel.

### Aplicando o REM

Nessa aula vamos alterar todas as medidas de fonte que usamos pixels para rem.

## Adaptando elementos

### Descubra a super unidade de medida

Podemos usar a unidade de medida de %, porém como diz no W3SCHOOL, a % é uma unidade relativa que respeita o tamanho do "pai".

<https://www.w3schools.com/cssref/css_units.php>

## Responsividade

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

## Responsividade e GitHub

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

# Aprender a lógica de programação

## Comece a programar hoje

Para começar a programar é necessário ter um programa que sirva de editor para o código.

Alguns exemplos incluem o Sublime Text, Visual Studio Code ou mesmo o Notepad++.

No curso de JavaScript vamos usar o Google Chrome para interpretar o código escrito, então não é necessário um compilador ou etc (algumas linguagens necessitam disso para funcionar).

## Comunique-se com o usuário

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

## Crie suas próprias funcionalidades

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

# Links e artigos

Guia da Alura de unidades no CSS: <https://www.alura.com.br/artigos/guia-de-unidades-no-css>

Podcast Alura: <https://cursos.alura.com.br/extra/hipsterstech/css-cansei-de-ser-simples-hipsters-09-a577>

5 dúvidas de quem quer começar com TI: <https://www.alura.com.br/artigos/5-duvidas-de-quem-quer-iniciar-na-carreira-de-programacao>
