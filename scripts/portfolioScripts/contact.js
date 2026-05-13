document.addEventListener("DOMContentLoaded", function () {
  const contactInfo = document.querySelector(".contact-info");
  const contactForm = document.querySelector(".contact-form");

  const observerOptions = {
    threshold: 0.3,
  };

  const animateOnScroll = (element, animationClass) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    }, observerOptions);

    observer.observe(element);
  };

  animateOnScroll(contactInfo, "animate-slide-left");
  animateOnScroll(contactForm, "animate-slide-right");
});
