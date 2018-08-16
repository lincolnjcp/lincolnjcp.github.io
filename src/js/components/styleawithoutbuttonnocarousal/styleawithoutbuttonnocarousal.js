import React, { Component } from 'react';
import $ from 'jquery';

class styleAWithButtonNocarousal extends Component {

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

	}

	render() {
		return (
			<div>

				<p class="S"><br />
					<a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a><br /><br /><br /><br /><br />
				</p>


				<div class="dynamic-banner no-carousal color-white text-center">
					<h1 class="promo=lblcolor-white">40% Off Orders $40+</h1>
					<div class="promo-description">
						<span>with code</span>
						<span class="promo-code">SAVE27 </span>
						<span class="promo-end">Online & Instore. Ends 07/24. </span>
						<span class="promo-cta"><a href="javascript:void(0)">see details</a></span>
					</div>
				</div>





			</div>
		);
	}
}

export default styleAWithButtonNocarousal;