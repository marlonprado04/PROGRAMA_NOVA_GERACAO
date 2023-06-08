# PROJETO_CALDEIRA


 Repositório com aulas, exercícios e conteúdos do Projeto Caldeira

# Índice

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
- [Links e artigos](#links-e-artigos)

 # Curso 4:  HTML e CSS: trabalhando com responsividade e publicação de projetos

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

https://www.w3schools.com/cssref/css_units.php


## Responsividade

### Media Queries

Media queries serve para tornar o site mais responsivo e dinâmico, por exemplo, quando a imagem ocupa metade da tela sozinha em telas menores do que x pixels.

O media querie permite manipular os elementos de acordo com certas informações.

https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries

Exemplo: Dentro do CSS atribuindo certos valores se a tela tiver um max-width de 1200px.

````
@media (max-width: 1200px){
    .apresentacao{
        flex-direction: column-reverse;
    }

}
````

### Cabeçalho responsivo

Para deixar o cabeçalho responsivo, podemos adicionar um padding entre os elementos e depois centralizando o menu.


````
... Resto do código... 

    .cabecalho{
        padding: 10%; /*Atribuindo padding para separar os botões de navegação*/

    }

    .cabecalho__menu{
        justify-content: center; /*Centralizando menu de navegação*/

    }

... Resto do código...
````

## Responsividade e GitHub

### Conteúdo responsivo

Para deixar o conteúdo responsivo é necessário diminuir o __espaçamento lateral entre o conteúdo e a borda da seção completa__ e depois atribuir alguma propriedade que faça a seção de conteúdo (dentro da seção completa) __consumir 100% do valor restante que não estiver sendo usado__.

Ou seja, atribuir um padding menor para o conteúdo pai e fazer o conteúdo filho consumir esse padding que foi diminuído e ficou sem uso.

Dessa forma, o código fica assim:

````
... Restante do código... 

    .apresentacao{
        flex-direction: column-reverse;
        padding: 5%; /*Diminuindo o espaçamento lateral para 5%, já que o superior e inferior já estavam esse valor, não é necessário atribuir 2 valores*/
    }

    .apresentacao__conteudo {
        width: auto; /*Atribuindo valor automático para a "seção" de apresentação de conteúdo*/

    }

... Restante do código...


````




### Git e GitHub


Link: https://www.youtube.com/watch?v=UBAX-13g8OM

Link do meu repositório: https://github.com/marlonprado04/testando_git


### Colocando o projeto no ar

Para colocar o projeot no ar podemos usar o site Vercel que permite hospedar repositórios do GitHub de forma gratuita.

OBS: Necessário que os arquivos do respositório estejam na pasta raiz para que o site funcione corretamente, ou seja, pastas com vários projetos dentro não servirão.

Link do vercel: https://vercel.com/

# Links e artigos

Guia da Alura de unidades no CSS: https://www.alura.com.br/artigos/guia-de-unidades-no-css

Podcast Alura: https://cursos.alura.com.br/extra/hipsterstech/css-cansei-de-ser-simples-hipsters-09-a577