import React, { Component } from 'react';

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
                  <dt>
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle js-accordionTrigger">Accordion Title</a>
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
                  <dt>
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle accordionTitle-right js-accordionTrigger">Accordion Title</a>
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
                  <dt>
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle accordionTitle-right js-accordionTrigger">Accordion Title</a>
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
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle accordionTitle-right accordionTitle-right js-accordionTrigger">Accordion Title</a>
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
                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title accordionTitle accordionTitle-right js-accordionTrigger">Accordion Title</a>
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
        </div>
      </div>
    );
  }
}

export default ExpandCollapse;