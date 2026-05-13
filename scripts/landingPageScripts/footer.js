document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    // GSAP footer animation
    gsap.from(".footer-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
        },
    });

    // subscribe form logic
    const form = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email-input");
    const message = document.getElementById("subscribe-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "tomato";
        } else {
            message.textContent = "Thank you for subscribing!";
            message.style.color = "lightgreen";
            emailInput.value = "";
        }
    });
});