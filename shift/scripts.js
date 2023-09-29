const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll", () => {
    if (window.scrollY < 80) { // Adjust the scroll threshold as needed
        navbar.style.backgroundColor = "transparent"; // Make navbar transparent
        navbar.style.boxShadow = "none";
        navLinks.forEach(link => {
            link.classList.remove("black-text");
        });
    } else {
        navbar.style.backgroundColor = "#fff"; // Restore solid background color
        navbar.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
        navLinks.forEach(link => {
            link.classList.add("black-text"); 
        });

    }
});


function toggleMenu() {
    $("#hamburgerMenu").toggleClass("collapsed");  
    $(".aa-mobile-overlay").animate({
          height: "toggle",
          opacity: "toggle"
      }, 300);
  }
