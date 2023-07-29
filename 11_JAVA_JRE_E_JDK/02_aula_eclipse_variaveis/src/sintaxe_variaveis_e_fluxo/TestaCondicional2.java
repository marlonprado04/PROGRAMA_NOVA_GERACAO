package sintaxe_variaveis_e_fluxo;

public class TestaCondicional2 {
	public static void main(String[] args) {
		// Criando variavel idade
		int idade = 20;
		int quantidadePessoas = 3;
		boolean acompanhado = true;

		// Utilizando operador if com or
		if (idade >= 18 || quantidadePessoas > 1) {
			System.out.println("Você pode entrar!");
			System.out.println("Seja bem vindo!");
		} else { // utilizando else
			System.out.println("Infelizmente você não pode entrar!");
		}

		// ------------------------
		
		// Utilizando operador if com and
		if (idade >= 18 && quantidadePessoas > 1) {
			System.out.println("Você pode entrar!");
			System.out.println("Seja bem vindo!");
		} else { // utilizando else
			System.out.println("Infelizmente você não pode entrar!");
		}

		// ------------------------

		// Utilizando if com operador boolean
		if (idade >= 18 && acompanhado) {
			System.out.println("Você pode entrar!");
			System.out.println("Seja bem vindo!");
		} else { // utilizando else
			System.out.println("Infelizmente você não pode entrar!");
		}
	}
}
