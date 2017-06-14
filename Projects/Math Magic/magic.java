// Magic - no matter what myNumber (original number) is set to the output will always be 3
public class Magic {
	public static void main(String[] args) {

		int myNumber = 9; // original number
    int stepOne = myNumber * myNumber;
    int stepTwo = stepOne + myNumber;
    int stepThree = stepTwo/myNumber;
    int stepFour = stepThree + 17;
    int stepFive = stepFour - myNumber;
    int stepSix = stepFive/6;
    
    System.out.println(stepSix);
	}
}