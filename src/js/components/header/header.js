import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');

class Header extends Component {

  componentDidMount() {
        
        !function(factory){"use strict";"function"==typeof define&&define.amd?define(["$"],factory):$&&!$.fn.hoverIntent&&factory($)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

        $('.dropdown-button').on('click', function () {
            
            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            parent_box.find('.dropdown-menu').slideToggle(200, 'swing');
            
            $(this).toggleClass("arrow-down"); 

        });

        $('.side-panel-btn').on('click', function(event){
          event.preventDefault();
          var parent = $("#"+$(this).attr('data-for'));
          parent.addClass('is-visible');
        });

        $('.side-panel').on('click', function(event){
          if( $(event.target).is('.side-panel') || $(event.target).is('.side-panel-close') ) { 
            $(this).removeClass('is-visible');
            event.preventDefault();
          }
        });

        $(".main-menu-tier2-li-shop-departments").hoverIntent({
        over: function() {
            if ($("#mainMenuTier2LightBox").length == 0) {
                $("body").append('<div id="mainMenuTier2LightBox"></div>');
                var top = 0;
                if($(".main-menu-bar-tier2").length > 0){
                  top = $(".main-menu-bar-tier2").height()+$(".main-menu-bar-tier2").offset().top;
                }
                $("#mainMenuTier2LightBox").css({ "top": top, "height": $(document).height() })
            }
            $(".main-menu-tier2-li").addClass("main-menu-tier2-hover");
        },
        timeout: 800,
        interval: 100,
        out: function() {
            $(".main-menu-tier2-li").removeClass("main-menu-tier2-hover");
            $("#mainMenuTier2LightBox").remove();

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
  <div className="main-menu-bar-tier1">
    <ul className="main-menu-tier1">
        <li className="main-menu-tier1-item main-menu-tier1-logo">

            <span className="hide-for-large-up">
              <a title="JCPenney Main Menu" aria-label="JCPenney Main Menu" href="javascript:void(0);" className="side-panel-btn" data-for="mainMenuTier2">
                <div className="main-menu-tier1-menu-svg icon" dangerouslySetInnerHTML={{__html: menuImage}} />
              </a>
            </span>
          
            <a title="JCPenney Home" aria-label="JCPenney Home Page" href="javascript:void(0);">
              <div className="main-menu-tier1-logo-svg" dangerouslySetInnerHTML={{__html: logoImage}} />
            </a>
                    
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-search">
          <form action="http://www.jcpenney.com/s/search">
            <input type="text" placeholder="Search Products" size="20" aria-required="false" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" />
            <button type="submit">
              <div className="main-menu-tier1-search-svg icon" dangerouslySetInnerHTML={{__html: searchImage}} />
            </button>
          </form>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-rewards hide-for-small-only">
          <a href="javascript:void(0);"><img src="/images/global/jcpenney-rewards.png" alt="JCPenney Rewards" /></a>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-account">          
          <div className="dropdown-menu-block">
            <button className="dropdown-button" type="button" tabindex="-1">
              <div className="main-menu-tier1-account-title">My Account</div>
              <div className="main-menu-tier1-account-link">Sign In <span className="arrow"></span></div>
            </button>
            <div className="dropdown-menu dropdown-account">
              <ul className="tooltip tooltip-top-right tooltip-long tooltip-list">
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
                <li className="main-menu-tier1-sign-out">
                    <a href="javascript:void(0)">Sign Out</a>
                </li>
                <li className="main-menu-tier1-sign-rewards">
                  <a href="javascript:void(0);">
                    <span className="main-menu-tier1-sign-rewards-amount">$20</span>
                    <span className="main-menu-tier1-sign-rewards-label">Redeem Your Rewards</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-cart">
          <a href="javascript:void(0);" className="main-menu-tier1-cart-icon-full">
            <span className="main-menu-tier1-cart-icon-full-items">28</span>
          </a>
        </li>
      </ul>
  </div>
  <div className="main-menu-bar-tier2">
    <div className="side-panel side-panel-disable-desktop from-left" id="mainMenuTier2">
      <header className="side-panel-header">
      <h1>Title Goes Here</h1>
      <a href="#0" className="side-panel-close">Close</a>
      </header>
      <div className="side-panel-container">
        <div className="side-panel-content">
          <div className="main-menu-bar-tier2-container">
            <div className="main-menu-tier2-left">
              <ul className="main-menu-tier2">
                <li className="main-menu-tier2-li main-menu-tier2-li-shop-departments">
                  <button className="main-menu-tier2-shop-departments">
                    <div className="main-menu-tier2-shop-departments-menu-svg icon color-nightsky-svg" dangerouslySetInnerHTML={{__html: menuImage}} />
                    <span className="main-menu-tier2-shop-departments-menu-label">Shop Departments</span>
                  </button>

                  <ul className="main-menu-tier3"> 
                    <li>
                      <h3>For the Home</h3>
                    </li>
                    <li>
                      <h3>Bed & Bath</h3>
                    </li>
                    <li>
                      <h3>Window</h3>
                    </li>
                    <li>
                      <h3>Appliances</h3>
                    </li>
                    <li>
                      <h3>Women</h3>
                    </li>
                    <li>
                      <h3>Lingerie</h3>
                    </li>
                    <li>
                      <h3>Men</h3>
                    </li>
                    <li>
                      <h3>Juniors</h3>
                    </li>
                    <li>
                      <h3>Kids</h3>
                    </li>
                    <li>
                      <h3>Baby</h3>
                    </li>
                    <li>
                      <h3>Shoes</h3>
                    </li>
                    <li>
                      <h3>Handbags</h3>
                    </li>
                    <li>
                      <h3>Jewelry</h3>
                    </li>
                    <li>
                      <h3>Salon</h3>
                    </li>
                    <li>
                      <h3>Sephora</h3>
                    </li>
                    <li>
                      <h3>Gifts</h3>
                    </li>
                    <li>
                      <h3>Clearance</h3>
                    </li>
                  </ul>
                </li>
                <li className="main-menu-tier2-li main-menu-tier2-li-primary">
                  <a href="javascript:void(0)">Same Day Pickup</a>
                </li>
                <li className="main-menu-tier2-li main-menu-tier2-li-primary">
                  <a href="javascript:void(0)">Gifts</a>
                </li>
                <li className="main-menu-tier2-li main-menu-tier2-li-primary">
                  <a href="javascript:void(0)">Toys</a>
                </li>
                <li className="main-menu-tier2-li main-menu-tier2-li-primary">
                  <a href="javascript:void(0)">My List</a>
                </li>
                <li className="main-menu-tier2-li main-menu-tier2-li-primary main-menu-tier2-li-highlight">
                  <a href="javascript:void(0)">Coupons</a>
                </li>
              </ul>
            </div>
            <div className="main-menu-tier2-right">
              <div className="dropdown-menu-block main-menu-tier2-my-store">
                    <button className="dropdown-button" type="button" tabindex="-1">
                      <strong>My Store:</strong> Collin Creek Mall <span className="arrow"></span>
                    </button>
                    <div className="dropdown-menu dropdown-my-store">
                      <ul className="tooltip tooltip-top-right tooltip-long tooltip-list">
                        <li>
                          <div className="main-menu-tier2-my-store-listing">
                            <h4 className="title title-M">Collin Creek Mall</h4>
                            <p className="mrg-S">821 N Central Expwy<br />
                                Plano, TX 75075</p>
                            <p className="mrg-S"><a href="javascript:void(0);">Get Directions</a></p>
                            <p>Mon-Thu : 10am-10pm<br />
                                Fri : 9am-11pm<br />
                                Sat : 8am-11pm<br />
                                Sun : 9am-10pm</p>
                            <div>
                              <a href="javascript:void(0);" class="btn btn-L btn-secondary btn-full side-panel-btn" data-for="changeMyStore">
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

 
<div className="side-panel from-right change-my-store-panel" id="changeMyStore">
  <header className="side-panel-header">
    <h3 className="title title-L color-white">Change My Store</h3>
    <a href="javascript:void(0);" className="side-panel-close">
      <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{__html: closeImage}} />
    </a>
  </header>
 
  <div className="side-panel-container">
    <div className="side-panel-content">
        <p>Stores within 15 mi. of <strong>75024</strong> <a href="javascript:void(0);">Change</a></p>
        <div className="side-panel-row">
            <div className="side-panel-col side-panel-col-select">
              <div className="select form-layout column">
                  <select className="form-control custom-select">
                      <option value=''>Filter by Services (2)</option>
                      <option value='1'>01</option>
                      <option value='2'>02</option>
                      <option value='3'>03</option>
                      <option value='4'>04</option>
                      <option value='5'>05</option>
                      <option value='6'>06</option>
                      <option value='7'>07</option>
                      <option value='8'>08</option>
                      <option value='9'>09</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                  </select>
              </div>
            </div>
            <div className="side-panel-col side-panel-col-map-view algn-rght">
              <a href="javascript:void(0);">Map View</a>
            </div>
          </div>


        <div className="change-my-store-listing">
          <div className="side-panel-row">
            <div className="side-panel-col side-panel-col-details">
              <h4 className="mrg-S">Stonebriar Mall <span class="change-my-store-mileage color-slate">(3.5mi)</span></h4>
              <p className="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              <p className="std-txt std-txt-S"><a href="javascript:void(0);">View Hours &amp; Services</a></p>
            </div>
            <div className="side-panel-col-button">
              <a href="javascript:void(0);" class="btn btn-L btn-full btn-primary btn-disabled">
                My Store
              </a>
            </div>
          </div>
        </div>

        <div className="change-my-store-listing">
          <div className="side-panel-row">
            <div className="side-panel-col side-panel-col-details">
              <h4 className="mrg-S">Collin Creek Mall <span class="change-my-store-mileage color-slate">(5.2mi)</span></h4>
              <p className="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              <p className="std-txt std-txt-S"><a href="javascript:void(0);">View Hours &amp; Services</a></p>
            </div>
            <div className="side-panel-col side-panel-col-button">
              <a href="javascript:void(0);" class="btn btn-L btn-full btn-primary">
                Set Store
              </a>
            </div>
          </div>
        </div>


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