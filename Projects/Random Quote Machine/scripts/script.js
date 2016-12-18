// qurl = api link for random quotes
/*
quoteAuthor: "Some Author"
quoteText: "Some quote."
*/
// turl = twitter url for tweeting
var qurl = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
var turl = "https://twitter.com/intent/tweet";
var prevBgColor = 0; /* place holder for previous background color */

/* generates a random number 0-9 to set the background for every new quote generated */
function randBgColor() {

    // light blue, black, light red, light green, light purple, gold, blue, gray, orange, pink
    var possibleColors = ["87cefa", "000000", "ff9980", "99ff99", "dab3ff", "ffcc66", "4da6ff", "e6e6e6", "ffaa80", "ffb3d1"];
    var randNum = 0;
    var newBg = 0;

    randNum = Math.random() * 10;
    randNum = Math.floor(randNum);

    /* if the new random number is ever equal to the previous random number, regenerate until it is different so there are no repeat colors */
    while(randNum === prevBgColor) {
        randNum = Math.random() * 10;
        randNum = Math.floor(randNum);
    }
    
    prevBgColor = randNum;
    newBg = possibleColors[randNum];
    return newBg;
}

/* calls a random quote api and obtains the JSON for the given quote. This JSON is used to display quote properties */
function randQuote() {
    $.getJSON(qurl, function(json){
   
        var author = json.quoteAuthor;
        var authorLen = author.length;
        var quote = json.quoteText;
        var quoteLen = quote.length;
        var newColor = 0;

        console.log(json);
        
        /* recall to the function if the author is blank (don't want any blank authors) */
        if(json.quoteAuthor === ""){
            return randQuote();
        }

        /* quoteAuthor can sometimes contain a miscellaneous space in the last in which I check for
        that space in the last index and slice it off if it is there. Same with the quoteText key (also can have 2 spaces, hence the 
        second check */ 
        if(author[authorLen-1] === " "){
            author = author.slice(0,-1);
        }
        $("#author").html("-" + author);

        if(quote[quoteLen-1] === " "){
            quote = quote.slice(0,-1);
        }
        if(quote[quoteLen-2] === " "){
            quote = quote.slice(0,-1);
        }
        $("#quote").html("\"" + quote + "\"");

        /* if the length of the quote is greater than 94 characters, chop off the rest and add ... for the
            tweet. tweets can be max 140 characters and 94 characters accounts for the 2 quotation marks and
            the associated text */
        if(quoteLen > 94){
            quote = quote.slice(0,94);
            quote += "...";
        }
        $("#tweetLink").attr("href", turl + "?text=" + "\"" + quote + "\"" + " via" + "&url=" + json.quoteLink);

        /* assigns a random page background color */
        newColor = randBgColor();
        if(newColor === "000000"){
            $("#creditText").css("color", "#ffffff");
        }
        else{
            $("#creditText").css("color", "#000000");
        }
        $("body").css("background", "#" + newColor);
    });
};

/* everytime the New Quote button is clicked a new quote and author will be displayed, along with a new background color */
$(document).ready(function(){

    randQuote();

    $("#newQuote").click(function(){
        randQuote();
    });

});

