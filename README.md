# PROJETO_CALDEIRA
 Repositório com aulas, exercícios e conteúdos do Projeto Caldeira


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