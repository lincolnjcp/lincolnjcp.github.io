import React, { Component } from 'react';
import $ from 'jquery';

class styleAWithButton extends Component {

	componentDidMount() {



		//Preview top nav without design system wrapper
		$("#HideDesignSystem").unbind('click').on('click', function (event) {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).text('Show Design System Wrapper');
				$(".design-system-nav-col").css('display', 'none');
				$(".design-system-content").css('padding', 0);
				$(".design-system-inner-content").css('padding', 0);
				$(".design-system-enable-hide").css('display', 'none');
				$(".design-system-nav-mobile").css('display', 'none');
				$(".design-system-wrap").css('margin', 0);
			} else {
				$(this).text('Hide Design System Wrapper');
				$(".design-system-nav-col").removeAttr('style');
				$(".design-system-content").removeAttr('style');
				$(".design-system-inner-content").removeAttr('style');
				$(".design-system-enable-hide").removeAttr('style');
				$(".design-system-nav-mobile").removeAttr('style');
				$(".design-system-wrap").removeAttr('style');
			}
		});


		(function ($) {
			$.extend($.fn, {
				skySlider: function (options) {
					if (!this.length) {
						if (options && options.debug && window.console) {
							console.warn("Nothing selected, return nothing.");
						}
						return;
					}
					var plgSlider = $.data(this[0], "skySlider");
					if (plgSlider) {
						return plgSlider;
					}
					options = options || {};

					plgSlider = new slider(options, this[0]);
					$.data(this[0], "skySlider", plgSlider);

					return plgSlider;
				}
			});
			var slider = function (options, container) {
				this.namespace = "plgSlider-" + (+new Date());
				this.settings = $.extend(true, {}, slider.defaults, options);
				this.container = container;
				this.init();
			};
			/**************************************************************************/
			$.extend(slider, {
				defaults: {
					interval: 3000,
					carousel: false,
					duration: 500,
					items: 1,
					loop: false,
					autoplay: false,
					callback: function () { }
				},
				prototype: {
					init: function () {
						this.container = $(this.container);
						this.viewPort = this.container.find('.slider_list');
						this.slides = this.container.find('.slider_item');
						this.slideItemCount = this.slides.length;
						this.slideItemWidth = 100 / this.settings.items;
						this.slideSetsCount = Math.ceil(this.slideItemCount / this.settings.items);
						this.currentSlideSets = 0;
						this.isAnimated = false;

						this.controls = {
							bullets: this.createBullets(this.container),
							prev: this.container.find('.slider_arrow__left'),
							next: this.container.find('.slider_arrow__right')
						};

						this.callback = $.Callbacks();
						this.callback.add(this.settings.callback);

						this.slides.width(this.slideItemWidth + '%');
						this.addHandlers();
						this.autoplay();
					},
					createBullets: function (container) {
						var $bulletContainer = $('<div/>', {
							class: 'slider_control-nav'
						});
						for (var i = 0; i < this.slideSetsCount; i++) {
							$bulletContainer.append($('<div/>', {
								class: 'slider_control-nav-item'
							}));
						}
						this.container.append($bulletContainer);
						var $bullets = $bulletContainer.children();
						$bullets.eq(this.currentSlideSets).addClass('is-active');
						return $bullets;
					},
					addHandlers: function () {
						var that = this;
						this.controls.next.on('click', function () {
							that.currentSlideSets++;
							that.setSlide();
						});
						this.controls.prev.on('click', function () {
							that.currentSlideSets--;
							that.setSlide();
						});
						this.controls.bullets.on('click', function () {
							that.currentSlideSets = $(this).index();
							that.setSlide();
						});
					},
					setSlide: function () {
						if (this.isAnimated) {
							return false;
						}
						this.isAnimated = true;
						/* change rules on first/last item */
						if ((this.settings.loop && this.currentSlideSets < 0) ||
							(!this.settings.loop && this.currentSlideSets > this.slideSetsCount - 1)) {
							this.currentSlideSets = this.slideSetsCount - 1;
						}
						if ((!this.settings.loop && this.currentSlideSets < 0) ||
							(this.settings.loop && this.currentSlideSets > this.slideSetsCount - 1)) {
							this.currentSlideSets = 0;
						}
						/* detect type */
						if (this.settings.carousel) {
							/* carousel */
							var translateStepValue = this.currentSlideSets * 100;
							this.viewPort.css({
								'transform': 'translateX(-' + translateStepValue + '%)'
							});
						} else {
							/* slider */
							var that = this;
							that.slides.hide();
							for (var i = 0; i < that.settings.items; i++) {
								that.slides.eq(that.currentSlideSets * that.settings.items + i).fadeIn();
							};
						}
						this.controls.bullets.removeClass('is-active').eq(this.currentSlideSets).addClass('is-active');
						/*run callback*/
						this.callback.fire(this.currentSlideSets);

						setTimeout($.proxy(function () {
							this.isAnimated = false;
						}, this), this.settings.duration);
					},
					autoplay: function () {
						var that = this;
						if (that.settings.autoplay) {
							var sliderInterval = setInterval(function () {
								that.currentSlideSets++;
								that.setSlide();
								if (!that.settings.loop && that.currentSlideSets >= that.slideSetsCount - 1) {
									clearInterval(sliderInterval);
								}
							}, that.settings.interval);
						}
					},
					getSlideSetsCount: function () {
						return this.slideSetsCount;
					}
				}
			});
		}($));

		$(document).ready(function () {
			var $slider = $('#slider').skySlider();
			var $carousel = $('#carousel').skySlider({
				interval: 3000,
				// items: 2,
				carousel: true,
				loop: false,
				autoplay: false,
				callback: function (number) {
					//console.log('Current slideSet - ' + number);
				}
			});

			// console.log('Total number of slides - ' + $slider.getSlideSetsCount());
		});

		$('#slider').skySlider();

		$('#slider').skySlider({
			carousel: true,
			interval: 3000,
			duration: 500
		});


	}

	render() {
		return (
			<div>

				<p class="S"><br />
					<a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a><br /><br /><br /><br /><br />
				</p>



				{/* <div class="dynamic-banner color-white text-center">
					<h1 class="color-white">40% Off Orders $40+</h1>
					<div class="proo-description">
						<span>with code</span>
						<span class="promo-code">SAVE27 </span>
						<span class="promo-end">Online & Instore. Ends 07/24. </span>
						<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
					</div>
					<div class="promo-button-container">
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Women</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Kids</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Men</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Accessories</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shoes</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Baby</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Home</a>
						<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shop All</a>
					</div>
				</div> */}


				<div class="container_row">
					
					<div class="slider slider_second" id="carousel">
						<div class="slider_viewport">
							<div class="slider_list">
								<div class="slider_item">
									<div class="slider_item-inner">
										<div class="dynamic-banner color-white text-center">
											<h1 class="color-white">40% Off Orders $40+</h1>
											<div class="proo-description">
												<span>with code</span>
												<span class="promo-code">SAVE27 </span>
												<span class="promo-end">Online & Instore. Ends 07/24. </span>
												<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
											</div>
											<div class="promo-button-container">
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Women</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Kids</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Men</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Accessories</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shoes</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Baby</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Home</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shop All</a>
											</div>
										</div>
									</div>
								</div>
								<div class="slider_item">
									<div class="slider_item-inner">
										<div class="dynamic-banner color-white text-center">
											<h1 class="color-white">50% Off Orders $40+</h1>
											<div class="proo-description">
												<span>with code</span>
												<span class="promo-code">SAVE27 </span>
												<span class="promo-end">Online & Instore. Ends 07/24. </span>
												<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
											</div>
											<div class="promo-button-container">
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Women</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Kids</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Men</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Accessories</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shoes</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Baby</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Home</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shop All</a>
											</div>
										</div>
									</div>
								</div>
								<div class="slider_item">
									<div class="slider_item-inner">
										<div class="dynamic-banner color-white text-center">
											<h1 class="color-white">60% Off Orders $40+</h1>
											<div class="proo-description">
												<span>with code</span>
												<span class="promo-code">SAVE27 </span>
												<span class="promo-end">Online & Instore. Ends 07/24. </span>
												<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
											</div>
											<div class="promo-button-container">
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Women</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Kids</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Men</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Accessories</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shoes</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Baby</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Home</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shop All</a>
											</div>
										</div>
									</div>
								</div>
								<div class="slider_item">
									<div class="slider_item-inner">
										<div class="dynamic-banner color-white text-center">
											<h1 class="color-white">70% Off Orders $40+</h1>
											<div class="proo-description">
												<span>with code</span>
												<span class="promo-code">SAVE27 </span>
												<span class="promo-end">Online & Instore. Ends 07/24. </span>
												<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
											</div>
											<div class="promo-button-container">
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Women</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Kids</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Men</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Accessories</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shoes</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Baby</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Home</a>
												<a class="button-promo btn btn-secondary btn-M" href="javascript:void(0)">Shop All</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="slider_nav">
							<div class="slider_arrow slider_arrow__left">
							</div>
							<div class="slider_arrow slider_arrow__right">
							</div>
						</div>
					</div>
				</div>



			</div>
		);
	}
}

export default styleAWithButton;