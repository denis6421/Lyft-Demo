$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 50) {
        $(".main_header").css("background-color" , "white").css("background" , "white");
        $(".main_header img:first-child").css("display", "none");
        $(".main_header img:last-child").css("display", "block");
    }else if (height < 50) {
        $(".main_header").css("background-color","rgba(51, 52, 71, 0)").css("background" , "linear-gradient(180deg, rgba(51, 52, 71, .7), rgba(51, 52, 71, 0))");
        $(".main_header img:first-child").css("display", "block");
        $(".main_header img:last-child").css("display", "none");
    }
});




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var p = document.getElementsByClassName("myP");
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length && p.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length && p.length} ;
    for (i = 0; i < x.length && i < p.length; i++) {
        x[i].style.display = "none" ;
        p[i].style.display = "none" ;

    }
    x[slideIndex-1].style.display = "block" ;
    p[slideIndex-1].style.display = "block" ;
};
