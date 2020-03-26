function Popup(popupClass) {
  let that = this,
      popup,
      close;

  if (document.querySelector(`${popupClass}`)) {
    popup = document.querySelector(`${popupClass}`);

    if (popup.querySelector(".popup__close")) {
      close = popup.querySelector(".popup__close");

      close.addEventListener("click", function(evt) {
        evt.preventDefault();
        that.closePopup();
      });
    }

    that.showPopup = function() {
      popup.classList.add("popup--active");
      document.body.style.overflow = "hidden";
    }

    that.closePopup = function() {
      popup.classList.remove("popup--active");
      document.body.style.overflow = "initial";
    }

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode == 27) {
        that.closePopup();
      }
    });

    popup.addEventListener("click", function(evt) {
      if (evt.target === popup) {
        that.closePopup();
      }
    });
    
    that.addElement = function(elem) {
      if (document.querySelector(`.${elem}`)) {
        document.addEventListener("click", function(evt) {
          for (let i = evt.target; i !== null; i = i.parentNode) {
            if (i == document) break;
            if (i.classList.contains(elem)) {
              evt.preventDefault();
              that.showPopup();
              break;
            }
          }

        });
      }
    }
  }
}

if (document.querySelector(".popup-leave-feedback") && document.querySelector(".reviews__button-primery")) {
  let feedbackPopup = new Popup(".popup-leave-feedback");
  feedbackPopup.showPopup();
  document.querySelector(".reviews__button-primery").addEventListener("click", function() {
    feedbackPopup.showPopup();
  });
}

if (document.querySelector(".popup-product-card") && document.querySelector(".product-card")) {
  let productCardkPopup = new Popup(".popup-product-card");
  productCardkPopup.addElement("product-card");
}

if (document.querySelector(".popup-order") && document.querySelector(".card-item-form__submit")) {
  let productCardkPopup = new Popup(".popup-order");
  productCardkPopup.addElement("card-item-form__submit");
}

if (document.querySelector(".filter") && document.querySelector(".diel-select-list__item")) {
  let filter = new Popup(".filter");
  filter.addElement("diel-select-list__item");
}

if (document.querySelector(".popup-main-menu") && document.querySelector(".main-menu-button")) {
  let mainMenu = new Popup(".popup-main-menu");
  document.querySelector(".main-menu-button").addEventListener("click", function() {
    mainMenu.showPopup();
  });
}

if (document.querySelector(".popup-search") && document.querySelector(".user-menu__link-search")) {
  let search = new Popup(".popup-search"),
      btn = document.querySelector(".user-menu__link-search");

  btn.addEventListener("click", function() {
    search.showPopup();
  });
}

if (document.querySelector(".popup-request-call") && document.querySelector(".user-menu__link-phone")) {
  let popup = new Popup(".popup-request-call"),
      btn = document.querySelector(".user-menu__link-phone");

    btn.addEventListener("click", function() {
    popup.showPopup();
  });
}
