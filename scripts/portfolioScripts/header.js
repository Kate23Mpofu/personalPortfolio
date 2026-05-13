document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById('header');
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');
  const menuIcon = document.getElementById('menu-icon');

  // scroll detection
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('bg-white', 'py-3', 'shadow-md');
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.add('bg-transparent', 'py-5');
      header.classList.remove('bg-white', 'py-3', 'shadow-md');
    }
  });

  // scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      // close the mobile menu after navigation
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }
  };

  // mobile menu toggle
  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  });

  // event listeners to navigation links
  const navLinksArray = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinksArray.forEach((link) => {
    link.addEventListener('click', () => {
      const sectionId = link.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });

  // click outside to close the mobile menu
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link, index) => {
  setTimeout(() => {
    link.classList.remove('hidden');
    link.classList.add('visible');
  }, index * 200);
});