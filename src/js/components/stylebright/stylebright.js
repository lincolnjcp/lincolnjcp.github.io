import React, { Component } from 'react';
import $ from 'jquery';

class styleBRight extends Component {

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
    


    // $(document).ready(function () {
    //   $('.elevation').click(function () {
    //     event.stopPropagation();
    //     $('.dropdown-list').toggle('50');
    //   });
    //   $(document).click( function(){
    //     $('.dropdown-list').hide('50');
    // });
    // });
  }

  render() {
    return (
      <div>
        <p class="S"><br />
					<a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
				</p>




        <div class="styleb-left">
          <div class="banner-container">
            <div class="banner-content-wrapper banner-content-right">
              <h1 class="banner-title title">All For Dad</h1>
              <p class="banner-content color-nightsky">Integer posuere erat a ante venenatis dapibus posuere</p>
              <div class="std-txt std-txt-XS mrg-M">reg $20-$70 <a href="javascript:void(0);">see details</a></div>
              <div class="dropdown-container">
                <a href="javascript:void(0)" class="elevation title title-S mrg-top-S">PRIMARY CTA</a>
                {/* <div id="myDropdown" class="dropdown-list hide">
                  <a href="javascript:void(0)">PRIMARY CTA</a>
                  <a href="javascript:void(0)">CTA 2</a>
                  <a href="javascript:void(0)">CTA 3</a>
                  <a href="javascript:void(0)">CTA 4</a>
                  <a href="javascript:void(0)">CTA 5</a>
                  <a href="javascript:void(0)">CTA 6</a>
                  <a href="javascript:void(0)">CTA 7</a>
                  <a href="javascript:void(0)">CTA 8</a>
                  <a href="javascript:void(0)">CTA 9</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleBRight;