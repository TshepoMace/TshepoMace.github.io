$(document).ready(function(){
    $('header').height($(window).height());
})


function toggleMenu() {
    $("#hamburgerMenu").toggleClass("collapsed");  
    $(".aa-mobile-overlay").animate({
          height: "toggle",
          opacity: "toggle"
      }, 300);
  }