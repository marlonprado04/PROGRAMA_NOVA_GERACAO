package sintaxe_variaveis_e_fluxo;

public class TesteIR {
	public static void main(String[] args) {
		// Declarando variáveis
		double salario = 3300.00;

		// Criando lógica de comparação
		if (salario < 1900.0) {
			System.out.println("Seu salário é menor do que o esperado!");
		} else if (salario >= 1900.0 && salario <= 2800.0) {
			System.out.println("O IR é de 7,5%");
			System.out.println("Você pode deduzir R$142.");
		} else if (salario >= 2800.01 && salario <= 3751.0) {
			System.out.println("O IR é de 15%");
			System.out.println("Você pode deduzir R$350");
		} else if (salario >= 3751.01 && salario <= 4664.00) {
			System.out.println("O IR é de 22.5%");
			System.out.println("Você pode deduzir R$636");
		} else {
			System.out.println("Seu salário é maior do que o esperado!");
		}
	}
}
