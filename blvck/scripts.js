const navbar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    mobile.classList.toggle('show');
    
});


window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});