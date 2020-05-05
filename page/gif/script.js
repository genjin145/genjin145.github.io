class GetOptions {
  constructor(options = {}) {
    this.url = options.url || 'https://api.giphy.com/v1/gifs/';
    this.endpoint = options.endpoint || 'search'; // trending, random
    this.search = options.search || '';
    this.apikey = options.apikey || 'CL8RCOEtGwfzgicX46bhiyo421QyjB2B';
    this.limit = options.limit || 12;
    this.offset = options.offset || 0;
  }

  join() {
    let basic = `${this.url}${this.endpoint}?api_key=${this.apikey}`,
        offset = `limit=${this.limit}&offset=${this.offset}`;

    switch (this.endpoint) {
      case 'trends':
        return `${basic}&${offset}`;
      case 'random':
        return `${basic}`;
      default:
        return `${basic}&q=${this.search}&${offset}`;
    }
  }
}

class Gif {
  count = 0;
  totalCount = 0;
  numberOfResults = 12;

  constructor(element) {
    this.element = document.querySelector(element);

    this.init();
  }

  init() {
    let gifSearch = this.element.querySelector('.gif-search'),
        prev = this.element.querySelector('.gif__prev'),
        next = this.element.querySelector('.gif__next');

    this.submitGifSearch();

    gifSearch.addEventListener('submit', (evt) => {
      this.submitGifSearch(evt);
    });

    prev.addEventListener('click', (evt) => {
      this.count -= this.numberOfResults;
      this.submitGifSearch(evt);
    });
    
    next.addEventListener('click', (evt) => {
      this.count += this.numberOfResults;
      this.submitGifSearch(evt);
    });
  }

  async submitGifSearch(evt) {
    if (evt) evt.preventDefault();
  
    let input = this.element.querySelector('.gif-search__input'),
        options,
        result;
  
    if (input.value === '') return;

    if (this.count > this.totalCount) {
      this.count -= this.numberOfResults;
      return;
    }
    if (this.count < 0) {
      this.count = 0;
      return;
    }
  
    options = new GetOptions({
      search: input.value,
      offset: this.count,
    }).join();
  
    result = await this.get(options);
    this.totalCount = result.pagination.total_count;
  
    this.showImagesFor(result);
  }

  async get(str) {
    let response = await fetch(str);

    return await response.json();
  }

  async showImagesFor(obj) {
    let parent = this.element.querySelector('.gif-box'),
        cards;
    
    parent.innerHTML = '';
    obj.data.forEach(elem => previewImage(parent, elem));
  
    cards = this.element.querySelectorAll('.gif-card');
  
    cards.forEach(elem => {
      let oldImg = elem.querySelector('.gif-card__img'),
          img = oldImg.cloneNode();
  
      img.src = elem.href;
      img.alt = oldImg.alt;
  
      img.addEventListener('load', ()=> {
        elem.replaceChild(img, oldImg);
      });
    });
  
    function previewImage(parent, options) {
      let template = `
        <a class="gif-card" target="_blanck" href="${options.images.original.url}">
          <img class="gif-card__img" src="${options.images.preview_webp.url}" alt="${options.title}">
        </a>`;
    
      parent.insertAdjacentHTML('beforeend', template);
    }
  }
}

let gif = new Gif('.gif');
