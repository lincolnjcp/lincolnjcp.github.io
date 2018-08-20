import React, { Component } from 'react';
import $ from 'jquery';

const devicephoneImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-phone.svg');
const twitterfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/twitter-fill.svg');
const chatfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-fill.svg');
const facebooklineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/facebook-line.svg');
const twitterlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/twitter-line.svg');
const pinterestlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/pinterest-line.svg');
const googlepluslineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/google-plus-line.svg');
const youtubelineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/youtube-line.svg');
const bloglineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/blog-line.svg');
const cardJCPRed = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-red.svg');
const customerserviceImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/customer-service.svg');
class Footer extends Component {

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

    }
    render() {
        return (
            <div>
                {/* <p class="S"><br />
                    <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a><br /><br /><br /><br /><br />
                </p> */}

                <footer class="footer-wrap" data-automation-id="jcp-footer" id="footer">
                    <div class="subscription-wrapper">
                        <ul data-automation-id="footer-block-subscribe" class="container-width col12">
                            <li class="subscription-row">
                                <div data-automation-id="promo-title" class="subs-title std-txt title-S color-nightsky mrg-btm-XS">Signup for text* or email alerts, offers and promotions</div>
                                <form>
                                    <div class="marketing-section" data-automation-id="">
                                        <div class="input-wrapper input-form">
                                            <div class="input-icon">
                                                <input type="tel" id="signup" name="signup" placeholder="Phone Number or Email..." class="input-text placeholder-text" />
                                                <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn">Sign Up</a>
                                            </div>
                                            <a class="cross-bar" href="javascript:void(0)"></a>
                                        </div>
                                    </div>
                                </form>
                            </li>
                            <li class="subscription-terms">
                                <a data-automation-id="privacy-policy" class="std-txt title-XS color-nightsky" href="javascript:void(0)">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div class="help-section mrg-top-L">
                        <div class="help-wrapper">
                            <div data-automation-id="need-help-container" class="help-section-list md8 lg7 sm12">
                                <ul class="help-list">
                                    <li class="xs4 xxs4">
                                        <div class="help-list-block">
                                            <a href="tel:1-800-322-1189" class="help-link">
                                                <span class="icon color-white-svg" dangerouslySetInnerHTML={{ __html: devicephoneImage }} />
                                                <span class="help-description">
                                                    <span>Give us a call </span>
                                                    <span>1-800-322-1189</span>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="xs4 xxs4">
                                        <div class="help-list-block">
                                            <a href="tel:1-800-322-1189" class="help-link">
                                                <span class="icon color-white-svg" dangerouslySetInnerHTML={{ __html: twitterfillImage }} />
                                                <span class="help-description">
                                                    <span>Need help? </span>
                                                    <span>Customer Service</span>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="xs4 xxs4">
                                        <div class="help-list-block">
                                            <a href="tel:1-800-322-1189" class="help-link">
                                                <span class="icon color-white-svg" dangerouslySetInnerHTML={{ __html: customerserviceImage }} />
                                                <span class="help-description">
                                                    <span>Ask us on Twitter </span>
                                                    <span>@askJCP</span>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="social-wrap md4 lg5 color-white sm12">
                                <h5 class="std-txt title-XS color-white dis-inline-block hide-for-medium-down">Connect with us</h5>
                                <div class="social-container color-white-svg dis-inline-block text-right">
                                    <ul>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: facebooklineImage }} /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: twitterlineImage }} /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: pinterestlineImage }} /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: googlepluslineImage }} /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: youtubelineImage }} /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void();"><span class="icon" dangerouslySetInnerHTML={{ __html: bloglineImage }} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <article class="footer-links-block mrg-top-L hide-for-medium-down">
                        <section class="footer-main-links col12">
                            <div class="footer-links">
                                <h5 class="std-txt title-S color-nightsky txt-bold">JCPenney Rewards & Credit Card</h5>
                                <div class="link-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Enroll in Rewards</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Sign In to Rewards</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Sign In to Rewards</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-links">
                                <h5 class="std-txt title-S color-nightsky txt-bold">Customer Service</h5>
                                <div class="link-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Returns</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Shipping Information</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Rebates</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Same Day Pickup</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">My JCP.com Account</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Track My Order</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Servicio Al Cliente</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-links">
                                <h5 class="std-txt title-S color-nightsky txt-bold">Store Services</h5>
                                <div class="link-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">JCP Salon</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Sephora</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">JCP Portraits</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">JCP Optical</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Gift Registry</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">JCP Custom Window</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">View All Store Services</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-links">
                                <h5 class="std-txt title-S color-nightsky txt-bold">More Ways to Shop</h5>
                                <div class="link-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">See our ads</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Coupons</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Recommendations</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Gift Cards</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">International Shopping</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-links">
                                <h5 class="std-txt title-S color-nightsky txt-bold">Corporate Overview</h5>
                                <div class="link-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Careers</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Company Info</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Community</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Media</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Investors</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </article>

                    <div class="accordion-block footer-accordion hide-for-large-up">
                        <div class="accordion nopad">
                            <dl>
                                <dt>
                                    <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger">JCPenney Rewards & Credit Card</a>
                                </dt>
                                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                                    <a href="javascript:void();">Enroll in Rewards</a>
                                    <a href="javascript:void();">Sign In to Rewards</a>
                                    <a href="javascript:void();">JCPenney Credit Card</a>
                                </dd>
                                <dt>
                                    <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" class="accordion-title accordionTitle js-accordionTrigger">Customer Service</a>
                                </dt>
                                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                                    <a href="javascript:void();">Returns</a>
                                    <a href="javascript:void();">Shipping information</a>
                                    <a href="javascript:void();">Rebates</a>
                                    <a href="javascript:void();">Same Day Pickup</a>
                                    <a href="javascript:void();">My JCP.com Account</a>
                                    <a href="javascript:void();">Track My Order</a>
                                    <a href="javascript:void();">Servicio Al Cliente</a>
                                </dd>
                                <dt>
                                    <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" class="accordion-title accordionTitle js-accordionTrigger">Store Services</a>
                                </dt>
                                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                                    <a href="javascript:void();">JCP Salon</a>
                                    <a href="javascript:void();">Sephora</a>
                                    <a href="javascript:void();">JCP Optical</a>
                                    <a href="javascript:void();">Gift Registry</a>
                                    <a href="javascript:void();">JCP Custom Window</a>
                                    <a href="javascript:void();">View All Store Services</a>
                                </dd>
                                <dt>
                                    <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" class="accordion-title accordionTitle js-accordionTrigger">More Ways to Shop</a>
                                </dt>
                                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                                    <a href="javascript:void();">See our ads</a>
                                    <a href="javascript:void();">Coupons</a>
                                    <a href="javascript:void();">Recommendations</a>
                                    <a href="javascript:void();">Gift Cards</a>
                                    <a href="javascript:void();">International Shopping</a>
                                </dd>
                                <dt>
                                    <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" class="accordion-title accordionTitle js-accordionTrigger">Corporate Overview</a>
                                </dt>
                                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                                    <a href="javascript:void();">Careers</a>
                                    <a href="javascript:void();">Company Info</a>
                                    <a href="javascript:void();">Community</a>
                                    <a href="javascript:void();">Media</a>
                                    <a href="javascript:void();">Investors</a>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="footer-bottom-wrap col12">
                        <div class="credit-wrap">
                            <div class="jcp-red-card">
                                <span class="icon dis-inline" dangerouslySetInnerHTML={{ __html: cardJCPRed }} />
                            </div>
                            <ul class="dis-inline-block">
                                <h5 class="std-txt title-S color-nightsky txt-bold">JCPenney Credit Card</h5>
                                <li>Pay Bill</li>
                                <li>Check Balance</li>
                                <li>Apply Now</li>
                            </ul>
                        </div>
                        <div class="privacy-wrap">
                            <ul>
                                <li>Legal</li>
                                <li>Recalls</li>
                                <li>AdChoices</li>
                                <li>CA Privacy Rts</li>
                                <li>Privacy Policy</li>
                                <li>CA Supply Chain Act</li>
                            </ul>
                        </div>
                        <div class="copy-wrap text-center std-txt title-XS md12 color-nightsky">©JCP Media, Inc. 2018. All Rights Reserved</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;