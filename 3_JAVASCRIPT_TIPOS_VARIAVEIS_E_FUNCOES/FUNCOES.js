// Executando código da forma aprendida até agora
let x = "";
console.log(x);
x = "oi";

// Declarando função
function imprimeTexto(texto){
    console.log(texto);
}

// Executando função
imprimeTexto("Oi");

// Existem 3 formas de escrever funções

function soma(){ 
    return 2 + 2;
}

// Usando função dentro de função
imprimeTexto(soma());


