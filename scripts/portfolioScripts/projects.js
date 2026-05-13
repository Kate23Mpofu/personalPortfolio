document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Landing Page",
            description: "A random but beautiful and animated landing page.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/landingPage/landing-page.png",
            demo: "LandingPage.html"
        },
        {
            title: "Mugodhi Trust Church",
            description: "Mock website for a local church.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/mugodhiTrustChurch/cover_picture.png",
            demo: "home.html"
        },
        {
            title: "Netflix Website Clone",
            description: "For this project, I tried cloning the Netflix website.",
            tags: ["HTML", "CSS"],
            image: "images/Netflix/Netflix.jpeg",
            demo: "netflix.html"
        },
        {
            title: "Hangman Game",
            description: "Try solve the riddle before running out of chances! Good luck and have fun!",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/hangman/hangman.jpeg",
            demo: "hangman.html"
        }
    ];

    const projectsGrid = document.getElementById("projectsGrid");

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);

        // delay visibility animation
        setTimeout(() => {
            projectCard.classList.add("visible");
        }, index * 200);


    });
});