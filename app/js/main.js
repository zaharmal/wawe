$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.blog-slider__inner').slick({
    dots: true,
    arrows: false,
  });

  var mixer = mixitup('.gallery__content');

});