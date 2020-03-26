let mainViewPage = function(obj) {
  let arr = obj.Search,

      html = "",
      card = "";
  
  arr.forEach(function(el) {
    let poster = new Image();

    poster.src = el.Poster;
    if (poster.onload) {
      el.Poster = "./img/poster.png";
    }

    card += `
      <li class="main-view__item">
        <a class="main-view__link" href="?search=${el.imdbID}" data-router="${el.imdbID}">
          <div class="main-view__img-wrapper">
            <img class="main-view__img" src="${el.Poster == "N/A" ? el.Poster = "./img/poster.png" : el.Poster}" alt="${el.Title}">
          </div>

          <div class="main-view__info">
            <h3 class="main-view__title">${el.Title}</h3>
            
            <p class="main-view__description">
              <span class="main-view__type">${el.Type}</span>
              <span class="main-view__year">${el.Year}</span>
            </p>
          </div>
        </a>
      </li>`;
  });
  
  html = `
    <section class="main-view">
      <h2 class="visually-hidden">View module</h2>

      <ul class="main-view__items main-view__items_module">
        ${card}
      </ul>
    </section>`;
  
  return html;
};