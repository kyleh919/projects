import java.util.HashMap;

/*
This class utilizes a HashMap of books in a users library and if the user has completed reading the book. The methods provided are:
getFinishedBooks
highestGrade

getFinishedBooks:
description = Prints to the console the titles of the finished books from the users library.
parameters = library: HashMap<String, Boolean> of book titles & if the user finished the book.
returns = none

getIncompleteBooks:
description = Prints to the console the titles of the unfinished books from the users library.
parameters = library: HashMap<String, Boolean> of book titles & if the user finished the book.
returns = none
*/

class Library {
    public Library() {

    }
  
    public void getFinishedBooks(HashMap<String, Boolean> library) {
        if(library.size() < 1) {
            System.out.println("Error! The HashMap cannot be empty!");
        }
        else {
            int ctr = 0;
            System.out.println("Books that you have completed reading:");
            for(String book:library.keySet()) {
                if(library.get(book)) {
                    System.out.print("\t" + book + "\n");
                    ctr++;
                }
            }
            if(ctr == 0) {
                System.out.println("\tYou have 0 completed books in your collection.");
            }
        }
    }
  
    public void getIncompleteBooks(HashMap<String, Boolean> library) {
        if(library.size() < 1) {
            System.out.println("Error! The HashMap cannot be empty!");
        }
        else {
            int ctr = 0;
            System.out.println("Books that you have NOT completed reading:");
            for(String book:library.keySet()) {
                if(!library.get(book)) {
                    System.out.println("\t" + book);
                    ctr++;
                }
            }
            if(ctr == 0) {
                System.out.println("\tYou have 0 books in your collection that you have not finished reading.");
            }
        }
    }
  
    public static void main(String[] args) {
        HashMap<String, Boolean> myBooks = new HashMap<String, Boolean>();

        myBooks.put("Road Down The Funnel", true);
        myBooks.put("Rat: A Biology", true);
        myBooks.put("TimeIn", false);
        myBooks.put("3D Food Printing", true);

        Library myLibrary = new Library();
        myLibrary.getFinishedBooks(myBooks);
        System.out.println("\n");
        myLibrary.getIncompleteBooks(myBooks);
    }
}