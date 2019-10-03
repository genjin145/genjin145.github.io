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

  popupSearch.classList.remove("popup-search--hidden");
  document.body.style.overflow = "hidden";
}

function closePopupSearch() {
  let popupSearch = document.querySelector(".popup-search");

  popupSearch.classList.add("popup-search--hidden");
  document.body.style.overflow = "initial";
}





let searchWrapper = document.querySelector(".main-search"),
    searchInput = searchWrapper.querySelector(".main-search__input");

searchInput.addEventListener("mouseover", activateInputLine);
searchInput.addEventListener("mouseout", deactivateInputLine);

searchInput.addEventListener("focus", function() {
  searchInput.removeEventListener("mouseout", deactivateInputLine);
  activateInputLine();
});
searchInput.addEventListener("blur", function() {
  searchInput.addEventListener("mouseout", deactivateInputLine);
  deactivateInputLine();
});

function activateInputLine() {
  searchInput.parentNode.classList.add("main-search--focus");
}

function deactivateInputLine() {
  searchInput.parentNode.classList.remove("main-search--focus");
}