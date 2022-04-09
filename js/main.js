document.addEventListener('DOMContentLoaded', function () {

  // burger menu
  document.querySelector('.burger').addEventListener('click', function (el) {
    document.querySelector('.burger__menu').classList.add('burger-is-active');
    document.querySelector('.close__menu').addEventListener('click', function (ell) {
      document.querySelector('.burger__menu').classList.remove('burger-is-active');
    });
    document.querySelectorAll('.burger__link', '.burger__item').forEach(function (element) {
      element.addEventListener('click', function (a) {
        document.querySelector('.burger__menu').classList.remove('burger-is-active');
      });
    });
  });

  
});