// =========================
// TYPING ANIMATION
// =========================

const text = [
    "Relationship Manager",
    "Automobile Sales Professional",
    "Customer Relationship Expert",
    "Sales & Customer Experience"
];

let count = 0;
let index = 0;

function type() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (index < text[count].length) {

        typingElement.textContent += text[count].charAt(index);
        index++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }
}

function erase() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (typingElement.textContent.length > 0) {

        typingElement.textContent =
            typingElement.textContent.slice(0, -1);

        setTimeout(erase, 50);

    } else {

        count++;

        if (count >= text.length) {
            count = 0;
        }

        index = 0;

        setTimeout(type, 500);

    }
}

type();


// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


// =========================
// BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}