package sintaxe_variaveis_e_fluxo;

public class TestaCondicional {
	public static void main(String[] args) {
		System.out.println("Códico para testar condicionais");

		// Criando variavel idade
		int idade = 20;
		int quantidadePessoas = 3;

		// Utilizando operador if
		if (idade >= 18) {
			System.out.println("Você tem mais que 18 anos!");
			System.out.println("Seja bem vindo!");
		} else { // utilizando else
			if (quantidadePessoas > 1) { // outro if dentro do else
				System.out.println("Você pode entrar por estar acompanhado!");
			} else {
				System.out.println("Infelizmente você não pode entrar!");
			}
		}

	}
}
