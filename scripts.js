let slideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const slides = document.querySelectorAll('.slides img');
const slideInterval = 3500; // 3.5 saniye

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
    slideIndex = (slideIndex + 1) % slides.length; // Döngüsel slide
    setTimeout(showSlides, slideInterval);
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length; // Döngüsel slide
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // Menüye 'active' sınıfı ekler/kaldırır
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX; // İlk dokunma noktasını al
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX; // Hareketin son noktasını al

    if (touchStartX - touchEndX > 50) {
        changeSlide(1); // Sağdan sola kaydırma
    } else if (touchStartX - touchEndX < -50) {
        changeSlide(-1); // Soldan sağa kaydırma
    }
}

document.querySelector('.slides').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.slides').addEventListener('touchmove', handleTouchMove, false);

// Başlangıçta otomatik slide gösterimi başlat
showSlides();