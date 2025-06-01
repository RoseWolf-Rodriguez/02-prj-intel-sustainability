// Simple typewriter effect for beginners

// This function types out the text one letter at a time
function typeWriter(element, text) {
  element.textContent = ""; // Start with empty text
  let i = 0;
  // This function adds one letter at a time
  function addLetter() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(addLetter, 70); // Slow speed for beginners to read
    }
  }
  addLetter();
}

// For each card overlay, set up the typewriter effect
document.querySelectorAll('.card-overlay').forEach(function(overlay) {
  // Find the span where the text will appear
  const typeSpan = overlay.querySelector('.typewriter-text');
  // Get the text to display from the data-text attribute
  const fullText = overlay.getAttribute('data-text') || "";

  // When the mouse enters the card, start the typewriter effect
  overlay.parentElement.addEventListener('mouseenter', function() {
    typeWriter(typeSpan, fullText);
  });

  // When the mouse leaves the card, clear the text
  overlay.parentElement.addEventListener('mouseleave', function() {
    typeSpan.textContent = "";
  });
});
