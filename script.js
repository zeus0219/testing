window.addEventListener('load', function() {
  $('.carousel').slick({
      slidesToShow: 2,
      dots: true,
      centerMode: true,
  });
  setTimeout(function() {
      $(".computer-effect").append(window.ddd);
      $("#__next").remove();
  }, 700);
});
