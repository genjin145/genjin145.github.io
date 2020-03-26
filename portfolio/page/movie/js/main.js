// VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW  VIEW
let view = {};

view.mainBox = document.querySelector("main");

view.render = function(html) {
  view.mainBox.innerHTML = html;
};

view.renderPagination = function(html) {
  view.mainBox.insertAdjacentHTML("beforeend", html);
};


// MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL  MODEL
let model = {};

model.requestApi = {
  url: "https://www.omdbapi.com/",
  apikey: "cd1e14a6&i"
};

model.search = "";
model.numPage = 1;
model.maxPage = 1;
model.mainViewModule = true;

model.pages = {
  home: capPage,
  search: mainViewPage,
  movie: moviePage,
  error: errorPage
};

model.block = {
  pagination: paginationBlock
};

model.containsPageSessionStorage = function(key) {
  if (sessionStorage.getItem(key)) return true
  else return false;
};

model.setPageSessionStorage = function(key, val) {
  let result;
  
  if (typeof val == "object") {
    if(model.containsPageSessionStorage(key)) {
      result = JSON.parse(sessionStorage.getItem(key));
    } else {
      result = [];
    }
    
    result.push(val);
    sessionStorage.setItem(key, JSON.stringify(result));

    return;
  }

  result = val;

  sessionStorage.setItem(key, JSON.stringify(result));
};

model.addHistoryNode = function(path, obj) {
  let state = {
    path: "?" + path,
    numPage: model.numPage,
    maxPage: model.maxPage
  };

  history.pushState(state, "", state.path);

  model.setPageSessionStorage("page",
  {
    path: state.path,
    numPage: model.numPage,
    obj: obj
  });
}

model.getPageSessionStorage = function(key) {
  if (typeof JSON.parse(sessionStorage.getItem(key)) == "object")
  return JSON.parse(sessionStorage.getItem(key));

  return sessionStorage.getItem(key);
};


// CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER  CONTROLLER
let controller = {};

controller.onClickButtonSearch = function() {
  let input = document.querySelector(".search__input");

  if (model.search != input.value) model.numPage = 1;
  model.search = input.value;

  if (screen.width <= 520) controller.onClickButtonMenu();

  let objParameters = {
    apikey: model.requestApi.apikey,
    s: encodeURIComponent(model.search),
    page: model.numPage
  };

  controller.sendHttpRequest(model.requestApi.url, function() {
    let obj = JSON.parse(this.responseText);
    
    model.maxPage = Math.ceil(obj.totalResults / 10);

    if (obj.Response == "True") {
      view.render(model.pages.search(obj));

      if (!model.mainViewModule) controller.onClickButtonViewList();
      else controller.onClickButtonViewModule();

      view.renderPagination(model.block.pagination({
        activePage: model.numPage,
        totalPages: model.maxPage
      }));

      if (model.maxPage > 1) {
        let pagination = document.querySelector(".pagination");
        pagination.addEventListener("click", controller.onClickPagination);
      }

      model.addHistoryNode(`search=${encodeURIComponent(input.value)}&page=${model.numPage}`, obj);

      let mainView =  document.querySelector(".main-view");
      mainView.addEventListener("click", controller.onClickMainView);
    } else {
      view.render(model.pages.error(obj));
    }
  }, objParameters);
};

controller.onKeyUpInputSearch = function(evt) {
  if (evt.key == "Enter") controller.onClickButtonSearch();
};

controller.onClickPagination = function(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("pagination__link") || f(evt.target, "pagination__link")) {
    let numPage = model.numPage;

    if (evt.target.classList.contains("pagination__previous") || f(evt.target, "pagination__previous")) {
      numPage--;
    }
    if (evt.target.classList.contains("pagination__next") || f(evt.target, "pagination__next")) {
      numPage++;
    }

    if (evt.target.classList.contains("pagination__number-page")) {
      numPage = evt.target.dataset.numpage;
    }

    if (numPage > 0 && numPage <= model.maxPage) {
      model.numPage = numPage;
    }

    controller.onClickButtonSearch();
  }

  function f(n, c) {
    let node = n;

    while (node !== null) {
      if (node.classList.contains(c)) {
        return true;
      }
      node = node.parentElement;
    }

    return false;
  }
}

controller.onClickMainView = function(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("main-view__link") ||
      evt.target.parentElement.classList.contains("main-view__link")) {
    let path;
    if (evt.target.classList.contains("main-view__link")) path = `${evt.target.dataset.router}`;
    if (evt.target.parentElement.classList.contains("main-view__link")) path = `${evt.target.parentElement.dataset.router}`;

    let objParameters = {
      apikey: model.requestApi.apikey,
      i: path
    };

    controller.sendHttpRequest(model.requestApi.url, function() {
      let obj = JSON.parse(this.responseText);

      if (obj.Response) {
        view.render(model.pages.movie(obj));

        model.addHistoryNode(path, obj);
      } else {
        view.render(model.pages.error(obj));
      }
    }, objParameters)
  }
};

controller.onPopStatePage = function() {
  let pages = model.getPageSessionStorage("page");

  pages.forEach(function(el) {
    let path = "";
    if (history.state) path = history.state.path
    else view.render(model.pages.home());

    if (path == el.path) {
      if (path.slice(0, 3) == "?tt") {
        view.render(model.pages.movie(el.obj));
      } else
      if (path.slice(0, path.indexOf("=")) == "?search") {
          view.render(model.pages.search(el.obj));
          let mainView =  document.querySelector(".main-view");
          mainView.addEventListener("click", controller.onClickMainView);

          if (!model.mainViewModule) controller.onClickButtonViewList();
          else controller.onClickButtonViewModule();

          model.maxPage = Math.ceil(el.obj.totalResults / 10);

          view.renderPagination(model.block.pagination({
            activePage: el.numPage,
            totalPages: model.maxPage
          }));
          
          if (model.maxPage > 1) {
            let pagination = document.querySelector(".pagination");
            pagination.addEventListener("click", controller.onClickPagination);
          }
      } else 
      if (path == "" || path == "?") {
        view.render(model.pages.home());
      } else {
        view.render("Error");
      }

      return;
    }
  });
};

controller.sendHttpRequest = function(strUrl, callback, objParameters) {
  let url = "";
  
  if (objParameters) {
    url = `${strUrl}?`;

    for (let key in objParameters) {
      url += `&${key}=${objParameters[key]}`
    }
  } else {
    url = `${strUrl}`;
  }

  let request = new XMLHttpRequest();
  
  request.open("POST", url, true);
  request.onload = callback;
  request.send();
};

controller.onClickButtonMenu = function() {
  let inactive = document.querySelector(".button_menu__svg-inactive"),
      active = document.querySelector(".button_menu__svg-active"),
      search = document.querySelector(".main-navigation__search");

  active.classList.toggle("hidden");
  inactive.classList.toggle("hidden");

  search.classList.toggle("hidden");
};

controller.onClickButtonViewList = function() {
  let mainView = document.querySelector(".main-view__items");
  mainView.classList.remove("main-view__items_module");
  model.mainViewModule = false;
};

controller.onClickButtonViewModule = function() {
  let mainView = document.querySelector(".main-view__items");
  mainView.classList.add("main-view__items_module");
  model.mainViewModule = true;
};

controller.onClickLogo = function(evt) {
  evt.preventDefault();
  model.addHistoryNode("");
  view.render(model.pages.home());
};

let logo = document.querySelector(".logo");
logo.addEventListener("click", controller.onClickLogo);

let buttonSearch = document.querySelector(".search__button");
buttonSearch.addEventListener("click", controller.onClickButtonSearch);

let inputSearch = document.querySelector(".search__input");
inputSearch.addEventListener("keyup", controller.onKeyUpInputSearch);

let buttonMenu = document.querySelector(".button_menu");
buttonMenu.addEventListener("click", controller.onClickButtonMenu);

let buttonViewList = document.querySelector(".view-options_list");
buttonViewList.addEventListener("click", controller.onClickButtonViewList);

let buttonViewModule = document.querySelector(".view-options_module");
buttonViewModule.addEventListener("click", controller.onClickButtonViewModule);

window.addEventListener("popstate", controller.onPopStatePage);

view.render(model.pages.home());