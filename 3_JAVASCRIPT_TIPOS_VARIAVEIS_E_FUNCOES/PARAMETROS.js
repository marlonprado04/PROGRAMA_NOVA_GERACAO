// Parâmetros de função

// Criando função com 2 parâmetros de entrada
function soma(n1, n2){
    return n1+n2;
}

// Chamando a função e somando alguns numeros
console.log(soma(2,2));
console.log(soma(354, 131));
console.log(soma(1313,1331));

// ---------------------------------------------

// Ordem dos parâmetros

// Criando função para concatenar texto
function nomeIdade(nome, idade){
    return `Seu nome é ${nome} e sua idade é ${idade}`;
}

// Passando informações na ordem correta 
console.log(nomeIdade("Marlon", 23));

// Passando informações na ordem errada
console.log(nomeIdade(23, "Marlon"));

// -----------------------------------

// Criando função que multiplica 2 numeros para exemplo
function multiplica(n1, n2){
    return n1 * n2;
}

// Passando para função multiplica o resultado da função soma chamada 2 vezes
console.log(multiplica(soma(4, 3), soma(3, 3))); // Retorna 42

// Executando o mesmo código acima, porém passando apenas 1 argumento para a função que exige 2
console.log(multiplica(soma(4, 3))); // retorna NaN

// ---------------------------------------------

// Criando função que divide 2 numeros para exemplo e atribuindo um valor padrão (para evitar erro de NaN quando passar só 1 parâmetro)
function divide(n1 = 1, n2 = 1){
    return n1 * n2;
}

// Executando função divide e passando 1 só parâmetro
console.log(divide(soma(4, 3))); // retorna 7

