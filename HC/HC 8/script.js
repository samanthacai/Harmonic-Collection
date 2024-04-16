document.addEventListener("DOMContentLoaded", function () {
    const viewfinder = document.getElementById("viewfinder");

    document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Adjust the cursor position for the scroll
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const adjustedX = mouseX + scrollX;
        const adjustedY = mouseY + scrollY;

        viewfinder.style.left = adjustedX + "px";
        viewfinder.style.top = adjustedY + "px";
    });
});

