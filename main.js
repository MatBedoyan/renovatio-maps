// ************************** MAIN.JS *****************************



const stickyNavbar = () => {
    let scrolleo = window.scrollY;
    let navbar = document.querySelector(".navbar");
    scrolleo > 1
        ? navbar.classList.add("navbar-sticky")
        : navbar.classList.remove("navbar-sticky");
}
window.addEventListener("scroll", stickyNavbar);


const mainMenu = document.querySelector(".navbar__main-menu");
const btnMenu = document.querySelector(".navbar__btn-toggle-menu");
const btnOpenMenu = document.querySelector(".btn-open");
const btnCloseMenu = document.querySelector(".btn-close");
btnMenu.addEventListener("click", () => {
    const state = mainMenu.classList.toggle("navbar__main-menu-opened"); // Alterna la colocación de la clase menú cerrado, si no está la agrega, y si está la quita.
    btnOpenMenu.style.display = state ? "none" : "block";
    btnCloseMenu.style.display = state ? "block" : "none";
    btnOpenMenu.style.transition = "all .2s";
    btnCloseMenu.style.transition = "all .2s";
})