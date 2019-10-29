if (document.querySelector(".diel-select__button")) {
  document.querySelectorAll(".diel-select__button").forEach(function(el) {
    for (let i = el.firstElementChild; i !== null; i = i.nextElementSibling) {
      el.addEventListener("click", function() {
        this.parentElement.classList.add("diel-select--active");
      });
    }

    document.addEventListener("click", function(evt) {
      for (let i = el.firstElementChild; i !== null; i = i.nextElementSibling) {
        if (evt.target !== i && evt.target !== el) {
          el.parentElement.classList.remove("diel-select--active");
          break;
        }
      }
    });
  });
}