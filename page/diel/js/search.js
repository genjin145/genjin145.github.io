if (document.querySelector(".main-search__input")) {
  let input = document.querySelector(".main-search__input");

  input.addEventListener("focus", function() {
    this.parentElement.classList.add("main-search--focus");
  });

  input.addEventListener("blur", function() {
    this.parentElement.classList.remove("main-search--focus");
  });
}