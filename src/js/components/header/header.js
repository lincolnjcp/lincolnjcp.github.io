import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');
const cartFullImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart-full.svg');
const trackOrderImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/track-order.svg');
const storeNewImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/store-new.svg');
const accountImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/account.svg');
const accountNewImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/account-new.svg');
const arrowleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/arrow-left.svg');
const targetImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/target.svg');
const jcpenneyRewardsImage = require('!!raw-loader?es5=1!../../../images/global/icons/logos/JCPRewards.svg');
const idfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/info/id-fill.svg');
const walletImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/wallet.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const rewardsFillImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/rewards-fill.svg');
const appointmentFillImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/calendar/schedule-appt-fill.svg');
const cardjcpImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp.svg');
const logoutImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/logout.svg');
const externallinkImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/external-link.svg');
const cardjcpredImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-red.svg');
const cardjcpgoldImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-gold.svg');
const cardjcpplatinumImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-platinum.svg');
class Header extends Component {
  changeMyStoreContent(type) {
    return (
      <div>
        <p id={'changeMyStoreZipLink' + type}>Stores within 15 mi. of <strong>75024 </strong>
          <a href="javascript:void(0);" class="expand-collapse-btn change-btn" data-target={'#changeMyStoreZip' + type} data-hide-on-open-target={'#changeMyStoreZipLink' + type} data-duration="0"> Change</a>
        </p>

        <div class="expand-collapse-section" id={'changeMyStoreZip' + type}>
          <div class="button-preview text-center my-location">
            <a href="javascript:void();" class="btn btn-secondary btn-M mrg-M mrg-rght-M"><span class="icon" dangerouslySetInnerHTML={{ __html: targetImage }} /><span>Use my Location</span></a>
            <a href="javascript:void();" class="cancel-btn">cancel</a>
          </div>
          <div class="">
            <span class="title title-S title-text-or">or</span>
          </div>
          <div class="input-form">
            <div class="input-form-store-locator">
              <div class="input-form-store-locator-field-1">
                <input class="form-control input-text" id={'changeMyStoreSearch' + type} type="text" placeholder="Zip Code" defaultValue="75024" />
              </div>

              <div class="input-form-store-locator-field-2">
                <div class="select">
                  <select class="form-control custom-select">
                    <option value='5'>5 miles</option>
                    <option value='10'>10 miles</option>
                    <option value='20'>20 miles</option>
                    <option value='50'>50 miles</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="search-icon">
                <span class="icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchImage }} />
              </button>
            </div>
          </div>
        </div>
        <div class="side-panel-row-wrap no-border padding-bot-zero">
          <div class="side-panel-row">
            <div class="side-panel-col side-panel-col-select mrg-M">
              <div class="dropdown-menu-block column">
                <div class="pos-rel fl-left">
                  <a class="dropdown-button title-S">Filter by Services <span class="arrow"></span></a>
                  <div class="dropdown-menu">
                    <div class="tooltip tooltip-top-left tooltip-Large">
                      <span>
                        <ul>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M" >
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                          <li class="dropdown-list">
                            <label class="checkbox mrg-M">
                              <input type="checkbox" defaultChecked="" />
                              <span class="left">label</span>
                              <span class="right-label">(1,008)</span>
                            </label>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div class="side-panel-col side-panel-col-map-view algn-rght">
              <a href="javascript:void(0);" class="expand-collapse-btn" data-hide-text="List View" data-target={'#changeMyStoreMap' + type}>Map View</a>
            </div>
          </div>
          <div class="expand-collapse-section change-my-store-map-view" id={'changeMyStoreMap' + type}>
            <img src="/images/design-system/fpo/find-a-store/map.jpg" alt="" />
          </div>
        </div>

        <div class="change-my-store-listing">
          <div class="side-panel-row-wrap">
            <div class="side-panel-row">
              <div class="side-panel-col side-panel-col-details">
                <h4 class="mrg-S">Stonebriar Mall <span class=" color-slate">(3.5mi)</span></h4>
                <p class="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              </div>
              <div class="side-panel-col-button">
                <a href="javascript:void(0);" class="btn btn-M btn-full btn-primary btn-disabled">
                  My Store
                </a>
              </div>
            </div>

            <div class="side-panel-col-full">
              <div class="expand-collapse-section change-my-store-details" id={'storeLising1' + type}>
                <div class="std-txt std-txt-S mrg-M color-nightsky">
                  <a href="javascript:void(0);" class="color-nightsky">Get Directions</a> | 972-578-8666
                  </div>
                <div class="std-txt std-txt-S mrg-M color-slate">
                  Mon-Thu : 10am-10pm<br />
                  Fri : 9am-11pm<br />
                  Sat : 8am-11pm<br />
                  Sun : 9am-10pm<br />
                  <br />
                  <strong class="color-nightsky">Store Services:</strong><br />
                  Jewelry<br />
                  Big and Tall<br />
                  Wedding Registry<br />
                  TV and Home Theater<br />
                  Major Appliances<br />
                  Optical<br />
                  Portrait Studio<br />
                  Custom Decorating - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a><br />
                  Sephora - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a><br />
                  Salon - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a>
                </div>
              </div>
              <p class="std-txt std-txt-S"><a href="javascript:void(0);" class="expand-collapse-btn" data-hide-text="Hide Hours &amp; Services" data-target={'#storeLising1' + type}>View Hours &amp; Services</a></p>
            </div>
          </div>
        </div>

        <div class="change-my-store-listing">
          <div class="side-panel-row-wrap no-border">
            <div class="side-panel-row">
              <div class="side-panel-col side-panel-col-details">
                <h4 class="mrg-S">Collin Creek Mall <span class=" color-slate">(5.2mi)</span></h4>
                <p class="std-txt std-txt-S mrg-XS color-nightsky">2480 Preston Rd</p>
              </div>
              <div class="side-panel-col-button">
                <a href="javascript:void(0);" class="btn btn-M btn-full btn-primary">
                  Set Store
                </a>
              </div>
            </div>

            <div class="side-panel-col-full">
              <div class="expand-collapse-section change-my-store-details" id={'storeLising2' + type} >
                <div class="std-txt std-txt-S mrg-M color-nightsky">
                  <a href="javascript:void(0);" class="color-nightsky">Get Directions</a> | 972-578-8667
                  </div>
                <div class="std-txt std-txt-S mrg-M color-slate">
                  Mon-Thu : 10am-10pm<br />
                  Fri : 9am-11pm<br />
                  Sat : 8am-11pm<br />
                  Sun : 9am-10pm<br />
                  <br />
                  <strong class="color-nightsky">Store Services:</strong><br />
                  Jewelry<br />
                  Big and Tall<br />
                  Wedding Registry<br />
                  TV and Home Theater<br />
                  Major Appliances<br />
                  Optical<br />
                  Portrait Studio<br />
                  Custom Decorating - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a><br />
                  Sephora - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a><br />
                  Salon - <a href="javascript:void(0);" class="color-nightsky">Schedule Appointment</a>
                </div>
              </div>
              <p class="std-txt std-txt-S"><a href="javascript:void(0);" class="expand-collapse-btn" data-hide-text="Hide Hours & Services" data-target={'#storeLising2' + type}>View Hours & Services</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  navSet(linkSet) {
    return (
      <li class="main-menu-tier1-li">
        <a href="javascript:void(0)" class="main-menu-tier1-link"><span class="main-menu-tier1-link-thumb"><img src={linkSet.thumb} alt="" /></span>{linkSet.name}</a>
        <ul class="main-menu-tier2-ul">
          <li class="main-menu-secondary-hidden-lg-up color-lightgrey-bg department-first-child"><span class="main-menu-tier1-link"><span class="main-menu-tier1-link-thumb"><img src={linkSet.thumb} alt="" /></span>{linkSet.name}</span></li>
          {linkSet.subLinks.map((link, index) => {
            return (
              <li key={index} class="main-menu-tier2-li"><a href="javascript:void(0)" class="main-menu-tier2-link">
                {link.name}</a>
                <ul class="main-menu-tier3-ul">

                  {link.sublinks2.map(function (name, index) {
                    return <li key={index} class="main-menu-tier3-li"><a href="javascript:void(0)" class="main-menu-tier3-link">{name}</a></li>;
                  })}
                </ul>
              </li>
            )
          })}


        </ul>
      </li>
    )

  }

  sidePaneler(indexObj) {

    $('.slide-panel-from-right').each((indx, obj) => {
      (indexObj == indx) ? $(obj).addClass('is-visible') : $(obj).removeClass('is-visible');
    });

  }
  componentDidMount() {

    $('.cancel-btn').on('click', function () {
      $('#changeMyStoreZipLinkDesktop').css('display', 'block');
      $('#changeMyStoreZipDesktop').css('display', 'none');
      $('#changeMyStoreZipLinkMobile').css('display', 'block');
      $('#changeMyStoreZipMobile').css('display', 'none');
    });

    !function (factory) { "use strict"; "function" == typeof define && define.amd ? define(["$"], factory) : $ && !$.fn.hoverIntent && factory($) }(function ($) { "use strict"; var cX, cY, _cfg = { interval: 100, sensitivity: 6, timeout: 0 }, INSTANCE_COUNT = 0, track = function (ev) { cX = ev.pageX, cY = ev.pageY }, compare = function (ev, $el, s, cfg) { if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]); s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function () { compare(ev, $el, s, cfg) }, cfg.interval) }, delay = function (ev, $el, s, out) { return delete $el.data("hoverIntent")[s.id], out.apply($el[0], [ev]) }; $.fn.hoverIntent = function (handlerIn, handlerOut, selector) { var instanceId = INSTANCE_COUNT++, cfg = $.extend({}, _cfg); $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector }) : $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut }); var handleHover = function (e) { var ev = $.extend({}, e), $el = $(this), hoverIntentData = $el.data("hoverIntent"); hoverIntentData || $el.data("hoverIntent", hoverIntentData = {}); var state = hoverIntentData[instanceId]; state || (hoverIntentData[instanceId] = state = { id: instanceId }), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId)); var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId; if ("mouseenter" === e.type) { if (state.isActive) return; state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function () { compare(ev, $el, state, cfg) }, cfg.interval) } else { if (!state.isActive) return; $el.off(mousemove, track), state.timeoutId = setTimeout(function () { delay(ev, $el, state, cfg.out) }, cfg.timeout) } }; return this.on({ "mouseenter.hoverIntent": handleHover, "mouseleave.hoverIntent": handleHover }, cfg.selector) } });

    $('.dropdown-button').unbind('click').on('click', function () {
      var parent_box = $(this).closest('.dropdown-menu-block');
      parent_box.siblings().find('.dropdown-menu').hide();
      parent_box.find('.dropdown-menu').slideToggle(200, 'swing');
      $(this).toggleClass("arrow-down");

      if ($(".dropdown-button").hasClass("arrow-down")) {
        if ($('#menu-overlay').length == 0)
          $("body").append('<div id="menu-overlay" class="menu-overlay"></div>');
        else
          $('#menu-overlay').trigger('click');
      } else {
        $("#menu-overlay").remove();
      }
    });

    // $('#menu-overlay').on('click', function (e) {
    $('body').on('click', '#menu-overlay', function () {
      $("#menu-overlay").remove();
      $(".dropdown-menu").hide();
      $(".dropdown-button").removeClass("arrow-down");
    });

    $('.side-panel-btn').unbind('click').on('click', function (event) {
      // event.preventDefault();
      var parent = $($(this).attr('data-target'));
      parent.addClass('is-visible');
      if ($(this).attr('id') == "mainMenuSidePanelButton") {
        parent.addClass('is-enabled');
      }
    });

    $(window).resize(function () {
      if ($('#mainMenuSidePanelButton').filter(":visible").length < 1) {
        $('.side-panel-disable-desktop').removeClass('is-enabled');
      }
    });

    $('.side-panel').unbind('click').on('click', function (event) {
      var closed = false;
      if ($(event.target).is('.side-panel')) {
        $(this).removeClass('is-visible');
        closed = true;
      } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close')) {
        $(event.target).closest('.side-panel').removeClass('is-visible');
        closed = true;
      }
      if (closed === true && $(this).find('.main-menu-reset').length > 0) {
        setTimeout(function () {
          $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
          $('.main-menu-md-panel.tier2-click').removeClass('tier2-click');
          $('.side-panel-container').removeClass('tier2-open');
        }, 400);

      }
      // event.preventDefault();
    });

    $(".main-menu-secondary-li-shop-departments").hoverIntent({

      over: function () {
        $('.dropdown-menu').css('display', 'none');
        if ($("#mainMenusecondaryLightBox").length == 0) {
          $("body").append('<div id="mainMenusecondaryLightBox"></div>');
          var top = 0;
          if ($(".main-menu-bar-secondary").length > 0) {
            top = $(".main-menu-bar-secondary").height() + $(".main-menu-bar-secondary").offset().top;
          }
          $("#mainMenusecondaryLightBox").fadeOut(0).fadeIn(200);
        }
        $(".main-menu-secondary-li").addClass("main-menu-secondary-hover");
      },
      timeout: 400,
      interval: 100,
      out: function () {
        $(".main-menu-secondary-li").removeClass("main-menu-secondary-hover");
        $("#mainMenusecondaryLightBox").fadeOut(300);
        setTimeout(function () {
          $("#mainMenusecondaryLightBox").remove();
        }, 500);
        $('.main-menu-tier1').removeClass('active-tier2').removeClass('active-tier3')
      }
    });


    $(".main-menu-tier1-li").hoverIntent({
      over: function () {
        $(".main-menu-tier1-li").removeClass('active');
        $(this).addClass("active");
        $(".main-menu-tier2-li.active").removeClass('active');
        $(".main-menu-tier2-li.to-activate").removeClass('to-activate');
        $(this).closest('.main-menu-tier1').addClass('active-tier2').removeClass('active-tier3');
      },
      timeout: 200,
      interval: 100,
      out: function () {
        $(this).removeClass("active");
      }
    });

    $(".main-menu-tier2-li").hoverIntent({
      over: function () {
        $('.to-activate').removeClass('to-activate');
        if ($(this).closest('.main-menu-tier1').hasClass('active-tier3')) {
          $(".main-menu-tier2-li.active").removeClass('active');
          $(this).addClass("active");
        } else {
          $(this).addClass("to-activate");
          $(".main-menu-tier2-li.active").removeClass('active');
          setTimeout(function () {
            if ($('.to-activate').length > 0) {
              $(".main-menu-tier2-li.active").removeClass('active');
              $('.to-activate').removeClass('to-activate').addClass('active');
            }
          }, 500);
        }

        $(this).closest('.main-menu-tier1').addClass('active-tier3');
      },
      timeout: 200,
      interval: 100,
      out: function () {
        if ($(".main-menu-tier2-li.active").length < 1) {
          $(this).closest('.main-menu-tier1').removeClass('active-tier3');
        }
      }
    });

    $(".main-menu-tier3-li").hoverIntent({
      over: function () {
        $(this).addClass("active");
      },
      timeout: 200,
      interval: 100,
      out: function () {
        $(this).removeClass("active");
      }
    });

    /* Navigation Mobile/Tablet */

    $(".main-menu-tier1-link").unbind('click').on('click', function (event) {
      event.preventDefault();
      $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
      $('.main-menu-md-panel').removeClass('tier2-click');
      $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click');
      $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 200 });
      $('.side-panel-container').addClass('tier2-open');
    });

    $(".main-menu-tier2-link").unbind('click').on('click', function (event) {
      event.preventDefault();
      var target = $(this).closest('.main-menu-tier2-li');
      if (target.hasClass('tier3-click')) {
        target.removeClass('tier3-click');
      } else {
        target.addClass('tier3-click');
      }
    });


    $(document).ready(function () {
      $('.main-menu-secondary-shop-departments').click(function () {
        $(".main-menu-secondary-li").toggleClass("main-menu-secondary-hover");
        $("#mainMenusecondaryLightBox").toggle();
      });
    });

    $(".tier2-close").unbind('click').on('click', function (event) {
      event.preventDefault();

      $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click-remove');
      $(this).closest('.main-menu-md-panel').addClass('tier2-click-remove');
      setTimeout(function () {
        $('.tier2-click-remove').removeClass('tier2-click-remove').removeClass('tier2-click');
      }, 400);

      $('.side-panel-container').removeClass('tier2-open');
    });

    $(".main-menu-md-panel-btn").unbind('click').on('click', function (event) {
      event.preventDefault();
      $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
      $(this).closest('.main-menu-md-panel-li').find('.main-menu-md-panel').addClass('tier2-click');
      $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 1 });
      $('.side-panel-container').addClass('tier2-open');
    });

    $(".main-menu-reset").on('click', function (event) {
      event.preventDefault();
      $('.side-panel-container').trigger('click');
    });





    $('.expand-collapse-btn').unbind('click').on('click', function (event) {
      var target = $($(this).attr('data-target'));

      var duration = 400;
      if ($(this).attr('data-duration')) {
        duration = $(this).attr('data-duration');
      }

      if (target.hasClass('is-visible')) {
        if ($(this).attr('data-show-text')) {
          $(this).text($(this).attr('data-show-text'));
        }
        if (duration > 0) {
          target.removeClass('is-visible').slideUp(duration);
        } else {
          target.removeClass('is-visible').css('display', 'none');
        }

      } else {
        if ($(this).attr('data-hide-text')) {
          $(this).attr('data-show-text', $(this).text());
          $(this).text($(this).attr('data-hide-text'));
        }
        if (duration > 0) {
          target.addClass('is-visible').slideDown(duration);
        } else {
          target.addClass('is-visible').css('display', 'block');
        }
        if ($(this).attr('data-hide-on-open-target')) {
          $($(this).attr('data-hide-on-open-target')).css('display', 'none');
        }
      }
    });

    $('#menuPrimarySearch').focus(function () {

      if ($(window).width() >= 1024) {
        $(".main-menu-primary-rewards, .main-menu-primary-account, .track-order").hide(400);
        $(this).attr('data-default', $(this).width());
      } else {
        $(".main-menu-primary-rewards, .main-menu-primary-account, .track-order").show();
      }

    }).blur(function () {
      if ($("#menuPrimarySearch").val() == "") {
        $('.main-menu').removeClass('main-menu-search-open');
        $(".main-menu-primary-rewards, .main-menu-primary-account, .track-order").show(400);
      }

    });

    $(".search-close-icon").click(function () {
      $("#menuPrimarySearch").val('').focus();
    });


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

    //slideout panel

    $('.side-panel-btn').unbind('click').on('click', function (event) {
      // event.preventDefault();
      var parent = $($(this).attr('data-target'));
      parent.addClass('is-visible');
    });

    $('.side-panel').unbind('click').on('click', function (event) {
      if ($(event.target).is('.side-panel')) {
        $(this).removeClass('is-visible');
      } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close')) {
        $(event.target).closest('.side-panel').removeClass('is-visible');
      }
      // event.preventDefault();
    });


    // show password
    Array.from(document.getElementsByClassName('show-pwd')).map(function (el) {
      el.onclick = onShowPwd;
    });

    function onShowPwd(evt) {
      var textid = evt.target.getAttribute('data-textid');
      var passwordElement = document.getElementById(textid);
      var currentType = passwordElement.getAttribute('type');
      var newType = currentType == "password" ? 'text' : 'password';
      passwordElement.setAttribute('type', newType);
      evt.target.innerHTML = (newType == 'password') ? 'show' : 'hide';
    }
    const self = this;
    $(function () {
      $(".phone-number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;
        }
        var curchr = this.value.length;
        var curval = $(this).val();
        if (curchr == 3) {
          $(this).val(curval + "-");
        } else if (curchr == 7) {
          $(this).val(curval + "-");
        }
        $(this).attr('maxlength', '12');
      });

      $('#siginForgotPswd,#siginCreateAct,#createmyAccount,#siginmyAccount,#siginHome,#signOut').click((e) => {
        switch ($(e.target).attr('id')) {
          case "siginCreateAct":
            self.sidePaneler(4);
            break;
          case "siginForgotPswd":
            self.sidePaneler(3);
            break;
          case "createmyAccount":
            self.sidePaneler(0);
            break;
          case "siginmyAccount":
            self.sidePaneler(0);
            break;
          case "siginHome":
            self.sidePaneler(1);
            break;
          case "signOut":
            self.sidePaneler(5);
            break;
        }
      });
    });



  }

  render() {
    return (
      <div>
        <div class="row design-system-enable-hide">
          {/* <div class="sm12 columns">
            <h1 class="title title-XL mrg-L">Header</h1>
            <h2 class="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div> */}
          <div>
            <div class="sm12 columns">
              <p class="S"><br />
                <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a></p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <header class="main-menu">
          <div class="main-menu-promotional-banner">
            <div class="main-menu-promotional-banner-content">
              <p class="S S-at-S mrg-zero main-menu-promotional-banner-text">Promotional font size is 14px… <a href="javascript:void(0);">See Details</a></p>
              {/* <div class="main-menu-primary-account-link show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn fl-right color-white mrg-rght-S" data-target="#camMenu"> Cam Menu </div>
              <div class="main-menu-primary-account-title show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn fl-right color-white mrg-rght-S" data-target="#myAccount"> My Account </div>
              <div class="main-menu-primary-account-title show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn fl-right color-white mrg-rght-S" data-target="#createAccount"> Create Account </div>
              <div class="main-menu-primary-account-title show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn fl-right color-white mrg-rght-S" data-target="#forgotPassword"> Forgot Password </div>
              <div class="main-menu-primary-account-link show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn fl-right color-white mrg-rght-S" data-target="#signIn"> Sign In </div> */}

              <p class="S S-at-S mrg-zero main-menu-promotional-banner-link hide-for-large-down"> <a href="javascript:void(0);">Accessible View</a> </p>
            </div>
          </div>
          <div class="main-menu-bar-primary color-penneyred-bg">
            <ul class="main-menu-primary">
              <li class="main-menu-primary-item main-menu-primary-logo"> <span class="hide-for-large-up"> <a title="JCPenney Main Menu" aria-label="JCPenney Main Menu" href="javascript:void(0);" class="side-panel-btn" data-target="#mainMenusecondary" id="mainMenuSidePanelButton">
                <div class="main-menu-primary-menu-svg icon" dangerouslySetInnerHTML={{ __html: menuImage }} />
              </a> </span> <a title="JCPenney Home" aria-label="JCPenney Home Page" href="javascript:void(0);">
                  <div class="main-menu-primary-logo-svg" dangerouslySetInnerHTML={{ __html: logoImage }} />
                </a> </li>
              <li class="main-menu-primary-item main-menu-primary-search">
                <div class="main-menu-primary-search-form search-block">
                  <form action="http://www.jcpenney.com/s/search">
                    <input type="text" placeholder="Search Products" size="20" required aria-required="false" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" id="menuPrimarySearch" class="input-text" />
                    <button class="search-close-icon" type="reset"></button>
                    <button type="button" class="btn-search">
                      <div class="main-menu-primary-search-icon color-lipstick-svg icon" dangerouslySetInnerHTML={{ __html: searchImage }} />
                    </button>
                  </form>
                </div>
              </li>
              <li class="main-menu-primary-item main-menu-primary-rewards hide-for-medium-down hide-for-sm-only hide-for-xs-only hide-for-xxs-only">
                <a href="javascript:void(0);">
                  <span class="icon color-white-svg" dangerouslySetInnerHTML={{ __html: jcpenneyRewardsImage }} />
                </a>
              </li>
              <li class="main-menu-primary-item main-menu-primary-account">
                <div class="dropdown-menu-block">
                  <button type="button" tabindex="-1" data-target="#signIn" class="side-panel-btn">
                    <div class="main-menu-primary-account-icon icon color-white-svg" dangerouslySetInnerHTML={{ __html: accountNewImage }} />
                    <div class="main-menu-primary-account-title show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-XS side-panel-btn">My Account</div>
                    <div class="main-menu-primary-account-link show-for-large-only show-for-xlarge-only show-for-xxlarge-only hide-for-medium-down title-M side-panel-btn">Sign In</div>
                  </button>
                  {/* <div class="dropdown-menu dropdown-account">
                    <div class="tooltip tooltip-top-right tooltip-long tooltip-list">
                      <ul>
                        <li><a href="javascript:void(0)">My Account</a></li>
                        <li><a href="javascript:void(0)">Find a Store</a></li>
                        <li><a href="javascript:void(0)">My Orders</a></li>
                        <li><a href="javascript:void(0)">My Rewards (0)</a></li>
                        <li><a href="javascript:void(0)">My List</a></li>
                        <li><a href="javascript:void(0)">Profile Settings</a></li>
                        <li><a href="javascript:void(0)">Notifications</a></li>
                        <li><a href="javascript:void(0)">My Jcpenney.com</a></li>
                        <li><a href="javascript:void(0)">Gift Registry</a></li>
                        <li><a href="javascript:void(0)">JCPenney Credit Card</a></li>
                        <li class="tooltip-divider"> <a href="javascript:void(0)">Sign Out</a> </li>
                        <li class="main-menu-primary-sign-rewards"> <a href="javascript:void(0);"> <span class="main-menu-primary-sign-rewards-amount">$20</span> <span class="main-menu-primary-sign-rewards-label">Redeem Your Rewards</span> </a> </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </li>
              <li class="main-menu-primary-item track-order hide-for-medium-down hide-for-sm-only hide-for-xs-only hide-for-xxs-only">
                <span class="color-white title-XS">Track My</span>
                <span class="title-M color-white">Orders</span>
              </li>
              <li class="main-menu-primary-item main-menu-primary-cart"> <a href="javascript:void(0);" class="main-menu-primary-cart-icon-full"> <span class="main-menu-primary-cart-icon-full-items">28</span>
                <div class="main-menu-primary-cart-icon-full-icon icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartFullImage }} />
              </a> </li>
            </ul>
          </div>
          <div class="main-menu-bar-secondary">
            <div class="side-panel side-panel-disable-desktop slide-panel-from-left main-menu-bar-secondary-panel" id="mainMenusecondary">
              <div class="side-panel-container">
                <div class="side-panel-container-inner-container">
                  <header class="side-panel-header">
                    <h3 class="promo-lbl promo-lbl-M side-panel-headline">Hi, Jesse</h3>
                    <a href="javascript:void(0);" class="title title-L tier2-close">
                      <div class="tier2-close-icon icon" dangerouslySetInnerHTML={{ __html: arrowleftImage }} />
                      Back </a> <a href="javascript:void(0);" class="side-panel-close main-menu-reset">
                      <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
                    </a> </header>
                  <div class="side-panel-content">
                    <div class="main-menu-bar-secondary-container">
                      <div class="main-menu-secondary-left">
                        <ul class="main-menu-secondary title title-S">
                          <li class="main-menu-secondary-li main-menu-secondary-li-shop-departments main-menu-secondary-open">
                            <button class="main-menu-secondary-shop-departments hide-for-medium-down">
                              <div class="main-menu-secondary-shop-departments-menu-svg icon color-nightsky-svg" dangerouslySetInnerHTML={{ __html: menuImage }} />
                              <span class="main-menu-secondary-shop-departments-menu-label">Shop Departments</span> </button>
                            <div class="main-menu-tier1">
                              <ul class="main-menu-md-down">
                                <li> <a href="javascript:void(0);" class="main-menu-tier1-button-md-down main-menu-md-primary"><span dangerouslySetInnerHTML={{ __html: accountNewImage }} />My Account</a> </li>
                                <li> <a href="javascript:void(0);" class="main-menu-tier1-button-md-down main-menu-md-primary"><span dangerouslySetInnerHTML={{ __html: trackOrderImage }} />Track My Order</a> </li>
                                <li class="main-menu-md-panel-li main-menu-tier1-border"> <a href="javascript:void(0);" class="main-menu-tier1-button-md-down main-menu-md-primary"><span dangerouslySetInnerHTML={{ __html: storeNewImage }} /> Find a Store</a>
                                  <div class="main-menu-md-panel"> {this.changeMyStoreContent('Mobile')} </div>
                                </li>
                              </ul>
                              <ul class="main-menu-tier1-ul">
                                <span class="department-label title title-S"><strong>Departments</strong></span>
                                {this.navSet({
                                  name: "For The Home",
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
                                  name: "Bed & Bath",
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
                                  name: "Window",
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
                                  name: "Appliances",
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
                                  name: "Women",
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
                                  name: "Lingerie",
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
                                  name: "Men",
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
                                  name: "Juniors",
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
                                  name: "Kids",
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
                                  name: "Baby",
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
                                  name: "Shoes",
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
                              </ul>
                            </div>
                          </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down"> <a href="javascript:void(0)">Same Day Pickup</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down"> <a href="javascript:void(0)">Gifts</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-md-down"> <a href="javascript:void(0)">Toys</a> </li>
                          {/* <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">Track Order</a> </li> */}
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">JCPenney Credit Card</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">Rewards</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">Store Ads</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary"> <a href="javascript:void(0)" class="main-menu-md-primary">My List</a> </li>
                          {/* <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">Gift Registry</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">My jcpenney.com</a> </li> */}
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-li-highlight"> <a href="javascript:void(0)" class="main-menu-md-primary">Coupons</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up border-top-menu"> <a href="javascript:void(0)" class="main-menu-md-primary">Need Help?</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up"> <a href="javascript:void(0)" class="main-menu-md-primary">Accessible View</a> </li>
                          <li class="main-menu-secondary-li main-menu-secondary-li-primary main-menu-secondary-hidden-lg-up border-top-menu"> <a href="javascript:void(0)" class="main-menu-md-primary">Sign Out</a> </li>
                        </ul>
                      </div>
                      <div class="main-menu-secondary-right main-menu-secondary-hidden-md-down">
                        <div class="dropdown-menu-block main-menu-secondary-my-store">
                          {/* <button class="dropdown-button main-menu-tier1-button-md-down" type="button" tabindex="-1"> <strong>My Store:</strong> Collin Creek Mall <span class="arrow"></span> </button> */}
                          <button class="dropdown-button main-menu-tier1-button-md-down" type="button" tabindex="-1">
                            <span dangerouslySetInnerHTML={{ __html: storeNewImage }} />
                            <span class="find-store-button">Find a Store</span>
                          </button>
                          {/* <div class="dropdown-menu dropdown-my-store">
                            <ul class="tooltip tooltip-top-right tooltip-long tooltip-list">
                              <li>
                                <div class="main-menu-secondary-my-store-listing">
                                  <h4 class="title title-M mrg-S">Collin Creek Mall</h4>
                                  <p class="std-txt std-txt-M mrg-M">821 N Central Expwy<br />
                                    Plano, TX 75075</p>
                                  <p class="mrg-M"><a href="javascript:void(0);">Get Directions</a></p>
                                  <p class="std-txt std-txt-M mrg-M">Mon-Thu : 10am-10pm<br />
                                    Fri : 9am-11pm<br />
                                    Sat : 8am-11pm<br />
                                    Sun : 9am-10pm</p>
                                  <div> <a href="javascript:void(0);" class="btn btn-M btn-secondary btn-full side-panel-btn" data-target="#changeMyStore"> Change My Store </a> </div>
                                </div>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="side-panel slide-panel-from-right change-my-store-panel" id="changeMyStore">
            <div class="side-panel-container">
              <header class="side-panel-header">
                <h3 class="title title-L color-white">Change My Store</h3>
                <a href="javascript:void(0);" class="side-panel-close">
                  <div class="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
                </a> </header>
              <div class="side-panel-content"> {this.changeMyStoreContent('Desktop')} </div>
            </div>
          </div> */}
        </header>

        {/* sidepanel my account starts*/}
        <div class="side-panel slide-panel-from-right" id="myAccount">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <h3 class="title title-L">My Account Menu</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container">
              <div class="my-account-top text-center">
                <span class="account-logo" dangerouslySetInnerHTML={{ __html: accountNewImage }} />
                <h1 class="title title-XXL">Hi, Ellen!</h1>
                <p class="my-account-welcome">Welcome JCP Cardmember </p>
              </div>
              <div class="my-account-list mrg-L">
                <ul>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: accountImage }} /><a href="javascript:void(0)">My Account</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: trackOrderImage }} /><a href="javascript:void(0)">My Orders</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: idfillImage }} /><a href="javascript:void(0)">My Info</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: walletImage }} /><a href="javascript:void(0)">My Wallet</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: heartfillImage }} /><a href="javascript:void(0)">My Lists</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: rewardsFillImage }} /><a href="javascript:void(0)">My Rewards</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: appointmentFillImage }} /><a href="javascript:void(0)">My Appointments</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: cardjcpImage }} /><a href="javascript:void(0)">JCP Credit Card</a></li>
                  <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: accountNewImage }} /><a href="javascript:void(0)" id="signOut">Sign Out</a></li>
                </ul>
              </div>
              <div class="card-member-status">
                <div class="member-section text-center">
                  <h2 class="title title-L">Go for the Gold!  </h2>
                  <p>Spend just $200 more to earn Gold cardmember status and reap the rewards! <a href="javascript:void(0);">Learn More </a></p>
                </div>
                <div class="card-section">
                  <div class="card-jcp-progress">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                  <div class="progress-bar progress-bar-rewards position-rel">
                    <span class="progress-bar-max-points">200</span>
                    <div class="progress-bar-percent">150</div>
                  </div>
                  <div class="card-jcp-progress-right">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpgoldImage }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidepanel my account ends*/}


        {/* sidepanel Signin starts*/}
        <div class="side-panel slide-panel-from-right" id="signIn">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <h3 class="title title-L">Sign In</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container input-form">
              <div class="sm12 md12 columns row">
                {/* <div class="form-float-label error-message">
                  <div class="msg msg-error mrg-L">The email address or password you entered was not found. Please try again.</div>
                </div> */}
                <div class="form-float-label">
                  <input class="form-control email-text input-text" id="email" type="text" placeholder="Email " />
                  <label htmlFor="email">Email</label>
                </div>
                <div class="form-float-label password-form">
                  <input class="form-control input-text" id="password1" maxLength="16" type="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                  <a href="javascript:void(0);" data-textid="password1" class="show-pwd title-S">show</a>
                </div>
                <label class="checkbox fl-left">
                  <input type="checkbox" defaultChecked="true" /> <span>Remember Me</span>
                </label>
                <div class="fl-right std-txt std-txt-M mrg-L">
                  <a href="javascript:void(0);" id="siginForgotPswd" >Forgot Password?</a>
                </div>
                <div class="text-center">
                  <a href="javascript:void();" role="button" class="btn btn-primary btn-M mrg-M col12" id="siginmyAccount">Sign In</a>
                </div>
                <p class="or-split text-center">
                  <span>or</span>
                </p>
                <div class="text-center">
                  <a href="javascript:void();" id="siginCreateAct" role="button" class="btn btn-secondary btn-M mrg-M col12" >Create Account</a>
                </div>
              </div>
              <div class="my-account-bottom mrg-top-XL">
                <div class="menu-item">
                  <div class="my-account-list mrg-L">
                    <ul>
                      <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: trackOrderImage }} /><a href="javascript:void(0)">My Orders</a></li>
                      <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: heartfillImage }} /><a href="javascript:void(0)">My Lists</a></li>
                      <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: rewardsFillImage }} /><a href="javascript:void(0)">My Rewards</a></li>
                      <li class="account-list-label color-concrete-svg"><span class="account-icon" dangerouslySetInnerHTML={{ __html: cardjcpImage }} /><a href="javascript:void(0)">JCP Credit Card</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-item text-center col12">
                  <div class="card-container">
                    <div class="card-jcp dis-inline-block">
                      <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                    </div>
                    <div class="card-jcp-red card-jcp dis-inline-block">
                      <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                    </div>
                    <div class="card-jcp dis-inline-block">
                      <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                    </div>
                  </div>
                  <div class="member-section text-center">
                    <h2 class="title title-L">Earn Rewards 2x Faster</h2>
                    <span class="dis-block mrg-M">with your JCPenney Credit Card</span>
                  </div>
                  <div class="text-center">
                    <a href="javascript:void();" role="button" class="btn btn-secondary btn-M mrg-M col6">Apply Now</a>
                  </div>
                  <div class="text-center">
                    <span class="dis-block mrg-S">Already a cardmember? </span>
                    <a class="mrg-M dis-block" href="javascript:void();">View Balance & Pay Bill</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidepanel Signin ends*/}






        {/* sidepanel cam menu starts*/}
        <div class="side-panel slide-panel-from-right" id="camMenu">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <h3 class="title title-L">Cam Menu</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container cam-card-container">
              <h3>No / Unlinked JCP CC:</h3>
              <div class="card-item text-center col12 mrg-L mrg-top-L">
                <div class="card-jcp dis-inline-block">
                  <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                </div>
                <div class="card-jcp-red card-jcp dis-inline-block mrg-top-S">
                  <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                </div>
                <div class="card-jcp dis-inline-block">
                  <span class="dis-block" dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                </div>
                <div class="member-section text-center">
                  <h2 class="title title-L">Earn Rewards 2x Faster</h2>
                  <span class="dis-block mrg-M">with your JCPenney Credit Card</span>
                </div>
                <div class="text-center">
                  <a href="javascript:void();" role="button" class="btn btn-secondary btn-M mrg-M">Apply Now</a>
                </div>
                <div class="text-center">
                  <span class="dis-block mrg-S">Already a cardmember? </span>
                  <a class="mrg-M dis-block" href="javascript:void();">View Balance & Pay Bill</a>
                </div>
              </div>
              <h3>Linked Red JCP CC:</h3>
              <div class="card-member-status mrg-top-L mrg-L">
                <div class="member-section text-center">
                  <h2 class="title title-L">Go for the Gold!  </h2>
                  <p>Spend just $200 more to earn Gold cardmember status and reap the rewards! <a href="javascript:void(0);">Learn More </a></p>
                </div>
                <div class="card-section">
                  <div class="card-jcp-progress">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                  <div class="progress-bar progress-bar-rewards position-rel">
                    {/* <div class="tooltip tooltip-bottom-center tooltip-single">$10</div> */}
                    <span class="progress-bar-max-points">200</span>
                    <div class="progress-bar-percent">150</div>
                  </div>
                  <div class="card-jcp-progress-right">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                </div>
              </div>

              <h3>Linked Gold JCP CC:</h3>
              <div class="card-member-status mrg-L">
                <div class="member-section text-center">
                  <h2 class="title title-L">Platinum: It’s Better Than Gold </h2>
                  <p>Spend just $300 more to earn Gold cardmember status and reap the rewards! <a href="javascript:void(0);">Learn More </a></p>
                </div>
                <div class="card-section">
                  <div class="card-jcp-progress">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                  <div class="progress-bar progress-bar-rewards position-rel">
                    {/* <div class="tooltip tooltip-bottom-center tooltip-single">$10</div> */}
                    <span class="progress-bar-max-points">200</span>
                    <div class="progress-bar-percent">150</div>
                  </div>
                  <div class="card-jcp-progress-right">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                </div>
              </div>

              <h3>Linked Platinum JCP CC:</h3>
              <div class="card-member-status">
                <div class="card-section card-collage">
                  <div class="card-jcp">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                  <div class="card-jcp card-middle">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                  <div class="card-jcp">
                    <span dangerouslySetInnerHTML={{ __html: cardjcpredImage }} />
                  </div>
                </div>
                <div class="member-section text-center">
                  <h2 class="title title-L">Platinum Cardmember</h2>
                  <p>Spend just $328 more to earn Gold cardmember status and reap the rewards! <a href="javascript:void(0);">Learn More </a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* sidepanel cam menu ends*/}






        {/* sidepanel forgot password starts*/}
        <div class="side-panel slide-panel-from-right" id="forgotPassword">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <span class="back-icon" dangerouslySetInnerHTML={{ __html: arrowleftImage }} />
              <h3 class="title title-L back-to-sign" id="siginHome">Back to Sign In</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container input-form">
              <div class="sm12 md12 columns row">
                {/* <div class="msg msg-success mrg-M">Email has been sent! Please check your inbox.<span class="icon msg-close color-success-type-svg " dangerouslySetInnerHTML={{ __html: closeImage }} /></div> */}
                <div class="sm12 md12 columns text-center">
                  <h1 class="mrg-M title title-XL">Forgot Your Password?</h1>
                  <div class="mrg-M std-txt std-txt-M color-nightsky">Enter the email address for your jcp.com account and we'll send you instructions to change your password.</div>
                </div>
                <div class="form-float-label">
                  <input class="form-control email-text input-text" id="email" type="text" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div class="text-center">
                  <a href="javascript:void();" role="button" class="btn btn-primary btn-M mrg-M col12 color-white">Send Email</a>
                  {/* <a href="javascript:void();" role="button" class="btn btn-disabled btn-M mrg-M col12 color-white">Send Email</a> */}
                </div>
                <div class="mrg-M std-txt std-txt-M color-nightsky text-center">Having trouble accessing your account?
If you’re unable to change your password, please call our Customer Care team at 1-800-322-1189</div>
              </div>
            </div>
          </div>
        </div>
        {/* sidepanel forgot password ends*/}


        {/* sidepanel create account starts*/}
        <div class="side-panel slide-panel-from-right" id="createAccount">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <span class="back-icon" dangerouslySetInnerHTML={{ __html: arrowleftImage }} />
              <h3 class="title title-L back-to-sign" id="siginHome">Back to Sign In</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container input-form">
              <div class="sm12 md12 columns row">
                <div class="sm12 md12 columns row text-center">
                  <h1 class="mrg-S title title-XL">Create Account</h1>
                  <div class="mrg-M std-txt std-txt-M color-nightsky">Save more and earn rewards</div>
                </div>
                <div class="form-float-label">
                  <input class="form-control input-text" type="text" id="fname" placeholder="First Name" />
                  <label htmlFor="fname">First Name</label>
                </div>
                <div class="form-float-label">
                  <input class="form-control input-text" type="text" id="lname" placeholder="Last Name" />
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div class="form-float-label">
                  <input class="form-control input-text phone-number" id="phonenumber" type="text" maxLength="14" placeholder="Phone Number" />
                  <label htmlFor="phonenumber">Phone Number</label>
                </div>
                <div class="form-float-label">
                  <input class="form-control email-text input-text" id="email" type="text" placeholder="Email " />
                  <label htmlFor="email">Email</label>
                </div>
                <div class="form-float-label password-form">
                  <input class="form-control input-text" id="password2" maxLength="16" type="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                  <a href="javascript:void(0);" data-textid="password2" class="show-pwd title-S">show</a>
                </div>
                <div class="text-center" >
                  <a href="javascript:void();" role="button" class="btn btn-primary btn-M mrg-M col12 color-white" id="createmyAccount">Create Account</a>
                </div>
                <div class="mrg-M std-txt std-txt-XS color-nightsky text-center md12 sm12 mrg-top-S">
                  By creating an account, I agree to the Rewards <a href="javascript:void(0);">Terms & Conditions</a> and to receive email offers at the email address I provided.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidepanel create account ends*/}


        {/* sidepanel Signout starts*/}
        <div class="side-panel slide-panel-from-right" id="signOut">
          <div class="side-panel-container my-account-sidepanel">
            <header class="side-panel-header">
              <h3 class="title title-L">Sign In</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a>
            </header>
            <div class="side-panel-content my-account-container input-form">
              <div class="sm12 md12 columns row">
                <div class="my-account-top text-center">
                  <h1 class="title title-XL">You’re Signed Out</h1>
                  <p class="my-account-welcome">In order to access your account information, you will need to sign in again.</p>
                </div>
                <div class="form-float-label">
                  <input class="form-control email-text input-text" id="email" type="text" placeholder="Email " />
                  <label htmlFor="email">Email</label>
                </div>
                <div class="form-float-label password-form">
                  <input class="form-control input-text" id="password1" maxLength="16" type="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                  <a href="javascript:void(0);" data-textid="password1" class="show-pwd title-S">show</a>
                </div>
                <label class="checkbox fl-left">
                  <input type="checkbox" defaultChecked="true" /> <span>Remember Me</span>
                </label>
                <div class="fl-right std-txt std-txt-M mrg-L">
                  <a href="javascript:void(0);" id="siginForgotPswd" >Forgot Password?</a>
                </div>
                <div class="text-center">
                  <a href="javascript:void();" role="button" class="btn btn-primary btn-M mrg-M col12" id="siginmyAccount">Sign In</a>
                </div>
                <p class="or-split text-center">
                  <span>or</span>
                </p>
                <div class="text-center">
                  <a href="javascript:void();" id="siginCreateAct" role="button" class="btn btn-secondary btn-M mrg-M col12" >Create Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidepanel Signout ends*/}


      </div>
    );
  }
}

export default Header;