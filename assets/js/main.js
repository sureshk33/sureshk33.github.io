
/*  */
/*  */
// Counter animation for skill percentages
const counters = document.querySelectorAll('.percent');
let counterStarted = false;

function startCounter() {
    if (counterStarted) return; // prevents multiple runs

    counters.forEach(counter => {
        let target = parseInt(counter.innerText.replace('%', ''));
        let count = 0;
        let speed = 20; // smaller = faster

        let updateCount = () => {
            if (count < target) {
                count++;
                counter.innerText = count + "%";
                setTimeout(updateCount, speed);
            } else {
                counter.innerText = target + "%";
            }
        };

        updateCount();
    });

    counterStarted = true;
}

// detect when skills section enters viewport
const skillsSection = document.querySelector('.skill-items-wrap');

window.addEventListener('scroll', () => {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        startCounter();
    }
});


/*  */
/*  */

window.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".animate-title");

    // Split letters for all titles
    titles.forEach(title => {
        const text = title.textContent.trim();
        if (!text) return;

        title.innerHTML = "";

        [...text].forEach((char, i) => {
            const span = document.createElement("span");
            span.classList.add("char");
            span.style.setProperty("--i", i);
            span.textContent = char === " " ? "\u00A0" : char;
            title.appendChild(span);
        });
    });

    // Intersection Observer to trigger animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-start"); // start animation
                    observer.unobserve(entry.target); // run only once
                }
            });
        },
        {
            threshold: 0.3, // 30% visible = trigger animation
        }
    );

    titles.forEach(t => observer.observe(t));
});




/* ============================================================================================== */
/* ============================================================================================== */
$(document).ready(function () {
    const $el = $('.st-ripple-version');

    // Initialize ripple effect with slightly higher brightness and movement
    $el.ripples({
        resolution: 512,
        dropRadius: 40,     // slightly larger ripple size
        perturbance: 0.08,  // stronger light distortion effect (more “shimmer”)
        interactive: true
    });

    let rippleTimer = null;

    // Function to create one random ripple
    function makeRipple() {
        const x = Math.random() * $el.outerWidth();
        const y = Math.random() * $el.outerHeight();
        const dropRadius = 25;  // larger splash radius
        const strength = 0.05 + Math.random() * 0.05; // stronger brightness/lift
        $el.ripples('drop', x, y, dropRadius, strength);
    }

    // Start auto-ripples (every 1.5s for more activity)
    function startRipples() {
        if (!rippleTimer) {
            rippleTimer = setInterval(makeRipple, 4000);
        }
    }

    // Stop auto-ripples
    function stopRipples() {
        clearInterval(rippleTimer);
        rippleTimer = null;
    }

    // Pause/resume on tab visibility change
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopRipples();
        } else {
            startRipples();
        }
    });

    // Start initially
    startRipples();
});


/* ========================================================================= */
/* ========================================================================= *

/* SCROLL TO TOP */
const scrollTopBtn = document.getElementById("scrolltop");

// Show/hide button when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// SCROLL TO TOP SMOOTHLY WHEN CLICKED
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/* ============================================================================================== */
/* ============================================================================================== */
