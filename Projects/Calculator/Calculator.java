/* This calculator program can add, subtract, multiply, divide, and modulo. There is protection for both divide and modulo to avoid divide by 0 or modulo by 0 errors. */
class Calculator{
  public Calculator() {
  }
  
  public int add(int a, int b) {
    return a + b;
  }
  
  public int subtract(int a, int b) {
		return a - b;
  }
  
  public int multiply(int a, int b) {
    return a*b;
  }
  
  public int divide(int a, int b) {
    if(b == 0) {
      System.out.println("Error! Dividing by zero is not allowed.");
      return 0;
    }
    else {
      return a/b;
    }
  }
  
  public int modulo(int a, int b) {
    if(b == 0) {
      System.out.println("Error! Dividing by zero is not allowed.");
    	return 0;
    }
    else {
      return a%b;
    }
  }
  
  public static void main(String[] args) {
   	Calculator myCalculator = new Calculator();
    
    System.out.println("Adding = " + myCalculator.add(5,7));
    System.out.println("Subtracting = " + myCalculator.subtract(45,11));
    System.out.println("Multiplying = " + myCalculator.multiply(5,5));
    System.out.println("Dividing by zero error = " + myCalculator.divide(4,0));
    System.out.println("Dividing = " + myCalculator.divide(25,5));
		System.out.println("Modulo by zero error = " + myCalculator.modulo(5,0));
    System.out.println("Modulo = " + myCalculator.modulo(5,2));
  }
}