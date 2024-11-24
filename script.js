// Function to animate numbers from 0 to the target number
function animateNumber(numberElement, endNumber, duration = 5000) {
    let startNumber = 0;
    const increment = endNumber / (duration / 10); // Calculates increment per 10ms
    const intervalId = setInterval(() => {
      startNumber += increment;
      numberElement.textContent = Math.round(startNumber); // Update text content
    
      if (startNumber >= endNumber) {
        clearInterval(intervalId); // Stop when the target number is reached
        numberElement.textContent = endNumber;
      }
    }, 10);
  }
  
  // Animating numbers based on elements with class 'animate-number'
  const numberElements = document.querySelectorAll('.animate-number');
  
  numberElements.forEach(numberElement => {
    const endNumber = parseInt(numberElement.textContent.replace('+', '').replace('Cr', '0000000'));
    animateNumber(numberElement, endNumber);
  });
  
  // Carousel functionality (with automatic movement and controls)
  const cardContainer = document.querySelector('.card-container');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const cardWidth = cardContainer.offsetWidth / 4; // Adjust for 4 cards visible
  
  let currentIndex = 0;
  
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cardContainer.children.length; // Move to next card
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move carousel
  });
  
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cardContainer.children.length) % cardContainer.children.length; // Move to previous card
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move carousel
  });
  
  
  const navLinks = document.getElementById('navLinks');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

function showmenu() {
    navLinks.style.display = 'flex'; // Show the menu
    openIcon.style.display = 'none'; // Hide the open icon
    closeIcon.style.display = 'block'; // Show the close icon
}

function hidemenu() {
    navLinks.style.display = 'none'; // Hide the menu
    openIcon.style.display = 'block'; // Show the open icon
    closeIcon.style.display = 'none'; // Hide the close icon
}

  