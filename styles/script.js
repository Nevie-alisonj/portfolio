const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",function () {
    navLinks.classList.toggle("open");
});
const links = document.querySelectorAll(".nav-links a");
links.forEach(function (link) {
    link.addEventListener("click",function () {
        navLinks.classList.remove("open");
    });
});