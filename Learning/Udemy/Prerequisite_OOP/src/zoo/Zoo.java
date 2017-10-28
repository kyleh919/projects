package zoo;

public class Zoo
{
   public static void main(String args[]) {
      Animal animal1 = new Animal("lizard", "Toby", 1, 8, 45);
      Animal animal2 = new Animal("ardvark", "Arby", 3, 43, 65);
      Animal animal3 = new Animal("lion", "Larry", 5, 124, 78);
      
      animal1.obtainInfo();
      animal2.obtainInfo();
      animal3.obtainInfo();
      
      Fish fish1 = new Fish("trout", "Bob", 2, 3, 4);
      fish1.obtainInfo();
   }
}
