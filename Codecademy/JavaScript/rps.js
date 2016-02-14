var userChoice = prompt("Do you choose rock, paper, rope or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.25)
{
	computerChoice = "rock";
}
else if(computerChoice >= 0.25 && computerChoice < 0.5)
{
	computerChoice = "paper";
}
else if(computerChoice >= 0.5 && computerChoice < 0.75)
{
	computerChoice = "scissors";
}
else
{
    computerChoice = "rope";
}

console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        //return "The result is a tie!";
        choice1 = prompt("The result is a tie! Please resubmit a new entry: do you choose rock, paper, rope or scissors?");
    }
    if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else if(choice2 === "rope")
        {
            return "rope wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if(choice1 ==="paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else if(choice2 === "rope")
        {
            return "rope wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    else if(choice1 ==="scissors")
    {
        if(choice2 === "rock")
        {
            return "rock wins";
        }
        else if(choice2 === "rope")
        {
            return "rope wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    else if(choice1 ==="rope")
    {
        return "rope wins";
    }
    else
    {
        return "I'm afraid I don't know what that is!";
    }
};


compare(userChoice, computerChoice);