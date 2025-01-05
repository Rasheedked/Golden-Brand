// Add interactivity later as needed.
console.log("Golden Brand website loaded!");
// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, {
    threshold: 0.5,
});

// Add observer to sections
document.querySelectorAll(".hero, .section").forEach((section) => {
    observer.observe(section);
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

