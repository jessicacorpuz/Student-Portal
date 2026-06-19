let currentIndex = 0;

const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

function moveSlide(direction){

    const cardWidth =
        cards[0].offsetWidth + 20;

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = 0;
    }

    if(currentIndex > cards.length - 3){
        currentIndex = cards.length - 3;
    }

    slider.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(() => {

    if(currentIndex >= cards.length - 3){
        currentIndex = -1;
    }

    moveSlide(1);

}, 3000);
