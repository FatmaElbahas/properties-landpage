/**
 * Properties Website JavaScript
 * Main functionality for carousels, swipers, and interactive elements
 */

// ============================================================================
// GLOBAL VARIABLES
// ============================================================================

// Properties data for dynamic content
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

// Gallery state management
window.galleryState = {
  currentSlideIndex: 0,
  currentCardIndex: 0
};

// ============================================================================
// CAROUSEL FUNCTIONALITY
// ============================================================================

/**
 * Initialize custom carousel functionality
 */
function initializeCarousel() {
  const carousel = document.querySelector('#customCarousel');
  
  if (!carousel) return;
  
  const prevBtn = document.querySelector('[data-slide="prev"]');
  const nextBtn = document.querySelector('[data-slide="next"]');
  const indicators = document.querySelectorAll('[data-slide-to]');
  const slides = carousel.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  let currentIndex = 0;

  /**
   * Show specific slide
   * @param {number} index - Slide index to show
   */
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    
    updateButtons(index);
  }

  /**
   * Update button states based on current slide
   * @param {number} index - Current slide index
   */
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

  /**
   * Move to next slide
   */
  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  /**
   * Move to previous slide
   */
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  // Event listeners
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

  // Initialize first slide
  showSlide(0);
}

// ============================================================================
// NAVBAR SCROLL EFFECT
// ============================================================================

/**
 * Initialize navbar scroll effect
 */
function initializeNavbarScroll() {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 600) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ============================================================================
// PROPERTIES DATA MANAGEMENT
// ============================================================================

/**
 * Generate HTML for property card
 * @param {Object} property - Property data object
 * @returns {string} HTML string for property card
 */
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

/**
 * Populate discover swiper with dynamic data
 */
function populateDiscoverSwiper() {
  const swiperWrapper = document.querySelector('.discover-swiper .swiper-wrapper');
  
  if (!swiperWrapper) return;
  
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
    slidesPerView: 1,
    navigation: {
      nextEl: '.discover-next1',
      prevEl: '.discover-prev1'
    },
    breakpoints: {
      0:   { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
      576: { slidesPerView: 1, spaceBetween: 18, centeredSlides: true },
      768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
      992: { slidesPerView: 3, spaceBetween: 22 },
      1200: { slidesPerView: 4, spaceBetween: 22 }
    }
  });
}

/**
 * Add new property to data array
 * @param {Object} propertyData - New property data
 */
function addNewProperty(propertyData) {
  propertiesData.push(propertyData);
  populateDiscoverSwiper();
}

/**
 * Update existing property data
 * @param {number} id - Property ID
 * @param {Object} updatedData - Updated property data
 */
function updateProperty(id, updatedData) {
  const index = propertiesData.findIndex(prop => prop.id === id);
  if (index !== -1) {
    propertiesData[index] = { ...propertiesData[index], ...updatedData };
    populateDiscoverSwiper();
  }
}

/**
 * Remove property from data array
 * @param {number} id - Property ID to remove
 */
function removeProperty(id) {
  const index = propertiesData.findIndex(prop => prop.id === id);
  if (index !== -1) {
    propertiesData.splice(index, 1);
    populateDiscoverSwiper();
  }
}

// ============================================================================
// DISCOVER SWIPER INITIALIZATION
// ============================================================================

/**
 * Initialize discover section swiper
 */
function initializeDiscoverSwiper() {
  new Swiper('.discover-swiper', {
    loop: true,
    spaceBetween: 18,
    slidesPerView: 1,
    navigation: {
      nextEl: '#discoverNext',
      prevEl: '#discoverPrev'
    },
    breakpoints: {
      0:   { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
      576: { slidesPerView: 1, spaceBetween: 18, centeredSlides: true },
      768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
      992: { slidesPerView: 3, spaceBetween: 22 },
      1200:{ slidesPerView: 4, spaceBetween: 22 }
    }
  });
}

// ============================================================================
// GALLERIES FUNCTIONALITY
// ============================================================================

/**
 * Initialize galleries swipers and functionality
 */
function initializeGalleries() {
  let exteriorSwiper = null;
  let interiorSwiper = null;
  
  /**
   * Initialize swipers for slide navigation
   */
  function initializeSwipers() {
    // Destroy existing swipers if they exist
    if (exteriorSwiper) {
      exteriorSwiper.destroy(true, true);
    }
    if (interiorSwiper) {
      interiorSwiper.destroy(true, true);
    }
    
    // Initialize Exterior Swiper
    const exteriorContainer = document.querySelector('#exterior .galleries-swiper');
    if (exteriorContainer) {
      exteriorSwiper = new Swiper(exteriorContainer, {
        slidesPerView: 2,
        spaceBetween: 25,
        loop: false,
        centeredSlides: true,
        centeredSlidesBounds: true,
        pagination: {
          el: '#exterior .swiper-pagination',
          clickable: true,
        },
        allowTouchMove: false,
        breakpoints: {
          992: { slidesPerView: 2, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: false },
          576: { slidesPerView: 1, centeredSlides: true },
          0:   { slidesPerView: 1, centeredSlides: true }
        }
      });
    }
    
    // Initialize Interior Swiper
    const interiorContainer = document.querySelector('#interior .galleries-swiper');
    if (interiorContainer) {
      interiorSwiper = new Swiper(interiorContainer, {
        slidesPerView: 2,
        spaceBetween: 25,
        loop: false,
        centeredSlides: true,
        centeredSlidesBounds: true,
        pagination: {
          el: '#interior .swiper-pagination',
          clickable: true,
        },
        allowTouchMove: false,
        breakpoints: {
          992: { slidesPerView: 2, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: false },
          576: { slidesPerView: 1, centeredSlides: true },
          0:   { slidesPerView: 1, centeredSlides: true }
        }
      });
    }
  }
  
  /**
   * Initialize tab functionality
   */
  function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
        
        // Reset to first slide when switching tabs
        window.galleryState.currentSlideIndex = 0;
        window.galleryState.currentCardIndex = 0;
        if (targetTab === 'exterior' && exteriorSwiper) {
          exteriorSwiper.slideTo(0);
        } else if (targetTab === 'interior' && interiorSwiper) {
          interiorSwiper.slideTo(0);
        }
        
        // Update button states after tab switch
        updateButtonStates();
      });
    });
  }
  
  /**
   * Initialize navigation buttons
   */
  function initializeNavigation() {
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab-content.active');
        console.log('Previous button clicked, active tab:', activeTab.id);
        showPreviousCard();
      });
      nextBtn.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab-content.active');
        console.log('Next button clicked, active tab:', activeTab.id);
        showNextCard();
      });
    } else {
      console.log('Buttons not found:', { prevBtn, nextBtn });
    }
  }

  /**
   * Show next card in gallery
   */
  function showNextCard() {
    console.log('showNextCard called, currentCardIndex:', window.galleryState.currentCardIndex);
    const activeTab = document.querySelector('.tab-content.active');
    const slides = activeTab.querySelectorAll('.swiper-slide');
    
    const totalCards = slides.length;
    console.log('Total cards:', totalCards, 'Current card:', window.galleryState.currentCardIndex);
    
    if (window.galleryState.currentCardIndex < totalCards - 1) {
      window.galleryState.currentCardIndex++;
      
      const newSlideIndex = window.galleryState.currentCardIndex;
      console.log('Slide calculation:', {
        currentCardIndex: window.galleryState.currentCardIndex,
        newSlideIndex: newSlideIndex,
        currentSlideIndex: window.galleryState.currentSlideIndex,
        needsSlideChange: newSlideIndex !== window.galleryState.currentSlideIndex
      });
      
      if (newSlideIndex !== window.galleryState.currentSlideIndex) {
        console.log('Moving to slide:', newSlideIndex);
        window.galleryState.currentSlideIndex = newSlideIndex;
        
        if (activeTab.id === 'exterior' && exteriorSwiper) {
          console.log('Moving exterior swiper to slide:', newSlideIndex);
          exteriorSwiper.slideTo(window.galleryState.currentSlideIndex);
        } else if (activeTab.id === 'interior' && interiorSwiper) {
          console.log('Moving interior swiper to slide:', newSlideIndex);
          interiorSwiper.slideTo(window.galleryState.currentSlideIndex);
        }
      } else {
        console.log('No slide change needed - staying on same slide');
      }
      
      updateButtonStates();
    }
  }

  /**
   * Show previous card in gallery
   */
  function showPreviousCard() {
    console.log('showPreviousCard called, currentCardIndex:', window.galleryState.currentCardIndex);
    if (window.galleryState.currentCardIndex > 0) {
      window.galleryState.currentCardIndex--;
      
      const newSlideIndex = window.galleryState.currentCardIndex;
      console.log('Previous slide calculation:', {
        currentCardIndex: window.galleryState.currentCardIndex,
        newSlideIndex: newSlideIndex,
        currentSlideIndex: window.galleryState.currentSlideIndex,
        needsSlideChange: newSlideIndex !== window.galleryState.currentSlideIndex
      });
      
      if (newSlideIndex !== window.galleryState.currentSlideIndex) {
        console.log('Moving to previous slide:', newSlideIndex);
        window.galleryState.currentSlideIndex = newSlideIndex;
        
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab.id === 'exterior' && exteriorSwiper) {
          console.log('Moving exterior swiper to previous slide:', newSlideIndex);
          exteriorSwiper.slideTo(window.galleryState.currentSlideIndex);
        } else if (activeTab.id === 'interior' && interiorSwiper) {
          console.log('Moving interior swiper to previous slide:', newSlideIndex);
          interiorSwiper.slideTo(window.galleryState.currentSlideIndex);
        }
      } else {
        console.log('No previous slide change needed - staying on same slide');
      }
      
      updateButtonStates();
    }
  }
  
  /**
   * Update navigation button states
   */
  function updateButtonStates() {
    const activeTab = document.querySelector('.tab-content.active');
    const slides = activeTab.querySelectorAll('.swiper-slide');
    const totalCards = slides.length;
    
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (prevBtn && nextBtn) {
      prevBtn.disabled = window.galleryState.currentCardIndex === 0;
      nextBtn.disabled = window.galleryState.currentCardIndex === totalCards - 1;
      console.log('Button states updated:', {
        currentCard: window.galleryState.currentCardIndex,
        totalCards: totalCards,
        prevDisabled: prevBtn.disabled,
        nextDisabled: nextBtn.disabled
      });
    }
  }
  
  // Initialize all gallery functionality
  initializeSwipers();
  initializeTabs();
  initializeNavigation();
  
  // Initialize button states
  setTimeout(() => {
    updateButtonStates();
  }, 100);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize core functionality
  initializeCarousel();
  initializeNavbarScroll();
  initializeDiscoverSwiper();
  initializeGalleries();
  
  // Initialize dynamic swiper with delay
  setTimeout(() => {
    populateDiscoverSwiper();
  }, 500);
});

/**
 * Fallback initialization on window load
 */
window.addEventListener('load', function() {
  setTimeout(() => {
    populateDiscoverSwiper();
  }, 200);
});