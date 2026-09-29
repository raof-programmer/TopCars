document.addEventListener("DOMContentLoaded", () => {

/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuBtn.textContent =
            mobileMenu.classList.contains("active")
                ? "✕"
                : "☰";

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".car-card, " +
        ".category-card, " +
        ".section-heading, " +
        ".featured-content, " +
        ".featured-car, " +
        ".compare-box, " +
        ".stat, " +
        ".about-section > div, " +
        ".about-text"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= NAVBAR ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= CARD 3D EFFECT ================= */

const cards =
    document.querySelectorAll(".car-card");


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* ================= DETAILS BUTTON ================= */

const detailButtons =
    document.querySelectorAll(".details-btn");


detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".car-card");

        const carName =
            card.querySelector("h3")?.textContent
            || "Car";


        alert(
            `${carName.trim()}\n\n` +
            `More details will be available ` +
            `in the next version of TopCars.`
        );

    });

});


/* ================= COMPARE ================= */

const compareButton =
    document.querySelector(".compare-btn");


if (compareButton) {

    compareButton.addEventListener(
        "click",
        () => {

            alert(
                "Car comparison system is coming soon."
            );

        }
    );

}


/* ================= FEATURED BUTTON ================= */

const featuredButton =
    document.querySelector(".featured-btn");


if (featuredButton) {

    featuredButton.addEventListener(
        "click",
        () => {

            document
                .querySelector("#featured")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= CONSOLE ================= */

console.log(
    "TopCars 2026 loaded successfully 🚘"
);

});