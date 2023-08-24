// Criando objeto do tipo cliente
const cliente = {
    nome:"André",
    idade:32,
    cpf:"1111111111",
    email:"andre@gmail.com"
};

// Printando informações contidas no objeto
console.log(`O nome do cliente é ${cliente["nome"]} e a idade é ${cliente["idade"]}`);

// Por que existem 2 formas de acessar valores de objetos?
// Isso ocorre para facilitar acesso em momentos que não sabemos as chaves existentes

// Criando variavel com as chaves do objeto
const chaves = ["nome", "idade", "cpf", "email", "altura"];

// Varrendo objeto em busca dos valores de cada chave
// Para a chave "altura", o forEach vai retornar undefined
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
