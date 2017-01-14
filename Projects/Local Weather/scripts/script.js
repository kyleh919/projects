/* via wunderground api: https://www.wunderground.com/weather/api/d/docs?MR=1 */
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
            // console.log(wurl);
            
            $.getJSON(wurl, function(json){
                var tempF = json.current_observation.temp_f;
                var tempC = json.current_observation.temp_c;
                var loc = json.current_observation.display_location.full;
                var cond = json.current_observation.weather;
                var condImg = json.current_observation.icon_url;
                var icon = json.current_observation.icon;
                var iurl;

                /* debug console logs */
                // console.log(json);
                // console.log("fahrenheit = " + tempF);
                // console.log("celsius = " + tempC);
                // console.log("condition = " + cond);
                /* end debug console logs */
                
                $("#locFind").addClass("hide");
                $("#alert").addClass("hide");
                $("div").removeClass("hide");

                /* default values to show when page loads */
                $("#loc").html(loc);
                $("#condImg").attr("src", condImg);
                $("#cond").html(cond);
                $("#temp").html(tempF + "°F");

                switch(icon) {
                    // snow
                    case "chanceflurries":
                    case "chancesnow":
                    case "snow":
                    case "nt_chanceflurries":
                    case "nt_chancesnow":
                    case "nt_snow":
                        iurl = "https://static.pexels.com/photos/6993/snow-winter-christmas-deer.jpg";
                        break;

                    // rain
                    case "chancerain":
                    case "rain":
                    case "nt_chancerain":
                    case "nt_rain":
                        iurl = "http://tommycarwash.com/blog/wp-content/uploads/2015/08/rain.jpg";
                        break;

                    // sleet
                    case "chancesleet":
                    case "sleet":
                    case "nt_chancesleet":
                    case "nt_sleet":
                        iurl = "https://i.ytimg.com/vi/AhBFanbd6Ng/maxresdefault.jpg";
                        break;
                    
                    // thunderstorms
                    case "chancetstorms":
                    case "tstorms":
                    case "nt_chancetstorms":
                    case "nt_tstorms":
                        iurl = "http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg";
                        break;

                    // fog or hazy
                    case "fog":
                    case "hazy":
                    case "nt_fog":
                    case "nt_hazy":
                        iurl = "https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg";
                        break;

                    // sunny & cloudy day
                    case "mostlycloudy":
                    case "mostlysunny":
                    case "partlycloudy":
                    case "partlysunny":
                        iurl = "http://wlpapers.com/images/sun-through-the-clouds-1.jpg";
                        break;

                    // night & cloudy
                    case "nt_mostlycloudy":
                    case "nt_mostlysunny":
                    case "nt_partlycloudy":
                    case "nt_partlysunny":
                        iurl = "http://eskipaper.com/images/night-clouds-moon-1.jpg";
                        break;

                    // sunny
                    case "sunny":
                    case "clear":
                        iurl = "http://pics4.city-data.com/cpicc/cfiles8353.jpg";
                        break;

                    // night clear
                    case "nt_sunny":
                    case "nt_clear":
                        iurl = "http://i.imgur.com/HF3Xxg1.jpg";
                        break;

                    // cloudy
                    case "cloudy":
                        iurl = "http://kingofwallpapers.com/cloudy/cloudy-002.jpg";
                        break;

                    default:
                        iurl = "";
                        break;
                }

                if(iurl !== "") {
                    $('body').css({'background': 'url(' + iurl + ') no-repeat center center fixed', 'background-size': 'cover'});
                }
                /* end default values */

                $("#btn").on("click", function(){
                    if($("#btn").html() == "Fahrenheit") {
                        $("#temp").html(tempF + "°F");
                        $("#btn").html("Celsius");
                        $('#btn').css("background-color", "#a6d8a8");

                    }
                    else if($("#btn").html() == "Celsius") {
                        $("#temp").html(tempC + "°C");
                        $("#btn").html("Fahrenheit");
                        $('#btn').css("background-color", "#4eb151");
                    }
                });
            });
        });
    }
});