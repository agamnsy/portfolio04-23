// INI UNTUK HAMBURGER MENU SIDEBAR
const navbarNav = document.querySelector(".navbar");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// INI UNTUK MENGHILANGKAR SIDEBAR
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});