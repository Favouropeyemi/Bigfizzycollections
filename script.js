// const header = document.querySelector("header");

// window.addEventListener ("scroll", function()
// {
//     header.classList.toggle ("sticky",window.scrollY > 0 )
// });

// Let menu = document.querySelector('#menu-icon');
// Let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// }


// Select the header element
const header = document.querySelector("header");

// Add sticky class on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Select the menu icon and navbar elements
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");



// Toggle menu icon and navbar open class on menu click
menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
});

// Remove active classes on scroll
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Ensure 'home-text' is preceded by a dot if it's a class, or by a '#' if it's an ID
sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 300, origin: 'top' });
sr.reveal('.feature, .product, .cta-content, .contact', { delay: 200, origin: 'top' });






let date = new Date().getFullYear();
document.querySelector('#year').textContent = date; // Only update the year
