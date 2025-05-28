// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment slide index
  slideIndex++;
  
  // Reset to first slide if at end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  // Update active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide and activate corresponding dot
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";  
  }
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
  
  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Manual slide navigation
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Back to top button functionality
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Gallery 
// Gallery filter with debugging
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const galleryItems = document.querySelectorAll('.gallery-item');

  console.log(`Found ${filterButtons.length} filter buttons`);
  console.log(`Found ${galleryItems.length} gallery items`);

  // Initialize gallery - show all items
  filterGallery('all');

  // Add click events to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log(`Filter button clicked: ${this.dataset.category}`);
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        console.log(`Removed active class from ${btn.dataset.category}`);
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      console.log(`Added active class to ${this.dataset.category}`);
      
      // Get filter category
      const category = this.dataset.category;
      
      // Filter the gallery
      filterGallery(category);
    });
  });

  // Filter function
  function filterGallery(category) {
    console.log(`Filtering gallery by: ${category}`);
    
    galleryItems.forEach(item => {
      // Debug current item's classes
      console.log(`Item classes: ${item.classList}`);
      
      // Always reset animation
      item.style.animation = 'none';
      void item.offsetWidth; // Trigger reflow
      item.style.animation = 'fadeIn 0.5s ease forwards';

      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
        console.log(`Showing item with classes: ${item.classList}`);
      } else {
        item.style.display = 'none';
        console.log(`Hiding item with classes: ${item.classList}`);
      }
    });
  }
});