
// Declarando função para calcular a energia restante
function calcularEnergiaRestante(ladrilhos, k) {

    // Declarando variável com tamanho da lista de ladrilhos
    const n = ladrilhos.length;
    // Declarando variável com energia inicial de maria
    let energia = 100;
    // Declarando variável com índice da posição inicial de Maria
    let i = 0;

    // Criando laço de repetição para calcular energia restante enquanto brincadeira continuar
    while (true) {
        
        // Criando if para decrementar quantidade de energia de acordo com próximo ladrilho a ser pulado
        if (ladrilhos[(i + k) % n] === 1) {
            // Decrementando 3 unidades de energia se o próximo ladrilho for vermelho (1)
            energia -= 3;
        } else {
            // Decrementando 1 unidade de energia se o próximo ladrilho for azul (0)
            energia -= 1;
        }

        // Atualizando o índice para o próximo salto
        i = (i + k) % n;

        // Criando if para verificar se Maaria voltou para o início (índice 0) para encerrar a brincadeira
        if (i === 0) {
            break;
        }
    }

    // Retornando energia final
    return energia;
}

// Realizando o teste seguindo o exemplo do exercício
const ladrilhos = [0, 1, 1, 0];
const k = 2;
console.log(calcularEnergiaRestante(ladrilhos, k));
