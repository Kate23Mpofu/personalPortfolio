// get the current year and update the footer
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});