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