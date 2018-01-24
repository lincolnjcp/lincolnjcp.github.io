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
	 // Footer
	 
	 /* Conditionally activate only after a specified level of scrolling
	 $( window ).scroll(function() {
		if($(window).scrollTop() > 300) {
			$('.sticky-footer').addClass('active');
		} else if (!$('.sticky-footer').hasClass('open')) {
			$('.sticky-footer').removeClass('active').removeClass('open');
			$('.sticky-footer-bg').removeClass('active');
		}
	});
	*/
	
	$('.sticky-footer-bg').on('click', function () {
	  $('.sticky-footer').removeAttr("style").removeClass('open'); 
	  $('.sticky-footer-bg').removeClass('active');
	});
	
	$('.sticky-footer').addClass('bounce');
	
	 $('.js-footer-toggle').on('click', function () {		 
		 $('.sticky-footer').toggleClass('open');
		 if($('.sticky-footer').hasClass('open')) {
			 $('.sticky-footer').removeClass('bounce');
			 var targetHeight = $(".sticky-footer")[0].scrollHeight;
			$('.sticky-footer').css('height' , targetHeight);
			$('.sticky-footer-bg').addClass('active');
		 } else {
			$('.sticky-footer').removeAttr("style"); 
			$('.sticky-footer-bg').removeClass('active');
		 }
	 });	 
	 
	 	var owl = $('.sticky-footer .owl-carousel');
	  owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 25,
		autoplay: false,
		nav: true,
		navText: ['<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-left-a" points="2.538 .34 14.204 12 2.538 23.66 -.204 20.92 8.701 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 23 4)">    <use fill="#384048" xlink:href="#chevron-left-a"></use>  </g></svg></div>','<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-right-a" points="2.537 .34 14.202 12 2.537 23.66 -.204 20.92 8.7 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="translate(9 4)">    <use fill="#384048" xlink:href="#chevron-right-a"></use>  </g></svg></div>'],
		dots: true,
		slideBy: 3
	  });
	  
	  
});