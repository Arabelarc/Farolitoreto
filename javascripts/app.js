/*
var $circulorojo = $('.circulo-dentro-rojo');
	$circulorojo.hover(function(){
		$('.circulo-afuera-rojo').toggleClass('active');
		$('.texto-circulo').toggleClass('hidden');
		$('.circulo-hover').toggleClass('hidden');
	});
*/
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

$(document).ready(function(){
    $(".circulo-afuera-rojo").mouseout(function(){
        $(".circulo-dentro-rojo").show());
    });
    $(".circulo-hover").mouseover(function(){
        $("h4").show();
        $(".imagen-hover").show();
    });
});