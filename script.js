document.addEventListener('DOMContentLoaded', function() {
  const fallingImages = document.querySelectorAll('.falling-image');

  fallingImages.forEach((image) => {
    image.style.transform = `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`;

    image.addEventListener('mouseover', () => {
      animateFall(image);
    });
  });

  function getRandomPosition() {
    // Generate a random position within a range around the center of the window
    const range = window.innerWidth / 4; // Adjust the range as needed
    return Math.floor(Math.random() * range - range / 2);
  }
});
