(function() {
  let bannerSlider = tns({
    container: ".banner__list",
    controlsPosition: "bottom",
    // nav: false,
    navContainer: ".banner-menu-circle__nav",
    items: 1,

    controls: false,

    speed: 800,

    autoplayTimeout: 2000,
  });

  bannerSlider.play();
})();