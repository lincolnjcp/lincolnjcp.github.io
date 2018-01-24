jQuery.extend( jQuery.easing,
{
	def: 'easeOutCustom',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeOutCustom: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	}
});


$( document ).ready(function() {

	 
	 $(".js-trigger-modal").on('click', function () {		 
		 $('.modal-wrap').fadeIn(400);
		 $('html').addClass('modal-open');
	 });	 
	 
	 $(".modal-outer, .modal-close").on('click', function () {		 
		 $('.modal-wrap').fadeOut(400);
		 $('html').removeClass('modal-open');
	 });
	 
	 $(".modal").on('click', function (event) {
		event.stopPropagation();
	 });
	 
	 // Promo Zone Navigation


	

	 
	 	var owl = $('.navigation-menu .owl-carousel');
	  owl.owlCarousel({
		
		loop: false,
		margin: 5,
		autoplay: false,
		nav: true,
		navText: ['<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-left-a" points="2.538 .34 14.204 12 2.538 23.66 -.204 20.92 8.701 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 23 4)">    <use fill="#384048" xlink:href="#chevron-left-a"></use>  </g></svg></div>','<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-right-a" points="2.537 .34 14.202 12 2.537 23.66 -.204 20.92 8.7 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="translate(9 4)">    <use fill="#384048" xlink:href="#chevron-right-a"></use>  </g></svg></div>'],
		dots: false,
		smartSpeed: 100,
		onRefresh: function () {
			owl.find('div.owl-item').height('');
		},
		onRefreshed: function () {
			owl.find('div.owl-item').height(owl.height());
		},
		responsive : {
			0 : {
				items: 1,
				slideBy: 1,
			},
			480 : {
				items: 3,
				slideBy: 3,
			},
			1400 : {
				items: 9,
				slideBy: 9,
			}
		}
	  });
	  
	  
	  toggleNavigationMenu = function() {
		if($( '.navigation-menu').hasClass('open')) {			
		 	var targetHeight = $(".navigation-menu")[0].scrollHeight;
			$(".navigation-menu").addClass('active');
				$(".main-menu").addClass('navigation-menu-open');
			$(".navigation-menu").stop(true,false).animate({
				height: targetHeight
			  }, 500, "easeOutCustom", function() {
			  	
				
			});
		
		    $('.main-menu-promotional-banner-preview').hide();

		} else {
		  $(".navigation-menu").stop(true,false).animate({
			  height: 1
			 }, 500, "easeOutCustom", function() {
				$(".navigation-menu").removeClass('active');
				$(".main-menu").removeClass('navigation-menu-open');
		  });
  
		}
	 }
	 
	 $(".toggle-navigation-menu").on('click', function (event) {
		$('.navigation-menu').toggleClass('open');
	 	toggleNavigationMenu();
	 });
	
	 

	 
	 
	 
	 
	 
	  
});