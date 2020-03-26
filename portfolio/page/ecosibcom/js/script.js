// слайдер отзывов
$('.reviews-slider').slick({
  autoplay: true,
  appendArrows: '.reviews__arrows',
  prevArrow: '<button class="reviews__arrows-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></svg></button>',
  nextArrow: '<button class="reviews__arrows-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></svg></button>',
  dots: true,
  appendDots: '.reviews__dots',
  dotsClass: 'reviews__dots-list'
});


// плавная прокрутка страницы
$('body').on('click', '[href*="#"]', function(evt){
  let fixedOffset = 100;
  $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 800);
  evt.preventDefault();
});


// позиционирование списка в блоке услуги
$(window).on('load resize', function() {
  $('.services-list__item').each(function() {
    let left = $(this).position().left,
        parentWidth = $(this).parent().parent().outerWidth();
  
    $(this).find('.services-list__content').css('left', -left + 'px');
    $(this).find('.services-list__content').css('width', parentWidth + 'px');
  });
});


// маска для телефона
initMask();
function initMask() {
  $('input[name=phone').on('focus', function() {
    $(this).inputmask('+7(999) 999-99-99');
  });
  
  $('input[name=phone').on('blur', function() {
    $(this).inputmask('remove');
  });
}


// валидация
validate();
function validate() {
  $('button[type=submit').on('click', function(evt) {
    $(this.form.elements).each(function() {
      if ($(this).prop('tagName') === 'INPUT') {
        if ($(this).prop('required') && $(this).val() === '') {
          evt.preventDefault();
          $(this).addClass('form__input--error');
        } else {
          $(this).removeClass('form__input--error');
        }
      }
    });
  });
}


// отправка формы
sendForm();
function sendForm() {
  $('.form').on('submit', function() {
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $(this).serialize(),
      success: function() {
        $('.popup').remove();
        $('body').append('<div class="popup"><div class="popup__box"><h2 class="form__title">Форма отправлена</h2><p class="form__desc">Наш менеджер свяжется с вами в ближайшее время</p></div></div>');
      },
    });
  
    return false;
  });
}


// открытие попапа
$('.js-call').on('click', function(evt) {
  evt.preventDefault();

  $.ajax({
    url: 'popup.html',
    type: 'POST',
    success: function(res) {
      $('body').append(res);
      
      initMask();
      validate();
      sendForm();
    },
  });
});


// закрыть попап
$(window).on('mousedown keydown', function(evt) {
  if ($(evt.target).hasClass('popup') || evt.originalEvent.key === 'Escape') {
    $('.popup').remove();
  }
});