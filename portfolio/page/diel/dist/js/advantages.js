(function() {
  let advantagesSlider = tns({
      container: ".advantages__list",
      controlsPosition: "bottom",
  
      controls: false,
      nav: false,
      touch: true,
      speed: 1200,

      responsive: {
        "320": {
          fixedWidth: 235,
          gutter: 30
        },
        "768": {
          fixedWidth: 400,
          gutter: 50
        },
        "1366": {
          fixedWidth: 550,
          gutter: 60
        }
      }
    });

    let btnNext = document.querySelector(".advantages__button-next");

    btnNext.addEventListener("click", function() {
      advantagesSlider.goTo('next');
    });
})();