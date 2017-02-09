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

function dispResults(json) {
    // console.log(json);

    var NUM_QUERY_RESULTS = json.query.search.length;
    var searchResults = json.query.search;
    var index, currentTitle, resultsDiv, wikiLink, linebreak;

    for(index=0; index < NUM_QUERY_RESULTS; index++) {
        currentTitle = searchResults[index].title;
        // console.log(currentTitle);

        /* this creates an anchor element for the wiki link of each query result. the href and target 
        attributes are set accordingly and then the anchor element is added to the query results div.
        additionally, a line break is added to seperate each link */
        wikiLink = document.createElement('a');
        wikiLink.setAttribute('href',"https://en.wikipedia.org/wiki/"+currentTitle);
        wikiLink.setAttribute('target',"_blank");
        wikiLink.innerText = currentTitle;
        resultsDiv = document.getElementById("queryResults");
        resultsDiv.appendChild(wikiLink);

        linebreak = document.createElement('br');
        // resultsDiv = document.getElementById("queryResults");
        resultsDiv.appendChild(linebreak);

    }

}

function search(input, jsonUrl) {

    if(input == "") {
        alert("You must enter text to search prior to clicking the search button!");
    }
    else {
        $.getJSON(jsonUrl, function(json) {
            dispResults(json);
        });

        $("#page2").addClass("hide");
        $("#page3").removeClass("hide");
    }
}


$(document).ready(function() {
    
    // clicking the user input search on page 1 to query wikipedia
    // page 1 -> page 2
    $("#search").click(function() {
        $("#page1").addClass("hide");
        $("#page2").removeClass("hide");
    });
    
    // clicking the close button on page 2, which brings you to page 1
    // page 2 -> page 1
    $("#closeBtn").click(function() {
        $("#page2").addClass("hide");
        $("#page1").removeClass("hide");
    });

    // if the search button is clicked, perform a search on the text within the input field
    // page 2 -> page 3
    $("#searchBtn").click(function() {

        var userInput = $("#searchInput").val();
        var wurl = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + userInput + "&srwhat=text&srprop=timestamp&srlimit=12&callback=?";

        search(userInput, wurl);
        
    });

    // if the users keystroke is enter after typing in the searchbar, perform a search on the text within the input field
    // page 2 -> page 3
    $("#searchInput").on('keyup', function (e) {
        if (e.keyCode == 13) {
            var userInput = $("#searchInput").val();
            var wurl = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + userInput + "&srwhat=text&srprop=timestamp&srlimit=12&callback=?";

            search(userInput, wurl);
        }
    });

    $("#backBtn").click(function() {

        $("#page3").addClass("hide");
        $("#page2").removeClass("hide");

        // empties the div of it's children to remove the query result links
        $("#queryResults").empty();

    });


    $("#homeBtn").click(function() {

        $("#page3").addClass("hide");
        $("#page1").removeClass("hide");

        // empties the div of it's children to remove the query result links
        $("#queryResults").empty();
        // clears out the previous search input
        $("#searchInput").val("");

    });

    




});