let slideIndex = 1;
let slideTimer; // Variable to hold the timer

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function autoChangeSlides() {
    changeSlides(1);
    slideTimer = setTimeout(autoChangeSlides, 12000); // Change slide every 12 seconds
}

showSlides(slideIndex);
autoChangeSlides();

document.querySelector('.prev').addEventListener('click', function() {
    changeSlides(-1);
    clearTimeout(slideTimer); // Reset the timer when button is pressed
    slideTimer = setTimeout(autoChangeSlides, 12000); // Start a new timer
});

document.querySelector('.next').addEventListener('click', function() {
    changeSlides(1);
    clearTimeout(slideTimer); // Reset the timer when button is pressed
    slideTimer = setTimeout(autoChangeSlides, 12000); // Start a new timer
});
