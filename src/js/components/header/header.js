import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');

class Header extends Component {
  changeMyStoreContent() {
    return(
      <div>
        <p id="changeMyStoreZipLink">Stores within 15 mi. of <strong>75024</strong> <a href="javascript:void(0);" className="expand-collapse-btn" data-target="#changeMyStoreZip" data-hide-on-open-target="#changeMyStoreZipLink" data-duration="0">Change</a></p>
         <div className="expand-collapse-section" id="changeMyStoreZip">
           <div className="input-form">
              <div className="input-form-store-locator">
                  <div className="input-form-store-locator-field-1">
                      <input className="form-control input-text" id="search" type="text" placeholder="Zip Code" defaultValue="75024" />
                  </div>
                  <div className="input-form-store-locator-field-2">
                      <div className="select">
                          <select className="form-control custom-select">
                              <option value='5'>5 miles</option>
                              <option value='10'>10 miles</option>
                              <option value='20'>20 miles</option>
                              <option value='50'>50 miles</option>
                          </select>
                      </div>
                  </div>
                  <button type="submit" className="search-icon">
                      <span className="icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchImage }} />
                  </button>
              </div>
          </div>
        </div>
        <div className="side-panel-row-wrap no-border no-bottom-padding">

            <div className="side-panel-row">
              <div className="side-panel-col side-panel-col-select">
                

                <div className="dropdown-menu-block">
                          <a className="dropdown-button title-S">Filter By Services <span className="arrow"></span></a>
                          <div className="dropdown-menu">
                              <ul className="tooltip tooltip-top-center tooltip-light dropdown-search-type">
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                                  <li className="dropdown-list">
                                      <label className="checkbox mrg-M">
                                          <input type="checkbox" defaultChecked="" />
                                          <span className="left">label</span>
                                          <span className="right-label">(1,008)</span>
                                      </label>
                                  </li>
                              </ul>
                          </div>
                      </div>


                  </div>

            <div className="side-panel-col side-panel-col-map-view algn-rght">
              <a href="javascript:void(0);" className="expand-collapse-btn" data-hide-text="List View" data-target="#changeMyStoreMap">Map View</a>
            </div>
            </div>
              <div className="expand-collapse-section change-my-store-map-view" id="changeMyStoreMap">
            <img src="/images/design-system/fpo/find-a-store/map.jpg" alt="" />
          </div>

          </div>

        

        <div className="change-my-store-listing">
          <div className="side-panel-row-wrap">
            <div className="side-panel-row">
              <div className="side-panel-col side-panel-col-details">
                <h4 className="mrg-S">Stonebriar Mall <span class="change-my-store-mileage color-slate">(3.5mi)</span></h4>
                <p className="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              </div>
              <div className="side-panel-col-button">
                <a href="javascript:void(0);" class="btn btn-L btn-full btn-primary btn-disabled">
                  My Store
                </a>
              </div>
            </div>

            <div className="side-panel-col-full">
                <div className="expand-collapse-section change-my-store-details" id="storeLising1">
                  <div className="std-txt std-txt-S mrg-M color-nightsky">
                    <a href="javascript:void(0);" className="color-nightsky">Get Directions</a> | 972-578-8666
                  </div>
                  <div className="std-txt std-txt-S mrg-M color-slate">
                    Mon-Thu : 10am-10pm<br />
                    Fri : 9am-11pm<br />
                    Sat : 8am-11pm<br />
                    Sun : 9am-10pm<br />
                    <br />
                    <strong className="color-nightsky">Store Services:</strong><br />
                    Jewelry<br />
                    Big and Tall<br />
                    Wedding Registry<br />
                    TV and Home Theater<br />
                    Major Appliances<br />
                    Optical<br />
                    Portrait Studio<br />
                    Custom Decorating - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a><br />
                    Sephora - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a><br />
                    Salon - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a>
                  </div>
                </div>
                <p className="std-txt std-txt-S"><a href="javascript:void(0);" className="expand-collapse-btn" data-hide-text="Hide Hours &amp; Services" data-target="#storeLising1">View Hours &amp; Services</a></p>
              </div>
          </div>
        </div>

        <div className="change-my-store-listing">
          <div className="side-panel-row-wrap no-border">
            <div className="side-panel-row">
              <div className="side-panel-col side-panel-col-details">
                <h4 className="mrg-S">Collin Creek Mall <span class="change-my-store-mileage color-slate">(5.2mi)</span></h4>
                <p className="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              </div>
              <div className="side-panel-col-button">
                <a href="javascript:void(0);" class="btn btn-L btn-full btn-primary">
                  Set Store
                </a>
              </div>
            </div>

            <div className="side-panel-col-full">
                <div className="expand-collapse-section change-my-store-details" id="storeLising2">
                  <div className="std-txt std-txt-S mrg-M color-nightsky">
                    <a href="javascript:void(0);" className="color-nightsky">Get Directions</a> | 972-578-8666
                  </div>
                  <div className="std-txt std-txt-S mrg-M color-slate">
                    Mon-Thu : 10am-10pm<br />
                    Fri : 9am-11pm<br />
                    Sat : 8am-11pm<br />
                    Sun : 9am-10pm<br />
                    <br />
                    <strong className="color-nightsky">Store Services:</strong><br />
                    Jewelry<br />
                    Big and Tall<br />
                    Wedding Registry<br />
                    TV and Home Theater<br />
                    Major Appliances<br />
                    Optical<br />
                    Portrait Studio<br />
                    Custom Decorating - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a><br />
                    Sephora - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a><br />
                    Salon - <a href="javascript:void(0);" className="color-nightsky">Schedule Appointment</a>
                  </div>
                </div>
                <p className="std-txt std-txt-S"><a href="javascript:void(0);" className="expand-collapse-btn" data-hide-text="Hide Hours &amp; Services" data-target="#storeLising2">View Hours &amp; Services</a></p>
              </div>
          </div>
        </div>
        


    </div>
    )
  }
  navSet(linkSet){
      return(
        <li className="main-menu-tier1-li">
          <a href="javascript:void(0)" className="main-menu-tier1-link"><span className="main-menu-tier1-link-thumb"><img src={linkSet.thumb} alt="" /></span>{linkSet.name}</a>
          <ul className="main-menu-tier2-ul">
            <li className="main-menu-secondary-hidden-lg-up"><span className="main-menu-tier1-link"><span className="main-menu-tier1-link-thumb"><img src={linkSet.thumb} alt="" /></span>{linkSet.name}</span></li>
            {linkSet.subLinks.map((link, index) => {
              return (
                <li key={index} className="main-menu-tier2-li"><a href="javascript:void(0)" className="main-menu-tier2-link">
                  {link.name}</a>
                  <ul className="main-menu-tier3-ul">
                           
                    {link.sublinks2.map(function(name, index){
                      return <li key={ index } className="main-menu-tier3-li"><a href="javascript:void(0)" className="main-menu-tier3-link">{name}</a></li>;
                    })}
                  </ul>
                </li>
              )
            })}

            
          </ul>
        </li>
      )

  }

  componentDidMount() {
        
        !function(factory){"use strict";"function"==typeof define&&define.amd?define(["$"],factory):$&&!$.fn.hoverIntent&&factory($)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

        $('.dropdown-button').unbind('click').on('click', function () {
            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            parent_box.find('.dropdown-menu').slideToggle(200, 'swing');
            
            $(this).toggleClass("arrow-down"); 

        });

        $('.side-panel-btn').unbind('click').on('click', function(event){
          event.preventDefault();
          var parent = $($(this).attr('data-target'));
          parent.addClass('is-visible');
        });

        $('.side-panel').unbind('click').on('click', function(event){
          if( $(event.target).is('.side-panel')) { 
            $(this).removeClass('is-visible');            
          } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close') ) {
             $(event.target).closest('.side-panel').removeClass('is-visible');
          }
          event.preventDefault();
        });

        $(".main-menu-secondary-li-shop-departments").hoverIntent({
            over: function() {
                if ($("#mainMenusecondaryLightBox").length == 0) {
                    $("body").append('<div id="mainMenusecondaryLightBox"></div>');
                    var top = 0;
                    if($(".main-menu-bar-secondary").length > 0){
                      top = $(".main-menu-bar-secondary").height()+$(".main-menu-bar-secondary").offset().top;
                    }
                    $("#mainMenusecondaryLightBox").css({ "top": top, "height": $(document).height() })
                }
                $(".main-menu-secondary-li").addClass("main-menu-secondary-hover");
            },
            timeout: 400,
            interval: 100,
            out: function() {
                $(".main-menu-secondary-li").removeClass("main-menu-secondary-hover");
                $("#mainMenusecondaryLightBox").remove();
                $('.main-menu-tier1').removeClass('active-tier2').removeClass('active-tier3')
            }
        });


        $(".main-menu-tier1-li").hoverIntent({
            over: function() {
                $(".main-menu-tier1-li").removeClass('active');
                $(this).addClass("active");
                $(".main-menu-tier2-li.active").removeClass('active');
                $(".main-menu-tier2-li.to-activate").removeClass('to-activate');
                $(this).closest('.main-menu-tier1').addClass('active-tier2').removeClass('active-tier3');
            },
            timeout: 200,
            interval: 100,
            out: function() {
                $(this).removeClass("active");
            }
        });

        $(".main-menu-tier2-li").hoverIntent({
            over: function() {
                $('.to-activate').removeClass('to-activate');
                if($(this).closest('.main-menu-tier1').hasClass('active-tier3')) {
                  $(".main-menu-tier2-li.active").removeClass('active');
                  $(this).addClass("active");
                } else {
                  $(this).addClass("to-activate");
                  $(".main-menu-tier2-li.active").removeClass('active');
                  setTimeout(function(){
                    if($('.to-activate').length > 0){
                      $(".main-menu-tier2-li.active").removeClass('active');
                      $('.to-activate').removeClass('to-activate').addClass('active');
                    }
                }, 200);
                }
                
                $(this).closest('.main-menu-tier1').addClass('active-tier3');
            },
            timeout: 200,
            interval: 100,
            out: function() {
                if($(".main-menu-tier2-li.active").length < 1) {
                  $(this).closest('.main-menu-tier1').removeClass('active-tier3');
                }
            }
        });

        $(".main-menu-tier3-li").hoverIntent({
            over: function() {
                $(this).addClass("active");
            },
            timeout: 200,
            interval: 100,
            out: function() {
                $(this).removeClass("active");               
            }
        });

        /* Navigation Mobile/Tablet */

        $(".main-menu-tier1-link").unbind('click').on('click', function(event){
          event.preventDefault();
          $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
          $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click');
          $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 200 });
          $('.side-panel-container').addClass('tier2-open');
        });

        $(".main-menu-tier2-link").unbind('click').on('click', function(event){
          event.preventDefault();
          var target = $(this).closest('.main-menu-tier2-li');
          if(target.hasClass('tier3-click')) {
            target.removeClass('tier3-click');
          } else {
            target.addClass('tier3-click');
          }
        });

        $(".tier2-close").unbind('click').on('click', function(event){
          event.preventDefault();

          $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click-remove');
          $(this).closest('.main-menu-md-panel').addClass('tier2-click-remove');
          setTimeout(function(){
            $('.tier2-click-remove').removeClass('tier2-click-remove').removeClass('tier2-click');
          }, 400);

          $('.side-panel-container').removeClass('tier2-open');
        });

        $(".main-menu-md-panel-btn").unbind('click').on('click', function(event){
          event.preventDefault();
          $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
          $(this).closest('.main-menu-md-panel-li').find('.main-menu-md-panel').addClass('tier2-click');
          $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 1 });
          $('.side-panel-container').addClass('tier2-open');
        });

        $(".main-menu-reset").on('click', function(event){
          event.preventDefault();
           $('.main-menu-tier2-ul.tier2-click').addClass('tier2-click');
           $('.main-menu-md-panel.tier2-click').addClass('tier2-click');
           $('.side-panel-container').removeClass('tier2-open');
        });



        

        $('.expand-collapse-btn').unbind('click').on('click', function(event){
          var target = $($(this).attr('data-target'));

          var duration = 400;
          if($(this).attr('data-duration')){
            duration = $(this).attr('data-duration');
          }

          if(target.hasClass('is-visible')){
            if($(this).attr('data-show-text')){
              $(this).text($(this).attr('data-show-text'));
            }
            if(duration > 0) {
              target.removeClass('is-visible').slideUp(duration);
            } else {
              target.removeClass('is-visible').css('display', 'none');
            }

          } else {
            if($(this).attr('data-hide-text')){
              $(this).attr('data-show-text', $(this).text());
              $(this).text($(this).attr('data-hide-text'));
            }
            if(duration > 0) {
              target.addClass('is-visible').slideDown(duration);
            } else {
              target.addClass('is-visible').css('display', 'block');
            }
            if($(this).attr('data-hide-on-open-target')){
              $($(this).attr('data-hide-on-open-target')).css('display', 'none');
            }
          }
        });

        
        
  }

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Header</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>
    
<header className="main-menu">
  <div className="main-menu-promotional-banner">
    <div className="main-menu-promotional-banner-content">
      <p className="S mrg-zero main-menu-promotional-banner-text">Get it today with FREE same day pickup</p>
      <p className="S mrg-zero">
        <a className="main-menu-promotional-banner-link" href="javascript:void(0);">See Details</a>
      </p>
    </div>
  </div>
  <div className="main-menu-bar-primary">
    <ul className="main-menu-primary">
        <li className="main-menu-primary-item main-menu-primary-logo">

            <span className="hide-for-large-up">
              <a title="JCPenney Main Menu" aria-label="JCPenney Main Menu" href="javascript:void(0);" className="side-panel-btn" data-target="#mainMenusecondary">
                <div className="main-menu-primary-menu-svg icon" dangerouslySetInnerHTML={{__html: menuImage}} />
              </a>
            </span>
          
            <a title="JCPenney Home" aria-label="JCPenney Home Page" href="javascript:void(0);">
              <div className="main-menu-primary-logo-svg" dangerouslySetInnerHTML={{__html: logoImage}} />
            </a>
                    
        </li>
        <li className="main-menu-primary-item main-menu-primary-search">
          <form action="http://www.jcpenney.com/s/search">
            <input type="text" placeholder="Search Products" size="20" aria-required="false" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" />
            <button type="submit">
              <div className="main-menu-primary-search-svg icon" dangerouslySetInnerHTML={{__html: searchImage}} />
            </button>
          </form>
        </li>
        <li className="main-menu-primary-item main-menu-primary-rewards hide-for-small-only">
          <a href="javascript:void(0);"><img src="/images/global/jcpenney-rewards.png" alt="JCPenney Rewards" /></a>
        </li>
        <li className="main-menu-primary-item main-menu-primary-account">          
          <div className="dropdown-menu-block">
            <button className="dropdown-button" type="button" tabindex="-1">
              <div className="main-menu-primary-account-title">My Account</div>
              <div className="main-menu-primary-account-link">Sign In <span className="arrow"></span></div>
            </button>
            <div className="dropdown-menu dropdown-account">
              <div className="tooltip tooltip-top-right tooltip-long tooltip-list">
                <ul>
                  <li>
                      <a href="javascript:void(0)">My Account</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">Find a Store</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">My Orders</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">My Rewards (0)</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">My List</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">Profile Settings</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">Notifications</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">My Jcpenney.com</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">Gift Registry</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">JCPenney Credit Card</a>
                  </li>
                  <li className="tooltip-divider">
                      <a href="javascript:void(0)">Sign Out</a>
                  </li>
                  <li className="main-menu-primary-sign-rewards">
                    <a href="javascript:void(0);">
                      <span className="main-menu-primary-sign-rewards-amount">$20</span>
                      <span className="main-menu-primary-sign-rewards-label">Redeem Your Rewards</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="main-menu-primary-item main-menu-primary-cart">
          <a href="javascript:void(0);" className="main-menu-primary-cart-icon-full">
            <span className="main-menu-primary-cart-icon-full-items">28</span>
          </a>
        </li>
      </ul>
  </div>
  <div className="main-menu-bar-secondary">
    <div className="side-panel side-panel-disable-desktop from-left main-menu-bar-secondary-panel" id="mainMenusecondary">
      
      <div className="side-panel-container">
      <header className="side-panel-header">
          <h3 className="title title-L color-white side-panel-headline">Menu</h3>
          <a href="javascript:void(0);" className="title title-L color-white tier2-close">
            Departments
          </a>
          <a href="javascript:void(0);" className="side-panel-close main-menu-reset">
            <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{__html: closeImage}} />
          </a>

        </header>
        <div className="side-panel-container-inner-container">
        
        <div className="side-panel-content">
          <div className="main-menu-bar-secondary-container">
            <div className="main-menu-secondary-left">
              <ul className="main-menu-secondary">
                <li className="main-menu-secondary-li main-menu-secondary-li-shop-departments">
                  <button className="main-menu-secondary-shop-departments hide-for-medium-down">
                    <div className="main-menu-secondary-shop-departments-menu-svg icon color-nightsky-svg" dangerouslySetInnerHTML={{__html: menuImage}} />
                    <span className="main-menu-secondary-shop-departments-menu-label">Shop Departments</span>
                  </button>
                  <div className="main-menu-tier1">
                  <ul className="main-menu-md-down">
                    <li>
                      <a href="javascript:void(0);" className="main-menu-tier1-button-md-down main-menu-md-primary main-menu-md-primary-no-arrow"><strong>Sign in or Create an Account</strong></a>
                    </li>
                    <li className="main-menu-md-panel-li">
                      <a href="javascript:void(0);" className="main-menu-tier1-button-md-down main-menu-md-primary main-menu-md-panel-btn"><strong>My Store:</strong> Colin Creek Mall</a>
                      <div className="main-menu-md-panel">                        
                        {this.changeMyStoreContent()} 
                      </div>
                    </li>
                  </ul>
                  <ul className="main-menu-tier1-ul">
                    
                    {this.navSet({
                      name:"For The Home", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-for-the-home.jpg',
                      subLinks: [
                            {
                                name: 'Furniture',
                                sublinks2: [
                                  'View All Furniture', 
                                  'Sofas',
                                  'Chairs & Recliners'
                                ]
                            },
                            {
                                name: 'Matresses',
                                sublinks2: [
                                  'View All Matresses', 
                                  'Matresses'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Bed & Bath", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-bed-and-bath.jpg',
                      subLinks: [
                            {
                                name: 'Bedding',
                                sublinks2: [
                                  'Comforters & Bedding Sets'
                                ]
                            },
                            {
                                name: 'Bedding Basics',
                                sublinks2: [
                                  'Matresses Pads & Toppers'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Window", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-window.jpg',
                      subLinks: [
                            {
                                name: 'Window Treatments',
                                sublinks2: [
                                  'Curtains & Drapes'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Appliances", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-appliances.jpg',
                      subLinks: [
                            {
                                name: 'Kitchen Appliances',
                                sublinks2: [
                                  'Refrigerators'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Women", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-women.jpg',
                      subLinks: [
                            {
                                name: 'Holiday',
                                sublinks2: [
                                  '$25 Diamonds'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Lingerie", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-lingerie.jpg',
                      subLinks: [
                            {
                                name: 'Bras',
                                sublinks2: [
                                  'Full Figure Bras'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Men", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-men.jpg',
                      subLinks: [
                            {
                                name: 'Shop Clothing',
                                sublinks2: [
                                  'Shirts'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Juniors", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-juniors.jpg',
                      subLinks: [
                            {
                                name: 'Holiday',
                                sublinks2: [
                                  'Nike'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Kids", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-kids.jpg',
                      subLinks: [
                            {
                                name: 'Boys',
                                sublinks2: [
                                  'Shop All Boys'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Baby", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-baby.jpg',
                      subLinks: [
                            {
                                name: 'Shop by Size',
                                sublinks2: [
                                  'Baby Boy Clothes 0-24 Months'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Shoes", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-shoes.jpg',
                      subLinks: [
                            {
                                name: 'Women\'s Shoes',
                                sublinks2: [
                                  'Women\'s Boots'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Handbags", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-handbags.jpg',
                      subLinks: [
                            {
                                name: 'Handbags & Wallets',
                                sublinks2: [
                                  'Backpacks & Messenger Bags'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Jewelry", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-jewelry.jpg',
                      subLinks: [
                            {
                                name: 'Fine Jewelry',
                                sublinks2: [
                                  'View All Brands'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Salon", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-salon.jpg',
                      subLinks: [
                            {
                                name: 'Appointments & Salons',
                                sublinks2: [
                                  'Schedule a Salon Appointment'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Sephora", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-sephora.jpg',
                      subLinks: [
                            {
                                name: 'Beauty Spotlight',
                                sublinks2: [
                                  'Just Arrived'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Gifts", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-gifts.jpg',
                      subLinks: [
                            {
                                name: 'Shop By Price',
                                sublinks2: [
                                  'Gifts Under $15'
                                ]
                            }
                        ]
                      }
                    )}

                    {this.navSet({
                      name:"Clearance", 
                      thumb: '/images/design-system/fpo/navigation/nav-mobile-clearance.jpg',
                      subLinks: [
                            {
                                name: 'Shop Clothing',
                                sublinks2: [
                                  'Women'
                                ]
                            }
                        ]
                      }
                    )}
                  </ul>
                  </div>
                </li>

                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down">
                  <a href="javascript:void(0)">Same Day Pickup</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down">
                  <a href="javascript:void(0)">Gifts</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down">
                  <a href="javascript:void(0)">Toys</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Track Order</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">JCPenney Credit Card</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Rewards</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary">
                  <a href="javascript:void(0)" className="main-menu-md-primary">My List</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Gift Registry</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">My jcpenney.com</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Clearance</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-li-highlight">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Coupons</a>
                </li>
                <li className="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up">
                  <a href="javascript:void(0)" className="main-menu-md-primary">Sign Out</a>
                </li>
              </ul>
            </div>
            <div className="main-menu-secondary-right main-menu-secondary-hidden-md-down">
              <div className="dropdown-menu-block main-menu-secondary-my-store">
                    <button className="dropdown-button main-menu-tier1-button-md-down" type="button" tabindex="-1">
                      <strong>My Store:</strong> Collin Creek Mall <span className="arrow"></span>
                    </button>
                    <div className="dropdown-menu dropdown-my-store">
                      <ul className="tooltip tooltip-top-right tooltip-long tooltip-list">
                        <li>
                          <div className="main-menu-secondary-my-store-listing">
                            <h4 className="title title-M">Collin Creek Mall</h4>
                            <p className="mrg-S">821 N Central Expwy<br />
                                Plano, TX 75075</p>
                            <p className="mrg-S"><a href="javascript:void(0);">Get Directions</a></p>
                            <p>Mon-Thu : 10am-10pm<br />
                                Fri : 9am-11pm<br />
                                Sat : 8am-11pm<br />
                                Sun : 9am-10pm</p>
                            <div>
                              <a href="javascript:void(0);" class="btn btn-L btn-secondary btn-full side-panel-btn" data-target="#changeMyStore">
                                Change My Store
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

 
<div className="side-panel from-right change-my-store-panel" id="changeMyStore">
  <div className="side-panel-container">
    <header className="side-panel-header">
      <h3 className="title title-L color-white">Change My Store</h3>
      <a href="javascript:void(0);" className="side-panel-close">
        <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{__html: closeImage}} />
      </a>
    </header>
    <div className="side-panel-content">
      {this.changeMyStoreContent()}
    </div>
  </div>
</div> 


            </header>
    
    <div className="row">
        <div className="sm12 columns">
            <hr />
            <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Header;