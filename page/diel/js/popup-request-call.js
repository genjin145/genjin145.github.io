(function() {
  let umBtnPhone = document.querySelector(".user-menu__link-phone");

  umBtnPhone.addEventListener("click", function() {
    let popup = document.querySelector(".popup-request-call");

    popup.classList.remove("hidden");
  });

  let btnPopupClose = document.querySelector(".popup-request-call__close");

  btnPopupClose.addEventListener("click", function() {
    let popup = document.querySelector(".popup-request-call");

    popup.classList.add("hidden");
  });
})();

