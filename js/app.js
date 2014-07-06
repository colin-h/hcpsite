$(document).foundation();

$(document).ready(function(){
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: '> div',
    cssEase: 'linear'
  });
});
