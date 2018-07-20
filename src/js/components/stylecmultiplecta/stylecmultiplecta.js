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
      <div>
        <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p>


        <div class="stylec">
          <div class="banner-container">
            <a class="banner-image" href="#">
              <img src="../../images/design-system/workitout-01.png"/>
            </a>
            <div class="promo-content">
              <h3 class="promo-title offer-1-heading">Work it out</h3>
              <p class="promo-sub-title">50% OFF WOMEN’S ATHLETIC APPAREL</p>
              <p class="promo-details">reg $20 - $70 <a href="#">see details</a></p>
              <ul class="promo-links">
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Sports Bras</a></li>
                <li><a href="#">Shorts</a></li>
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