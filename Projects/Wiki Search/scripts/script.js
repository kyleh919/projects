/*
Source: https://www.mediawiki.org/wiki/API:Search

Example: https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=nhl&srwhat=text&srprop=timestamp&srlimit=12&callback=?

action=query:       allows you to get information about a wiki and the data stored in it, such as the wikitext of a particular page,
                        the links and categories of a set of pages, or the token you need to change wiki content
list=search:        Search titles and text (10 times)
srsearch=nhl:       Search for all page titles (or content) that have this value of nhl
srwhat=text:        Search inside the text or titles (text in this case)
srprop=timestamp:   returns the timestamp
srlimit=12:         return 12 pages


useful sites:
http://stackoverflow.com/questions/2381642/returning-data-from-wikipedia-using-ajax
*showed callback=? is needed, it will tell jQuery to use JSONP, a way to do cross-site javascript call

http://www.9bitstudios.com/2014/03/getting-data-from-the-wikipedia-api-using-jquery/
*provided a useful ajax call

----------

https://en.wikipedia.org/wiki/Special:Random

*/

var wurl = ""

$(document).ready(function(){
    
    $("#search").click(function(){

        $("#page1").addClass("hide");
        $("#page2").removeClass("hide");

    });
    

    $("#closeBtn").click(function(){

        $("#page2").addClass("hide");
        $("#page1").removeClass("hide");


    });


        
    $("#searchBtn").click(function(){

        var userInput = $("#searchInput").val();
        var wurl = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + userInput + "&srwhat=text&srprop=timestamp&srlimit=12&callback=?";

        if(userInput == ""){
            alert("You must enter text to search prior to clicking the search button!");
        }
        else{

            $("#page2").addClass("hide");
            $("#page3").removeClass("hide");

            $.getJSON(wurl, function(json){
                console.log(json);
            });

        }
        


    });


    $("#backBtn").click(function(){

        $("#page3").addClass("hide");
        $("#page2").removeClass("hide");

    });


    $("#homeBtn").click(function(){

        $("#page3").addClass("hide");
        $("#page1").removeClass("hide");

    });

    




});