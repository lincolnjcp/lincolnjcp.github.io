import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ExpandCollapse from '../expand-collapse/expand-collapse'
import Wells from '../wells/wells';
import RecommendationZone from '../recommendation-zone/recommendation-zone';
import Carousel from '../carousel/carousel'

import $ from 'jquery'

const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');
const mailImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/mail.svg');
const rulerImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/ruler.svg');
const facebookfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/pinterest-min.svg');
const twitterfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/twitter-fill.svg');
const pinterestfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/pinterest-fill.svg');

class Pdp extends Component {

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

        $(function () {
            $(".form-select1 select").on('change', function() {
                if ($(this).val() != " ") {
                    $(".form-select1 .select-label").removeClass("hide");
                    $(".form-select1 select").addClass("select-selected");
                    
                } else {
                    $(".form-select1 .select-label").addClass("hide");
                    $(".form-select1 select").removeClass("select-selected");
                }
            });
        });

        $(function () {
            $(".form-select2 select").on('change', function() {
                if ($(this).val() != " ") {
                    $(".form-select2 .select-label").removeClass("hide");
                    $(".form-select2 select").addClass("select-selected");
                    
                } else {
                    $(".form-select2 .select-label").addClass("hide");
                    $(".form-select2 select").removeClass("select-selected");
                }
            });
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <Header />
                    <div className="row">
                        <div className="product-title-block mrg-L mrg-top-L">
                            <div className="breadcrumbs-block">
                                <ul className="breadcrumbs">
                                    <li><a href="#">JCPenney</a></li>
                                    <li><a href="#">Womens</a></li>
                                    <li>Tops</li>
                                </ul>
                            </div>
                            <h1 className="title title-L mrg-top-S mrg-S">St. John's Bay Long Sleeve V Neck Pullover Sweater</h1>
                            <div className="lg12 sm12 md12 xl12 nopad">
                                <div className="star-preview-col fl-left sm12 md6 lg6 xl6 nopad">
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
                                            <a href="javascript:void();" className="rating-count">99,999</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md6 sm12 lg6 xl6 nopad social-share">
                                    <span className="icon " dangerouslySetInnerHTML={{ __html: mailImage }} />
                                    <span className="icon " dangerouslySetInnerHTML={{ __html: facebookfillImage }} />
                                    <span className="icon " dangerouslySetInnerHTML={{ __html: twitterfillImage }} />
                                    <span className="icon " dangerouslySetInnerHTML={{ __html: pinterestfillImage }} />
                                </div>
                            </div>
                        </div>
                        <div className="md12 sm12 lg6 xl6 nopad">
                            <Carousel />
                        </div>
                        <div className="md12 sm12 lg6 xl6">
                            <div className="pdp-pricing mrg-M">
                                <div className="price-card">
                                    <div className="price price-promo mrg-XS color-penneyred">LARGE MARKETING LABEL</div>
                                    <div className="price price-M mrg-rght-XS mrg-top-S mrg-M">$59.99
                                <span className="price price-note-M mrg-lft-XS"> sale </span>
                                        <span className="price price-note-M mrg-lft-S color-slate std-txt">was $89.99</span><span className="price price-note-M mrg-lft-M color-slate std-txt">20% off</span>
                                    </div>
                                    <div className="price price-M mrg-rght-XS flag flag-price mrg-XS">$40.99</div>
                                    <span className="price price-note-M color-penneyred">Extra 20% off</span>
                                    <div className="price">
                                        <span className="price price-note-M color-penneyred">with coupon code: FUNDEAL </span>
                                        <span className="std-txt std-txt-XS"><a href="javascript:void(0);">details</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="fit-predictor mrg-L">
                                <span className="title tile-M">Fit Predictor </span>
                                <a href="javascript:void(0);">calculate your size </a>
                                {/* <span className="icon " dangerouslySetInnerHTML={{ __html: rulerImage }} /> */}
                                <a href="javascript:void(0);"> size chart</a>
                            </div>
                            <div className="sku-selector sm12 md12 lg12 xl12 nopad">
                                <div className="select-form sm12 md6 lg6 xl6 nopad">
                                    <div className="select">
                                        <div className="form-float-label form-select1">
                                            <select className="form-control custom-select">
                                                <option value=' '>Size Range</option>
                                                <option value='1'>Small</option>
                                                <option value='2'>Medium</option>
                                                <option value='3'>Large</option>
                                                <option value='4'>X Large</option>
                                            </select>
                                            <span className="select-label hide">Size Range</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="select-form sm12 md6 lg6 xl6">
                                    <div className="select">
                                        <div className="form-float-label form-select2">
                                            <select className="form-control custom-select">
                                                <option value=' '>Size</option>
                                                <option value='1'>Small</option>
                                                <option value='2'>Medium</option>
                                                <option value='3'>Large</option>
                                                <option value='4'>X Large</option>
                                            </select>
                                            <span className="select-label hide">Size</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ExpandCollapse />
                        <RecommendationZone />
                        <RecommendationZone />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Pdp;