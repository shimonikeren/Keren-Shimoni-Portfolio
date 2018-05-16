$(document).ready(function() {

  'use strict';

  //===================NAVBAR SHOW/HIDE==========================//
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
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
