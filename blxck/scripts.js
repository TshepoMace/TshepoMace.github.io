const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.scrollY > 20){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }});


document.querySelectorAll('.item').forEach(item => {
        const span = Math.floor(Math.random() * 20) + 18;
        item.style.gridRow = `span ${span}`;
      });