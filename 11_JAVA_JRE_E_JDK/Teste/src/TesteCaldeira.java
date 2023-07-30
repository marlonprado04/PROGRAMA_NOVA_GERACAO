
public class TesteCaldeira {
	private static boolean containsEvenNumber(int[] array){
		for (int i = array.length-1; i>= 0; i--) {
			if(array[i] % 2 == 0) {
				return true;
			}
		}
		return false;
	}
}
