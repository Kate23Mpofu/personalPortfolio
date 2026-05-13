function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    const welcomeSection = document.querySelector(".welcome-section");

    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
    welcomeSection.classList.toggle("shift-down");

    // Change hamburger icon to X
    const icon = hamburger.querySelector("i");
    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark"); 
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}