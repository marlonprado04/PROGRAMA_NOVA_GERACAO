package sintaxe_variaveis_e_fluxo;

public class TestaEscopo {
	public static void main(String[] args) {
		// Criando variáveis
		int idade = 20;
		int quantidadePessoas = 3;
		boolean acompanhado;

		// Utilizando operador if com or
		if (quantidadePessoas >= 2) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}

		// Printando valor da variável de acordo com operação
		System.out.println("A variável 'acompanhado' é " + acompanhado);
	}
}
