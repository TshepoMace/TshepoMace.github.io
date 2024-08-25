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


function toggleMenu() {
  var menu = document.querySelector('.menu');
  var hamburger = document.querySelector('.hamburger-menu');

  menu.classList.toggle('show');
  hamburger.classList.toggle('close');
}

document.addEventListener("DOMContentLoaded", () => {
  const headerText = document.getElementById("header-text");
  const words = headerText.textContent.split(' ');
  headerText.innerHTML = words.map((word, index) => {
      if (index === words.length - 1) {
          return `<span class="fade-in-word cursive">${word}</span>`;
      } else {
          return `<span class="fade-in-word">${word}</span>`;
      }
  }).join(' ');

  const spans = document.querySelectorAll('.fade-in-word');
  spans.forEach((span, index) => {
      setTimeout(() => {
          span.style.opacity = 1;
          span.classList.add("glow");
      }, index * 500); // Adjust the delay time (500ms) as needed
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});