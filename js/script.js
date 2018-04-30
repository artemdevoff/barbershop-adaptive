window.addEventListener("load", function () {

  function get(name) {
    return document.querySelector(name);
  }

  var navMain = get('.main-nav'),
    navToogle = get('.main-nav__toogle'),
    login = get(".main-nav__user-login"),
    popup = get(".login-form"),
    close = get(".login-form__close"),
    button = get(".news__button"),
    newsShow = document.querySelectorAll(".news__item"),
    flag = true;

  navMain.classList.remove('main-nav--nojs');

  navToogle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  login.addEventListener("click", function () {
    popup.classList.add("login-form--show");
  });
  close.addEventListener("click", function () {
    popup.classList.remove("login-form--show");
  })

  button.addEventListener("click", function () {
    if (flag == true) {
      for (i = 0; i < newsShow.length; i++) {
        newsShow[i].style.display = "inline-block";
      }
      button.innerHTML = "Скрыть";
      flag = false;
    } else {
      for (i = 0; i < newsShow.length; i++) {
        newsShow[i].style.display = "none";
      }
      button.innerHTML = "Показать все";
      flag = true;
    }
  }, false);

}, false);