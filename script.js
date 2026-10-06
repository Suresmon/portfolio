/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});



/* =========================================
   3D PROFILE MOUSE MOVEMENT
========================================= */

const profile =
    document.getElementById("profile3d");


if (profile && window.matchMedia(
    "(pointer: fine)"
).matches) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth) - 0.5;

        const y =
            (event.clientY / window.innerHeight) - 0.5;


        const rotateX =
            y * -15;

        const rotateY =
            x * 18;


        profile.style.transform =
            `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(30px)
            `;

    });


    document.addEventListener("mouseleave", () => {

        profile.style.transform =
            `
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0)
            `;

    });

}



/* =========================================
   3D CARD TILT
========================================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (
            !window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {
            return;
        }


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
            ((y - centerY) / centerY) * -5;


        const rotateY =
            ((x - centerX) / centerX) * 5;


        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(12px)
            scale(1.015)
            `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0)
            scale(1)
            `;

    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

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

    revealObserver.observe(element);

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");


function updateNavigation() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);



/* =========================================
   PARALLAX BACKGROUND
========================================= */

const background =
    document.querySelector(".background");


window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;


    const grid =
        document.querySelector(".grid");


    if (grid) {

        grid.style.transform =
            `
            perspective(500px)
            rotateX(65deg)
            translateY(${scrollY * 0.08}px)
            `;

    }

});



/* =========================================
   CREATE PARTICLES
========================================= */

const particleContainer =
    document.getElementById("particles");


if (particleContainer) {

    const particleCount =
        window.innerWidth < 600
            ? 25
            : 50;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            8 + Math.random() * 15 + "s";


        particle.style.animationDelay =
            Math.random() * 10 + "s";


        particle.style.opacity =
            0.15 +
            Math.random() * 0.5;


        particleContainer.appendChild(
            particle
        );

    }

}



/* =========================================
   HEADER EFFECT
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,5,5,0.9)";

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.3)";

    } else {

        header.style.background =
            "rgba(5,5,5,0.65)";

        header.style.boxShadow =
            "none";

    }

});



/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =========================================
   PROJECT IMAGE FALLBACK
========================================= */

const projectImages =
    document.querySelectorAll(
        ".project-image img"
    );


projectImages.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            console.warn(
                "Image not found:",
                image.src
            );

        }
    );

});



/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */

document.querySelectorAll(
    ".btn, .contact-button"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            button.style.transform =
                "translateY(2px)";

            setTimeout(() => {

                button.style.transform =
                    "";

            }, 150);

        }
    );

});