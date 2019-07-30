var link_login = document.querySelector(".link-login"),
    link_map = document.querySelector(".link-map"),
    modal_login = document.querySelector(".modal-login"),
    modal_map = document.querySelector(".modal-map"),
    modal_close = document.querySelectorAll(".modal-close");

link_login.addEventListener("click", function(e) {
    e.preventDefault();
    modal_login.classList.add("modal-show");
});

modal_close[0].addEventListener("click", function(e) {
    e.preventDefault();
    modal_login.classList.remove("modal-show");
});

link_map.addEventListener("click", function(e) {
    e.preventDefault();
    modal_map.classList.add("modal-show");
});

modal_close[1].addEventListener("click", function(e) {
    e.preventDefault();
    modal_map.classList.remove("modal-show");
});