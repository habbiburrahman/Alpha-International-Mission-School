
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});



function showGallery(type, button) {

    // Hide all galleries
    document.querySelectorAll(".gallery-content")
        .forEach(function(gallery) {
            gallery.classList.remove("active");
        });

    // Remove active from all buttons
    document.querySelectorAll(".gallery-tab")
        .forEach(function(tab) {
            tab.classList.remove("active");
        });

    // Show selected gallery
    if (type === "student") {
        document.getElementById("studentGallery")
            .classList.add("active");
    } else if (type === "teacher") {
        document.getElementById("teacherGallery")
            .classList.add("active");
    }

    // Activate selected button
    button.classList.add("active");
}
