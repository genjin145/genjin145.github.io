let buttonSearchUserMenu = document.querySelector(".user-menu__link-search");

buttonSearchUserMenu.addEventListener("click", showPopupSearch);

let popupSearchClose = document.querySelector(".popup-search__close");

popupSearchClose.addEventListener("click", function() {
  let popupSearch = document.querySelector(".popup-search");

  popupSearch.classList.add("hidden");
});

let buttonSearchPopupMenu = document.querySelector(".popup-main-menu__search");

buttonSearchPopupMenu.addEventListener("click", showPopupSearch);

function showPopupSearch() {
  let popupSearch = document.querySelector(".popup-search");

  popupSearch.classList.remove("hidden");
}