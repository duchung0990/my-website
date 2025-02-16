document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll("#slider img");
    const totalSlides = slides.length;
    const slider = document.getElementById("slider");
    const dotsContainer = document.querySelector(".dot-container");

    // Tạo chấm nhỏ dưới ảnh
    dotsContainer.innerHTML = ""; 
    for (let i = 0; i < totalSlides; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    document.getElementById("prev").addEventListener("click", prevSlide);
    document.getElementById("next").addEventListener("click", nextSlide);

    // Tự động chạy ảnh sau 3 giây
    let slideInterval = setInterval(nextSlide, 3000);

    // Khi bấm vào chấm nhỏ, chuyển đến ảnh tương ứng
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000);
        });
    });

    // PHẦN CHUYỂN ĐỔI NỘI DUNG VÀ VIDEO
    const mediaContainer = document.getElementById("media-container");
    const textContainer = document.getElementById("text-container");
    const prevButton = document.getElementById("prev-content");
    const nextButton = document.getElementById("next-content");

    const contentData = [
        {
            media: '<img src="home/2.1.jpg" alt="Liver Cancer Research" class="media">',
            title: "Tree Planting Festival in Vietnam",
            text: `<p><strong>The Meaning and Importance:</strong>  
                Vietnam’s Tree Planting Festival (Tết Trồng Cây) is an annual tradition initiated by President Hồ Chí Minh in 1959.  
                Held at the beginning of the Lunar New Year, this festival encourages people across the country to plant trees,  
                aiming to protect the environment and promote sustainable development.</p>`
        },
        {
            media: `<iframe class="media" 
                src="https://www.youtube.com/embed/bhj0qoKv4ew?autoplay=1&mute=1&rel=0" 
                frameborder="0" allowfullscreen></iframe>`,
            title: "Breakthrough in Cancer Treatment",
            text: `<p><strong>New Discoveries in Oncology:</strong>  
                Scientists have made a breakthrough in cancer research, focusing on liver cancer treatments.  
                New therapies have shown promising results in clinical trials, providing hope for millions of patients worldwide.</p>`
        }
    ];
    
    let contentIndex = 0;
    function updateContent() {
        mediaContainer.innerHTML = contentData[contentIndex].media;
        textContainer.innerHTML = `
            <div class="content-box">
                <div class="title">${contentData[contentIndex].title}</div>
                <div class="context">${contentData[contentIndex].text}</div>
            </div>
        `;
    }
    
    function nextContent() {
        contentIndex = (contentIndex + 1) % contentData.length;
        updateContent();
    }
    
    function prevContent() {
        contentIndex = (contentIndex - 1 + contentData.length) % contentData.length;
        updateContent();
    }

    nextButton.addEventListener("click", nextContent);
    prevButton.addEventListener("click", prevContent);

    setInterval(nextContent, 3000);
});
