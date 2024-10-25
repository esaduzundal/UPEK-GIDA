let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3500); // 3 saniyede bir değişim
}

function changeSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex - 1].classList.add('active');
}

function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
