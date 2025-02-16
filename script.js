document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const images = document.querySelectorAll("#slider img");
    const totalSlides = images.length;
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
    }

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 3000);
});
