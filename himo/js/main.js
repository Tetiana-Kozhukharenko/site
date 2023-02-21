$(function(){

  $('.slider-item, .slider-content').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          dots: false
        }
    },
  ]
  });

  // Плавність скролу
  $(".header-list, .hero-content").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  // Бургер-меню
  $('.nav-btn').on('click', function(){
    $('.header-list').toggleClass('header-list-active');
  });

});