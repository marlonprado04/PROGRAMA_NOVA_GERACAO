// Criando objeto fornecedor
const fornecedor = {
    razaosocial: "Alura - Cursos Online",
    cnpj: "00.000.000/0000-00",
    email: "suporte@alura.com.br"
};

// Criando variável a partir da propriedade razaosocial
const { razaosocial } = fornecedor;
console.log(razaosocial);

// --------------------------------------

// E se o objeto vier mal estruturado, sem nomes de atributos aparentes?

//Exemplo de objeto

const json = {
    a: "Matheus",
    b: "23",
    c: "matheushcastiglioni@gmail.com"
};

// Criando variáveis para cada um dos atributos do objeto
const { a: nome, b: idade, c: email } = json;
console.log(nome);
console.log(idade);
console.log(email);

// O código acima seria o mesmo que fazer

const nome1 = json.a;
const idade1 = json.b;
const email1 = json.c;
console.log(nome);
console.log(idade);
console.log(email);