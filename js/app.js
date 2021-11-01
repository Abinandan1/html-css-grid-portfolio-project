const navbar = document.querySelector("#nav");
const logochange1 = document.querySelector("#logo1");
const logochange2 = document.querySelector("#logo2");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
    logochange1.classList.add("logochange1");
    logochange2.classList.add("logochange2");
  } else {
    navbar.classList.remove("navbar-fixed");
    logochange1.classList.remove("logochange1");
    logochange2.classList.remove("logochange2");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
