
$(document).ready(function(){

    var myLat;
    var myLong;
    var wurl = "";


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
        
            $(".test1").html("latitude: " + myLat + "<br>longitude: " + myLong);
            
            wurl = "http://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLong+"&appid=b23c7f46089700848d48456167e7329c"

            console.log(wurl);

            $.getJSON(wurl, function(json){
                var tempK;

                console.log(json);

                tempK = json.main.temp;
                console.log(tempK);

            });

        });
    }


});