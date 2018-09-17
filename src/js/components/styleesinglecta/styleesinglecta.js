import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleESingleCTA extends Component {

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

        <div class="stylee stylee-single">
          <div class="banner-container">
            <div class="sm12 lg12 md12 xl12 xxl12 nopad">
              <div class="sm12 lg7 md12 xl7 xxl7 nopad">
                <a class="banner-image fl-left" href="javascript:void(0)">
                  <img src="/images/design-system/image-brandstory.png" alt="productImg" />
                </a>
              </div>
              <div class="promo-content sm12 lg5 md12 xl5 xxl5 nopad-sm padding-lft-S">
                <h3 class="promo-title promo-lbl promo-lbl-XL-S pad-top-S mrg-XXS-at-S">Discover Okie Dokie</h3>
                <h4 class="std-txt std-txt-M mrg-top-XL mrg-XS-at-S mrg-btm-L">Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</h4>
                <ul class="promo-links mrg-top-M std-txt std-txt-M std-txt-XS-at-S">
                  <li><a href="#" class="btn btn-secondary btn-S">Learn More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default styleESingleCTA;