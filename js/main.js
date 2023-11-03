$(function () {

  $(document).scroll(function(){
    $(window).scrollTop() > 50 ? $('.header__top').addClass('header__top--bg') : $('.header__top').removeClass('header__top--bg');
  });



  $(".logo").on("click", function(event){
    event.preventDefault();
        var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
  });



  if (window.matchMedia('(max-width: 1200px)').matches){
        $(".menu a, .header__icon").on("click", function(event){
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
                $('body,html').animate({scrollTop: top-50}, 1500);
        }); 
  }else {
    $(".menu a, .header__icon").on("click", function(event){
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top+70}, 1500);
  });
  }
    
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })

  $('.menu__link, .logo').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active',false);
  });



  $('.blog-slider').slick({
    dots:true,
    arrows:false,
    // autoplay:true,
    autoplaySpeed:4000
  });



  var mixer = mixitup('.gallery__content');

});