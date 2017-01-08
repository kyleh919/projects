$(document).ready(function(){

    var myLat;
    var myLong;
    var wurl = "";


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
                    
            wurl = "http://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLong+"&appid=b23c7f46089700848d48456167e7329c"
            //wurl = "https://api.wunderground.com/api/86f9f7e3f9496123/conditions/q/" + myLat + "," + myLong + ".json";
            console.log(wurl);

            $.getJSON(wurl, function(json){
                var tempK;
                var tempF;
                var tempC;
                var loc;

                console.log(json);

                loc = json.name;
                cond = json.weather[0].main;
                console.log("condition = " + cond);

                tempK = json.main.temp;
                console.log("kelvin = " + tempK);

                tempF = Math.round(tempK * 9/5 - 459.67);
                console.log("fahrenheit = " + tempF);

                tempC = Math.round(tempK - 273.15);
                console.log("celsius = " + tempC);

                /* default values to show when page loads */
                switch(cond) {
                    case "Clouds":
                        $("body").css("background-image", "url(http://img01.deviantart.net/5bfa/i/2012/283/c/1/a_cloudy_day_by_mimose_stock-d5h3jow.jpg)");
                        break;
                    case "Snow":
                        $("body").css("background-image", "url(http://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/2/36/236ecaaa-aa62-11e5-a1ad-77993fe9c7b1/567c288a44667.image.jpg?resize=1200%2C800)");
                        break;
                }
                
                

                $("#loc").html(loc);
                $("#cond").html(cond);
                $("#temp").html(tempF + "°F");
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