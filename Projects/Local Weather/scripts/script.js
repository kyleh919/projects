
$(document).ready(function(){

    var myLat;
    var myLong;
    var wurl = "";


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
                    
            wurl = "http://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLong+"&appid=b23c7f46089700848d48456167e7329c"

            console.log(wurl);

            $.getJSON(wurl, function(json){
                var tempK;
                var tempF;
                var tempC;
                var loc;

                console.log(json);

                loc = json.name;
                cond = json.weather[0].main;

                tempK = json.main.temp;
                console.log("kelvin = " + tempK);

                tempF = Math.round(tempK * 9/5 - 459.67);
                console.log("fahrenheit = " + tempF);

                tempC = Math.round(tempK - 273.15);
                console.log("celsius = " + tempC);

                // default values to show when page loads
                $("#loc").html(loc);
                $("#cond").html(cond);
                $("#temp").html(tempF + "°F");

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