// Function to check if the element is in the viewport with an offset
function isInViewport(element, offset) {
  if (!element) {
    return false;
  }

  var rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  var hiddenSegment = document.getElementById('portfolio');
  
  // Check if the hidden segment is in the viewport with a 100px offset from the top
  if (isInViewport(hiddenSegment, 800)) {
    hiddenSegment.style.display = "block"; // Show the segment
    window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already in the viewport on page load
handleScroll();