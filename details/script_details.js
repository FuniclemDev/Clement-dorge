const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselImages = document.querySelector('.carousel-images');
let index = 0;

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : carouselImages.children.length - 1;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
});

nextButton.addEventListener('click', () => {
    index = (index < carouselImages.children.length - 1) ? index + 1 : 0;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
});

window.addEventListener('load', () => {
    const iframe = document.getElementById('rpg-trailer');
    const iframeWindow = iframe.contentWindow;
    
    iframe.onload = function() {
        const video = iframeWindow.document.querySelector('video');
        if (video) {
            video.muted = true;
        }
    };
});