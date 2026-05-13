document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('about');
  const iconContainer = document.getElementById('icon-container');
  const textContainer = document.getElementById('text-container');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        iconContainer.classList.add('opacity-100', 'translate-x-0');
        textContainer.classList.add('opacity-100', 'translate-x-0');
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (section) {
    observer.observe(section);
  }
});
