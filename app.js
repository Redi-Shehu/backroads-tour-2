const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle.addEventListener("click", (e) => {
  navLinks.classList.toggle("show");
});
