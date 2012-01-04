$(document).ready(function() {
	
	var card_height = $('#card').height();

	$('#card').css({
		'margin-top': 70,
		'opacity': '0'
	});

	$('#card').delay(100).animate({
		'margin-top': '50px',
		'opacity': '1'
	}, 600);

});