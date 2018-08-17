import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleCMultipleCTA extends Component {

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
      <div class="stylec">
        <div class="banner-container">
          <div class="sm12 lg12 md12 xl12 xxl12 nopad">
            <div class="sm12 lg6 md6 xl6 xxl6 nopad">
              <a class="banner-image fl-left" href="javascript:void(0)">
                <img src="../../images/design-system/image-story-2.png" alt="productImg" />
              </a>
            </div>
            <div class="promo-content sm12 lg6 md6 xl6 xxl6 nopad-sm mrg-top-XL pad-lft-L">
              <h3 class="promo-title promo-lbl promo-lbl-XL-S pad-top-S">Up To 60% OFF</h3>
              <h4 class="std-txt std-txt-XL std-txt-S-at-S mrgn-XS mrgn-XXS-at-M mrgn-ST-at-S mrgn-XS-at-XS">XERSION ACTIVEWEAR FOR THE FAMILY</h4>
              <p class="std-txt std-txt-XS nopad">reg $20 - $70 <a href="#" class="mrg-lft-S">see details</a></p>
              <ul class="promo-links mrg-top-M std-txt std-txt-M std-txt-XS-at-S">
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Shop All</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleCMultipleCTA;