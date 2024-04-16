const carousel = document.getElementById("carousel");
let position = 0;

// Set interval for automatic sliding
setInterval(() => {
    if (position < carousel.childElementCount - 1) {
        position += 1;
    } else {
        position = 0; // Reset position to the first image if at the end
    }
    updateCarousel();
}, 3000); // Change the interval as needed (e.g., 3000 milliseconds for 3 seconds)

function updateCarousel() {
    const itemWidth = carousel.children[0].clientWidth;
    carousel.style.transition = 'transform 1s ease-in-out'; // Add smooth transition effect
    carousel.style.transform = `translateX(-${position * itemWidth}px)`;
}


document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "url('images/b1.jpg')",
        "url('images/b2.jpg')",
        "url('images/b3.jpg')",
        "url('images/b4.jpg')",
        "url('images/b5.jpg')"
        // Add more background image URLs as needed
    ];

    let currentIndex = 0;
    const backgroundContainer = document.getElementById("background-container");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        updateBackground();
    }, 2000); // Change the interval as needed (2000 milliseconds for 2 seconds)

    function updateBackground() {
        backgroundContainer.style.backgroundImage = backgrounds[currentIndex];
    }
});




