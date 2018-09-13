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
					<h1 class="color-white promo-lbl promo-title">40% Off Orders $40+</h1>
					<div class="promo-description">
						<span>with code</span>
						<span class="txt-bold"> SAVE27 </span>
						<span class="promo-lbl promo-lbl-XXS color-white txt-regular">Online & Instore. Ends 07/24.  </span>
						<span class="std-txt std-txt-XS"><a href="javascript:void(0)" class="color-white txt-regular"> see details</a></span>
					</div>
				</div>

			</div>
		);
	}
}

export default styleAWithButtonNocarousal;