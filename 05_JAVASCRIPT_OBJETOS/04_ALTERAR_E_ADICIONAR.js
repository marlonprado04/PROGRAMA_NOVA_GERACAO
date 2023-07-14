// Criando objeto pessoa
const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
};

// Printando nome
console.log(pessoa.nome);

// Tentando printar propriedade que não existe
console.log(pessoa.telefone); // retorna undefined

// Criando novo atributo e atribuindo um valor a esse atributo do objeto pessoa
pessoa.telefone = "11 12313141";

// Printando propriedade que passou a existir
console.log(pessoa.telefone);

// Mudando dado do atributo nome
pessoa.nome = "Luma Silva";

// Printando todo objeto pessoa
console.log(pessoa);


// -----------------------------

// Podemos editar variáveis constantes?
// Variáveis constantes não permitem modificar todo o conteúdo da variável, porém se quisermos mudar propriedades dentro do objeto não tem problema

// Criando novo objeto para exemplificar porque a const permite edição
const novaPessoa = {
    nome:"Pedro",
}

// Tentando atribuir ao objeto pessoa inicial esse novo objeto
pessoa = novaPessoa; // retorna erro