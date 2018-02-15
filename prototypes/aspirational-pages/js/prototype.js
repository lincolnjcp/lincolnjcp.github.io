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

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

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

	AOS.init();

	$('.hotspot-btn').unbind('click').on('click', function(event){
          event.preventDefault();
          var parent = $($(this).attr('data-target'));
          parent.addClass('is-visible');
          parent.find('.product-card-name').text($(this).find('.hotspot-title').text());
          parent.find('.product-card-price-value').text($(this).find('.hotspot-price').text());
          
          parent.find('.product-card-thumbnail img').attr('src', $(this).attr('data-image'));
        });

        $('.side-panel').unbind('click').on('click', function(event){
          if( $(event.target).is('.side-panel')) { 
            $(this).removeClass('is-visible');            
            $('.hotspot-link.active').removeClass('active');
          } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close') ) {
             $(event.target).closest('.side-panel').removeClass('is-visible');
             $('.hotspot-link.active').removeClass('active');
          }
          event.preventDefault();
        });

	
	/*$('.toggle-images').on('click', function () {
	  $('body').toggleClass('hide-preview-images');
	});*/
	if(getUrlParameter('previewimages') == 'true') {
		$('body').removeClass('hide-preview-images');
	}

	$('.hotspot-link').on('click', function () {
	  $(this).toggleClass('active');
	});

	var owl = $('.carousel-with-bg .owl-carousel');
	  owl.owlCarousel({
		
		loop: true,
		margin: 25,
		autoplay: false,
		nav: true,
		navText: ['<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-left-a" points="2.538 .34 14.204 12 2.538 23.66 -.204 20.92 8.701 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 23 4)">    <use fill="#384048" xlink:href="#chevron-left-a"></use>  </g></svg></div>','<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-right-a" points="2.537 .34 14.202 12 2.537 23.66 -.204 20.92 8.7 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="translate(9 4)">    <use fill="#384048" xlink:href="#chevron-right-a"></use>  </g></svg></div>'],
		dots: false,
		
		responsive : {
		    0 : {
		        items: 1,
		        slideBy: 1
		    },
		    599 : {
		        items: 3,
		        slideBy: 3
		    },
		    768 : {
		        items: 5,
		        slideBy: 5
		    }
		}
	  });

	  $('.nav-prev').on('click', function () {
		  $(this).closest('.carousel-full-width').find('.owl-prev').trigger('click');
		});
	  $('.nav-next').on('click', function () {
		  $(this).closest('.carousel-full-width').find('.owl-next').trigger('click');
		});



	  var owlFull = $('.carousel-full-width .owl-carousel');
	  owlFull.owlCarousel({
		
		loop: true,
		margin: 0,
		autoplay: false,
		nav: true,
		navText: ['<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-left-a" points="2.538 .34 14.204 12 2.538 23.66 -.204 20.92 8.701 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 23 4)">    <use fill="#384048" xlink:href="#chevron-left-a"></use>  </g></svg></div>','<div class="icon color-nightsky-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">  <defs>    <polygon id="chevron-right-a" points="2.537 .34 14.202 12 2.537 23.66 -.204 20.92 8.7 12 -.204 3.08"></polygon>  </defs>  <g fill="none" fill-rule="evenodd" transform="translate(9 4)">    <use fill="#384048" xlink:href="#chevron-right-a"></use>  </g></svg></div>'],
		dots: false,
		items: 1,
		slideBy: 1,
		responsive : {
		    0 : {
		        stagePadding: 20
		    },
		    599 : {
		        stagePadding: 100
		    },
		    768 : {
		        stagePadding: 200
		    }
		}
	  });

	  
	
	  
});