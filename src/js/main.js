$(document).ready(function () {

  var menuBtn = $('.menu_trigger');
  var menu = $('.menu_background');
  var content = $('.app_content');

  menuBtn.on('click', function () {
    content.toggleClass('shifted');
  });

  content.on('click', function () {
    $('.shifted').removeClass('shifted');
  });

});
