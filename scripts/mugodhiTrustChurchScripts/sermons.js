// sermons filter functionality
const searchInput = document.querySelector(".form .input");
const topicFilter = document.querySelectorAll(".dropdown-select")[0];
const yearFilter = document.querySelectorAll(".dropdown-select")[1];
const sermonCards = document.querySelectorAll(".event-card");
const eventsGrid = document.querySelector(".events-grid");

// Create "No results found" message
const noResults = document.createElement("p");
noResults.innerText = "No sermons found.";
noResults.style.display = "none";
noResults.style.textAlign = "center";
noResults.style.margin = "30px 0";
noResults.style.fontWeight = "bold";
noResults.style.color = "#666";
eventsGrid.parentNode.appendChild(noResults);

// Normalize text (lowercase, remove extra spaces)
function normalize(text) {
  return text.toLowerCase().trim();
}

function filterSermons() {
  const searchTerm = normalize(searchInput.value);
  const selectedTopic = normalize(topicFilter.value);
  const selectedYear = normalize(yearFilter.value);

  let visibleCount = 0;

  sermonCards.forEach((card) => {
    const titleElement = card.querySelector("h4, h3");
    const title = titleElement ? normalize(titleElement.innerText) : "";

    const descriptionElement = card.querySelector("p");
    const description = descriptionElement ? normalize(descriptionElement.innerText) : "";

    const badgeElement = card.querySelector(".topic-badge");
    const topic = badgeElement ? normalize(badgeElement.innerText) : "";

    const dateElement = card.querySelector(".info");
    const dateText = dateElement ? normalize(dateElement.innerText) : "";

    // --- Matching logic ---
    const matchesSearch =
      !searchTerm ||
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      topic.includes(searchTerm);

    const matchesTopic =
      selectedTopic === "all topics" || topic.includes(selectedTopic);

    const matchesYear =
      selectedYear === "all years" || dateText.includes(selectedYear);

    // Show/hide cards
    if (matchesSearch && matchesTopic && matchesYear) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Show or hide "No results" message
  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

// Event listeners
searchInput.addEventListener("input", filterSermons);
topicFilter.addEventListener("change", filterSermons);
yearFilter.addEventListener("change", filterSermons);



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
    <iframe width="100%" height="480" 
      src="https://www.youtube.com/embed/epJw-ktfkQE?start=862&autoplay=1&modestbranding=1&rel=0" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
}

document.querySelector('.video-wrapper').addEventListener('click', playVideo);