package zoo;

public class Animal
{
   private String type;
   private String name;
   private int age;
   private int weight;
   private int height;
   
   
   public Animal(String type, String name, int age, int weight, int height)
   {
      super();
      this.type = type;
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
   }
   
   // setters
   public void setAge(int newAge) {
      this.age = newAge;
   }
   
   public void setWeight(int newWeight) {
      this.weight = newWeight;
   }
   
   public void setHeight(int newHeight) {
      this.height = newHeight;
   }
   
   
   
   // getters
   public String getType() {
      return this.type;
   }
   
   public String getName() {
      return this.name;
   }
   
   public int getAge() {
      return this.age;
   }
   
   public int getWeight() {
      return this.weight;
   }
   
   public int getHeight() {
      return this.height;
   }
   
   
   // methods
   public void obtainInfo() {
      System.out.println("This is a " + this.type + " named " + this.name + ".");
      System.out.println(this.name + " is " + this.age + " year(s) old.");
      System.out.println("It weighs " + this.weight + " pounds and is " + this.height + " inches tall.");
   }
   
   public void eat() {
      System.out.println("Eating...");
   }
   
   
}
