let menuButton = document.querySelector(".main-menu-button");
menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  let menu  = document.querySelector(".main-menu");
  if (this.classList.contains("main-menu-button--active")) {
    this.classList.remove("main-menu-button--active");
    this.innerHTML = "&#x2630;";
    menu.style.display = "none"; 
  } else {
    this.classList.add("main-menu-button--active");
    this.innerHTML = "&#x2613;";
    menu.style.display = "flex"; 
  }
});



let carousel = document.querySelector('.service-slider__carousel');

let list = carousel.querySelector('.service-slider__list');
let listElems = carousel.querySelectorAll('.service-card');

let width = listElems[0].offsetWidth + 30;

let count = 1;

let position = 0;

document.querySelector('.service-slider__prev').onclick = function() {
  position += width * count;

  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

document.querySelector('.service-slider__next').onclick = function() {
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}