// CarLoan takes hardcoded values and determines a monthly car payment a user should make after taking out a car loan
public class CarLoan {
	public static void main(String[] args) {

		int carLoan = 10000;
		int loanLength = 3; // # years
        int interestRate = 5; // in %
        int downPayment = 2000; // down payment provided by user for car purchase
        
        if((loanLength <= 0) || (interestRate <= 0)) {
            System.out.println("Error! You must take out a valid car loan.");
        }
        else if(downPayment >= carLoan) {
            System.out.println("The car can be paid in full.");
        }
        else {
            int remainingBalance = carLoan - downPayment;
            int months = loanLength * 12;
            int monthlyBalance = remainingBalance/months;
            int interest = (monthlyBalance * interestRate)/100;
            int monthlyPayment = monthlyBalance + interest;
            System.out.println(monthlyPayment);
        }
	}
}