(function ($) {

	function rand(from, to){
  	return Math.floor(Math.random() * (to - from + 1) + from);
  }


  function calc_duration(distance, speed) {
		return distance/speed;
	}


	function spawn_cloud_loop () {
		add_cloud();
		setTimeout(function () {
			spawn_cloud_loop();
		}, rand(9000, 10000));
	}


	function add_cloud() {
		cloud = $('<img src="images/cloud_'+rand(1,3)+'.png" class="cloud">').appendTo('#clouds');

		distance = (window.screen.width+cloud.width())*1000;
		speed = 30;
		time = calc_duration(distance, speed);

		cloud.css({
			top: rand(10, 250),
			left: -275
		});

		cloud.animate({
			left: window.screen.width+100,
		}, time, 'linear');
	}


	function clean_up() {
		boundary = window.screen.width+100;

		setTimeout(function() {
			
			$('.cloud').each(function() {

				if(parseInt($(this).css('left')) >= boundary) {
					$(this).remove();
				}

			});

			clean_up();

		}, 500)
	}



	$(document).ready(function() {
		spawn_cloud_loop();
		clean_up();
	});

})(jQuery);