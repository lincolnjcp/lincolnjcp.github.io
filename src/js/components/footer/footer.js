import React, { Component } from 'react';

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

    }
    render() {
        return (
            <div>
                <div class="">
                    <footer class="footer-block">
                        <div class="signup-block md10 lg8 xl8 sm12">
                            <em class="mrg-S title-S">Signup for text* or email alerts and offers</em>
                            <div class="position-rel input-form">
                                <div class="form-float-label">
                                    <input type="tel" id="signup" name="signup" placeholder="Phone Number or Email..." class="input-text placeholder-text" />
                                    <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn">Sign Up</a>
                                    <a href="javascript:void();" class="footer-terms">*Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                        <div class="contact-list md7 lg6 xl6 sm12">
                            <ul>
                                <li>
                                    <span class="icon" dangerouslySetInnerHTML={{ __html: devicephoneImage }} />
                                    <a href="javascript:void();">Give us a call </a>
                                </li>
                                <li>
                                    <span class="icon" dangerouslySetInnerHTML={{ __html: twitterfillImage }} />
                                    <a href="javascript:void();">Ask us on Twitter </a>
                                </li>
                                <li>
                                    <span class="icon" dangerouslySetInnerHTML={{ __html: chatfillImage }} />
                                    <a href="javascript:void();">Chat with us </a>
                                </li>
                            </ul>
                        </div>
                        <div class="social-connect md12 lg6 xl6 sm12">
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

                        <div class="accordion-block footer-accordion show-for-small-only show-for-medium-only">
                            <div class="accordion">
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

                        <div class="footer-links md12 lg12 xl12 sm12 show-for-large-only show-for-xlarge-only">
                            <div class="footer-links-title">
                                <h5 class="mrg-S title-S">JCPenney Rewards & Credit Card</h5>
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">Enroll in Rewards</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Sign In to Rewards</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">JCPenney Credit Card</a></li>
                                </ul>
                            </div>

                            <div class="footer-links-title">
                                <h5 class="mrg-S title-S">Customer Service</h5>
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">Returns</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Shipping information</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Rebates</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Same Day Pickup</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">My JCP.com Account</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Track My Order</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Servicio Al Cliente</a></li>
                                </ul>
                            </div>

                            <div class="footer-links-title">
                                <h5 class="mrg-S title-S">Store Services</h5>
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">JCP Salon</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Sephora</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">JCP Portraits</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">JCP Optical</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Gift Registry</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">JCP Custom Window</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">View All Store Services</a></li>
                                </ul>
                            </div>

                            <div class="footer-links-title">
                                <h5 class="mrg-S title-S">More Ways to Shop</h5>
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">See our ads</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Coupons</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Recommendations</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Gift Cards</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">International Shopping</a></li>
                                </ul>
                            </div>

                            <div class="footer-links-title">
                                <h5 class="mrg-S title-S">Corporate Overview</h5>
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">Careers</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Company Info</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Community</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Media</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Investors</a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="footer-bottom-links md12 lg12 xl12 sm12">
                            <div class="footer-jcp-card md6 lg4 xl4 sm12">
                                <div class="card-icon">
                                    <span class="icon" dangerouslySetInnerHTML={{ __html: cardJCPRed }} />
                                </div>
                                <div class="card-links">
                                    <h3>JCPenney Credit Card</h3>
                                    <ul class="list list-links mrg-S">
                                        <li class="title-txt title-XS"><a href="javascript:void();">Pay Bill </a></li>
                                        <li class="title-txt title-XS"><a href="javascript:void();">Check Balance </a></li>
                                        <li class="title-txt title-XS"><a href="javascript:void();">Apply Now </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-legal-links md12 lg8 xl8 sm12 nopad">
                                <ul class="list list-links mrg-S">
                                    <li class="title-txt title-XS"><a href="javascript:void();">Legal</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Recalls</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">AdChoices<img src="/images/global/Adchoices.png" alt="Adchoices" /> </a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">CA Privacy Rts</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">Privacy Policy</a></li>
                                    <li class="title-txt title-XS"><a href="javascript:void();">CA Supply Chain Act</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-copy"> ©JCP Media, Inc. 2017. All Rights Reserved</div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;