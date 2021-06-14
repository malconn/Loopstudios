const bgHeader = document.querySelector("header");
const btNav = document.querySelector(".navbar-toggler");
const icon = document.querySelector(".fa-bars");

btNav.addEventListener("click", () => {
    bgHeader.classList.toggle("active");
    icon.classList.toggle("fa-times");
})