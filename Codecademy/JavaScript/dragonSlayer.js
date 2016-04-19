var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;

while(slaying)
{
    if(youHit)
    {
        console.log("Congratulations! You hit the dragon with a damage score of " + damageThisRound + "!");
        
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4)
        {
            console.log("You're a dragon slayer! Right on!");
            slaying = false;
        }
        else
        {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else
    {
        
        console.log("You've been defeated! Train harder!");
        
    }
    
    slaying = false;
}