
// HERO SLIDER

const hero = document.querySelector("#hero");

const images = [
    "assets/images/pergola01.jpg",
    "assets/images/pergola02.jpg",
    "assets/images/pergola03.jpg"
];

let currentImage = 1;

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

        currentImage = (currentImage + 1) % images.length;

    }, 2200);
}

changeBackground();

setInterval(changeBackground, 5000);



// EMAILJS


emailjs.init({
    publicKey: "pLV9QKdPzl9ZjARpX",
});

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const submitButton = contactForm.querySelector("button");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // Limpa classes anteriores
    formMessage.classList.remove("success", "error");

    // Feedback visual
    formMessage.textContent = "Sending...";
    formMessage.style.color = "#d4af37";

    // Evita múltiplos envios
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.sendForm(
        "service_3r1n9kd",
        "template_yqsrzbx",
        "#contact-form"
    )

    .then(() => {

        formMessage.textContent =
            "✓ Thank you! Your message has been sent successfully. We'll get back to you as soon as possible.";

        formMessage.classList.add("success");

        contactForm.reset();

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

        setTimeout(() => {
            formMessage.textContent = "";
            formMessage.classList.remove("success");
        }, 3000);

    })

    .catch((error) => {

        console.error("Error:", error);

        formMessage.textContent =
            "✗ Sorry, something went wrong. Please try again.";

        formMessage.classList.add("error");

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

        setTimeout(() => {
            formMessage.textContent = "";
            formMessage.classList.remove("error");
        }, 5000);

    });

});