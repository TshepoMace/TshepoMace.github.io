window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    logo.children[0].src = 'images/logo222.png';
  } else {
    nav.classList.remove('scrolled');
  }
});


const hb = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const links = menu.querySelectorAll("a");

function toggleMenu() {
  hb.classList.toggle("active");
  menu.classList.toggle("active");

  // Set height dynamically
  if (menu.classList.contains("active")) {
    menu.style.height = menu.scrollHeight + "px";
  } else {
    menu.style.height = "0";
  }
}

hb.addEventListener("click", toggleMenu);

links.forEach(link => {
  link.addEventListener("click", () => {
    hb.classList.remove("active");
    menu.classList.remove("active");
    menu.style.height = "0";
  });
});

// Optional: Reset height if window resizes
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.style.height = '80vh';
  }
});