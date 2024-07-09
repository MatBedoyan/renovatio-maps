// ********* INTENTOS DE STICKY NAVBAR ***********



// *********** A PARTIR DE CHAT-GPT *************
// Se añade la clase pero no hace efecto, ni se quita al volver al top.

// let navbar = document.getElementById("navbar");

// // Obtener la posición inicial de la barra de navegación
// let position = navbar.offsetTop;

// // Función para agregar la clase sticky a la barra de navegación
// function stickyNavbar() {
//     if (window.scrollY >= position) {
//         navbar.classList.add("navbar-sticky");
//     } else {
//         navbar.classList.remove("navbar-sticky");
//     }
// }

// // // Llamar a la función cuando el usuario hace scroll
// window.onscroll = function() {
//     stickyNavbar();
// };





// *********** A PARTIR DE NOATECHLA *************

// let navbar = document.querySelector(".navbar");

// function stickyNavbar() {
//     let nombreVar = $(window).scrollTop();
//     $(window).height();
//     nombreVar > 150 ? navbar.addClass("navbar-sticky") : $(".navbar").removeClass("navbar-sticky"),
//     nombreVar > 1 ? navbar.addClass("navbar-sticky") : $(".navbar").removeClass("navbar-sticky")
// }

// $(window).scroll(function () { stickyNavbar() });