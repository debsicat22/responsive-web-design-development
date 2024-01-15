document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.content').forEach(function (section) {
      section.style.display = 'none';
    });
  
   
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link, index) {
      link.addEventListener('click', function () {

        document.querySelectorAll('.content').forEach(function (section) {
          section.style.display = 'none';
        });
  

        const selectedGame = document.getElementById(`game${index}`);
        if (selectedGame) {
          selectedGame.style.display = 'block';
        }
      });
    });
  
    
    document.querySelectorAll('.content').forEach(function (section) {
      section.style.display = 'block';
    });
  
    
    const homeLink = document.querySelector('.navbar-nav .nav-link');
    if (homeLink) {
      homeLink.addEventListener('click', showAllGames);
    }
  
   
    function showAllGames() {
      
      document.querySelectorAll('.content').forEach(function (section) {
        section.style.display = 'block';
      });
    }
  });
  
  
  
  
document.addEventListener('DOMContentLoaded', function () {
    
    function initializeSlideshow(gameNumber) {
      const slideshowContainer = document.querySelector(`#game${gameNumber} .slideshow-container`);
      const slides = slideshowContainer.querySelectorAll('img');
      let currentSlide = 0;
  
      function showSlide(n) {
        slides.forEach((slide) => (slide.style.display = 'none'));
        slides[n].style.display = 'block';
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      
      setInterval(nextSlide, 3000);
  
      
      showSlide(currentSlide);
    }
  
    
    initializeSlideshow(1);
    initializeSlideshow(2);
    initializeSlideshow(3);
    initializeSlideshow(4);
  
    
  });

  document.addEventListener('DOMContentLoaded', function () {
    
    function updateRating(gameNumber, value) {
      const ratingValue = document.getElementById(`game${gameNumber}-rating-value`);
      if (ratingValue) {
        ratingValue.textContent = value;
      }
    }
  
    
    document.querySelectorAll('.rating input').forEach(function (input) {
      input.addEventListener('input', function () {
        const gameNumber = this.id.split('-')[0].slice(4); 
        updateRating(gameNumber, this.value);
      });
    });
  });
  