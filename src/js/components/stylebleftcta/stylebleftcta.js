import React, { Component } from 'react';
import $ from 'jquery';

class styleBLeftCTA extends Component {

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
      <div class="styleb-left">
        <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p>
          <div class="banner-container">
            <div class="banner-content-wrapper">
              <h1 class="promo-title-XL promo-lbl">All For Dad</h1>
              <p class="banner-content std-txt color-nightsky txt-regular">Integer posuere erat a ante venenatis dapibus posuere</p>
              <p class="std-txt std-txt-XS nopad">reg $20 - $70 <a href="#" class="mrg-lft-S">see details</a></p>
              <div class="dropdown-container pad-top-S">
                <a href="javascript:void(0)" class="elevation title title-S mrg-top-S text-center">PRIMARY CTA</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default styleBLeftCTA;