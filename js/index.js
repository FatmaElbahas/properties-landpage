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

// Dynamic Properties Data
const propertiesData = [
  {
    id: 1,
    title: "VINDERA The Valley",
    image: "./images/3-1-1.jpg",
    type: "Townhouse",
    typeIcon: "fa-house-chimney",
    location: "The Valley, Dubai",
    price: "From AED 3,070,000",
    bedrooms: "3-4 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 2,
    title: "Solea",
    image: "./images/2-4-1.jpg",
    type: "Apartments",
    typeIcon: "fa-building",
    location: "Al Saadiyat Island, Abu Dhabi",
    price: "From AED 1,750,000",
    bedrooms: "1-4 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 3,
    title: "SAAS Heights",
    image: "./images/3-1-1.jpg",
    type: "Duplex, Apartments",
    typeIcon: "fa-city",
    location: "Al Reem Island, Abu Dhabi",
    price: "From AED 2,200,000",
    bedrooms: "1-3 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 4,
    title: "Rise by Athlon",
    image: "./images/3-1-1.jpg",
    type: "Apartments",
    typeIcon: "fa-building",
    location: "Dubailand, Dubai",
    price: "From AED 1,350,000",
    bedrooms: "1 - 3 Bedroom",
    detailsUrl: "#"
  },
  {
    id: 5,
    title: "Marina Heights",
    image: "./images/3-1-1.jpg",
    type: "Luxury Apartments",
    typeIcon: "fa-building",
    location: "Dubai Marina, Dubai",
    price: "From AED 2,500,000",
    bedrooms: "2-4 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 6,
    title: "Palm Gardens",
    image: "./images/2-4-1.jpg",
    type: "Villas",
    typeIcon: "fa-house-chimney",
    location: "Palm Jumeirah, Dubai",
    price: "From AED 8,500,000",
    bedrooms: "5-7 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 7,
    title: "Business Bay Tower",
    image: "./images/3-1-1.jpg",
    type: "Commercial & Residential",
    typeIcon: "fa-city",
    location: "Business Bay, Dubai",
    price: "From AED 1,800,000",
    bedrooms: "Studio - 3 Bedrooms",
    detailsUrl: "#"
  },
  {
    id: 8,
    title: "Al Reem Residences",
    image: "./images/2-4-1.jpg",
    type: "Apartments",
    typeIcon: "fa-building",
    location: "Al Reem Island, Abu Dhabi",
    price: "From AED 1,950,000",
    bedrooms: "1-4 Bedrooms",
    detailsUrl: "#"
  }
];

// Function to generate property card HTML
function generatePropertyCard(property) {
  return `
    <div class="swiper-slide">
      <div class="discover-card bg-white rounded-4 shadow-lg h-100 p-3">
        <img src="${property.image}" alt="${property.title}" class="img-fluid">
        <div class="discover-content d-flex flex-column justify-content-center">
          <h3 class="discover-title text-center">${property.title}</h3>
          <ul class="list-unstyled small text-muted mb-3 discover-list d-flex flex-column justify-content-center gap-2">
            <li class="d-flex align-items-center gap-2">
              <i class="fa-solid ${property.typeIcon} icon"></i>
              <span>${property.type}</span>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-location-dot icon"></i>
              <span>${property.location}</span>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-sack-dollar icon"></i>
              <span>${property.price}</span>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-bed icon"></i>
              <span>${property.bedrooms}</span>
            </li>
          </ul>
        </div>
        <a href="${property.detailsUrl}" class="btn btn-discover rounded-5">More Details</a>
      </div>
    </div>
  `;
}

// Function to populate swiper with dynamic data
function populateDiscoverSwiper() {
  const swiperWrapper = document.querySelector('.discover-swiper .swiper-wrapper');
  
  if (swiperWrapper) {
    // Clear existing slides
    swiperWrapper.innerHTML = '';
    
    // Generate slides from data
    propertiesData.forEach(property => {
      swiperWrapper.insertAdjacentHTML('beforeend', generatePropertyCard(property));
    });
    
    // Reinitialize swiper after content is loaded
    if (window.discoverSwiper) {
      window.discoverSwiper.destroy(true, true);
    }
    
    window.discoverSwiper = new Swiper('.discover-swiper', {
      loop: true,
      spaceBetween: 18,
      slidesPerView: 1.15,
      navigation: {
        nextEl: '.discover-next1',
        prevEl: '.discover-prev1'
      },
      breakpoints: {
        576: { slidesPerView: 1.6, spaceBetween: 18 },
        768: { slidesPerView: 2.2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 22 },
        1200: { slidesPerView: 3, spaceBetween: 22 }
      }
    });
  }
}

// Initialize dynamic swiper when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for other scripts to load
  setTimeout(() => {
    populateDiscoverSwiper();
  }, 500);
});

// Also try to initialize after window load
window.addEventListener('load', function() {
  setTimeout(() => {
    populateDiscoverSwiper();
  }, 200);
});

// Function to add new property (for future use)
function addNewProperty(propertyData) {
  propertiesData.push(propertyData);
  populateDiscoverSwiper();
}

// Function to update property (for future use)
function updateProperty(id, updatedData) {
  const index = propertiesData.findIndex(prop => prop.id === id);
  if (index !== -1) {
    propertiesData[index] = { ...propertiesData[index], ...updatedData };
    populateDiscoverSwiper();
  }
}

// Function to remove property (for future use)
function removeProperty(id) {
  const index = propertiesData.findIndex(prop => prop.id === id);
  if (index !== -1) {
    propertiesData.splice(index, 1);
    populateDiscoverSwiper();
  }
}
