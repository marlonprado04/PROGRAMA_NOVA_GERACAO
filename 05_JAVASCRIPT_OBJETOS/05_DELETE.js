// Criando objeto de exemplo
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

// Deletando tanto o valor quanto a propriedade com o comando delete
delete objPersonagem.aliado;

// Printando todo objeto
console.log(objPersonagem);