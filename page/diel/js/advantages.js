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
          fixedWidth: 265,
        },
        "768": {
          fixedWidth: 450,
        },
        "1366": {
          fixedWidth: 610,
        }
      }
    });

    let btnNext = document.querySelector(".advantages__button-next");

    btnNext.addEventListener("click", function() {
      advantagesSlider.goTo('next');
    });
})();