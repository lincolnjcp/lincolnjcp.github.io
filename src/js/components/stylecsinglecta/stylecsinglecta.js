import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleCSingleCTA extends Component {

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
      console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
    });




  }

  render() {
    return (
      <div>
        {/* <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p> */}


        <div class="stylec stylec-single">
          <div class="banner-container">
            <a class="banner-image" href="javascript:void(0)">
              <img src="../../images/design-system/image-story-1.png"/>
            </a>
            <div class="promo-content">
              <h3 class="promo-title offer-1-heading">25% OFF</h3>
              <p class="promo-sub-title">Nike for the family</p>
              <p class="promo-details">reg $20 - $70 <a href="#">see details</a></p>
              <ul class="promo-links">
                <li><a href="#">Shop All</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleCSingleCTA;