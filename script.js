let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.proyek-rumah');
  const totalSlides = 3;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  }

  const newTransform = `translateX(-${currentIndex * 105}%)`;
  slides.forEach(slide => {
    slide.style.transform = newTransform;
    slide.style.transition = "transform 0.5s ease";  // Optional: Tambahkan animasi
  });
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Inisialisasi slide pertama
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});

let activeSlideIndex = 0; // Ganti currentIndex menjadi activeSlideIndex
const slides = document.querySelectorAll('.slide');

function showSlide1(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide1() {
  activeSlideIndex = (activeSlideIndex + 1) % slides.length;
  showSlide1(activeSlideIndex);
}

function prevSlide1() {
  activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
  showSlide1(activeSlideIndex);
}

// Inisialisasi slide pertama sebagai aktif
showSlide1(activeSlideIndex);

