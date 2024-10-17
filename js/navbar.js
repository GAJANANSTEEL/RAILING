const menuBtn = document.querySelector(".menuBtn");
const navBar = document.querySelector(".navBar");
menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("openmenu");
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    navBar.style.maxHeight = navBar.scrollHeight + "px";
  } else {
    navBar.removeAttribute("style");
  }
}
let index = 0;

function showNextSlide() {
    const slides = document.querySelector('.slider-container');
    index = (index + 1) % slides.children.length; // Cycle through slides
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
