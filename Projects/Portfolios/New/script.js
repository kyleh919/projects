$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop(); // Return the vertical scrollbar position
    // var topDist = $()

    var divTop = $(".colEightBorder").position(); // Return the vertical scrollbar position
    var divBottom = divTop.top + $(".colEightBorder").height();

    console.log("");
    console.log("scrollTop = " + scrollTop);
    console.log("divTop = " + divTop.top);
    console.log("divBottom = " + divBottom);

    if((scrollTop >= divTop.top) && (scrollTop < divBottom)) {
        console.log("in div!");
    }


});