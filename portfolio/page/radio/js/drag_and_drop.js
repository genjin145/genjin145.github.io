let dragAndDrop = {};

dragAndDrop.init = function() {
  let radioList = document.querySelector(".radio-list"),
      items = document.querySelectorAll(".radio-list__item");

  let dragged,
      layout = [];

  items.forEach(function(el, index) {
    if (!el.dataset.id) el.dataset.id = index;
    el.draggable = true;

    el.addEventListener("dragstart", function(evt) {
      dragged = evt.currentTarget;
      dragged.style.opacity = "0";
    });

    el.addEventListener("dragend", function() {
      dragged.style.opacity = "1";
    });

    el.addEventListener("dragover", function(evt) {
      evt.preventDefault();
    });

    el.addEventListener("dragenter", function() {
      replaceElement(dragged, el);
    });

    el.addEventListener("drop", function(evt) {
      evt.preventDefault();

      let items = document.querySelectorAll(".radio-list__item");

      layout = [];
      items.forEach(function (el) {
        layout.push(el.dataset.id);
      });

      localStorage.setItem("layout", layout);

      window.radio.layout = layout;
    });
  });

  if (localStorage.getItem("layout")) {
    layout = localStorage.getItem("layout").split(",");

    let arr = [];
    layout = layout.forEach(function (el) {
      for (let i = 0; i < items.length; i++) {
        if (el === items[i].dataset.id) {
          arr.push(items[i]);
        }
      }
    });
    
    arr.forEach(function (el) {
      radioList.appendChild(el);
    });
  } else {
    items.forEach(function (el) {
      layout.push(el.dataset.id);
    });
  }

  function replaceElement(newEl, oldEl) {
    let radioList = document.querySelector(".radio-list"),
        items = radioList.querySelectorAll(".radio-list__item");


    let newElement = newEl,
        oldElement = oldEl,
        newElementIndex = 0,
        oldElementIndex = 0;

    items.forEach(function(el, index) {
      if (newElement == el) newElementIndex = index;
      if (oldElement == el) oldElementIndex = index;
    });

    if (newElementIndex > oldElementIndex) {
      newElement.insertAdjacentElement("afterEnd", radioList.replaceChild(newElement, oldElement));
    } else {
      newElement.insertAdjacentElement("beforeBegin", radioList.replaceChild(newElement, oldElement));
    }
  }
};