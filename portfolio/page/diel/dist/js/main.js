(function() {
  var element = document.querySelector('.popup-request-call__phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
})();
