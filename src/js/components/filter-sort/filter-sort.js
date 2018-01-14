import React, { Component } from 'react';
import $ from 'jquery';

const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');

class FilterSort extends Component {
  productCardRecommendations(productInfo) {
    return (
      <div className="product-card product-card-recommendation">

        {(() => {
          if (productInfo.thumb) {
            return (
              <div className="product-card-thumbnail mrg-S">
                <a href="javascript:void(0)">
                  <img src={productInfo.thumb} alt="" />
                </a>
              </div>
            )
          }
        })()}

        {(() => {
          if (productInfo.promo) {
            return (
              <div className="price price-promo-S mrg-XS color-penneyred">
                {productInfo.promo}
              </div>
            )
          }
        })()}

        <div className="product-card-price">
          {(() => {
            if (productInfo.priceHighlight === true) {
              return (
                <div className="product-card-price-value">
                  <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                    <div className="price price-XS color-white">{productInfo.price}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="product-card-price-value price price-XS mrg-rght-XS">
                  {productInfo.price}
                </div>
              )
            }
          })()}


          {(() => {
            if (productInfo.priceRestriction) {
              return (
                <div className="product-card-note price price-note color-penneyred">
                  {productInfo.priceRestriction}
                </div>
              )
            }
          })()}

        </div>

        {(() => {
          if (productInfo.priceRegular) {
            return (
              <div className="product-card-note price price-note color-slate font-body">
                {productInfo.priceRegular}
              </div>
            )
          }
        })()}



        <a href="javascript:void(0)" className="product-card-name std-txt std-txt-S color-nightsky">
          {productInfo.name}
        </a>

        <div className="ratings-and-reviews">
          <div className="ratings-and-reviews-stars mrg-rght-XS">
            <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
          </div>
          <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
            99,999
        </div>

        </div>

      </div>
    )
  }



  productCardGalleryPanesLarge(productInfo) {
    return (
      <div className="product-card product-card-pane-L">

        {(() => {
          if (productInfo.thumb) {
            return (
              <div className="product-card-thumbnail">
                <a href="javascript:void(0)">
                  <img src={productInfo.thumb} alt="" />
                </a>
                {(() => {
                  if (productInfo.flag) {
                    return (
                      <div class="flag flag-info std-txt std-txt-XS">
                        {productInfo.flag}
                      </div>
                    )
                  }
                })()}
                <div className="icon favorite-icon" dangerouslySetInnerHTML={{ __html: heartlineImage }}></div>
              </div>
            )
          }
        })()}

        <div className="color-swatches-block">
          <div className="color-swatches-list">
            <div className="color-swatches-medium">
              <ul className="list-product-colors-container">
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li className="swatches-list-link">
                  <a href="javascript:void(0)" className="std-txt std-txt-S color-nightsky">
                    +23
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {(() => {
          if (productInfo.promo) {
            return (
              <div className="price price-promo mrg-XS color-penneyred">
                {productInfo.promo}
              </div>
            )
          }
        })()}

        <div className="product-card-price">
          {(() => {
            if (productInfo.priceHighlight === true) {
              return (
                <div className="product-card-price-value">
                  <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                    <div className="price price-S color-white">{productInfo.price}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="product-card-price-value price price-S mrg-rght-XS">
                  {productInfo.price}
                </div>
              )
            }
          })()}


          {(() => {
            if (productInfo.priceRestriction) {
              return (
                <div className="product-card-note price price-note color-penneyred">
                  {productInfo.priceRestriction}
                </div>
              )
            }
          })()}

        </div>

        {(() => {
          if (productInfo.priceRegular) {
            return (
              <div className="product-card-note price price-note color-slate font-body">
                {productInfo.priceRegular}
              </div>
            )
          }
        })()}



        <a href="javascript:void(0)" className="product-card-name std-txt std-txt-S color-nightsky">
          {productInfo.name}
        </a>

        <div className="ratings-and-reviews">
          <div className="ratings-and-reviews-stars mrg-rght-XS">
            <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
          </div>
          <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
            99,999
        </div>

        </div>

      </div>
    )
  }


  componentDidMount() {

    (function () {
      var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

      var skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
      }

      var setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
      };
      setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
          case "true":
            setAriaAttr(el1, 'aria-expanded', 'true');
            setAriaAttr(el2, 'aria-hidden', 'false');
            break;
          case "false":
            setAriaAttr(el1, 'aria-expanded', 'false');
            setAriaAttr(el2, 'aria-hidden', 'true');
            break;
          default:
            break;
        }
      };
      //function
      switchAccordion = function (e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
          setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
          setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
      };
      for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
          accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
          accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
      }
    })();


    $(".listIcon").on("click", function () {
      $(this).toggleClass("gridIcon");
    });

    $('.show').on('click', function (e) {
      $('.show').toggleClass("less");
    });

    $('.side-panel-btn').unbind('click').on('click', function (event) {
      event.preventDefault();
      var parent = $($(this).attr('data-target'));
      parent.addClass('is-visible');
    });

    $('.side-panel').unbind('click').on('click', function (event) {
      if ($(event.target).is('.side-panel')) {
        $(this).removeClass('is-visible');
      } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close')) {
        $(event.target).closest('.side-panel').removeClass('is-visible');
      }
      event.preventDefault();
    });

    $('.dropdown-button').on('click', function () {

      var parent_box = $(this).closest('.dropdown-menu-block');
      parent_box.siblings().find('.dropdown-menu').hide();
      parent_box.find('.dropdown-menu').slideToggle(200, 'swing');

      $(this).toggleClass("arrow-down");

    });
  }

  render() {
    return (

      <div>
        <div className="columns">
          <h1 className="title title-XXL mrg-XL sm12">Filter & Sort</h1><br /><br />


          <div className="filter-left-block fl-left show-forllarge-only show-for-xlarge-only">
            <h2 className="title title-XL title title-XL mrg-XXL">Filter By</h2>
            <div className="column">
              <div className="input-group">

                <label className="checkbox mrg-M">
                  <input type="checkbox" /> <span>Online Only</span> <span className="fl-right std-txt std-txt-S">(55)</span>
                </label>

                <label className="checkbox mrg-M">
                  <input type="checkbox" defaultChecked="true" /> <span><p className="title title-M"><span className="color-penneyred">FREE</span> Same Day Pickup</p></span><span className="fl-right std-txt std-txt-S">(55)</span>
                </label>
              </div>
              <div className="accordion-block filter-accordion">
                <div className="accordion">
                  <dl>
                    <dt>
                      <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul className="mrg-lft-M">
                        <div className="search-type">
                          <input type="text" placeholder="Search Item Type" />
                        </div>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt>
                      <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul className="mrg-lft-M">
                        <div className="search-type">
                          <input type="text" placeholder="Search Item Type" />
                        </div>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt>
                      <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul className="mrg-lft-M">
                        <div className="search-type">
                          <input type="text" placeholder="Search Item Type" />
                        </div>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt>
                      <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul className="mrg-lft-M">
                        <div className="search-type">
                          <input type="text" placeholder="Search Item Type" />
                        </div>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li className="dropdown-list">
                          <label className="checkbox mrg-M">
                            <input type="checkbox" defaultChecked="" />
                            <span className="left">label</span>
                            <span className="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* for mobile and tablet only */}

          <div className="side-panel from-left" id="leftPanel">
            <div className="side-panel-container">
              <header className="side-panel-header">
                <h3 className="title title-L color-white">Panel</h3>
                <a href="javascript:void(0);" className="side-panel-close">
                  <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
                </a> </header>
              <div className="side-panel-content">
                <div className="filter-left-block">
                  <h2 className="title title-XL title title-XL mrg-XXL">Filter By</h2>
                  <div className="column">
                    <div className="input-group">

                      <label className="checkbox mrg-M">
                        <input type="checkbox" /> <span>Online Only</span> <span className="fl-right std-txt std-txt-S">(55)</span>
                      </label>

                      <label className="checkbox mrg-M">
                        <input type="checkbox" defaultChecked="true" /> <span><p className="title title-M"><span className="color-penneyred">FREE</span> Same Day Pickup</p></span><span className="fl-right std-txt std-txt-S">(55)</span>
                      </label>
                    </div>
                    <div className="accordion-block filter-accordion">
                      <div className="accordion">
                        <dl>
                          <dt>
                            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul className="mrg-lft-M">
                            <div className="lg12 xl12 md12 sm12 mrg-L filter-tags nopad-sm nopad-md">
                              <div className="tags std-txt std-txt-S">
                              <span className="tag-title">Filter</span><a href="javascript:void(0)" className="color-white-svg icon nopad-sm nopad-md" dangerouslySetInnerHTML={{ __html: closeImage }} />
                              </div>
                              <div className="tags std-txt std-txt-S">
                                <span className="tag-title">Filter</span><a href="javascript:void(0)" className="color-white-svg icon nopad-sm nopad-md" dangerouslySetInnerHTML={{ __html: closeImage }} />
                              </div>
                            </div>
                              <div className="search-type">
                                <input type="text" placeholder="Search Item Type" />
                              </div>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M" >
                                  <input type="checkbox" defaultChecked="true" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="true" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt>
                            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul className="mrg-lft-M">
                              <div className="search-type">
                                <input type="text" placeholder="Search Item Type" />
                              </div>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt>
                            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul className="mrg-lft-M">
                              <div className="search-type">
                                <input type="text" placeholder="Search Item Type" />
                              </div>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt>
                            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul className="mrg-lft-M">
                              <div className="search-type">
                                <input type="text" placeholder="Search Item Type" />
                              </div>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li className="dropdown-list">
                                <label className="checkbox mrg-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="left">label</span>
                                  <span className="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>

                    <div className="filter-button-block">
                      <div className="md6 sm6">
                        <a href="javascript:void();" className="btn btn-primary btn-M">Apply</a>
                      </div>
                      <div className="md6 sm6">
                        <a href="javascript:void();" className="btn btn-secondary btn-M">Clear All</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-gallery-block fl-left md12 sm12">

            <div className="pos-rel fl-left hide-for-large-only hide-for-xlarge-only md12 mrg-S">
              <div className="fl-left dropdown-menu-block">
                <a className="dropdown-button title-S no-dropdown mrg-rght-M side-panel-btn" data-target="#leftPanel">Filter by <span class="sortby std-txt std-txt-S">(2)</span></a>
              </div>

              <div className="fl-left dropdown-menu-block">
                <a className="dropdown-button title-S mrg-rght-M">Item Type <span className="arrow"></span></a>
                <div className="dropdown-menu">
                  <div className="tooltip tooltip-top-center">
                    <span>
                      <ul className="dropdown-sort">
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Featured</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>

              <div className="fl-left dropdown-menu-block">
                <a className="dropdown-button title-S mrg-rght-M">Features <span className="arrow"></span></a>
                <div className="dropdown-menu">
                  <div className="tooltip tooltip-top-center">
                    <span>
                      <ul className="dropdown-sort">
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Featured</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>

              <div className="fl-right dropdown-menu-block">
                <a className="dropdown-button title-S">Sort by: <span class="sortby">Best Match</span><span className="arrow"></span></a>
                <div className="dropdown-menu">
                  <div className="tooltip tooltip-top-right">
                    <span>
                      <ul className="dropdown-sort">
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Featured</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                        </li>
                        <li className="dropdown-list">
                          <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row lg12 xl12 md12 sm12 nopad-sm">
              <div className="store-pickup column fl-left sm10 md10 lg9 xl9">
                <label className="checkbox pos-rel">
                  <input type="checkbox" /> <span><p className="title title-M"><span className="color-penneyred">FREE</span> Same Day Pickup at <a href="#"> Stonebriar Mall</a></p></span><span className="arrow"></span>
                </label>
              </div>

              <div className="dropdown-menu-block column md2 sm2 lg3 xl3 fl-right mrg-M">
                <div class="listIcon fl-right"></div>
                <div className="pos-rel fl-right hide-for-medium-only hide-for-small-only">
                  <a className="dropdown-button title-S">Sort by: <span class="sortby">Featured</span><span className="arrow"></span></a>
                  <div className="dropdown-menu">
                    <div className="tooltip tooltip-top-right">
                      <span>
                        <ul className="dropdown-sort">
                          <li className="dropdown-list">
                            <a href="javascript:void(0)" className="sort-list">Featured</a>
                          </li>
                          <li className="dropdown-list">
                            <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                          </li>
                          <li className="dropdown-list">
                            <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                          </li>
                          <li className="dropdown-list">
                            <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg12 xl12 md12 sm12 mrg-L filter-tags hide-for-medium-only hide-for-small-only">
              <div className="tags std-txt std-txt-S">
                <span className="tag-title">Gender: </span><span>Mens</span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </div>
              <div className="tags std-txt std-txt-S">
                <span className="tag-title">Item Type: </span><span>Suit Jackets</span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </div>
              <div className="tags std-txt std-txt-S">
                <span className="tag-title">Gender: </span><span>Mens</span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </div>
              <a className="tag-clear std-txt std-txt-S fl-left" href="javascript:void(0)">Clear All</a>
            </div>

            <div className="row">
              <div className="columns">
                <div className="product-card-wrapper mrg-M">
                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $39.99   20% off'
                  })}

                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $60.99'
                  })}
                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $39.99   20% off'
                  })}

                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $60.99'
                  })}
                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $39.99   20% off'
                  })}

                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $60.99'
                  })}
                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $39.99   20% off'
                  })}

                  {this.productCardGalleryPanesLarge({
                    name: "Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                    flag: 'Low Stock',
                    promo: 'GREEN MONDAL DEAL!',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $60.99'
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="side-panel from-left" id="leftPanel">
          <div className="side-panel-container">
            <header className="side-panel-header">
              <h3 className="title title-L color-white">Panel</h3>
              <a href="javascript:void(0);" className="side-panel-close">
                <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a> </header>
            <div className="side-panel-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor eget scelerisque lobortis. Nulla metus nisi, commodo et suscipit ac, venenatis ut magna. Nunc in venenatis mi, vitae placerat odio. Aenean est tellus, mollis sed tempus vel, egestas non urna. Suspendisse fringilla neque tincidunt, molestie diam non, facilisis ante. Quisque mattis commodo arcu vehicula lobortis. Cras lorem mauris, molestie ac gravida in, condimentum at enim. Aenean elementum, mauris ac convallis tempus, erat eros aliquam quam, ac sodales ligula mauris nec neque. Aliquam ut turpis lectus. Cras eget felis odio.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="sm12 columns">
            <hr />
            <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong> <br />
              Latest update: 04/05/2017</p>
          </div>
        </div>
      </div>


    );
  }
}

export default FilterSort;