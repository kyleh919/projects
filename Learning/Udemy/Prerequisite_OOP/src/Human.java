
public class Human
{
   String name;
   int age;
   int heightInInches;
   String eyeColor;
   
   /*
    * Constructor for the class Human
    * - constructors gives instructions for how objects of that class should be created
    */
//   public Human() {
//      age = 5;
//      eyeColor = "brown";
//      heightInInches = 72;
//      name = "Tom Mot";
//   }
   
   
   public Human() {
      
   }
   
   // 'this' keyword represents the current object
   public Human(String name, int age, int heightInInches, String eyeColor)
   {
      super();
      this.name = name;
      this.age = age;
      this.heightInInches = heightInInches;
      this.eyeColor = eyeColor;
   }
   
   
   // methods
   public void speak() {
      System.out.println("Hello, my name is " + name);
      System.out.println("I am " + heightInInches + " inches tall");
      System.out.println("I am " + age + " years old");
      System.out.println("My eye color is " + eyeColor);
   }

   public void eat() {
      System.out.println("eating...");
   }
   
   public void walk() {
      System.out.println("walking...");
   }
   
   public void work() {
      System.out.println("working...");
   }
}
