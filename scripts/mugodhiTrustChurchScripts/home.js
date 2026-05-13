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

// sermon video
function playVideo() {
  const wrapper = document.querySelector('.video-wrapper');
  wrapper.innerHTML = `
    <iframe width="100%" height="380" 
      src="https://www.youtube.com/embed/epJw-ktfkQE?start=862&autoplay=1&modestbranding=1&rel=0" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
}

document.querySelector('.video-wrapper').addEventListener('click', playVideo);

// faq section
const radios = document.querySelectorAll('.faq-question input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('click', function () {
    if (this.previousChecked) {
      this.checked = false;
    }

    radios.forEach(r => (r.previousChecked = false));
    this.previousChecked = this.checked;
  });
});