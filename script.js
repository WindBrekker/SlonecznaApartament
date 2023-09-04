
const rooms = document.querySelector('.word-list');
const carousel = document.querySelector('.carousel');


const images = {
    Przedpokój: ['src/rooms/przedpokoj/'],
    Sypialnia: [],
    Łazienka: [],
    Kuchnia: [],
    Salon: [],
    Balkon: [],
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

