/*LOG IN*/
$('.btn-in').click(function(){
		  $('.modal-bg').fadeIn();
		  $('#modal').fadeIn();
	});
		$('#close').click(function(){
			  $('.modal-bg').fadeOut();		
			  $('#modal').fadeOut();
		  return false;
		});

/*SCROLL DOWN MENU*/
	$(window).scroll(function(){
		var position = $(this).scrollTop();
		if (position > 658) {
			$(".navbar-header").fadeIn("navegacion");
		}
			else if (position < 658) {
				$(".navbar-header").fadeOut("navegacion");
		}
	});
/*HOVER CIRCLE*/
$('.circulo-exterior').hover(function() {
		$(".text-circle").toggleClass('hidden');
		$(".text-circle-hover").toggleClass("hidden");
	});
/*MENU MOVIL*/
$(document).ready(function() {
  $('#button-menu-slide').on('click', function() {
    $('#slider-left').toggleClass('open');
  });
});


