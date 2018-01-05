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

class Footer extends Component {

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div className="row">
                    <footer className="footer-block">
                        <div className="signup-block md10 lg8 xl8 sm12">
                            <label className="signup-label">Signup for text* or email alerts and offers</label>
                            <div class="position-rel input-form">
                                <div class="css-float-label">
                                    <input type="tel" id="signup" name="signup" placeholder="Phone Number or Email..." maxlength="" class="form-control input-text"/>
                                    <label for="signup">Phone Number or Email...</label>
                                    <a href="javascript:void();" class="btn btn-S btn-primary apply-btn">Apply</a>
                                    <a href="javascript:void();" className="footer-terms">*Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-list md12 lg6 xl6 sm12">
                            <ul>
                                <li>
                                    <span className="icon" dangerouslySetInnerHTML={{ __html: devicephoneImage }} />
                                    <a href="javascript:void();">Give us a call </a>
                                </li>
                                <li>
                                    <span className="icon" dangerouslySetInnerHTML={{ __html: twitterfillImage }} />
                                    <a href="javascript:void();">Ask us on Twitter </a>
                                </li>
                                <li>
                                    <span className="icon" dangerouslySetInnerHTML={{ __html: chatfillImage }} />
                                    <a href="javascript:void();">Chat with us </a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-connect md12 lg6 xl6 sm12">
                            <ul>
                                <li>Stay Connected</li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: facebooklineImage }} /></a>
                                </li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: twitterlineImage }} /></a>
                                </li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: pinterestlineImage }} /></a>
                                </li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: googlepluslineImage }} /></a>
                                </li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: youtubelineImage }} /></a>
                                </li>
                                <li>
                                    <a href="javascript:void();"><span className="icon" dangerouslySetInnerHTML={{ __html: bloglineImage }} /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-links md12 lg12 xl12 sm12">
                            <ul>
                                <li className="footer-links-title">JCPenney Rewards & Credit Card</li>
                                <li><a href="avascript:void();">Enroll in Rewards</a></li>
                                <li><a href="avascript:void();">Sign In to Rewards</a></li>
                                <li><a href="avascript:void();">JCPenney Credit Card</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">Customer Service</li>
                                <li><a href="javascript:void();">Returns</a></li>
                                <li><a href="javascript:void();">Shipping information</a></li>
                                <li><a href="javascript:void();">Rebates</a></li>
                                <li><a href="javascript:void();">Same Day Pickup</a></li>
                                <li><a href="javascript:void();">My JCP.com Account</a></li>
                                <li><a href="javascript:void();">Track My Order</a></li>
                                <li><a href="javascript:void();">Servicio Al Cliente</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">Store Services</li>
                                <li><a href="javascript:void();">JCP Salon</a></li>
                                <li><a href="javascript:void();">Sephora</a></li>
                                <li><a href="javascript:void();">JCP Portraits</a></li>
                                <li><a href="javascript:void();">JCP Optical</a></li>
                                <li><a href="javascript:void();">Gift Registry</a></li>
                                <li><a href="javascript:void();">JCP Custom Window</a></li>
                                <li><a href="javascript:void();">View All Store Services</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">More Ways to Shop</li>
                                <li><a href="javascript:void();">See our ads</a></li>
                                <li><a href="javascript:void();">Coupons</a></li>
                                <li><a href="javascript:void();">Recommendations</a></li>
                                <li><a href="javascript:void();">Gift Cards</a></li>
                                <li><a href="javascript:void();">International Shopping</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">Corporate Overview</li>
                                <li><a href="javascript:void();">Careers</a></li>
                                <li><a href="javascript:void();">Company Info</a></li>
                                <li><a href="javascript:void();">Community</a></li>
                                <li><a href="javascript:void();">Media</a></li>
                                <li><a href="javascript:void();">Investors</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-links md12 lg12 xl12 sm12">
                            <div className="footer-jcp-card md4 lg4 xl4 sm12">
                                <div className="card-icon">
                                    <span className="icon" dangerouslySetInnerHTML={{ __html: cardJCPRed }} />
                                </div>
                                <div className="card-links">
                                    <h3>JCPenney Credit Card</h3>
                                    <ul>
                                        <li><a href="javascript:void();">Pay Bill </a></li>
                                        <li><a href="javascript:void();">Check Balance </a></li>
                                        <li><a href="javascript:void();">Apply Now </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-legal-links md8 lg8 xl8 sm12">
                                <ul>
                                    <li><a href="javascript:void();">Legal</a></li>
                                    <li><a href="javascript:void();">Recalls</a></li>
                                    <li><a href="javascript:void();">AdChoices</a></li>
                                    <li><a href="javascript:void();">CA Privacy Rts</a></li>
                                    <li><a href="javascript:void();">Privacy Policy</a></li>
                                    <li><a href="javascript:void();">CA Supply Chain Act</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-copy"> ©JCP Media, Inc. 2017. All Rights Reserved</div>
                    </footer>                    
                </div>
            </div>
        );
    }
}

export default Footer;