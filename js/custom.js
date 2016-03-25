$(document).ready(function() {

	// BIND NAVIGATION TO SCROLL
	$(window).scroll(function(){
		$('.navigationmenu').toggleClass('scrolled', $(this).scrollTop() > 2);
	});

	// SLIDE TO TOP BUTTON
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 'slow');
		return false;
	});

	// SLIDESHOW
    $('.slideshow').cycle({
		fx: 'fade',
		slideResize: true,
		containerResize: false,
		width: '100%',
		fit: 1
		//speed:    300, 
		//timeout:  2000,
		//pause:  1,
		//random:  1,
	});

});