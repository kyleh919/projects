var user = prompt("You're skating down the ice and have a breakaway, where do you shoot?! High glove, low glove, high stick side, low stick side, five hole, or at the goalies face?").toLowerCase();

switch(user)
{
    case("high glove"):
        var shotType = prompt("Is it a: slap shot, wrist shot, or deke?").toLowerCase();
        if(shotType === "slap shot" || shotType === "deke")
        {
            console.log("You would score every time!");
        }
        else if(shotType === "wrist shot" && user === "high glove")
        {
            console.log("You can definitely snipe that shot selection!");
        }
        break;
    case("low glove"):
        break;
    case("high stick side"):
        break;
    case("low stick side"):
        break;
    case("five hole"):
        break;
    case("at the goalies face"):
        break;
    default:
        break;
}