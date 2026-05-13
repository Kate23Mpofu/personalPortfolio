document.addEventListener("DOMContentLoaded", function () {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'MySQL', level: 60 },
    { name: 'Python', level: 50 }
  ];

  const codingSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Time management', level: 85 },
    { name: 'Collaboration', level: 80 },
    { name: 'Attention to Detail', level: 75 },
    { name: 'Adaptability ', level: 80 }
  ];

  const toolsSkills = [
    { name: 'GitHub', level: 50 },
    { name: 'VS Code', level: 90 },
    { name: 'Power BI', level: 50 },
    { name: 'Excel', level: 60 }
  ];

  function renderSkills(skills, elementId) {
    const container = document.getElementById(elementId);
    skills.forEach(skill => {
      const skillElement = document.createElement("div");
      skillElement.classList.add("skill");

      const skillName = document.createElement("span");
      skillName.classList.add("skill-name");
      skillName.textContent = skill.name;

      const skillLevel = document.createElement("span");
      skillLevel.classList.add("skill-level");
      skillLevel.textContent = `${skill.level}%`;

      const skillBar = document.createElement("div");
      skillBar.classList.add("skill-bar");

      const skillBarInner = document.createElement("div");
      skillBarInner.classList.add("skill-bar-inner");
      skillBarInner.setAttribute("data-level", skill.level);
      skillBarInner.style.width = "0%";

      skillBar.appendChild(skillBarInner);
      skillElement.appendChild(skillName);
      skillElement.appendChild(skillLevel);
      skillElement.appendChild(skillBar);
      container.appendChild(skillElement);
    });
  }

  function animateSkillBars(categoryElement) {
    const skillBars = categoryElement.querySelectorAll(".skill-bar-inner");
    skillBars.forEach((bar, index) => {
      const level = bar.getAttribute("data-level");
      setTimeout(() => {
        bar.style.width = `${level}%`;
      }, index * 200);
    });
  }

  function observeVisibility() {
    const skillCategories = document.querySelectorAll('.skill-category');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const bars = entry.target.querySelectorAll(".skill-bar-inner");

        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateSkillBars(entry.target);
        } else {
          // reset the bars when out of view
          bars.forEach(bar => {
            bar.style.width = "0%";
          });
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 });

    skillCategories.forEach(category => {
      observer.observe(category);
    });
  }

  // render and observe
  renderSkills(frontendSkills, 'frontend-skills');
  renderSkills(codingSkills, 'soft-skills');
  renderSkills(toolsSkills, 'tools-skills');
  observeVisibility();
});
