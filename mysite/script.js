// Ensure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle menu when clicking the hamburger
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Show/hide menu
        hamburger.classList.toggle("active"); // Animate bars
    });

    // Close menu when clicking a link (optional)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active"); // Hide menu
            hamburger.classList.remove("active"); // Reset icon animation
        });
    });
});

