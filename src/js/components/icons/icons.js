import React, { Component } from 'react';
import $ from 'jquery'

const errorImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/error.svg');
const error2Image = require('!!raw-loader?es5=1!../../../images/global/icons/alert/error-2.svg');
const helpImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/help.svg');
const informationImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/information.svg');
const successImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success.svg');
const successcheckImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success-check.svg');
const warningImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/warning.svg');

const cardjcpImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp.svg');
const cardjcpgoldImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-gold.svg');
const cardjcpredImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-red.svg');
const cardjcpplatinumImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-platinum.svg');
const cardmastercardImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-mastercard.svg');
const cardpaypalImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-paypal.svg');
const cardvisaImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-visa.svg');
const cardamexImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-amex.svg');
const carddiscoverImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-discover.svg');
const cardgiftImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-gift.svg');
const cardjcvvImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcvv.svg');

const thumbsdownfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsdown-fill.svg');
const thumbsdownlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsdown-line.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const thumbsuplineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-line.svg');
const zoominfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/zoom-in-fill.svg');
const zoominlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/zoom-in-line.svg');
const zoomoutfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/zoom-out-fill.svg');
const zoomoutlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/zoom-out-line.svg');
const chatfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-fill.svg');
const chatlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-line.svg');
const conversationfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/conversation-fill.svg');
const conversationlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/conversation-line.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const eyeImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/eye.svg');
const eyecrossedoutImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/eye-crossed-out.svg');
const gridfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/grid-fill.svg');
const gridlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/grid-line.svg');
const listfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-fill.svg');
const listlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-line.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const settingsImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/settings.svg');
const printImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/print.svg');
const trashcanImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/trash-can.svg');
const mailImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/mail.svg');
const targetImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/target.svg');
const uploadImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/upload.svg');

const chevrondownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-down.svg');
const chevronleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-left.svg');
const chevronrightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-right.svg');
const chevronupImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-up.svg');
const arrowleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/arrow-left.svg');
const arrowrightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/arrow-right.svg');
const collapseleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/collapse-left.svg');
const collapserightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/collapse-right.svg');
const triangledownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-down.svg');
const triangleleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-left.svg');
const trianglerightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-right.svg');
const triangleupImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-up.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');
const minusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/minus.svg');
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const backtotopImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/back-to-top.svg');

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const expresscheckoutImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/express-checkout.svg');
const haulawayImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/haul-away.svg');
const trackorderImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/track-order.svg');
const truckImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/truck.svg');
const localadImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/local-ad.svg');
const samedaypickupImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/same-day-pickup.svg');
const storeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/store.svg');
const locationpinImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/location-pin.svg');
const returnImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/return.svg');
const recycleImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/recycle.svg');
const lockImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/lock.svg');
const accountImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/account.svg');
const cashImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/cash.svg');
const couponfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/coupon-fill.svg');
const giftregistryImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/gift-registry.svg');
const walletImage = require('!!raw-loader?es5=1!../../../images/global/icons/service/wallet.svg');
const piggybankImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/piggy-bank.svg');
const ribbonImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ribbon.svg');
const clipImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/clip.svg');
const cameraImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/media/camera.svg');
const playImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/media/play.svg');
const videoImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/media/video.svg');
const rulerImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ruler.svg');
const appointmentImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/calendar/appointment.svg');
const scheduleapptImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/calendar/schedule-appt.svg');
const weddingdateImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/calendar/wedding-date.svg');
const partsservicesImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/parts-services.svg');
const devicemobileImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-mobile.svg');
const devicephoneImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-phone.svg');
const collectionImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/collection.svg');
const collectionmultiImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/collection-multi.svg');
const barcodeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/barcode.svg');
const barcodeqrImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/barcode-qr.svg');
const shieldImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/shield.svg');

const blogfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/blog-fill.svg');
const bloglineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/blog-line.svg');
const facebookfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/facebook-fill.svg');
const facebooklineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/facebook-line.svg');
const googleplusfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/google-plus-fill.svg');
const googlepluslineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/google-plus-line.svg');
const instagramfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/instagram-fill.svg');
const instagramlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/instagram-line.svg');
const pinterestfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/pinterest-fill.svg');
const pinterestlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/pinterest-line.svg');
const twitterfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/twitter-fill.svg');
const twitterlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/twitter-line.svg');
const youtubefillImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/youtube-fill.svg');
const youtubelineImage = require('!!raw-loader?es5=1!../../../images/global/icons/social/youtube-line.svg');


const ColorPicker = () => 
    <div class="design-system-color-picker">
      <div class="design-system-color-picker-btn"><a href="javascript:void();" class="color-picker-icon selected color-picker-toggle"><span class="color-nightsky-bg color-picker-swatch"></span><span class="icon"></span></a></div>
      <div class="design-system-color-picker-menu">
        <a href="javascript:void();" class="color-picker-icon selected" data-color-class="color-nightsky-svg"><span class="color-nightsky-bg"></span></a>
        <a href="javascript:void();" class="color-picker-icon" data-color-class="color-lipstick-svg"><span class="color-lipstick-bg"></span></a>
        <a href="javascript:void();" class="color-picker-icon" data-color-class="color-penneyred-svg"><span class="color-penneyred-bg"></span></a>
      </div>
    </div>;


class Icons extends Component {

//<img src={actionIconsAry+iconName+'.svg'} />
iconCol(iconName, iconDetails, iconComponent ){
  if(iconName !=="") {
    return(
      <div className="design-system-icon-col column column-block">
        <span className="design-system-icon"><div className="icon" dangerouslySetInnerHTML={{__html: iconComponent}} /></span>
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

  $(".design-system-color-picker-btn a").click(function(event){
    var targetMenu = $(this).closest(".design-system-color-picker").find(".design-system-color-picker-menu");
    var targetIcon = $(this).closest(".design-system-color-picker").find(".design-system-color-picker-btn .icon");
    if(targetMenu.hasClass('show')){
      targetMenu.removeClass('show');
      targetIcon.removeClass('open');
    } else {
      targetMenu.addClass('show');
      targetIcon.addClass('open');
      event.stopPropagation();
      $(document).unbind("click").click(function(event) { 
          if(!$(event.target).closest('.design-system-color-picker-menu').length) {
              $('.design-system-color-picker-menu.show').removeClass("show");
              $('.design-system-color-picker-btn .icon.open').removeClass("open");
              $(document).unbind("click");
          }        
      });
    }
  });
  $(".color-picker-icon").click(function(){
    if(!$(this).hasClass("selected")){
      var parent = $(this).closest(".design-system-toggle-section");
      var children = parent.find(".icon");
      var attr = parent.attr('data-color-class');
      if (typeof attr !== typeof undefined && attr !== false) {
        children.removeClass(attr);
      } else {
        attr = "color-nightsky-bg";
      }
      parent.attr('data-color-class', $(this).attr('data-color-class'));    
      children.addClass($(this).attr('data-color-class'));
      parent.find(".design-system-color-picker-menu .color-picker-icon.selected").removeClass("selected");
      parent.find(".design-system-color-picker-btn span.color-picker-swatch").removeClass().addClass($(this).find("span").attr("class")).addClass("color-picker-swatch");
      
      var targetMenu = $(this).closest(".design-system-color-picker").find(".design-system-color-picker-menu");
      var targetIcon = $(this).closest(".design-system-color-picker").find(".design-system-color-picker-btn .icon");
      if(targetMenu.hasClass('show')){
        targetMenu.removeClass('show');
        targetIcon.removeClass('open');
      }

      $(this).addClass("selected");
    }
    //$(".design-system-toggle-section .icon").removeClass("color-penneyred-svg");
  });
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
                {this.iconCol("error", "error message", errorImage)} {this.iconCol("error-2", "unavailable", error2Image)} {this.iconCol("help", "help/customer service", helpImage)} {this.iconCol("information", "tooltip & notice message", informationImage)} {this.iconCol("success", "success message", successImage)} {this.iconCol("success-check", "success check", successcheckImage)} {this.iconCol("warning", "warning message", warningImage)}
            </div>
            <hr />
        </div>
    </div>
    <div className="row" id="payment">
        <div className="small-12 columns">
            <h3>Payment</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                {this.iconCol("card-jcp", "JCP credit card accepted", cardjcpImage)} {this.iconCol("card-jcp-gold", "JCP mastercard gold", cardjcpgoldImage)} {this.iconCol("card-jcp-red", "JCP mastercard", cardjcpredImage)} {this.iconCol("card-jcp-platinum", "JCP mastercard platinum", cardjcpplatinumImage)} {this.iconCol("card-mastercard", "Mastercard", cardmastercardImage)} {this.iconCol("card-paypal", "PayPal", cardpaypalImage)} {this.iconCol("card-visa", "Visa", cardvisaImage)} {this.iconCol("card-amex", "American Express", cardamexImage)} {this.iconCol("card-discover", "Discover", carddiscoverImage)} {this.iconCol("card-gift", "Gift Card Payment", cardgiftImage)} {this.iconCol("card-jcvv", "card verification code", cardjcvvImage)}
            </div>
            <hr />
        </div>
    </div>
    <div className="design-system-toggle-section">
        <div className="row design-system-headline-with-toggle" id="action">
            <div className="small-12 columns">
                <h3>Action</h3>
                <ColorPicker />
            </div>
        </div>
        <div className="row">
            <div className="small-12 columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                    {this.iconCol("thumbsdown-fill", "dislike (active)", thumbsdownfillImage)} {this.iconCol("thumbsdown-line", "dislike (inactive)", thumbsdownlineImage)} {this.iconCol("thumbsup-fill", "like (active)", thumbsupfillImage)} {this.iconCol("thumbsup-line", "like (inactive)", thumbsuplineImage)} {this.iconCol("zoom-in-fill", "zoom in (pressed)", zoominfillImage)} {this.iconCol("zoom-in-line", "zoom in ", zoominlineImage)} {this.iconCol("zoom-out-fill", "zoom out (pressed)", zoomoutfillImage)} {this.iconCol("zoom-out-line", "???", zoomoutlineImage)} {this.iconCol("chat-fill", "chat (pressed)", chatfillImage)} {this.iconCol("chat-line", "chat is available", chatlineImage)} {this.iconCol("conversation-fill", "???", conversationfillImage)} {this.iconCol("conversation-line", "???", conversationlineImage)} {this.iconCol("heart-fill", "save (active)", heartfillImage)} {this.iconCol("heart-line", "save (inactive)", heartlineImage)} {this.iconCol("eye", "unhide form field", eyeImage)} {this.iconCol("eye-crossed-out", "hide form field", eyecrossedoutImage)} {this.iconCol("grid-fill", "grid view (active)", gridfillImage)} {this.iconCol("grid-line", "grid view (inactive)", gridlineImage)} {this.iconCol("list-fill", "list view (active)", listfillImage)} {this.iconCol("list-line", "list view (inactive)", listlineImage)} {this.iconCol("search", "indicate search capability", searchImage)} {this.iconCol("settings", "edit settings/preferences", settingsImage)} {this.iconCol("print", "print page", printImage)} {this.iconCol("trash-can", "delete", trashcanImage)} {this.iconCol("mail", "email page or deal", mailImage)} {this.iconCol("target", "find geo location", targetImage)} {this.iconCol("upload", "upload file", uploadImage)}
                </div>
                <hr />
            </div>
        </div>
    </div>
    <div className="design-system-toggle-section">
        <div className="row design-system-headline-with-toggle" id="navigation">
            <div className="small-12 columns">
                <h3>Navigation</h3>
                <ColorPicker />
            </div>
        </div>
        <div className="row">
            <div className="small-12 columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                    {this.iconCol("chevron-down", "advance carousels and navigation", chevrondownImage)} {this.iconCol("chevron-left", "advance carousels and navigation", chevronleftImage)} {this.iconCol("chevron-right", "advance carousels and navigation", chevronrightImage)} {this.iconCol("chevron-up", "advance carousels and navigation", chevronupImage)} {this.iconCol("arrow-left", "back on slideout panel", arrowleftImage)} {this.iconCol("arrow-right", "advance on slideout panel", arrowrightImage)} {this.iconCol("collapse-left", "close drawer to the left", collapseleftImage)} {this.iconCol("collapse-right", "close drawer to the right", collapserightImage)} {this.iconCol("triangle-down", "drop down", triangledownImage)} {this.iconCol("triangle-left", "???", triangleleftImage)} {this.iconCol("triangle-right", "inline expand", trianglerightImage)} {this.iconCol("triangle-up", "drop down (active)", triangleupImage)} {this.iconCol("menu", "global menu", menuImage)} {this.iconCol("close", "close messages; clear text input", closeImage)} {this.iconCol("minus", "collaspe accordion", minusImage)} {this.iconCol("plus", "expand accordion", plusImage)} {this.iconCol("back-to-top", "scroll page back to the top", backtotopImage)}
                </div>
                <hr />
            </div>
        </div>
    </div>
    <div className="design-system-toggle-section">
        <div className="row design-system-headline-with-toggle" id="utility">
            <div className="small-12 columns">
                <h3>Utility</h3>
                <ColorPicker />
            </div>
        </div>
        <div className="row">
            <div className="small-12 columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                    {this.iconCol("cart", "navigate to shopping cart", cartImage)} {this.iconCol("express-checkout", "express checkout", expresscheckoutImage)} {this.iconCol("haul-away", "haul away appliaces", haulawayImage)} {this.iconCol("track-order", "CAM track orders", trackorderImage)} {this.iconCol("truck", "truck deilvery", truckImage)} {this.iconCol("local-ad", "local store print ads", localadImage)} {this.iconCol("same-day-pickup", "store pick up", samedaypickupImage)} {this.iconCol("store", "store location", storeImage)} {this.iconCol("location-pin", "indicate location/store", locationpinImage)} {this.iconCol("return", "return prodcuts", returnImage)} {this.iconCol("recycle", "recycling", recycleImage)} {this.iconCol("lock", "security in checkout/payment", lockImage)} {this.iconCol("account", "customer account/profile", accountImage)} {this.iconCol("cash", "rewards cash", cashImage)} {this.iconCol("coupon-fill", "coupons", couponfillImage)} {this.iconCol("gift-registry", "gift registry", giftregistryImage)} {this.iconCol("wallet", "payment method", walletImage)} {this.iconCol("piggy-bank", "savings", piggybankImage)} {this.iconCol("ribbon", "???", ribbonImage)} {this.iconCol("clip", "clip coupon", clipImage)} {this.iconCol("camera", "active camera device", cameraImage)} {this.iconCol("play", "play media", playImage)} {this.iconCol("video", "multi-media video", videoImage)} {this.iconCol("ruler", "size guides", rulerImage)} {this.iconCol("appointment", "???", appointmentImage)} {this.iconCol("schedule-appt", "schedule appointment with JCP store services", scheduleapptImage)} {this.iconCol("wedding-date", "???", weddingdateImage)} {this.iconCol("parts-services", "additional appliance services", partsservicesImage)} {this.iconCol("device-mobile", "mobile device", devicemobileImage)} {this.iconCol("device-phone", "contact via phone; phone input", devicephoneImage)} {this.iconCol("collection", "product collection", collectionImage)} {this.iconCol("collection-multi", "multiple product collections", collectionmultiImage)} {this.iconCol("barcode", "scan barcode", barcodeImage)} {this.iconCol("barcode-qr", "???", barcodeqrImage)} {this.iconCol("shield", "protection plans", shieldImage)}
                </div>
                <hr />
            </div>
        </div>
    </div>
    <div className="design-system-toggle-section">
        <div className="row design-system-headline-with-toggle" id="social">
            <div className="small-12 columns">
                <h3>Social</h3>
                <ColorPicker />
            </div>
        </div>
        <div className="row">
            <div className="small-12 columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="row  small-up-4 medium-up-3 large-up-4 design-system-icon-set">
                    {this.iconCol("blog-fill", "Link to JCP blog", blogfillImage)} {this.iconCol("blog-line", "Link to JCP blog", bloglineImage)} {this.iconCol("facebook-fill", "Share to Facebook", facebookfillImage)} {this.iconCol("facebook-line", "Share to Facebook", facebooklineImage)} {this.iconCol("google-plus-fill", "Share to Google+", googleplusfillImage)} {this.iconCol("google-plus-line", "Share to Google+", googlepluslineImage)} {this.iconCol("instagram-fill", "Share to Instagram", instagramfillImage)} {this.iconCol("instagram-line", "Share to Instagram", instagramlineImage)} {this.iconCol("pinterest-fill", "Pin to Pintrest board", pinterestfillImage)} {this.iconCol("pinterest-line", "Pin to Pintrest board", pinterestlineImage)} {this.iconCol("twitter-fill", "Share to Twitter", twitterfillImage)} {this.iconCol("twitter-line", "Share to Twitter", twitterlineImage)} {this.iconCol("youtube-fill", "Link to JCP YouTube channel", youtubefillImage)} {this.iconCol("youtube-line", "Link to JCP YouTube channel", youtubelineImage)}
                </div>
                <hr />
            </div>
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Icons;