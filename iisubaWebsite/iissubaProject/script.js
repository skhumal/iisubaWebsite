const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});