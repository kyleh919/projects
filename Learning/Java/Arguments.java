/*
	to compile: javac Arguments.java
	to run: java Arguments arg0 funny arg2
*/

public class Arguments {
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }
    }
}