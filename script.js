// ==========================================
// SWAIBA JAVED BAJWA - PORTFOLIO JAVASCRIPT
// ==========================================


// Smooth reveal animation
const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-row, .workshop, .learning-card, .education-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


// Add reveal class
revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==========================================
// HERO VISUAL MOVEMENT
// ==========================================

const visual = document.querySelector(".hero-visual");

if (visual) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        visual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer div");

if (footerYear) {

    footerYear.innerHTML =
        `© ${year} Swaiba Javed Bajwa`;

}
