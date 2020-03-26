(function() {
  let stocksSlider = tns({
    container: ".stocks__slider",

    controls: false,
    controlsPosition: "center",
    navContainer: ".stocks-slider-options__nav",
    touch: true,
    speed: 1200,
    mode: "gallery",
    
    responsive: {
      "320": {
        fixedWidth: 253,
        gutter: 30
      },
      "768": {
        fixedWidth: 296,
      },
      "1366": {
        fixedWidth: false,
        items: 1,
        gutter: 0
      }
    }
  });
  
  let sliderLine = document.querySelector(".stocks-slider-options__line"),
      sliderAnimate = document.querySelector(".stocks-slider-options__animate"),
      sliderLineFrom,
      sliderLineTo,
      svgJumpBtns = document.querySelectorAll(".stocks-slider-options__item");

  for (let i = 0; i < svgJumpBtns.length; i++) {
    svgJumpBtns[i].addEventListener("click", function(evt) {

      sliderLineWidth = 16;
      switch(i) {
        case 0:
          if (sliderLineTo > 16) {
            sliderLineFrom = 408,
            sliderLineTo = 16;
          } else {
            sliderLineFrom = 16,
            sliderLineTo = 16;
          }
          break;
        case 1:
          if (sliderLineTo > 408) {
            sliderLineFrom = 808,
            sliderLineTo = 408;
          } else {
            sliderLineFrom = 16,
            sliderLineTo = 408;
          }

          break;
        case 2:
          sliderLineFrom = 408,
          sliderLineTo = 808;
          break;
      }
      sliderAnimate.setAttribute("from", sliderLineFrom);
      sliderAnimate.setAttribute("to", sliderLineTo);
      sliderAnimate.beginElement();

      for (let i = 0; i < svgJumpBtns.length; i++) {
        svgJumpBtns[i].classList.remove("stocks-slider-options__item--active");
        // if (evt.currentTarget == svgJumpBtns[i]) {
        //   sliderSlider.goTo(i);
        // }
      }
      evt.currentTarget.classList.add("stocks-slider-options__item--active");
    });
  }
})();