// This script adds a typewriter effect to the overlay text on each card

// Function to type out text letter by letter
function typeWriter(element, text, speed = 50) { // Slower typing speed
  element.textContent = ""; // Clear previous text
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Find all overlays
document.querySelectorAll('.card-overlay').forEach(function(overlay) {
  // Get the span for typewriter text
  const typeSpan = overlay.querySelector('.typewriter-text');
  // Get the full text from data-text attribute
  const fullText = overlay.getAttribute('data-text') || "";

  // When mouse enters, start typewriter effect
  overlay.parentElement.addEventListener('mouseenter', function() {
    typeWriter(typeSpan, fullText);
  });

  // When mouse leaves, clear the text
  overlay.parentElement.addEventListener('mouseleave', function() {
    typeSpan.textContent = "";
  });
});
