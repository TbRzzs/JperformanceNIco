document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelector(".carousel-images");
    const items = carouselImages.querySelectorAll(".carousel-item");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    const intervalTime = 3000;
    let interval;

    function showItem(index) {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    function startInterval() {
        interval = setInterval(nextSlide, intervalTime);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    items.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    document.querySelector(".prev").addEventListener("click", () => {
        stopInterval();
        prevSlide();
        startInterval();
    });

    document.querySelector(".next").addEventListener("click", () => {
        stopInterval();
        nextSlide();
        startInterval();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            stopInterval();
            currentIndex = parseInt(dot.dataset.index, 10);
            showItem(currentIndex);
            startInterval();
        });
    });

    showItem(currentIndex);
    startInterval();
});



// mandar correos
(function() {
    emailjs.init("mmYvQAkc5tjnGnWkJ");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_8vtjdlt', 'template_e1ahlzs', this)
            .then(function(response) {
                console.log('Éxito:', response);
                alert('Correo enviado con éxito');
            }, function(error) {
                console.log('Error:', error);
                alert('Error al enviar el correo');
            });
    });
}
