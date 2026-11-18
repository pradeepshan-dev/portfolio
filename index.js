/* =========================================================
   1. DOM ELEMENTS
========================================================= */

const body = document.body;

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");

const scrollProgress = document.getElementById("scrollProgress");
const cursorGlow = document.getElementById("cursorGlow");

const backToTop = document.getElementById("backToTop");

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const toastMessage = document.getElementById("toastMessage");


/* =========================================================
   2. CONFIGURATION
========================================================= */

/*
    Add your EmailJS credentials here.

    Replace these placeholders with your actual values
    from your EmailJS dashboard.

    Do not publish private service credentials.
*/

const EMAILJS_CONFIG = {
    serviceID: "YOUR_SERVICE_ID",
    templateID: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
};


/* =========================================================
   3. PROJECT DETAILS
========================================================= */

const projectDetails = {

    darkcoderz: {
        title: "DarkCoderz",
        category: "Full Stack",
        image: "assets/darkcoderz.png",

        description:
            "DarkCoderz is a Python coding practice platform designed to help learners practise programming through coding challenges, debugging exercises and output-based questions.",

        technologies: [
            "Python",
            "Django",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "DSA coding challenges.",
            "Debugging exercises.",
            "Output-based questions.",
            "Points and daily streaks.",
            "Leaderboard.",
            "Progress tracking."
        ],

        github: "https://github.com/pradeepshan-dev",
        githubLabel: "GitHub Profile"
    },


    coldmail: {
        title: "ColdMail AI",
        category: "AI Application",
        image: "assets/coldmailAI.png",

        description:
            "ColdMail AI is an AI-powered job outreach platform that generates personalized cold emails using resume information and job descriptions.",

        technologies: [
            "Python",
            "Django",
            "MySQL",
            "Gemini API",
            "JavaScript"
        ],

        features: [
            "Personalized cold email generation.",
            "Resume and job-description-based content.",
            "Gemini integration.",
            "Groq integration.",
            "OpenRouter integration.",
            "Mistral integration.",
            "Template-based fallback."
        ],

        github: "https://github.com/pradeepshan-dev",
        githubLabel: "GitHub Profile"
    },


    viduthalai: {
        title: "Viduthalai",
        category: "Frontend",
        image: "assets/viduthalai.png",

        description:
            "Viduthalai is a responsive multi-page web archive focused on India's freedom struggle, featuring information about 12 freedom fighters and post-independence history.",

        technologies: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript"
        ],

        features: [
            "Responsive multi-page website.",
            "Information about 12 freedom fighters.",
            "Post-independence history content.",
            "Dark navy and gold visual theme.",
            "Responsive navigation."
        ],

        github: "https://github.com/pradeepshan-dev",
        githubLabel: "GitHub Profile"
    },


    cravecorner: {
        title: "Crave Corner",
        category: "Frontend",
        image: "assets/cravecorner.png",

        description:
            "Crave Corner is a food delivery frontend application featuring menus, cart functionality, order history and theme switching.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap 5"
        ],

        features: [
            "Login interface.",
            "Dynamic menus.",
            "Shopping cart.",
            "Order history using localStorage.",
            "Dark and light themes.",
            "Toast notifications."
        ],

        github: "https://github.com/pradeepshan-dev",
        githubLabel: "GitHub Profile"
    },


    portfolio: {
        title: "Developer Portfolio",
        category: "Frontend",
        image: "assets/portfolio.png",

        description:
            "A personal developer portfolio designed to present my technical skills, projects, experience, education and contact information.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "EmailJS"
        ],

        features: [
            "Responsive portfolio layout.",
            "Dark and light themes.",
            "Project filtering.",
            "Project details modal.",
            "Scroll animations.",
            "Contact form integration."
        ],

        github: "https://github.com/pradeepshan-dev",
        githubLabel: "GitHub Profile"
    },


    bank: {
        title: "Bank Management System",
        category: "Python Backend",
        image: "assets/bms.png",

        description:
            "A console-based banking simulator developed using Python and object-oriented programming concepts.",

        technologies: [
            "Python",
            "OOP",
            "Exception Handling",
            "Lists",
            "Loops"
        ],

        features: [
            "Create bank accounts.",
            "Search and display accounts.",
            "Deposit and withdraw money.",
            "Check account balance.",
            "Delete and update accounts.",
            "Transfer money.",
            "Four-digit PIN validation.",
            "Duplicate account checking."
        ],

        github: "https://github.com/pradeepshan-dev/pradeepshan-dev",
        githubLabel: "GitHub Repository"
    }

};


/* =========================================================
   4. ICON INITIALIZATION
========================================================= */

function refreshIcons() {

    if (window.lucide) {
        window.lucide.createIcons();
    }

}


/* =========================================================
   5. IMAGE FALLBACK
========================================================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const fallback = image.parentElement?.querySelector(".image-fallback");

        if (fallback) {
            fallback.style.display = "flex";
        }

    });

});


/* =========================================================
   6. CURRENT YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   7. THEME TOGGLE
========================================================= */

function applyTheme(theme) {

    const isLight = theme === "light";

    body.classList.toggle("light-theme", isLight);

    if (themeToggle) {

        themeToggle.innerHTML = isLight
            ? '<i data-lucide="moon"></i>'
            : '<i data-lucide="sun"></i>';

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );

        refreshIcons();
    }

    try {
        localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
        console.warn("Theme preference could not be saved.", error);
    }

}


let savedTheme = "dark";

try {
    savedTheme = localStorage.getItem("portfolio-theme") || "dark";
} catch (error) {
    console.warn("Theme preference could not be loaded.", error);
}

applyTheme(savedTheme);


themeToggle?.addEventListener("click", () => {

    const nextTheme = body.classList.contains("light-theme")
        ? "dark"
        : "light";

    applyTheme(nextTheme);

});


/* =========================================================
   8. MOBILE NAVIGATION
========================================================= */

function closeMobileMenu() {

    navLinks?.classList.remove("open");

    menuToggle?.setAttribute("aria-expanded", "false");

    if (menuToggle) {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        refreshIcons();
    }

}


function toggleMobileMenu() {

    if (!navLinks || !menuToggle) return;

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    refreshIcons();

}


menuToggle?.addEventListener("click", toggleMobileMenu);


document.querySelectorAll(".nav-link").forEach((link) => {

    link.addEventListener("click", closeMobileMenu);

});


document.addEventListener("click", (event) => {

    if (
        navLinks?.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle?.contains(event.target)
    ) {
        closeMobileMenu();
    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        closeMobileMenu();
    }

});


/* =========================================================
   9. TYPING ANIMATION
========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "Backend Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeRole() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1400);

            return;
        }

    } else {

        typingText.textContent = currentRole.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeRole, deleting ? 45 : 85);

}


if (typingText) {
    typeRole();
}


/* =========================================================
   10. SCROLL HANDLING
========================================================= */

function handleScroll() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
    }

    navbar?.classList.toggle("scrolled", scrollTop > 30);

    backToTop?.classList.toggle("show", scrollTop > 450);

}


window.addEventListener("scroll", handleScroll, { passive: true });

handleScroll();


/* =========================================================
   11. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 160;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }

    });

    navigationLinks.forEach((link) => {

        const isActive =
            link.getAttribute("href") === `#${currentSection}`;

        link.classList.toggle("active", isActive);

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =========================================================
   12. BACK TO TOP
========================================================= */

backToTop?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   13. REVEAL ANIMATIONS
========================================================= */

const revealElements = document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* =========================================================
   14. COUNTER ANIMATION
========================================================= */

const counters = document.querySelectorAll(".counter");


if ("IntersectionObserver" in window) {

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                if (!Number.isFinite(target)) {
                    observer.unobserve(counter);
                    return;
                }

                let current = 0;

                const duration = 1000;
                const increment = Math.max(1, Math.ceil(target / (duration / 20)));

                const timer = setInterval(() => {

                    current = Math.min(current + increment, target);

                    counter.textContent = current;

                    if (current >= target) {

                        clearInterval(timer);

                        counter.textContent = target;

                    }

                }, 20);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });

}


/* =========================================================
   15. PROJECT FILTERING
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        projectCards.forEach((card) => {

            const categories = card.dataset.category || "";

            const matches =
                filter === "all" ||
                categories.split(/\s+/).includes(filter);

            card.classList.toggle("hidden", !matches);

        });

    });

});


/* =========================================================
   16. PROJECT MODAL ELEMENTS
========================================================= */

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const modalTech = document.getElementById("modalTech");
const modalFeatures = document.getElementById("modalFeatures");

const modalGithub = document.getElementById("modalGithub");

const modalDialog = projectModal?.querySelector(".project-modal");

let previousFocusedElement = null;


/* =========================================================
   17. OPEN PROJECT MODAL
========================================================= */

function openProjectModal(projectKey) {

    const project = projectDetails[projectKey];

    if (!project || !projectModal) return;

    previousFocusedElement = document.activeElement;

    modalImage.src = project.image;
    modalImage.alt = `${project.title} project screenshot`;

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    modalTech.innerHTML = "";
    modalFeatures.innerHTML = "";


    project.technologies.forEach((technology) => {

        const tag = document.createElement("span");

        tag.textContent = technology;

        modalTech.appendChild(tag);

    });


    project.features.forEach((feature) => {

        const listItem = document.createElement("li");

        listItem.textContent = feature;

        modalFeatures.appendChild(listItem);

    });


    modalGithub.href = project.github;

    const githubIcon = '<i data-lucide="github"></i>';

    modalGithub.innerHTML = `${project.githubLabel} ${githubIcon}`;


    projectModal.classList.add("active");

    projectModal.setAttribute("aria-hidden", "false");

    body.classList.add("modal-open");

    refreshIcons();

    modalClose?.focus();

}


document.querySelectorAll(".project-details-btn").forEach((button) => {

    button.addEventListener("click", () => {

        openProjectModal(button.dataset.project);

    });

});


/* =========================================================
   18. CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    if (!projectModal) return;

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

    body.classList.remove("modal-open");

    previousFocusedElement?.focus();

}


modalClose?.addEventListener("click", closeProjectModal);


projectModal?.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProjectModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        projectModal?.classList.contains("active")
    ) {
        closeProjectModal();
    }

});


/* =========================================================
   19. MODAL FOCUS MANAGEMENT
========================================================= */

projectModal?.addEventListener("keydown", (event) => {

    if (event.key !== "Tab") return;

    const focusableElements = modalDialog?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];

    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {

        event.preventDefault();
        lastElement.focus();

    } else if (!event.shiftKey && document.activeElement === lastElement) {

        event.preventDefault();
        firstElement.focus();

    }

});


/* =========================================================
   20. CUSTOM CURSOR
========================================================= */

if (
    cursorGlow &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


/* =========================================================
   21. TOAST NOTIFICATION
========================================================= */

let toastTimer;


function showToast(message) {

    if (!toastMessage) return;

    toastMessage.textContent = message;

    toastMessage.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toastMessage.classList.remove("show");

    }, 3000);

}


/* =========================================================
   22. EMAILJS CONFIGURATION CHECK
========================================================= */

function isEmailJSConfigured() {

    return (
        EMAILJS_CONFIG.serviceID !== "YOUR_SERVICE_ID" &&
        EMAILJS_CONFIG.templateID !== "YOUR_TEMPLATE_ID" &&
        EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY"
    );

}


/* =========================================================
   23. CONTACT FORM
========================================================= */

contactForm?.addEventListener("submit", async (event) => {

    event.preventDefault();

    if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

    }


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        if (formStatus) {
            formStatus.textContent = "Please complete all fields.";
        }

        return;

    }


    const submitButton = contactForm.querySelector(".submit-btn");

    const submitText = submitButton?.querySelector("span");

    if (submitButton) {
        submitButton.disabled = true;
    }

    if (submitText) {
        submitText.textContent = "Sending...";
    }

    if (formStatus) {
        formStatus.textContent = "Please wait while your message is prepared.";
    }


    try {

        if (
            isEmailJSConfigured() &&
            window.emailjs
        ) {

            await window.emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                {
                    from_name: name,
                    reply_to: email,
                    subject: subject,
                    message: message
                },
                {
                    publicKey: EMAILJS_CONFIG.publicKey
                }
            );


            if (formStatus) {
                formStatus.textContent = "Your message has been sent successfully!";
            }

            showToast("Message sent successfully!");

            contactForm.reset();

        } else {

            const mailSubject = encodeURIComponent(subject);

            const mailBody = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            );

            const mailtoLink =
                `mailto:pradeepshanofficial@gmail.com?subject=${mailSubject}&body=${mailBody}`;

            if (formStatus) {
                formStatus.textContent =
                    "EmailJS is not configured. Opening your email application...";
            }

            window.location.href = mailtoLink;

            showToast("Opening your email application.");

        }

    } catch (error) {

        console.error("Email sending failed:", error);

        if (formStatus) {
            formStatus.textContent =
                "Unable to send the message. Please try emailing me directly.";
        }

        showToast("Message could not be sent.");

    } finally {

        if (submitButton) {
            submitButton.disabled = false;
        }

        if (submitText) {
            submitText.textContent = "Send Message";
        }

    }

});


/* =========================================================
   24. INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    refreshIcons();

    handleScroll();

    updateActiveNavigation();

});
