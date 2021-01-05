const menuBtn = document.querySelector('.menu-btn');
const navNavbar = document.querySelector('.nav');

menuBtn.addEventListener('click', function(){
    navNavbar.classList.toggle('.nav__show')
});