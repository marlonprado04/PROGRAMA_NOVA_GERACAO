// Testes com destructuring do array

// Criando arrays
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// Essa linha faz com que o array seja "aberto" e os dados sejam passados para o novo array de forma unificada, sem criar um array de arrays
const numeros = [...numerosPares, ...numerosImpares];

// Printando
console.log(numeros);

// ------------------------------------

// Criando código onde defino um nome dos 2 primeiros números e a partir do 3 coloco tudo junto em um array separado
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

// Printando 
console.log(num1, num2, outrosNumeros);


// -------------------------------------

// Criando um array com valor padrão para quando o valor do item não for atribuído
// Útil para quando não temos certeza do conteúdo que vamos receber no array
const [nome1 = "Juliana"] = [];

// Printando

console.log(nome1);

// ----------------------------

// Destructuring serve para objetos também, por exemplo, se precisarmos adicionar alguma informação não contida antes

// Criando pessoa sem telefone
const pessoa = {
    nome: "Ju",
    idade: 25
}

//Todo o objeto pessoa sem telefone para uma nova variável, porém adicionando o telefone
const pessoaComTelefone = {
    ...pessoa,
    telefone: 1234131414
}

// Printando:
console.log(pessoa);
console.log(pessoaComTelefone);

// -----------------------------------------------------

// Criando uma variável com o nome do atributo dentro do objeto e passando o mesmo valor do atributo para ela
const { idade } = pessoa;

// Printando 
console.log(idade);

// ----------------------------------------


// Também podemos usar o conceito anterior como parãmetro de função
// Assim podemos passar o objeto que a função fará o mesmo procedimento
function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa);