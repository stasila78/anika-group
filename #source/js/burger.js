$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger,.sidebar,.menu-bg").toggleClass("active");
    $("body").toggleClass("lock");
  });
});