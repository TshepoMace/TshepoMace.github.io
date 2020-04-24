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

  //Script for gallery
  var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); 
  quad.classList.toggle("full") }); 
}
