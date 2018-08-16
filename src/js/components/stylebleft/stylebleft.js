import React, { Component } from 'react';
import $ from 'jquery';
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleBLeft extends Component {

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



    $(document).ready(function () {
      $('.elevation').click(function () {
        event.stopPropagation();
        $('.dropdown-list').toggle('50');
        $('.plus-icon').toggle();
        $('.minus-icon').toggle();
      });
      $(document).click(function () {
        $('.dropdown-list').hide('50');
        if ($('.minus-icon').is(':visible')) {
          $('.plus-icon').toggle();
          $('.minus-icon').toggle();
        }
      });
    });
  }

  render() {
    return (
      <div>
        {/* <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p> */}


        <div class="styleb-left">
          <div class="banner-container">
            <div class="banner-content-wrapper">
              <h1 class="banner-title promo-lbl">Up To 50% OFF</h1>
              <p class="banner-content color-nightsky">School’s back, smart styles ahead. Plus save more with coupon!</p>
              <div class="std-txt std-txt-XS mrg-M">reg $20-$70 <a href="javascript:void(0);" class="see-details">see details</a></div>
              <div class="dropdown-container">
                <a onclick="dropdownFunction()" href="javascript:void(0)" class="elevation no-hover title title-S mrg-top-S">Shop All<span class="icon plus-icon" dangerouslySetInnerHTML={{ __html: plusImage }} /><span class="minus-icon hide"></span></a>
                <div id="myDropdown" class="dropdown-list hide">
                  <a href="javascript:void(0)">PRIMARY CTA</a>
                  <a href="javascript:void(0)">CTA 2</a>
                  <a href="javascript:void(0)">CTA 3</a>
                  <a href="javascript:void(0)">CTA 4</a>
                  <a href="javascript:void(0)">CTA 5</a>
                  <a href="javascript:void(0)">CTA 6</a>
                  <a href="javascript:void(0)">CTA 7</a>
                  <a href="javascript:void(0)">CTA 8</a>
                  <a href="javascript:void(0)">CTA 9</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleBLeft;