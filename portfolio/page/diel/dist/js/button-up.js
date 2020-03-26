(function() {
  let t;
  let buttonUp = document.querySelector(".company__button-up");

  buttonUp.addEventListener("click", up);
  function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
      window.scrollBy(0,-100);
      t = setTimeout(up, 20);
    } else clearTimeout(t);
    return false;
  }
})();