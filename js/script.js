const menuBtn = document.querySelector('.menu-btn');
const navNavbar = document.querySelector('.nav__navbar');


menuBtn.addEventListener('click', function(){
    navNavbar.classList.toggle('.nav__navbar--show')
});