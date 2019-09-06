let menuButton = document.querySelector(".main-menu__item-button");

menuButton.addEventListener("click", function() {
    let popupMenu = document.querySelector(".popup-main-menu");

    popupMenu.classList.remove("hidden");
});


let popupMenuClose = document.querySelector(".popup-main-menu__close");

popupMenuClose.addEventListener("click", function() {
    let popupMenu = document.querySelector(".popup-main-menu");

    popupMenu.classList.add("hidden");
});