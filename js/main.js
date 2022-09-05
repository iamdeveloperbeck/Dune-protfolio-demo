const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.nav-overlay');

menuBtn.addEventListener('click', function() {
    if(menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
    } else {
        menuMobile.classList.add('show');
    }
});