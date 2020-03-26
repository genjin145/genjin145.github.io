(function() {
  let umBtnPhone = document.querySelector(".user-menu__link-phone");
  umBtnPhone.addEventListener("click", showPopupPhone);

  let flowBtnPhone = document.querySelector(".flow-menu__link-phone");
  flowBtnPhone.addEventListener("click", showPopupPhone);


  let btnPopupClose = document.querySelector(".popup-request-call__close");

  btnPopupClose.addEventListener("click", closePopupPhone);
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == 27) {
      closePopupPhone();
    }
  });

  function showPopupPhone(evt) {
    evt.preventDefault();
    
    let popup = document.querySelector(".popup-request-call");

    popup.classList.remove("popup-request-call--hidden");
  }

  function closePopupPhone() {
    let popup = document.querySelector(".popup-request-call");
    
    popup.classList.add("popup-request-call--hidden");
  }
})();

