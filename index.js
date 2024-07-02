const carouselInner = document.querySelector('.carousel-inner');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const totalSlides = carouselItems.length;
        let slideIndex = 0;

        document.getElementById('prevBtn').addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
            carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
            carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
        });