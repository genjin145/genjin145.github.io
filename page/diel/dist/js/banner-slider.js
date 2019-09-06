(function() {
  let bannerSlider = tns({
    container: ".banner__list",
    controlsPosition: "bottom",
    // nav: false,
    items: 1,
    navContainer: ".banner-menu-circle__nav",

    controls: false,
    touch: false,
    speed: 1200,

    // autoplay: true,
    autoplayTimeout: 10000,
  }),

      bannerSliderInfo = bannerSlider.getInfo();
      indexPrev = bannerSliderInfo.indexCached,
      indexCurrent = bannerSliderInfo.index;

  let time = 10000;
  let interval = setInterval(startInterval, time);

  function startInterval() {
    // bannerSlider.goTo('next');

    // let bannerItem = document.querySelectorAll(".banner__item");
    //     active = document.querySelector(".banner__item.tns-slide-active");
    // let svgBtns = document.querySelectorAll(".banner-menu-circle__nav-btn");
    
    // for (let i = 0; i < bannerItem.length; i++) {
    //   if (bannerItem[i] == active) {
    //     for (let j = 0; j < svgBtns.length; j++) {
    //       svgBtns[j].classList.remove("banner-menu-circle__nav-btn--active");
    //       svgBtns[i - 1].classList.add("banner-menu-circle__nav-btn--active");

    //     }

    //     break;
    //   }
    // }
  }


  let circle = document.querySelector("#transition-svg circle"),
    animate = document.querySelector("#transition-svg animate"),
    rCirleClip = circle.getAttribute("r"),
    toSvg = animate.getAttribute("to"),
    fromSvg = animate.getAttribute("from");

  animate.beginElement();

  let svgBtns = document.querySelectorAll(".banner-menu-circle__nav-btn");

  for (let i = 0; i < svgBtns.length; i++) {
    svgBtns[i].addEventListener("click", function(evt) {

      rCirleClip = 0;
      switch(i) {
        case 0: rCirleClip = 0; break;
        case 1: rCirleClip = 195; break;
        case 2: rCirleClip = 390; break;
      }
      animate.setAttribute("from", rCirleClip);
      animate.beginElement();

      

      for (let i = 0; i < svgBtns.length; i++) {
        svgBtns[i].classList.remove("banner-menu-circle__nav-btn--active");
      }
      evt.currentTarget.classList.add("banner-menu-circle__nav-btn--active");

      clearInterval(interval);
      interval = setInterval(startInterval, time);
    });
  }


  window.onload = sizingBanner;
  window.onresize = sizingBanner;
   

  function sizingBanner() {
    let diamond = document.querySelector(".banner-menu-diamond"),
        circle = document.querySelector(".banner-menu-circle");

    if (document.documentElement.clientWidth >= 1366) {
      diamond.classList.add("hidden");
      circle.classList.remove("hidden");

      // bannerSlider.navContainer = ".banner-menu-circle__nav";
    } else {
      diamond.classList.remove("hidden");
      circle.classList.add("hidden");

      // bannerSlider.navContainer = ".banner-menu-diamond";
      // bannerSlider.refresh();
    }

  }

console.log(bannerSlider);

})();





