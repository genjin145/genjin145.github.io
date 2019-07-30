let moviePage = function(obj) {

  let rating = function() {
    let html = "";

    obj.Ratings.forEach(function(el) {
      html += `
        <li class="movie-rating__item">
          <b class="movie-rating__source">${el.Source}</b>
          <span class="movie-rating__value">${el.Value}</span>
        </li>`;
    });

    return html;
  };

  let awards = function(str) {
    let html = "";

    if (str !== "N/A") {
      html = `
        <li class="movie-rating__item">
          <p class="movie-awards">${str}</p>
        </li>`;
    }

    return html;
  };

  let info = function() {
    let result = "",
        priority = ["Released", "Country", "Genre", "Runtime", "Production", "Director", "Writer", "Actors", "BoxOffice"];

    priority.forEach(function(el) {
      if (obj[el]) {
        result += `
          <li class="movie-info__item">
            <b class="movie-info__key">${el}</b>
            <span class="movie-info__value">${obj[el]}</span>
          </li>`;
      }
    });

    return result;
  };

  let totalSeasons = function(str) {
    if (str) return `(${str} seasons)`;
    else return "";
  };

  let imdbRating = function(str1, str2) {
    let html = "";

    if (str1 !== "N/A" && str2 !== "N/A") {
      html = `
        <p class="imdb-rating">
          <span>IMDb</span>

          <span>
            <span>rating<b class="imdb-rating__value">${str1}</b></span>
            <span>votes<b class="imdb-rating__votes">${str2}</b></span>
          </span>
        </p>`;
    }

    return html;
  };

  let html = `
    <section class="movie">
      <h2 class="hidden">Movie</h2>

      <div class="movie-brief-info">
        <h3 class="movie__title">${obj.Title}</h3>

        <p class="movie-brief-info__p">
          <span class="movie__type">${obj.Type}</span>
          <span class="movie__year">${obj.Year}</span>
          <span class="movie__total-seasons">${totalSeasons(obj.totalSeasons)}</span>
        </p>

        <p class="movie-guidelines">
          <span>Guidelines</span>
          <span class="movie-guidelines__rated">${obj.Rated}</span>
        </p>
      </div>

      <div class="movie__box-top">
        <div class="movie__poster-wrapper">
          <img class="movie__poster" src="${obj.Poster == "N/A" ? obj.Poster = "./img/poster.png" : obj.Poster}" alt="${obj.Title}">
        </div>
      </div>

      <div class="movie__box-middle">
        <div class="rating-group">
          ${imdbRating(obj.imdbRating, obj.imdbVotes)}

          <ul class="movie-rating">
            ${rating()}
            ${awards(obj.Awards)}
            
          </ul>
        </div>

        <ul class="movie-info">
          ${info()}
        </ul>
      </div>

      <div class="movie__box-bottom">
        <p class="movie-plot">${obj.Plot == "N/A" ? obj.Plot = "" : obj.Plot}</p>
      </div>
    </section>`;

  return html;
};