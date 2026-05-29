const hero = document.querySelector("#hero");

const images = [
    "assets/images/pergola01.jpg",
    "assets/images/pergola02.jpg",
    "assets/images/pergola03.jpg"
];

let currentImage = 0;

function changeBackground() {

    hero.classList.add("fade");

    setTimeout(() => {

        hero.style.backgroundImage = `
        linear-gradient(
            rgba(0,0,0,0.72),
            rgba(0,0,0,0.72)
        ),
        url('${images[currentImage]}')
        `;

        hero.classList.remove("fade");

        currentImage++;

        if(currentImage >= images.length) {
            currentImage = 0;
        }

    }, 2200);
}

changeBackground();

setInterval(changeBackground, 5000);