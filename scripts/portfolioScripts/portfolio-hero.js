document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.getElementById('scroll-button');

  scrollButton.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

  // simulate the visibility effect
  const container = document.querySelector('.container');
  container.style.opacity = '1';
  container.style.transform = 'translateY(0)';
});
