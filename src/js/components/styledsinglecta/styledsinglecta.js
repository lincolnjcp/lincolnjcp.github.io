import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleDSingleCTA extends Component {

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
      <div class="styled single-cta">
        {/* <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p> */}
        <div class="banner-container">
          <div class="sm12 lg12 md12 xl12 xxl12 nopad">
            <div class="sm12 lg12 md12 xl12 xxl12 nopad">
              <a class="banner-image fl-left" href="javascript:void(0)">
                <img src="../../images/design-system/image-story-3.png" alt="productImg" />
              </a>
            </div>
            <div class="promo-content sm12 lg12 md12 xl12 xxl12 nopad">
              <h3 class="promo-lbl promo-lbl-XL-S mrg-top-M">40-50% OFF</h3>
              <h4 class="std-txt std-txt-M std-txt-S-at-S">KIDS IZOD UNIFORMS</h4>
              <p class="std-txt std-txt-XS mrg-top-M mrgn-ST-at-S">select styles <a href="#" class="mrg-lft-S">see details</a></p>
              <div class="promo-links mrg-top-M">
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-M-at-M">Shop All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleDSingleCTA;