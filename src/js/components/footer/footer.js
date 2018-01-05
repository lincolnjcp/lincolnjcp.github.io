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
                                <li><a href="avascript:void();">Returns</a></li>
                                <li><a href="avascript:void();">Shipping information</a></li>
                                <li><a href="avascript:void();">Rebates</a></li>
                                <li><a href="avascript:void();">Same Day Pickup</a></li>
                                <li><a href="avascript:void();">My JCP.com Account</a></li>
                                <li><a href="avascript:void();">Track My Order</a></li>
                                <li><a href="avascript:void();">Servicio Al Cliente</a></li>
                            </ul>
                            <ul>
                                <li><a href="avascript:void();">JCP Salon</a></li>
                                <li><a href="avascript:void();">Sephora</a></li>
                                <li><a href="avascript:void();">JCP Portraits</a></li>
                                <li><a href="avascript:void();">JCP Optical</a></li>
                                <li><a href="avascript:void();">Gift Registry</a></li>
                                <li><a href="avascript:void();">JCP Custom Window</a></li>
                                <li><a href="avascript:void();">View All Store Services</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">More Ways to Shop</li>
                                <li><a href="avascript:void();">See our ads</a></li>
                                <li><a href="avascript:void();">Coupons</a></li>
                                <li><a href="avascript:void();">Recommendations</a></li>
                                <li><a href="avascript:void();">Gift Cards</a></li>
                                <li><a href="avascript:void();">International Shopping</a></li>
                            </ul>
                            <ul>
                                <li className="footer-links-title">Corporate Overview</li>
                                <li><a href="avascript:void();">Careers</a></li>
                                <li><a href="avascript:void();">Company Info</a></li>
                                <li><a href="avascript:void();">Community</a></li>
                                <li><a href="avascript:void();">Media</a></li>
                                <li><a href="avascript:void();">Investors</a></li>
                            </ul>
                        </div>
                        <div className="footer-legal-links md12 lg12 xl12 sm12">
                            
                        </div>
                    </footer>                    
                </div>
            </div>
        );
    }
}

export default Footer;