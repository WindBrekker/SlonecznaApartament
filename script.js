
const rooms = document.querySelector('.word-list');
const carousel = document.querySelector('.carousel');


const images = {
    Przedpokój: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
    Sypialnia: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
    Łazienka: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
    Kuchnia: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
    Salon: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
    Balkon: ['apple1.jpg', 'apple2.jpg', 'apple3.jpg'],
};

rooms.addEventListener('click', (e) => {
    const word = e.target.textContent;

    if (images[word]) {
        displayImages(images[word]);
    }
});

function displayImages(imageArray) {
    carousel.innerHTML = '';

    imageArray.forEach((imageSrc) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        carousel.appendChild(img);
    });

    $('.carousel').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

