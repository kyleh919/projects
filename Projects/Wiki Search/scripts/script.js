/* via wunderground api: https://www.wunderground.com/weather/api/d/docs?MR=1 */
var key = "86f9f7e3f9496123";

$(document).ready(function(){

    var myLat;
    var myLong;
    var wurl = "";


                    
    wurl = "https://api.wunderground.com/api/" + key + "/conditions/q/" + myLat + "," + myLong + ".json";
    
    $.getJSON(wurl, function(json){

        
            
    });
});