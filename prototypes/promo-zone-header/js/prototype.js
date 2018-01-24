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
	var owl = $('.main-menu-promotional-banner .owl-carousel');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: false,
		nav: true,
		navText: ['<div class="icon color-white-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-left-a" points="2.538 .34 14.204 12 2.538 23.66 -.204 20.92 8.701 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 23 4)">    <use fill="#384048" xlink:href="#chevron-left-a"></use>  </g></svg></div>','<div class="icon color-white-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-right-a" points="2.537 .34 14.202 12 2.537 23.66 -.204 20.92 8.7 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="translate(9 4)">    <use fill="#384048" xlink:href="#chevron-right-a"></use>  </g></svg></div>'],
		dots: false,
		onChange: function () {
			var currentIndex = $('.main-menu-promotional-banner .owl-carousel .active').index() + 1;
			if(currentIndex !== 0) {
				if(typeof window.closePromoBannerTimeout !== "undefined"){
				  clearInterval(window.closePromoBannerTimeout);
				}	
			}
		},
		onRefresh: function () {
			owl.find('div.owl-item').height('');
		},
		onRefreshed: function () {
			owl.find('div.owl-item').height(owl.height());
		}
	  });
	  
	 $(".main-menu-promotional-banner-close, .main-menu-promotional-banner-preview").on('click', function () {
		$( '.main-menu-promotional-banner').toggleClass('open');
		togglePromoBanner();
	 });
	 
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

	$('.main-menu-promotional-banner').on('click', function (event) {
		if(typeof window.closePromoBannerTimeout !== "undefined"){
		  clearInterval(window.closePromoBannerTimeout);
		}	
	});
	 
	 togglePromoBanner = function() {
		if($( '.main-menu-promotional-banner').hasClass('open')) {
			if(typeof window.promoBannerPreviewTimer !== "undefined"){
			  clearInterval(window.promoBannerPreviewTimer);
			}
			
		 	var targetHeight = $(".main-menu-promotional-banner-carousel")[0].scrollHeight;
			$(".main-menu-promotional-banner-carousel").stop(true,false).animate({
				height: targetHeight
			  }, 500, "easeOutCustom", function() {
			  	$(".main-menu-promotional-banner-carousel").addClass('active');
			});
		
		    $('.main-menu-promotional-banner-preview').hide();

		} else {
		  $(".main-menu-promotional-banner-carousel").stop(true,false).animate({
			  height: 1
			 }, 500, "easeOutCustom", function() {
				$(".main-menu-promotional-banner-carousel").removeClass('active');
				$('.main-menu-promotional-banner-preview').show(); 
				initPromoBannerPreview();
		  });
  
		}
	 }
	 

	 
	 initPromoBannerPreview = function() {
		if(typeof window.promoBannerPreviewTimer !== "undefined"){
		  clearInterval(window.promoBannerPreviewTimer);
		}
		window.promoBannerPreviewTimer = setInterval(function(){ 
			var targetElem = $( ".main-menu-promotional-banner-preview .active" );
			var nextElem = targetElem.next();
			if(nextElem.length == 0 ) {
				nextElem = $(".main-menu-promotional-banner-preview li:first");
			}
			targetElem.removeClass('active');
			nextElem.addClass('active');
		}, 5000); 
	 }
	 
	 //initPromoBannerPreview();
	 setTimeout(function(){
	 $( '.main-menu-promotional-banner').addClass('open');
	 window.closePromoBannerTimeout = setTimeout(function(){
		 $(".main-menu-promotional-banner-close").trigger('click');
	 }, 5000);
	  	 togglePromoBanner();
	 }, 1000);

	 
	 
	 
	  
	  
});