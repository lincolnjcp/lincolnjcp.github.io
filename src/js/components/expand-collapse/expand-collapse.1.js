import React, { Component } from 'react';
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');
class ExpandCollapse extends Component {

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
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1 className="title title-XL mrg-XXL">Expand / Collapse</h1>
          <div className="xl4 lg4 md6 sm12">
            <h2 className="title title-L">Accordions: Basic</h2>
            <div className="accordion-block filter-accordion">
              <div className="accordion">
                <dl>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Accordion Title</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul className="mrg-lft-M">
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M" >
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt>
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M js-accordionTrigger">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <br /><br /><br />


          <div className="xl4 lg4 md6 sm12">
            <h2 className="title title-L">Accordions: Alternate</h2>
            <div className="accordion-block filter-accordion">
              <div className="accordion">
                <dl>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M accordionTitle-right">Accordion Title</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul className="mrg-lft-M">
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M" >
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M accordionTitle-right">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M accordionTitle-right accordionTitle-right">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M accordionTitle-right">Accordion Title</a>
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
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                      <li className="dropdown-list">
                        <label className="checkbox mrg-M">
                          <input type="checkbox" defaultChecked="" />
                          <span className="left">label</span>
                          <span className="fl-right">(1,008)</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <br /><br /><br />


          <div className="xl7 lg7 md12 sm12">
            <h2 className="title title-L">Accordions: PDP Q&A</h2>
            <div className="accordion-block filter-accordion accordion-block-answer">
              <div className="accordion">
                <dl>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">What is the air velocity of an unladen swallow? <span className="std-txt std-txt-S fl-right">9 Answers</span></a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <p className="title title-S">This is the detail that the customer enters for the question. It can be long or short, but is usually just one or two lines long, depending on screen size, etc. Answers would show up below this.</p>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Luke, who is your father? <span className="std-txt std-txt-S fl-right">9 Answers</span></a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <p className="title title-S">This is the detail that the customer enters for the question. It can be long or short, but is usually just one or two lines long, depending on screen size, etc. Answers would show up below this.</p>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">How much wood could a woodchuck chuck? <span className="std-txt std-txt-S fl-right">9 Answers</span></a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <p className="title title-S">This is the detail that the customer enters for the question. It can be long or short, but is usually just one or two lines long, depending on screen size, etc. Answers would show up below this.</p>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">What does this look like when it is open? <span className="std-txt std-txt-S fl-right">9 Answers</span></a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <p className="title title-S">This is the detail that the customer enters for the question. It can be long or short, but is usually just one or two lines long, depending on screen size, etc. Answers would show up below this.</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <br /><br /><br />


          <div className="xl4 lg4 md6 sm12">
            <h2 className="title title-L">Accordions: Subcategory Menu (Tablet/Mobile)</h2>
            <div className="accordion-block filter-accordion">
              <div className="accordion">
                <dl>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Holiday</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M title title-M">Furniture & Mattresses</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Home Decor</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Kitchen & Dining</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Window</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <br /><br /><br />


          <div className="xl4 lg4 md6 sm12">
            <h2 className="title title-L">Accordions: PDP Product Details (Tablet/Mobile)</h2>
            <div className="accordion-block filter-accordion">
              <div className="accordion">
                <dl>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Product Specifications</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Helpful Guides</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>

                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Reviews
                    <div className="star-preview-col fl-right">
                       <ul className="star-ratings-S">
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-half">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                    </li>
                                    <li className="star-ratings star-rating-empty">
                                        <span className="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings">
                                        <a href="javascript:void();" className="rating-count">47</a>
                                    </li>
                                </ul>
                      </div>
                    </a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Content here</a></li>
                      <li><a href="javascript:void();">More content here</a></li>
                      <li><a href="javascript:void();">Even more content here</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Questions & Answers</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                  <dt className="js-accordionTrigger">
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle title title-M">Shipping & Returns</a>
                  </dt>
                  <dd className="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                    <ul>
                      <li><a href="javascript:void();">Returns</a></li>
                      <li><a href="javascript:void();">Shipping information</a></li>
                      <li><a href="javascript:void();">Rebates</a></li>
                      <li><a href="javascript:void();">Same Day Pickup</a></li>
                      <li><a href="javascript:void();">My JCP.com Account</a></li>
                      <li><a href="javascript:void();">Track My Order</a></li>
                      <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandCollapse;