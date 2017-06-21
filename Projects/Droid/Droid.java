/*
Droid is a class to create a Droid that can perform 4 actions:
activate
chargeBattery
checkBatteryLevel
hover

activate:
parameters = none
description = Activates droid and decreases battery level by 5 percent.
returns = none

chargeBattery:
parameters = hours: # hours to charge battery (1 hour = 1%)
description = Charges battery to a max of 100%.
returns = none

checkBatteryLevel:
parameters = none
description = Provides user with battery level remaining.
returns = batteryLevel

hover:
parameters = feet: # of feet to have droid hover
description = Hovers droid for x amount of feet and decreases battery by 20%
returns = none
*/

class Droid {
  int batteryLevel;
  
  public Droid() {
    batteryLevel = 100;
  }
  
  public void activate() {
    System.out.println("Activated. How can I help you?");
    
    batteryLevel = batteryLevel - 5;
    System.out.println("Battery level is: " + batteryLevel + " percent.");
  }
  
  public void chargeBattery(int hours) {
    System.out.println("Droid charging...");
    
    batteryLevel = batteryLevel + hours;
    
    if(batteryLevel > 100) {
      batteryLevel = 100;
      System.out.println("Battery level is: " + batteryLevel + " percent.");
    }
    else {
      System.out.println("Battery level is: " + batteryLevel + " percent.");
    }
  }
  
  public int checkBatteryLevel() {
    System.out.println("Battery level is: " + batteryLevel + " percent.");
    
    return batteryLevel;
  }
  
  public void hover(int feet) {
    if(feet > 5) {
      System.out.println("Error! I cannot hover above 5 feet.");
    }
    else {
      System.out.println("Hovering...");
      batteryLevel = batteryLevel - 20;
    }
    System.out.println("Battery level is: " + batteryLevel + " percent.");
  }
  
  static public void main(String[] args) {
    Droid myDroid = new Droid();
    myDroid.activate();
    myDroid.chargeBattery(5);
    myDroid.hover(1);
  }
}