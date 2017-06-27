import java.util.ArrayList;
/*
This class utilizes an ArrayList of grades in a classroom and analyzes them. The methods provided are:
getAverage
highestGrade
lowestGrade

getAverage:
description = Returns the average of all the classroom grades.
parameters = grades: ArrayList of classroom grades.
returns = average grade

highestGrade:
description = Returns the highest grade of all the classroom grades.
parameters = grades: ArrayList of classroom grades.
returns = highest grade

lowestGrade:
description = Returns the lowest grade of all the classroom grades.
parameters = grades: ArrayList of classroom grades.
returns = lowest grade
*/
class GradeAnalyzer {
  
    public GradeAnalyzer() {

    }
  
    public int getAverage(ArrayList<Integer> grades) {
        int gradesSize = grades.size();

        if(gradesSize < 1) {
            System.out.println("Error! The array is empty!");
            return 0;
        }
        else {
            int sum = 0;
            int average = 0;
            
            for(int grade:grades) {
                sum = sum + grade;
            }
            
            average = sum/gradesSize;
            System.out.println("Average of grades = " + average);
            return average;
        }
    }

    public int highestGrade(ArrayList<Integer> grades) {
        int currHigh = 0;

        if(grades.size() < 1) {
            System.out.println("Error! The array is empty!");
        }
        else {
            for(int grade:grades) {
                if(currHigh < grade) {
                    currHigh = grade;
                }
            } 
            System.out.println("Highest grade = " + currHigh);
        }
        return currHigh;
    }

    public int lowestGrade(ArrayList<Integer> grades) {
        int currLow = 100;

        if(grades.size() < 1) {
            System.out.println("Error! The array is empty!");
        }
        else {
            for(int grade:grades) {
                if(currLow > grade) {
                    currLow = grade;
                }
            }
            System.out.println("Lowest grade = " + currLow);
        }
        
        return currLow;
    }

    public static void main(String[] args) {

        ArrayList<Integer> myClassroom = new ArrayList<Integer>();
        myClassroom.add(98);
        myClassroom.add(92);
        myClassroom.add(88);
        myClassroom.add(75);
        myClassroom.add(61);
        myClassroom.add(89);
        myClassroom.add(95);

        GradeAnalyzer myAnalyzer = new GradeAnalyzer();
        myAnalyzer.getAverage(myClassroom);
        myAnalyzer.highestGrade(myClassroom);
        myAnalyzer.lowestGrade(myClassroom);
    }
  
}


