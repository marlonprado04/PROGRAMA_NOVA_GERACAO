package sintaxe_variaveis_e_fluxo;

public class TestaConversao {
    
    public static void main(String[] args) {
	// Declarado variável double
	double salario = 1270.50;
	
	// Ao tentar atribuir double à int java não aceita
	// int valor = salario;
	
	// Convertendo double em int com o casting
	int valor = (int) salario;
	
	// Printando
	System.out.println("Variável int: " + valor);
	
	// -----------------------------------------
	
	// Outras variáveis do tipo numérico
	
	// Int suporta até 32 bits, ou seja, número 2000000
	int numeroNormal = 11411441;
	
	// long suporta valores muito maiores
	long numeroGrande = 131414441l;
	
	// short armazena menores ainda, até 16 bits, 32000
	short valorPequeno = 1313;
	
	//  byte armazena menor ainda, até 127
	byte numeroMuitoPequeno = 120;
	
	// float é outro ponto flutuante, mas parecido com long é
	// necessário colocar f no fim da declaração
	float numeroFlutuante = 3.14f; 
	
	// ------------------------------------
	
	// double não costumam ser usados para cálculo matemático
	// abaixo um exemplo do motivo
	
	double valor1 = 0.1;
	double valor2 = 0.2;
	double valorSoma = valor1 + valor2;
	System.out.println("Resultado da soma: " + valorSoma); // Retorna 0.30000000000000004
    }

}
