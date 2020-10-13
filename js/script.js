$(document).ready(function(){

  /* scrolltop */
  $('.nav-brd li a, #hme-nav').on('click', function(event) {
    var $anchor = $(this);
    var $scroll = $($anchor.attr('href')).offset().top - 50;
    $('html, body').stop().animate({
        scrollTop: $scroll
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

$(window).scroll(function(){
	if( $(window).scrollTop() > 200 ){
    $('header .navbar-da').addClass('navbar-da-fixed');	
  }else{
    $('header .navbar-da').removeClass('navbar-da-fixed')
  } 
});

});