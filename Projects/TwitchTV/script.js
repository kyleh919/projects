
var turl = "https://wind-bow.gomix.me/twitch-api"
var defaultUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getUrl(input) {
    return turl + "/users/" + input;
}

// function defaultStatus() {

// }


$(document).ready(function(){


    console.log("turl = " + turl);
    console.log("default user list = " + defaultUsers);

    // defaultStatus();
    var newUrl = getUrl("freecodecamp");
    console.log(newUrl);


});