package sintaxe_variaveis_e_fluxo;

public class TestaCaracteres {
    public static void main(String[] args) {
   
	// Declarando variável de caractere pequena 
	// que armazena apenas 1 caractere de 16 bits
	    
	// Usamos aspas simples ao criar
	char letra = 'a';

	// Printando a letra criada
	System.out.println(letra);

	// Um char pode ser representado por um código numérico
	char valor = 66;

	// Printando o valor criado
	System.out.println(valor);

	// Ao tentar somar 1 ao char, o java não permite
	// pois ele executa a operação e atribui à variável com 
	// tipo maior

	// valor = valor +1; // O resultado é um inteiro (por ser maior) tentando caber num char, o que da erro
	valor = (char) (valor + 1); // Estamos forçando o resultado da operação a ser um char
	  
	// Printando resultado da soma
	System.out.println(valor);    
	
    // ------------------------
    
    // Strings são como objetos e são tipo referência
    
    String palavra = "meu exemplo de String Java";
    
    // Podemos declarar Strings vazias, mas char não
    String palavraVazia = "";
    
    // Printando palavras criadas
    System.out.println(palavra);
    
    // A concatenação de Strings no Java é com o operador +
    System.out.println(palavra + " exemplo de concatenação");
    
    }
    
}

