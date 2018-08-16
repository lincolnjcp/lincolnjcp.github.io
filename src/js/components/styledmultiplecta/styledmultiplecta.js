import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleDMultipleCTA extends Component {

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
        {/* <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p> */}


        <div class="styled">
          <div class="banner-container">
            <a class="banner-image" href="javascript:void(0)">
              <div class="img-mask">
                <img src="../../images/design-system/image-story-4.png" />
              </div>
            </a>
            <div class="promo-content">
              <h3 class="promo-title price promo-title-XL price--txt-S">Back To School</h3>
              <h4 class="promo-sub-title std-txt std-txt-M std-txt-S-at-S">EVERYTHING YOU NEED TO ACE THE YEAR <br />with code: <span class="promo-code">7GOSHOP</span></h4>
              <p class="promo-details std-txt std-txt-XS mrg-top-M mrgn-ST-at-S">select styles <a href="#" class="mrg-lft-S">see details</a></p>
              <div class="promo-links mrg-top-M">
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S txt-bold">Juniors</a>
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S txt-bold">Guys</a>
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S txt-bold">Kids</a>
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S txt-bold">Shop All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleDMultipleCTA;