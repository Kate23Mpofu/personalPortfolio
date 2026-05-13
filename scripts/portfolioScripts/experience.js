document.addEventListener("DOMContentLoaded", function () {
  const experiences = [
    {
      title: "Bachelor of Science in Information Technology",
      company: "Richfield College",
      period: "Feb 2023 - December 2025",
      description: "Graduated. My coursework has equipped me with skills in languages like HTML, CSS, MySQL, and Python.",
      type: "education",
    },
    {
      title: "Web Development Intern",
      company: "Oasis Infobyte",
      period: "March 2025 - April 2025",
      description: "For this internship, I chose to build my personal portfolio. I focused on HTML, CSS, and JavaScript to make it more animated, beautiful and interactive.",
      type: "work",
    },
    {
      title: "Web Development Intern",
      company: "FNB App Academy",
      period: "May 2025 - July 2025",
      description: "It is focused on web development, software engineering, and database management. This internship will help me polish my skills in web development.",
      type: "work",
    },
    {
      title: "Front-End Development Intern",
      company: "Masterpiece Designs",
      period: "Sept 2025 - Nov 2025",
      description: "For this internship, I was tasked to build a website for a church. I focused on HTML, CSS, and JavaScript to make it more animated, beautiful and interactive.",
      type: "work",
    }
  ];

  const timelineEntries = document.getElementById("timelineEntries");

  experiences.forEach((exp, index) => {
    const entry = document.createElement("div");
    entry.classList.add("timeline-entry");

    if (index % 2 === 0) {
      entry.classList.add("left");
    }

    entry.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${exp.period}</span>
        <h3>${exp.title}</h3>
        <h4>${exp.company}</h4>
        <p>${exp.description}</p>
      </div>
    `;

    timelineEntries.appendChild(entry);
  });

  function revealOnScroll() {
    const entries = document.querySelectorAll(".timeline-entry");
    const triggerBottom = window.innerHeight * 0.85;

    entries.forEach((entry, index) => {
      const entryTop = entry.getBoundingClientRect().top;
      const entryBottom = entry.getBoundingClientRect().bottom;

      if (entryTop < triggerBottom && entryBottom > 0) {
        if (!entry.classList.contains("visible")) {
          setTimeout(() => {
            entry.classList.add("visible");
          }, index * 200);
        }
      } else {
        entry.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});