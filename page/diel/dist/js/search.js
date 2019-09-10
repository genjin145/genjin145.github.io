let buttonSearchUserMenu = document.querySelector(".user-menu__link-search");
buttonSearchUserMenu.addEventListener("click", showPopupSearch);

let flowSearch = document.querySelector(".flow-menu__link-search");
flowSearch.addEventListener("click", showPopupSearch);

let popupSearchClose = document.querySelector(".popup-search__close");

popupSearchClose.addEventListener("click", closePopupSearch);
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    closePopupSearch();
  }
});

let buttonSearchPopupMenu = document.querySelector(".popup-main-menu__search");

buttonSearchPopupMenu.addEventListener("click", showPopupSearch);

function showPopupSearch(evt) {
  evt.preventDefault();

  let popupSearch = document.querySelector(".popup-search");

  popupSearch.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePopupSearch() {
  let popupSearch = document.querySelector(".popup-search");

  popupSearch.classList.add("hidden");
  document.body.style.overflow = "initial";
}