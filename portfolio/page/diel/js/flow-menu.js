window.addEventListener("scroll", function() {
  let flowMenu = document.querySelector(".flow-menu-nav");
  if (pageYOffset > 115) {
    flowMenu.classList.add("flow-menu-nav--active");
  } else {
    flowMenu.classList.remove("flow-menu-nav--active");
  }
});
