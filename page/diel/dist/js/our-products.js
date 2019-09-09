(function() {
    let ourProductsSlider = tns({
        container: ".our-products__list",
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
            fixedWidth: 680,
          },
          "1366": {
            fixedWidth: 760,
          }
        }
      });
  
      let btnNext = document.querySelector(".our-products__button-next");
  
      btnNext.addEventListener("click", function() {
        ourProductsSlider.goTo('next');
      });
  })();