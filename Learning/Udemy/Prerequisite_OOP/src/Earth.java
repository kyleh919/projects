import zoo.Animal;

public class Earth
{
   public static void main(String[] args) {
      
      /*
       * Creating two human objects tom and joe
       * - objects are created at runtime
       */
      
      Human tom; // instance variable 'tom' of type Human
      
      tom = new Human(); // creates a new Human object for the variable 'tom'
      tom.age = 5;
      tom.eyeColor = "brown";
      tom.heightInInches = 72;
      tom.name = "Tom Mot";
      tom.speak();
      
      
      
      Human joe = new Human();
      joe.age = 43;
      joe.heightInInches = 82;
      joe.name = "Joe Eoj";
      joe.eyeColor = "green";
      joe.speak();
      
      
      /*
       * Constructor with parameters to avoid using reference variables to assign
       * characteristics to the Human objects
       */
      Human human1 = new Human("Rob", 25, 76, "blue");
      Human human2 = new Human("Ricky", 45, 64, "brown");
      
      human1.speak();
      human2.speak();
      
      
      Animal animal4 = new Animal("kitten", "Kyle", 1, 5, 21);
      animal4.obtainInfo();
   }
}
