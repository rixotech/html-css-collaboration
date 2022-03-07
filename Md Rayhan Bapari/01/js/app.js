// SVG Animatation
document.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(document.querySelector('svg').classList.add('animated'),2000);
})

// Preloader
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}