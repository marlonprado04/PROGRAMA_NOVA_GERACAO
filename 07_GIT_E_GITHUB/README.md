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
