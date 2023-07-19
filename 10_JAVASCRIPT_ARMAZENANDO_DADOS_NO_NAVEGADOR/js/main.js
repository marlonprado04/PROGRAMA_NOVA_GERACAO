// Criando variável para armazenar o formulário
const form = document.getElementById("novoItem");

// Criando escutador de evento para ao clicar no "submit" printar no console "funcionou" 
form.addEventListener("submit", (evento) => {
    // Criando comando para previnir ação padrão do evento, que nesse caso seria o submit para a própria página, assim o console.log vai funcionar ao clicar no submit
    evento.preventDefault();
    
    // Imprimindo no console os dados dos campos nome e quantidade através da chave do elemento dentro do target do evento
    console.log(evento.target.elements["nome"].value);
    console.log(evento.target.elements["quantidade"].value);

})

