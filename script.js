// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${year} Swaiba Javed Bajwa. All Rights Reserved.`;
}


// ==============================
// NAVIGATION SHADOW ON SCROLL
// ==============================

const navigation = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navigation.style.boxShadow =
            "0 4px 18px rgba(0, 0, 0, 0.12)";
    } else {
        navigation.style.boxShadow =
            "0 2px 12px rgba(0, 0, 0, 0.08)";
    }

});


// ==============================
// SIMPLE PROJECT CARD EFFECT
// ==============================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });

});
