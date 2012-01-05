(function ($) {

	function rand(from, to){
  	return Math.floor(Math.random() * (to - from + 1) + from);
  }

	function spawn_cloud_loop () {
		setTimeout(function () {
			add_cloud();
			spawn_cloud_loop();
		}, rand(10000, 12000));
	}

	function add_cloud() {
		cloud = $('<img src="images/cloud_'+rand(1,3)+'.png" class="cloud">').appendTo('#clouds');

		cloud.css({
			top: rand(10, 150),
			left: -275
		});

		cloud.animate({
			left: window.screen.width+100,
		}, 50000, 'linear');
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

	add_cloud();
	spawn_cloud_loop();
	clean_up();

})(jQuery);