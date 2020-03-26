let paginationBlock = function(obj) {
  let MAX_LEN = 6;

  if (screen.width <= 520) MAX_LEN = 3;

  let len = obj.totalPages,
      active = obj.activePage;

  let html = "",
      itemHtml = "";

  let arr = [],
      p = 0;
  if (MAX_LEN == 3) p = 1;

  if (len > 1) {
    if (len <= MAX_LEN) {
      for (let i = 1; i <= len; i++) {
        if (active == i) arr[i - 1] = {val: i, act: true}
        else arr[i - 1] = {val: i, act: false};
      }
    } else {
      let i = 0,
          j = 1;

      if (active < len / p) i = active - 1 + p;

      if (active == 1) {
        j = 0;
        i = active;
      } else arr[0] = {val: 1, act: false};

      if (active == 2) j = 0 + p;

      if (active > len / 2) i = active - 2 + p * 2;

      if (active == len - 1) i = active - 3 + p * 3;
      
      if (active == len) {
        i = active - MAX_LEN + 2;
        arr[MAX_LEN - 1] = {val: len, act: true}
      } else arr[MAX_LEN - 1] = {val: len, act: false};

      for (; j < MAX_LEN - 1; i++, j++) {
        if (active == i) arr[j] = {val: i, act: true}
        else arr[j] = {val: i, act: false};
      }
    }

    arr.forEach(function(el) {
      if (el.act) {
        itemHtml += `
          <li class="pagination__item">
            <a class="pagination__link pagination__number-page pagination__link_active">${el.val}</a>
          </li>`;
      } else {
        itemHtml += `
        <li class="pagination__item">
          <a class="pagination__link pagination__number-page" href="?page/${el.val}" data-numpage="${el.val}">${el.val}</a>
        </li>`;
      }
    });
    
    html = `
    <ul class="pagination">
      <li class="pagination__item">
        <a class="pagination__link pagination__previous" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          Prev
        </a>
      </li>

      ${itemHtml}

      <li class="pagination__item">
        <a class="pagination__link pagination__next" href="#">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </a>
      </li>
    </ul>`;
  }
  return html;
};












{/* <li class="pagination__item">
  <a class="pagination__link pagination__number-page pagination__link_active">1</a>
</li>

<li class="pagination__item">
  <a class="pagination__link pagination__space">...</a>
</li>

<li class="pagination__item">
  <a class="pagination__link pagination__number-page" href="#">10</a>
</li> */}