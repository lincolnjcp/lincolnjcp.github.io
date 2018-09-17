import React, { Component } from 'react';
import $ from 'jquery'

class Hidedesigndsystemwrapper extends Component {

    componentDidMount() {
        //Preview top nav without design system wrapper
        $(document).ready(function () {
            if(window.location.hash == "#/") {
                $('.hide-wrapper').addClass("wrapper-system-enable-hide");
            }
            else {
                $('.hide-wrapper').removeClass("wrapper-system-enable-hide");
            }
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
                setTimeout(function() {
                    if(window.location.hash == "#/home-page-redesign/homepage-layout" || window.location.hash == "#/"){
                        $('.hide-wrapper').addClass("wrapper-system-enable-hide");
                        console.log('test3..', window.location.hash );
                    }
                    else {
                        $('.hide-wrapper').removeClass("wrapper-system-enable-hide");
                        console.log('test4..', window.location.hash );
                    }
                }, 10);
            } else {
                $(this).text('Hide Design System Wrapper');
                $(".design-system-nav-col").removeAttr('style');
                $(".design-system-content").removeAttr('style');
                $(".design-system-inner-content").removeAttr('style');
                $(".design-system-enable-hide").removeAttr('style');
                $(".design-system-nav-mobile").removeAttr('style');
                $(".design-system-wrap").removeAttr('style');
                setTimeout(function() {
                    if(window.location.hash == "#/home-page-redesign/homepage-layout"){
                        $('.hide-wrapper').addClass("wrapper-system-enable-hide");
                        console.log('test3..', window.location.hash );
                    }
                    else {
                        $('.hide-wrapper').removeClass("wrapper-system-enable-hide");
                        console.log('test4..', window.location.hash );
                    }
                }, 10);
               
            }
        });
    });
       
    }
    render() {
        return (
            <div class="hide-wrapper">
                <div class="row hide-system-wrapper">
                    <div class="sm12 columns">
                        <p class="S"><br />
                            <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hidedesigndsystemwrapper;