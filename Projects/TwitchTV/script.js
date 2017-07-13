
var turl = "https://wind-bow.gomix.me/twitch-api"
var defaultUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];



function getData(type, id) {
    
    var url = "https://wind-bow.glitch.me/twitch-api/users/freecodecamps";//freecodecamp";
    console.log("user = " + id);

    $.getJSON(url, function(result) {
        console.log(result);

        var logo = result.logo;
        var display_name = result.display_name;
        var name = result.name;

        console.log("display_name = " + display_name);


    });
}


function defaultDisplay() {
    
    var colContainer, contentContainer, containerFluidSty;
    var numDefaults = defaultUsers.length;

    // add style to show border, that its been added
    containerFluidSty = "background-color: blue;";

    colContainer = document.createElement("div");
    colContainer.setAttribute("class", "container-fluid");
    colContainer.setAttribute("id", containerFluidSty);
    contentContainer = document.getElementById("content");
    contentContainer.appendChild(colContainer);

    for(var user in defaultUsers) {
        var currUser = defaultUsers[user];

        getData("users", currUser);
        


    }
}


$(document).ready(function(){
    defaultDisplay();


});