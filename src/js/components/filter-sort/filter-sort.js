import React, { Component } from 'react';
import $ from 'jquery';

const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');
const clearImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/clear.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');

class FilterSort extends Component {
  
  componentDidMount() {

    (function () {
      var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('click' in window),
        pointerSupported = ('click' in window);

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

    
    
    function DropDown(el) {
      this.dd = el;
      this.opts = this.dd.find('ul.dropdown > li');
      this.val = [];
      this.index = [];
      this.initEvents();
    }
    DropDown.prototype = {
      initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){

          $(this).toggleClass('active');
          event.stopPropagation();
        });

        obj.opts.children('label').on('click',function(event){
          var opt = $(this).parent(),
            chbox = opt.children('input'),
            val = chbox.val(),
            idx = opt.index();

          ($.inArray(val, obj.val) !== -1) ? obj.val.splice( $.inArray(val, obj.val), 1 ) : obj.val.push( val );
          ($.inArray(idx, obj.index) !== -1) ? obj.index.splice( $.inArray(idx, obj.index), 1 ) : obj.index.push( idx );
        });
      },
      getValue : function() {
        return this.val;
      },
      getIndex : function() {
        return this.index;
      }
    }

    $(function() {

      var dd = new DropDown( $('.menu-dropdown') );

      $(document).click(function() {
        // all dropdowns
        $('.menu-dropdown').removeClass('active');
      });

    });

    $('.menu-dropdown').on('click', function () {
      

    });

  }

  render() {
    return (

      <div>
        <div class="columns">
          <h1 class="title title-XXL mrg-btm-XL sm12">Filter & Sort</h1><br /><br />

          <div class="filter-left-block fl-left show-for-large-only show-for-xlarge-only">
            <h2 class="title title-XL title title-XL mrg-btm-XXL hide-for-small-only hide-for-medium-only">Filter By</h2>
            <div class="column">
              <div class="input-group">

                <label class="checkbox mrg-btm-M">
                  <input type="checkbox" /> <span>Online Only</span> <span class="fl-right std-txt std-txt-M">(55)</span>
                </label>

                <label class="checkbox mrg-btm-M">
                  <input type="checkbox" defaultChecked="true" /> <span><p class="title title-M filter-ellipsis"><span class="color-penneyred">FREE</span> Same Day Pickup</p></span><span class="fl-right std-txt std-txt-M">(55)</span>
                </label>
              </div>
              <div class="accordion-block filter-accordion">
                <div class="accordion">
                  <dl>
                    <dt aria-expanded="false" aria-controls="accordion1">
                      <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul class="mrg-lft-M">
                        <div class="search-type">
                        <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                        </div>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt aria-expanded="false" aria-controls="accordion1" >
                      <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul class="mrg-lft-M">
                        <div class="search-type">
                        <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                        </div>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt aria-expanded="false" aria-controls="accordion1" >
                      <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul class="mrg-lft-M">
                        <div class="search-type">
                        <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                        </div>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                      </ul>
                    </dd>
                    <dt aria-expanded="false" aria-controls="accordion1">
                      <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                    </dt>
                    <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                      <ul class="mrg-lft-M">
                        <div class="search-type">
                        <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                        </div>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M" >
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
                          </label>
                        </li>
                        <li class="dropdown-list">
                          <label class="checkbox mrg-btm-M">
                            <input type="checkbox" defaultChecked="" />
                            <span class="left">label</span>
                            <span class="fl-right std-txt">(1,008)</span>
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

          <div class="side-panel slide-panel-from-left" id="leftPanel">
            <div class="side-panel-container">
              <header class="side-panel-header">
                <h3 class="title title-L color-white">Filter By</h3>
                <a href="javascript:void(0);" class="side-panel-close">
                  <div class="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
                </a> </header>
              <div class="side-panel-content">
                <div class="filter-left-block">
                  <div class="column">
                    <div class="input-group">

                      <label class="checkbox mrg-btm-M">
                        <input type="checkbox" /> <span>Online Only</span> <span class="fl-right std-txt std-txt-M">(55)</span>
                      </label>

                      <label class="checkbox mrg-btm-M">
                        <input type="checkbox" defaultChecked="true" /> <span><p class="title title-M"><span class="color-penneyred">FREE</span> Same Day Pickup</p></span><span class="fl-right std-txt std-txt-M">(55)</span>
                      </label>
                    </div>
                    <div class="accordion-block filter-accordion">
                      <div class="accordion">
                        <dl>
                          <dt aria-expanded="false" aria-controls="accordion1"> 
                            <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul class="mrg-lft-M">
                            <div class="lg12 xl12 md12 sm12 mrg-btm-L filter-tags nopad-sm nopad-md">
                              <div class="tags std-txt std-txt-S">
                              <span class="tag-title">Filter</span><a href="javascript:void(0)" class="icon nopad-sm nopad-md" dangerouslySetInnerHTML={{ __html: clearImage }} />
                              </div>
                              <div class="tags std-txt std-txt-S">
                                <span class="tag-title">Filter</span><a href="javascript:void(0)" class="icon nopad-sm nopad-md" dangerouslySetInnerHTML={{ __html: clearImage }} />
                              </div>
                            </div>
                              <div class="search-type">
                              <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                              </div>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M" >
                                  <input type="checkbox" defaultChecked="true" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="true" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt aria-expanded="false" aria-controls="accordion1">
                            <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul class="mrg-lft-M">
                              <div class="search-type">
                              <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                              </div>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt aria-expanded="false" aria-controls="accordion1">
                            <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul class="mrg-lft-M">
                              <div class="search-type">
                              <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                              </div>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                          <dt aria-expanded="false" aria-controls="accordion1">
                            <a href="#accordion1" class="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
                          </dt>
                          <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                            <ul class="mrg-lft-M">
                              <div class="search-type">
                              <input type="text" id="search" name="focus" placeholder="Search Item Type" required="" class="input-text placeholder-text"/>
                              </div>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M" >
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                              <li class="dropdown-list">
                                <label class="checkbox mrg-btm-M">
                                  <input type="checkbox" defaultChecked="" />
                                  <span class="left">label</span>
                                  <span class="fl-right std-txt">(1,008)</span>
                                </label>
                              </li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>

                    <div class="filter-button-block show-for-medium-only">
                      <div class="md6 sm6 button-left-block">
                        <a href="javascript:void();" class="btn btn-primary btn-M">Apply</a>
                      </div>
                      <div class="md6 sm6 button-right-block">
                        <a href="javascript:void();" class="btn btn-secondary btn-M">Clear All</a>
                      </div>

                    </div>
                    <div class="filter-button-block show-for-small-only">
                      
                      <div class="md6 sm6 button-left-block">
                        <a href="javascript:void();" class="btn btn-secondary btn-M">Clear All</a>
                      </div>
                      <div class="md6 sm6 button-right-block">
                        <a href="javascript:void();" class="btn btn-primary btn-M">Apply</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-gallery-block fl-left md12 sm12 lg9">

            <div class="pos-rel fl-left hide-for-large-only hide-for-xlarge-only md12 mrg-btm-S">
              <div class="fl-left dropdown-menu-block">
                <a class="dropdown-button title-S no-dropdown side-panel-btn" data-target="#leftPanel">Filter By <span class="sortby std-txt std-txt-S">(2)</span></a>
              </div>

              <div class="fl-left dropdown-menu-block">
                <div class="dropdown-button title-S mrg-rght-M menu-dropdown" id="dropdown">Item Type
              
                  <div class="dropdown tooltip tooltip-top-right padding-left-zero padding-rght-zero">
                    <span>
                    <ul>
                      <li class="dropdown-list">
                        <div class="search-type">
                          <input type="text" placeholder="Search Item Type" />
                        </div>
                      </li>
                            <li class="dropdown-list">
                                <label class="checkbox" >
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
                                    <input type="checkbox" defaultChecked="" />
                                    <span class="left">label</span>
                                    <span class="right-label">(1,008)</span>
                                </label>
                            </li>
                            <li class="dropdown-list">
                                <label class="checkbox">
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

              <div class="fl-left dropdown-menu-block">
                <div class="dropdown-button title-S mrg-rght-M menu-dropdown" id="dropdown">Features
                  <div class="dropdown tooltip tooltip-top-left padding-left-zero padding-rght-zero">
                    <span>
                      <ul class="dropdown-sort">
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Featured</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Best Sellers</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">New Arrivals</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Price High to Low</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>

              <div class="fl-right dropdown-menu-block">

              <div class="dropdown-button title-S mrg-rght-M menu-dropdown dropdown-M" id="dropdown">Sort by:<span class="sortby"> Best Match</span>
                  <div class="dropdown tooltip tooltip-top-right padding-left-zero padding-rght-zero">
                    <span>
                      <ul class="dropdown-sort">
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Featured</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Best Sellers</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">New Arrivals</a>
                        </li>
                        <li class="dropdown-list">
                          <a href="javascript:void(0)" class="sort-list">Price High to Low</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="row lg12 xl12 md12 sm12 nopad-sm color-lightgrey-bg filter-store-pick">
              <div class="store-pickup pos-rel column fl-left sm10 md10 lg8 xl9">
                <label class="checkbox">
                  <input type="checkbox" /> <span><p class="std-txt color-nightsky"><span class="color-penneyred">FREE</span> Same Day Pickup at <a href="#"> Stonebriar Mall</a></p></span>
                </label>
                <span class="arrow"></span>
              </div>

              <div class="listIcon fl-right mrg-top-S"></div>
              <div class="dropdown-menu-block column mrg-top-S mrg-rght-S hide-for-medium-only hide-for-small-only fl-right">
                <div class="pos-rel fl-left">
                    <div class="dropdown-button title-S mrg-rght-M menu-dropdown" id="dropdown">Sort by: <span class="sortby">Featured</span>
                      <div class="dropdown tooltip tooltip-top-right padding-left-zero padding-rght-zero">
                        <span>
                          <ul class="dropdown-sort">
                              <li class="dropdown-list">
                                  <a href="javascript:void(0)" class="sort-list">Featured</a>
                              </li>
                              <li class="dropdown-list">
                                  <a href="javascript:void(0)" class="sort-list">Best Sellers</a>
                              </li>
                              <li class="dropdown-list">
                                  <a href="javascript:void(0)" class="sort-list">New Arrivals</a>
                              </li>
                              <li class="dropdown-list">
                                  <a href="javascript:void(0)" class="sort-list">Price High to Low</a>
                              </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="lg12 xl12 md12 sm12 filter-tags hide-for-medium-only hide-for-small-only nopad">
              <div class="tags std-txt std-txt-S mrg-top-M">
                <span class="tag-title">Gender: </span><span class="tag-item">Mens</span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div class="tags std-txt std-txt-S mrg-top-M">
                <span class="tag-title">Item Type: </span><span class="tag-item">Suit Jackets</span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div class="tags std-txt std-txt-S mrg-top-M">
                <span class="tag-title">Gender: </span>
                <span class="tag-item">
               <span class="filter-color-swatches" />Grey
                  
               
                </span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div class="tags std-txt std-txt-S mrg-top-M star-preview-col">
                <span class="tag-title">Rating: </span>
                <span class="tag-item">
                <ul class="star-ratings-S">
                    <li class="star-ratings start-ratings-full">
                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                    </li>
                    <li class="star-ratings start-ratings-full">
                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                    </li>
                    <li class="star-ratings start-ratings-full">
                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                    </li>
                    <li class="star-ratings start-ratings-half">
                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                    </li>
                    <li class="star-ratings star-rating-empty">
                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                    </li>
                </ul>
                
                </span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <a class="tag-clear std-txt std-txt-S fl-left mrg-top-L" href="javascript:void(0)">Clear All</a>
            </div>

            <div class="row">
              <div class="columns">
              <div class="product-card-wrapper mrg-btm-M">
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>

        <div class="side-panel slide-panel-from-left" id="leftPanel">
          <div class="side-panel-container">
            <header class="side-panel-header">
              <h3 class="title title-L color-white">Filter by</h3>
              <a href="javascript:void(0);" class="side-panel-close">
                <div class="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
              </a> </header>
            <div class="side-panel-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor eget scelerisque lobortis. Nulla metus nisi, commodo et suscipit ac, venenatis ut magna. Nunc in venenatis mi, vitae placerat odio. Aenean est tellus, mollis sed tempus vel, egestas non urna. Suspendisse fringilla neque tincidunt, molestie diam non, facilisis ante. Quisque mattis commodo arcu vehicula lobortis. Cras lorem mauris, molestie ac gravida in, condimentum at enim. Aenean elementum, mauris ac convallis tempus, erat eros aliquam quam, ac sodales ligula mauris nec neque. Aliquam ut turpis lectus. Cras eget felis odio.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="sm12 columns">
            <hr />
            <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong> <br />
              Latest update: 04/05/2017</p>
          </div>
        </div>
      </div>


    );
  }
}

export default FilterSort;