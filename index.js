// JavaScript code to handle image slider functionality
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// JavaScript for responsive navigation
document.addEventListener('DOMContentLoaded', function() {
    var mobileNav = document.querySelector('nav.mobile');
    var navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fa fa-bars"></i>';
    mobileNav.appendChild(navToggle);

    navToggle.addEventListener('click', function() {
        var navList = document.querySelector('nav.mobile ul');
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });
});
