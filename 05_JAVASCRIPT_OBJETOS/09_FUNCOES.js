// Criando objeto inicial
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) { // criando função para realizar compra
        if (valor > this.saldo) { // confirmando se valor da compra é abaixo do saldo
            console.log("Saldo insuficiente"); // printando mensagem de saldo insuficiente
        }
        else {
            this.saldo -= valor; // debitando valor
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`); //printando mensagem de sucesso com novo saldo
        }
    }
};

// Chamando função do objeto cliente
cliente.efetuaPagamento(25);