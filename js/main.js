$(document).ready(function() {

  //===================NAVBAR SHOW/HIDE==========================//
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 250 ) {
      $("#main-nav").slideDown(700);
    } else {
      $("#main-nav").slideUp(700);
    }
  });
  // =====================RESPONSIVE MENU======================== //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ============================Typed Js======================== //
  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Keren Shimoni.", "A Developer.", "A Dreamer.", "A Do-er."],
      typeSpeed: 100,
      loop: true,
    });
  });

});
