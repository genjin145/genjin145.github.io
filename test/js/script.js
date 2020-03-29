let title = document.querySelectorAll('.news-card__title'),
    desc = document.querySelectorAll('.news-card-box__desc p');

cutString(title, 30);
cutString(desc, 214);

function cutString(query, len = 20) {
  query.forEach(el => {
    if (el.textContent.length > len) {
      el.textContent = el.textContent.slice(0, len) + ' ...';
    }
  });
}