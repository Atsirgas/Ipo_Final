let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });
    slides[index].style.opacity = 1;
}

document.getElementById('next').onclick = function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

document.getElementById('prev').onclick = function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};