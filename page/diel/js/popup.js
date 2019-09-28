function Popup(popupClass) {
  let that = this,
      popup,
      close;

  if (document.querySelector(`.${popupClass}`)) {
    popup = document.querySelector(`.${popupClass}`);
    close = popup.querySelector(".popup__close");
  } else throw(`Попап с классом .${popupClass} отсутствует!`);

  that.showPopup = function() {
    popup.classList.add("popup--active");
    document.body.style.overflow = "hidden";
  }

  that.closePopup = function() {
    popup.classList.remove("popup--active");
    document.body.style.overflow = "initial";
  }

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    that.closePopup();
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == 27) {
      that.closePopup();
    }
  });
  
  that.addElement = function(elem) {
    if (document.querySelector(`.${elem}`)) {
      let element = document.querySelector(`.${elem}`);
  
      element.addEventListener("click", function(evt) {
        evt.preventDefault();
        that.showPopup();
      });

    } else throw(`Элемент с классом .${elem} отсутствует!`);
  }
}

let feedbackPopup = new Popup("popup-leave-feedback");
feedbackPopup.showPopup();
feedbackPopup.addElement("reviews__button-primery");