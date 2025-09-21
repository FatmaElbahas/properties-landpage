  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#customCarousel');
    
    // Check if carousel exists before proceeding
    if (!carousel) {
      return;
    }
    
    const prevBtn = document.querySelector('[data-slide="prev"]');
    const nextBtn = document.querySelector('[data-slide="next"]');
    const indicators = document.querySelectorAll('[data-slide-to]');
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
      
      updateButtons(index);
    }

    function updateButtons(index) {
      if (prevBtn) {
        if (index === 0) {
          prevBtn.disabled = true;
          prevBtn.classList.add('disabled', 'opacity-50');
        } else {
          prevBtn.disabled = false;
          prevBtn.classList.remove('disabled', 'opacity-50');
        }
      }

      if (nextBtn) {
        if (index === totalSlides - 1) {
          nextBtn.disabled = true;
          nextBtn.classList.add('disabled', 'opacity-50');
        } else {
          nextBtn.disabled = false;
          nextBtn.classList.remove('disabled', 'opacity-50');
        }
      }
    }

    function nextSlide() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        showSlide(currentIndex);
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });

    showSlide(0);
  });
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 600) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
