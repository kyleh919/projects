var key = "86f9f7e3f9496123";

$(document).ready(function(){

    var myLat;
    var myLong;
    var wurl = "";


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
                    
            wurl = "https://api.wunderground.com/api/" + key + "/conditions/q/" + myLat + "," + myLong + ".json";
            console.log(wurl);

            $.getJSON(wurl, function(json){
                var tempF = json.current_observation.temp_f;
                var tempC = json.current_observation.temp_c;
                var loc = json.current_observation.display_location.full;
                var cond = json.current_observation.weather;
                var wind = json.current_observation.wind_string;
                var condImg = json.current_observation.icon_url;

                /* debug console logs */
                console.log(json);
                console.log("fahrenheit = " + tempF);
                console.log("celsius = " + tempC);
                console.log("condition = " + cond);
                /* end debug console logs */
                
                /* default values to show when page loads */
                $("#loc").html(loc);
                $("#condImg").attr("src", condImg);
                $("#cond").html(cond);
                $("#temp").html(tempF + "°F");
                // $("#wind").html(wind);
                /* end default values */

                $("#fBtn").click(function(){
                    $("#temp").html(tempF + "°F");
                });
                $("#cBtn").click(function(){
                    $("#temp").html(tempC + "°C");
                });
                
            });
            
        });
    
    }

    


});