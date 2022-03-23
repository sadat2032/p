$(function () {

   //nav section js
    $(window).on('scroll', function () {
 
       if ($(window).scrollTop() > $('#header').height()) {
          $('#header').addClass('menu_animate')
       } else {
          $('#header').removeClass('menu_animate')
       }
    })

    //banner section js
    $('.banner_slider').slick({
      PrevArrow:'<i class="fas fa-arrow-left"></i>',
      NextArrow: '<i class="fas fa-arrow-right"></i>',
      dots: true,
      dotsClass: 'banner_slider',
   })


   
 })