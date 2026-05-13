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

const currentPage = window.location.pathname.split("/").pop(); 
const navLinks = document.querySelectorAll(".navbar-links li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-tab");
    }
});


// clear form after clicking 'send message' button 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('messageForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    status.textContent = "⏳ Sending...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "❌ Error sending message.";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Please try again.";
    }

    setTimeout(() => status.textContent = "", 5000);
  });
});