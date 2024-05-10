// Get the navigation element
var nav = document.getElementById('main-nav');

// Function to handle scroll event
function handleScroll() {
    // Check if the page has been scrolled down
    if (window.scrollY > 0) {
        // Add a class to change the background color
        nav.classList.add('scrolled');
    } else {
        // Remove the class if the page is at the top
        nav.classList.remove('scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }