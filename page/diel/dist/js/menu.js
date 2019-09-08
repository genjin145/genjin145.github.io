let menuButton = document.querySelector(".main-menu__item-button");

menuButton.addEventListener("click", showPopupMenu);


let popupMenuClose = document.querySelector(".popup-main-menu__close");

popupMenuClose.addEventListener("click", closePopupMenu);
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    closePopupMenu();
  }
});

function showPopupMenu() {
  let popupMenu = document.querySelector(".popup-main-menu");

  popupMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePopupMenu() {
  let popupMenu = document.querySelector(".popup-main-menu");

  popupMenu.classList.add("hidden");
  document.body.style.overflow = "initial";
}