import React, { Component } from 'react';
import $ from 'jquery'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const actionIcons = '/images/global/icons/action/';
const alertIcons = '/images/global/icons/alert/';
const navIcons = '/images/global/icons/nav/';
const paymentIcons = '/images/global/icons/payment/';
const serviceIcons = '/images/global/icons/service/';
const socialIcons = '/images/global/icons/social/';
const utilityIcons = '/images/global/icons/utility/';
const utilityIconsCalendar = '/images/global/icons/utility/calendar/';
const utilityIconsCart= '/images/global/icons/utility/cart/';
const utilityIconsMedia = '/images/global/icons/utility/media/';
const utilityIconsShip = '/images/global/icons/utility/ship/';
const utilityIconsStore = '/images/global/icons/utility/store/';


const actionIconsImport = '/images/global/icons/action/';
/*const actionIcons = importAll(require.context('../../../images/global/icons/action/', false, /\.(png|jpe?g|svg)$/));
const alertIcons = importAll(require.context('../../../images/global/icons/alert/', false, /\.(png|jpe?g|svg)$/));
const navIcons = importAll(require.context('../../../images/global/icons/nav/', false, /\.(png|jpe?g|svg)$/));
const paymentIcons = importAll(require.context('../../../images/global/icons/payment/', false, /\.(png|jpe?g|svg)$/));
const serviceIcons = importAll(require.context('../../../images/global/icons/service/', false, /\.(png|jpe?g|svg)$/));
const socialIcons = importAll(require.context('../../../images/global/icons/social/', false, /\.(png|jpe?g|svg)$/));
const utilityIcons = importAll(require.context('../../../images/global/icons/utility/', false, /\.(png|jpe?g|svg)$/));
const utilityIconsCalendar = importAll(require.context('../../../images/global/icons/utility/calendar/', false, /\.(png|jpe?g|svg)$/));
const utilityIconsCart= importAll(require.context('../../../images/global/icons/utility/cart/', false, /\.(png|jpe?g|svg)$/));
const utilityIconsMedia = importAll(require.context('../../../images/global/icons/utility/media/', false, /\.(png|jpe?g|svg)$/));
const utilityIconsShip = importAll(require.context('../../../images/global/icons/utility/ship/', false, /\.(png|jpe?g|svg)$/));
const utilityIconsStore = importAll(require.context('../../../images/global/icons/utility/store/', false, /\.(png|jpe?g|svg)$/));





class Icons extends Component {
iconCol(iconName, iconDetails, actionIconsAry ){
        //import logoImage from '../../../images/global/icons/action/thumbsdown-fill.svg'

*/

import iconTest from '../../../images/global/icons/action/chat-fill.svg';

class Icons extends Component {
iconColImport(iconName, iconDetails, actionIconsAry ){
  //var iconSrc = require('../../..'+actionIconsAry+iconName+'.svg');
  if(iconName !=="") {
    return(
      <div className="design-system-icon-col column column-block">
        <span className="design-system-icon">{iconTest}</span>
        <div className="design-system-icon-label hide-for-small-only">
          <p className="design-system-icon-name">{iconName}</p>
          <p className="design-system-icon-details">{iconDetails}</p>
        </div>
      </div>
    )
  } else {
    return ( <div className="small-4 medium-4 large-3 columns design-system-icon-col"></div> )
  }
}

iconCol(iconName, iconDetails, actionIconsAry ){
  if(iconName !=="") {
    return(
      <div className="design-system-icon-col column column-block">
        <span className="design-system-icon"><img src={actionIconsAry+iconName+'.svg'} /></span>
        <div className="design-system-icon-label hide-for-small-only">
          <p className="design-system-icon-name">{iconName}</p>
          <p className="design-system-icon-details">{iconDetails}</p>
        </div>
      </div>
    )
  } else {
    return ( <div className="small-4 medium-4 large-3 columns design-system-icon-col"></div> )
  }
}




componentDidMount() {
/*
  $(".design-system-toggle").click(function(){
        if(!$(this).hasClass("active")){
            if($(this).hasClass('right')){
                $(this).closest(".design-system-toggle-section").addClass("color-penneyred-svg");
                $(this).addClass("active");
                $(this).closest(".design-system-headline-toggle").find(".left").removeClass("active");
            } else {
                $(this).closest(".design-system-toggle-section").removeClass("color-penneyred-svg");
                $(this).addClass("active");
                $(this).closest(".design-system-headline-toggle").find(".right").removeClass("active");

            }
        }
    });
*/
   
}



  render() {
    return (
      <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h1>Icons</h1>
                        <h2>Icons are simple and informative. Each icon builds on the visual language of the design system, and represents the simplest version of the idea.</h2>
                        <hr />
                    </div>
                </div>
                <div className="row" id="when-to-use">
                    <div className="small-12 columns">

                        <h3>When to Use</h3>
                        <p>Icons are powerful visual helpers, and should be used with care. Overuse quickly results in UIs that are visually overwhelming or distracting.</p>
                        <p>Icons are commonly used:</p>
                        <ul>
                          <li>In primary navigation</li>
                          <li>In page headers and section titles</li>
                          <li>In banners to bring attention to a specific theme (an announcement, an error, etc.)</li>
                          <li>Inline with text to add clarity</li>
                          <li>To direct a user’s attention to something they can take action on, or which results in an action</li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="row" id="alert">
                    <div className="small-12 columns">
                      <h3>Alert</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("error", "error message", alertIcons)}
                          {this.iconCol("error-2", "unavailable", alertIcons)}
                          {this.iconCol("help", "help/customer service", alertIcons)}
                          {this.iconCol("information", "tooltip & notice message", alertIcons)}

                          {this.iconCol("success", "success message", alertIcons)}
                          {this.iconCol("success-check", "success check", alertIcons)}
                          {this.iconCol("warning", "warning message", alertIcons)}
                        </div>
                        
                        <hr />
                    </div>
                    </div>

                    <div className="row" id="payment">
                    <div className="small-12 columns">
                      <h3>Payment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("card-jcp", "JCP credit card accepted", paymentIcons)}
                          {this.iconCol("card-jcp-gold", "JCP mastercard gold", paymentIcons)}
                          {this.iconCol("card-jcp-red", "JCP mastercard", paymentIcons)}
                          {this.iconCol("card-jcp-platinum", "JCP mastercard platinum", paymentIcons)}

                          {this.iconCol("card-mastercard", "Mastercard", paymentIcons)}
                          {this.iconCol("card-paypal", "PayPal", paymentIcons)}
                          {this.iconCol("card-visa", "Visa", paymentIcons)}
                          {this.iconCol("card-amex", "American Express", paymentIcons)}

                          {this.iconCol("card-discover", "Discover", paymentIcons)}
                          {this.iconCol("card-gift", "Gift Card Payment", paymentIcons)}
                          {this.iconCol("card-jcvv", "card verification code", paymentIcons)}
                        </div>
                        
                        <hr />
                    </div>
                    </div>

                    <div className="design-system-toggle-section">
                    <div className="row design-system-headline-with-toggle" id="action">
                    <div className="small-12 columns">
                      <h3>Action</h3>
                      
                    </div>
                    </div>
                    <div className="row">
                    <div className="small-12 columns">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("thumbsdown-fill", "dislike (active)", actionIconsImport)}
                          {this.iconCol("thumbsdown-line", "dislike (inactive)", actionIconsImport)}
                          {this.iconCol("thumbsup-fill", "like (active)", actionIconsImport)}
                          {this.iconCol("thumbsup-line", "like (inactive)", actionIconsImport)}
                  
                          {this.iconCol("zoom-in-fill", "zoom in (pressed)", actionIconsImport)}
                          {this.iconCol("zoom-in-line", "zoom in ", actionIconsImport)}
                          {this.iconCol("zoom-out-fill", "zoom out (pressed)", actionIconsImport)}
                          {this.iconCol("zoom-out-line", "???", actionIconsImport)}
                    
                          {this.iconCol("chat-fill", "chat (pressed)", actionIconsImport)}
                          {this.iconCol("chat-line", "chat is available", actionIconsImport)}
                          {this.iconCol("conversation-fill", "???", actionIconsImport)}
                          {this.iconCol("conversation-line", "???", actionIconsImport)}
                 
                          {this.iconCol("heart-fill", "save (active)", actionIconsImport)}
                          {this.iconCol("heart-line", "save (inactive)", actionIconsImport)}
                          {this.iconCol("eye", "unhide form field", actionIconsImport)}
                          {this.iconCol("eye-crossed-out", "hide form field", actionIconsImport)}
               
                          {this.iconCol("grid-fill", "grid view (active)", actionIconsImport)}
                          {this.iconCol("grid-line", "grid view (inactive)", actionIconsImport)}
                          {this.iconCol("list-fill", "list view (active)", actionIconsImport)}
                          {this.iconCol("list-line", "list view (inactive)", actionIconsImport)}
          
                          {this.iconCol("search", "indicate search capability", actionIconsImport)}
                          {this.iconCol("settings", "edit settings/preferences", actionIconsImport)}
                          {this.iconCol("print", "print page", actionIconsImport)}
                          {this.iconCol("trash-can", "delete", actionIconsImport)}
         
                          {this.iconCol("mail", "email page or deal", actionIconsImport)}
                          {this.iconCol("target", "find geo location", actionIconsImport)}
                          {this.iconCol("upload", "upload file", actionIconsImport)}
                    </div>
                    <hr />
</div>
                    </div>
                    </div>

                    <div className="row" id="navigation">
                    <div className="small-12 columns">
                      <h3>Navigation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("chevron-down", "advance carousels and navigation", navIcons)}
                          {this.iconCol("chevron-left", "advance carousels and navigation", navIcons)}
                          {this.iconCol("chevron-right", "advance carousels and navigation", navIcons)}
                          {this.iconCol("chevron-up", "advance carousels and navigation", navIcons)}

                          {this.iconCol("arrow-left", "back on slideout panel", navIcons)}
                          {this.iconCol("arrow-right", "advance on slideout panel", navIcons)}
                          {this.iconCol("collapse-left", "close drawer to the left", navIcons)}
                          {this.iconCol("collapse-right", "close drawer to the right", navIcons)}

                          {this.iconCol("triangle-down", "drop down", navIcons)}
                          {this.iconCol("triangle-left", "???", navIcons)}
                          {this.iconCol("triangle-right", "inline expand", navIcons)}
                          {this.iconCol("triangle-up", "drop down (active)", navIcons)}

                          {this.iconCol("menu", "global menu", navIcons)}
                          {this.iconCol("close", "close messages; clear text input", navIcons)}
                          {this.iconCol("minus", "collaspe accordion", navIcons)}
                          {this.iconCol("plus", "expand accordion", navIcons)}

                          {this.iconCol("back-to-top", "scroll page back to the top", navIcons)}
                        </div>
                        
                        <hr />
                    </div>
                    </div>

                    <div className="row" id="utility">
                    <div className="small-12 columns">
                      <h3>Utility</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("cart", "navigate to shopping cart", utilityIconsCart)}
                          {this.iconCol("express-checkout", "express checkout", utilityIconsCart)}
                          {this.iconCol("haul-away", "haul away appliaces", utilityIconsShip)}
                          {this.iconCol("track-order", "CAM track orders", utilityIconsShip)}

                          {this.iconCol("truck", "truck deilvery", utilityIconsShip)}
                          {this.iconCol("local-ad", "local store print ads", utilityIconsStore)}
                          {this.iconCol("same-day-pickup", "store pick up", utilityIconsStore)}
                          {this.iconCol("store", "store location", utilityIconsStore)}

                          {this.iconCol("location-pin", "indicate location/store", utilityIcons)}
                          {this.iconCol("return", "return prodcuts", utilityIconsStore)}
                          {this.iconCol("recycle", "recycling", utilityIcons)}
                          {this.iconCol("lock", "security in checkout/payment", utilityIcons)}

                          {this.iconCol("account", "customer account/profile", serviceIcons)}
                          {this.iconCol("cash", "rewards cash", serviceIcons)}
                          {this.iconCol("coupon-fill", "coupons", serviceIcons)}
                          {this.iconCol("gift-registry", "gift registry", serviceIcons)}

                          {this.iconCol("wallet", "payment method", serviceIcons)}
                          {this.iconCol("piggy-bank", "savings", utilityIcons)}
                          {this.iconCol("ribbon", "???", utilityIcons)}
                          {this.iconCol("clip", "clip coupon", utilityIcons)}

                          {this.iconCol("camera", "active camera device", utilityIconsMedia)}
                          {this.iconCol("play", "play media", utilityIconsMedia)}
                          {this.iconCol("video", "multi-media video", utilityIconsMedia)}
                          {this.iconCol("ruler", "size guides", utilityIcons)}

                          {this.iconCol("appointment", "???", utilityIconsCalendar)}
                          {this.iconCol("schedule-appt", "schedule appointment with JCP store services", utilityIconsCalendar)}
                          {this.iconCol("wedding-date", "???", utilityIconsCalendar)}
                          {this.iconCol("parts-services", "additional appliance services", utilityIcons)}

                          {this.iconCol("device-mobile", "mobile device", utilityIcons)}
                          {this.iconCol("device-phone", "contact via phone; phone input", utilityIcons)}
                          {this.iconCol("collection", "product collection", utilityIcons)}
                          {this.iconCol("collection-multi", "multiple product collections", utilityIcons)}

                          {this.iconCol("barcode", "scan barcode", utilityIcons)}
                          {this.iconCol("barcode-qr", "???", utilityIcons)}
                          {this.iconCol("shield", "protection plans", utilityIcons)}
                        </div>
                        
                        <hr />
                    </div>
                    </div>

                    <div className="row" id="social">
                    <div className="small-12 columns">
                      <h3>Social</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                          {this.iconCol("blog-fill", "Link to JCP blog", socialIcons)}
                          {this.iconCol("blog-line", "Link to JCP blog", socialIcons)}
                          {this.iconCol("facebook-fill", "Share to Facebook", socialIcons)}
                          {this.iconCol("facebook-line", "Share to Facebook", socialIcons)}

                          {this.iconCol("google-plus-fill", "Share to Google+", socialIcons)}
                          {this.iconCol("google-plus-line", "Share to Google+", socialIcons)}
                          {this.iconCol("instagram-fill", "Share to Instagram", socialIcons)}
                          {this.iconCol("instagram-line", "Share to Instagram", socialIcons)}

                          {this.iconCol("pinterest-fill", "Pin to Pintrest board", socialIcons)}
                          {this.iconCol("pinterest-line", "Pin to Pintrest board", socialIcons)}
                          {this.iconCol("twitter-fill", "Share to Twitter", socialIcons)}
                          {this.iconCol("twitter-line", "Share to Twitter", socialIcons)}

                          {this.iconCol("youtube-fill", "Link to JCP YouTube channel", socialIcons)}
                          {this.iconCol("youtube-line", "Link to JCP YouTube channel", socialIcons)}
                        </div>
                        
                        <hr />
                    </div>
                    </div>


                <div className="row created-by">
                            <div className="small-12 columns">
                                <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong> <br />
Latest update: 04/05/2017</p>
                            </div>
                        </div>
                        
              </div>
    
    );
  }
}

export default Icons;