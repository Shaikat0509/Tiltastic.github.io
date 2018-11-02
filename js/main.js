
jQuery(document).ready(function($){

	new WOW().init();
	wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	})
	wow.init();




});

// run parallax when everything has loaded
$(window).on('load', function(){
	// define parallax dependencies
	var scene = document.getElementById('scene');
	var images = $('.layer');
	var p = new Parallax(scene);

	//fade in the view
	$('#scene').fadeIn(3000);
});





























//
