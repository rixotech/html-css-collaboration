const menuToggle = document.querySelector(".main_header__navigation__toggle");
const menu = document.querySelector(".main_header__navigation__list");
const auth = document.querySelector(".main_header__user_auth");
const backdrop = document.querySelector(".backdrop");

let backdropStatus = false;
menuToggle.addEventListener("click", () => {
    if (backdropStatus) {
        backdropStatus = false;
        backdrop.style.left = "100%";
        menu.style.opacity = "0";
        auth.style.opacity = "0";
    } else {
        backdropStatus = true;
        backdrop.style.left = "0%";
        menu.style.opacity = "1";
        auth.style.opacity = "1";
    }
});
