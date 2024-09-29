const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}




/* Slider*/
const slider = document.querySelector('.slider');
const firstSlide = slider.firstElementChild.cloneNode(true);
const lastSlide = slider.lastElementChild.cloneNode(true);
slider.appendChild(firstSlide);
slider.insertBefore(lastSlide, slider.firstElementChild);
slider.addEventListener('animationiteration', () => {
  slider.appendChild(slider.firstElementChild);
});

