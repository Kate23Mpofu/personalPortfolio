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
        icon.classList.add("fa-xmark"); // FontAwesome X
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}

// success message
 const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from reloading the page

    form.reset(); // Optional: clear the form

    // Close the modal
    window.location.hash = "close-anchor7";

    // Show simple alert box
    alert("✅ Thank you for registering!");
  });


const buttons = document.querySelectorAll('.event-nav button');
const views = document.querySelectorAll('.view');

  const events = [
  { title: "Sunday Worship Service", date: "2025-06-01", time: "9:00 AM - 11:00 AM", location: "Main Sanctuary", category: "Worship" },
  { title: "Sunday School", date: "2025-06-01", time: "9:30 AM - 10:30 AM", location: "Education Wing", category: "Education" },
  { title: "Youth Night", date: "2025-06-09", time: "6:00 PM - 8:30 PM", location: "Youth Center", category: "Youth" },
  { title: "Women's Bible Study", date: "2025-06-10", time: "10:00 AM - 12:30 PM", location: "Fellowship Hall", category: "Bible Study" },
  { title: "Prayer Meeting", date: "2025-06-11", time: "6:30 PM - 7:30 PM", location: "Chapel", category: "Prayer" },
  { title: "Men's Breakfast", date: "2025-06-17", time: "7:30 AM - 9:30 AM", location: "Fellowship Hall", category: "Men" },
  { title: "Annual Church Conference", date: "2025-06-21", time: "Various Times", location: "Main Sanctuary", category: "Conference" },
  { title: "Annual Church Conference", date: "2025-06-22", time: "Various Times", location: "Main Sanctuary", category: "Conference" },
  { title: "Annual Church Conference", date: "2025-06-23", time: "Various Times", location: "Main Sanctuary", category: "Conference" },
  { title: "Community Outreach Day", date: "2025-06-24", time: "9:00 AM - 1:00 PM", location: "City Park", category: "Outreach" }
];

const categoryColors = {
  "Worship": "#4c51bf",
  "Education": "#0ea5e9",
  "Youth": "#f59e0b",
  "Bible Study": "#14b8a6",
  "Prayer": "#8b5cf6",
  "Men": "#ef4444",
  "Conference": "#10b981",
  "Outreach": "#f472b6"
};


    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle views
        const viewName = btn.dataset.view;
        views.forEach(v => v.style.display = v.classList.contains('view-' + viewName) ? 'block' : 'none');
      });
    });

function generateCalendar(month, year) {
  const calendarGrid = document.querySelector(".calendar-grid");
  calendarGrid.innerHTML = `
    <div class="calendar-header">Sun</div>
    <div class="calendar-header">Mon</div>
    <div class="calendar-header">Tue</div>
    <div class="calendar-header">Wed</div>
    <div class="calendar-header">Thu</div>
    <div class="calendar-header">Fri</div>
    <div class="calendar-header">Sat</div>
  `;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("calendar-day");
    calendarGrid.appendChild(emptyCell);
  }

  // Fill in the days
  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement("div");
    cell.classList.add("calendar-day");
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    
    const dayEvents = events.filter(ev => ev.date === dateStr);

    // Day number
    const dayNum = document.createElement("div");
    dayNum.textContent = day;
    dayNum.style.fontWeight = "600";
    dayNum.style.marginBottom = "4px";
    cell.appendChild(dayNum);

    // Add event labels
    dayEvents.forEach(ev => {
      const label = document.createElement("span");
      label.classList.add("event-label");
      label.textContent = ev.title;
      label.style.backgroundColor = categoryColors[ev.category] || "#999";
      label.style.color = "#fff";
      label.style.display = "block";
      label.style.marginBottom = "2px";
      label.style.fontSize = "11px";
      label.style.padding = "2px 4px";
      label.style.borderRadius = "4px";
      cell.appendChild(label);
    });

    calendarGrid.appendChild(cell);
  }
}

// Example: Generate calendar for June 2025
generateCalendar(5, 2025);

function generateWeeklySchedule() {
  const tbody = document.querySelector(".view-recurring tbody");
  tbody.innerHTML = "";

  // Sort events by day of week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  events.forEach(ev => {
    const dateObj = new Date(ev.date);
    const dayName = daysOfWeek[dateObj.getDay()];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${dayName}</td>
      <td>${ev.title}</td>
      <td>${ev.time}</td>
      <td>${ev.location}</td>
    `;
    tbody.appendChild(row);
  });
}

// Generate the schedule
generateWeeklySchedule();


// download calendar as a PDF
document.querySelector(".view-calendar .modal-btn").addEventListener("click", async () => { 
  const { jsPDF } = window.jspdf;
  const calendar = document.querySelector(".calendar");
  const btn = document.querySelector(".view-calendar .btn-primary");

  // Hide button before capture
  btn.style.visibility = "hidden";

  // Get current month & year
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const fileName = `Church Calendar - ${month} ${year}.pdf`;

  // Capture calendar as image
  await html2canvas(calendar, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 60; // margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 30, 30, imgWidth, imgHeight);
    pdf.save(fileName);
  });

  // Show button again after saving
  btn.style.visibility = "visible";
});


// get current page
const currentPage = window.location.pathname.split("/").pop(); 
const navLinks = document.querySelectorAll(".navbar-links li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-tab");
    }
});