'use strict';

const title = document.querySelectorAll('.news-card__title a');
const desc = document.querySelectorAll('.news-card-box__desc');

function cutString(query, len) {
  len = len || 20;

  Array.prototype.forEach.call(query, function(el) {
    if (el.textContent.length > len) {
      el.textContent = el.textContent.slice(0, len) + ' ...';
    }
  });
}

cutString(title, 30);
cutString(desc, 214);

objectFitImages();
