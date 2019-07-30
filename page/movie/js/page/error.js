let errorPage = function(obj) {
  let html = "";

  html = `
    <h2 class="search-error">${obj.Error}</h2>
  `;

  return html;
};