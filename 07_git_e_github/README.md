# Git e GitHub: repositório, commit e versões

Nesse curso vamos aprender como usar Git e GitHub, qual a diferença entre eles, para que criar repositórios e como usá-los.

Vamos aprender tanto via web quanto via comando de terminal.

## Índice

- [Git e GitHub: repositório, commit e versões](#git-e-github-repositório-commit-e-versões)
  - [Índice](#índice)
  - [VSCode no GitHub](#vscode-no-github)
  - [Adicionando um colaborador](#adicionando-um-colaborador)
  - [Git clone e log](#git-clone-e-log)
  - [Git status, commit e push](#git-status-commit-e-push)
  - [O que vimos até aqui](#o-que-vimos-até-aqui)
  - [Para saber mais: Git log](#para-saber-mais-git-log)
  - [Para saber mais: clone do git](#para-saber-mais-clone-do-git)
  - [Faça como eu fiz: comandos do git](#faça-como-eu-fiz-comandos-do-git)
  - [Navegando no tempo](#navegando-no-tempo)
  - [Git add](#git-add)
  - [Branch](#branch)
  - [Merge](#merge)
  - [Parabéns](#parabéns)

## VSCode no GitHub

Para deixar o GitHub mais funcional podemos usar o VSCode na nuvem, basta estar com o repositório aberto e clicar com na tecla `.` por uns 3 segundos que assim o VSCode online abre para edição.

## Adicionando um colaborador

Para adicionar um colaborador no repositório do GitHub basta entrar no `repositório desejado -> settings -> colaborador`.

Dessa forma é só colocar o @ de quem deseja adicionar como colaborador.

## Git clone e log

A diferença de GitHub e Git é que o GitHub é um projeto para distribuição de repositórios online, inclusive possui concorrentes fortes.

Já o Git é são os códigos por trás do que o GitHub faz.

Para realizar um clone de um repositório basta ter o `git` instalado na máquina, copiar a `url do projeto` e após isso usar o comando `git clone "url/do/projeto`. Dessa forma o repositório online será clonado localmente.

Para exemplo:

URL do projeto: <https://github.com/marlonprado04/PROJETO_NOVA_GERACAO.git>

```git
git clone https://github.com/marlonprado04/PROJETO_NOVA_GERACAO.git
```

Para consultar todo o histórico de modificações realizadas podemos usar o comando `git log`, mas esse comando não demonstra de forma enxuta.

Para visualizar todos os commits e modificações em uma só linha podemos usar o comando `git log --oneline`, dessa forma ele sai muito resumido (apenas com o hash e o titulo do commit).

## Git status, commit e push

Para verificar o status do git para ver se os códigos estão em dia, podemos usar  ocomando `git status`.

Para adicionar arquivos no commit podemos usar o comando `git commit <nome/do/arquivo> -m "titulo do comit`. Se necessário commitar todos arquivos modificados podemos usar o atalho `git add .` e depois `git commit -m "titulo do commit"`, dessa forma todos os arquivos do repositório serão commitados.

Para _empurrar_ o código atualizado para o repositório online podemos usar o comando `git push origin main`, onde o `origin` é a origem do código (repositório raiz de onde parte todas as modificações).

## O que vimos até aqui

Para restaurar um repositório ou arquivos para uma versão anterior precisamos do hash da versão.

Para ter o hash, podemos usar o comando já aprendido `git log --oneline`. Com esse comando podemos ter, por exemplo, o hash `0d4b034`.

Para restaurar todos os arquivos do repositório para essa versão podemos usar o comando `git restore --source 0d4b034 .`, onde o `.` indica que todos os arquivo serão restaurados. Se fosse necessário restaurar apenas algum arquivo ou pasta precisaríamos passar o caminho do arquivo ou pasta como parâmetro ao invés do ponto.

## Para saber mais: Git log

O comando `git log` permite diversos parâmetros para torná-lo mais funcional.

Abaixo alguns deles:

- `git log --oneline`: Visualizar commits 1 em cada linha
- `git log -p`: Para ver mais informações do commit (como alterações realizadas)
- `git log --author="user_name"`: Pesquisar os commitr de determinado autor
- `git log --since=1.month.ago --until=1.day.ago`: Pesquisar informações por data (no código de exemplo estamos buscando as informações do commit desde um mês atrás até um dia atrás)
- `git log --pretty="format:%h %s"`: Podemos formatar a visualização das informações com esse comando. Nesse exemplo ele traz o hash seguido da mensagem de commit.
  > Para saber mais, acesse [git log format string](https://devhints.io/git-log-format)

Para mais informações gerais sobre o git log acessar [git log cheatsheet](https://devhints.io/git-log)

## Para saber mais: clone do git

O comando git clone cria uma cópia de um repositório git existente, e esse repositório pode ser local ou remoto. Além disso, essa cópia é um repositório git completo, com seu próprio histórico, gerenciamento de seus próprios arquivos e é um ambiente isolado como um todo do repositório original.

Por conveniência, a clonagem cria uma conexão remota apontando para o repositório original. E é essa conexão que facilita muito a interação com o repositório central.

Podemos clonar um repositório remoto para uma pasta específica com o comando:

`git clone <repositorio> <meu-projeto-clone>`.

O repositório localizado em `repositorio` é clonado para uma pasta chamada `meu-projeto-clone`.

Podemos configurar o git clone para clonar o repositório a partir de uma `branch` específica, diferente da original, com o comando:

`git clone -branch new_feature <repositorio>`

O exemplo acima clonaria apenas a branch new_feature de repositorio.

Para mais opções do `git clone` você pode consultar o site [neste link](https://git-scm.com/docs/git-clone).

## Faça como eu fiz: comandos do git

Uma pessoa atua como dev front-end e concluiu implementações importantes no desenvolvimento do projeto no qual está trabalhando. Agora, ela precisa verificar as modificações realizadas, adicioná-las ao seu repositório local, salvá-las e depois enviá-las ao repositório remoto utilizando o Git.

Com base nesse contexto, quais comandos do git você pode utilizar para realizar essas ações?

Comandos usados:

1. Para verificar as modificações: `git status`
2. Para adicioná-las ao repositório local: `git add .`
3. Para salvá-las: `git commit -m "<comentario>"`
4. Para enviá-las ao repositório remoto: `git push`

## Navegando no tempo

Você fez quatro commits em seu código HTML: Adicionando Title, Adicionando imagem de fundo, Adicionando tabela e Adicionando footer, mas os três últimos commits não foram aprovados por seu supervisor. Então, você precisa voltar ao ponto inicial do projeto. Qual o comando que você precisa utilizar para navegar no passado?

Resposta: `git restore --source <id>`

Para saber mais veja o artigo [nesse link](https://www.alura.com.br/artigos/git-os-novos-comandos-git-restore-e-git-switch)

O `git switch` é um comando das versões mais recentes do Git que surgiu junto do `git restore` para dar responsabilidades mais divididas aos comandos.

O `git switch` permite fazer a troca ou criação de uma branch.

Exemplos de uso:

- `git switch -c nova-branch`: cria uma nova branch e alterna para ela
- `git switch -`: retorna para a branch master sem precisar passar o nome

## Git add

O comando `git add` permite adicionar arquivos `trackeando` eles.

Por exemplo, ao criar um arquivo chamado `contato.html` e editar o arquivo `app.js`, podemos adicionar os arquivos separadamente para realizar commits individuais identificando cada modificação.

Exemplo:

Passo 1: Adicionando o arquivo criado

`git add contato.html`

Passo 2: Criando commit com arquivo criado

`git commit -m "criando arquivo contato.html"`

Passo 3: Realizando o push

`git push`

Passo 4: Adicionando o arquivo modificado

`git add app.js`

Passo 5: Criando commit com arquivo modificado

`git commit -m "adicionei linha teste no app.js"`

Passo 6: Realizando o push

`git push`

Dessa forma ambos arquivos são modificados e separados em commits diferentes, facilitando a recuperação do código de forma individual.

Uma alternativa para esses comandos seria realizar o `git add .`. Dessa forma todos os arquivos e pastas são adicionados no commit.

Exemplo:

Passo 1: Adicionando todas modificações (criação do contato.html e alteração do app.js)

`git add .`

Passo 2: Criando commit com modificações

`git commit -m "adicionei arquivo contato.html e alterei app.js`

Passo 3: Realizando o push

`git push`

> Precisamos ter cuidado ao usar o comando `git add .`, pois as vezes pode ser útil salvar grandes modificações de forma separada, para facilitar recuperação parcial de código.

## Branch

A branch é uma ramificação de código que permite realizar alterações paralelamente ao código principal. Com branches podemos testar códigos, componentes, etc...

Para criar uma nova branch e automaticamente mudarmos para ela podemos usar o comando `git checkout -b <nome-da-branch>`.

Podemos trocar de branches novamente com o comando `git switch <nome-da-branch>`.

Após isso, podemos usar a branch criada para teste para adicionar arquivos ou alterações nos arquivos existentes. Quando finalizado usamos `git add .` e depois `git commit -m "<titulo-do-commit>"`.

Como essas alterações foram feitas em uma `branch local`, precisamos comunicá-las para o repositório de `origin`. Para isso usamos o comando `git push origin <nome-da-branch-criada>`.

Dessa forma a branch nova será criada no repositório remoto junto das alterações.

## Merge

O comando `git merge` serve para unificar branches. Com ele podemos passar as modificações de uma branch para outra.

> Para usá-lo é necessário que a branch que receberá as modificações esteja atualizada.

Os passos são:

Passo 1: Entrar na branch que desejamos atualizar, por exemplo, `main`

`git switch main`

Passo 2: Verificar o status para garantir que não tenham `pull` ou `push` pendentes

`git status`

Passo 3: Realizar o merge com a branch necessária, por exemplo, `desenvolvimento`

`git merge desenvolvimento`

Passo 4: Realizar o `push` das atualizações

`git push origin main`

## Parabéns

Você aprendeu o que é e como usar o GitHub de forma prática através de commits e até convidou uma pessoa para participar do seu projeto. Vimos a diferença entre Git e GitHub e aprendemos os principais comandos, como `clone`, `pull`, `commit`, `restore`, `branch` e `merge`.

Caso queira reforças os conhecimentos, você pode acessar um guia prático dos comandos usados neste treinamento através [desse link](https://guilhermeonrails.github.io/manual-do-git-e-github/)
