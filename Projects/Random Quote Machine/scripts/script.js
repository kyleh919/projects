/*
quoteAuthor: "Some Author"
quoteText: "Some quote."
*/
var qurl = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
var turl = "https://twitter.com/intent/tweet";

function randQuote() {
    $.getJSON(qurl,function(json) {
        
        var test = "Random quote here!"


        console.log("result is:")
        console.log(json);
        
        if(json.quoteAuthor === ""){
            return randQuote();
        }

        $("#quote").html(JSON.stringify(json.quoteText));
        $("#author").html(JSON.stringify(json.quoteAuthor));

        $("#tweetLink").attr("href", turl + "?text=" + "\"" + json.quoteText + "\"" + " via" + "&url=" + json.quoteLink);

    });
};


$(document).ready(function(){

    randQuote();

    $("#newQuote").click(function(){
        console.log("clicked the button!");
        randQuote();
    });

});

