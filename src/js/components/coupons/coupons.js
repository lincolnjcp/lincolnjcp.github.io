import React, { Component } from 'react';

const barcodeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/barcode.svg');

class Coupons extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row flex-box">
          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS
              </span>
              <span class="std-txt std-txt-S color-shadow mrg-btm-S">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow"> SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
                <a href="javascript:void();" class="std-txt std-txt-XS color-nightsky">shop home</a>
                <a href="javascript:void();" class="std-txt std-txt-XS color-nightsky">see details</a>
              </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S color-shadow mrg-btm-S">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-bottom">
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-btm-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              {/* <a href="javascript:void();" role="button" class="btn btn-S btn-secondary btn-full mrg-btm-S btn-icon color-nightsky">
                <span class="icon mrg-rght-XS" dangerouslySetInnerHTML={{ __html: barcodeImage }}/>
                  Print Barcode
                </a> */}
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S btn-full mrg-btm-S btn-icon "><span class="icon color-nightsky-svg" dangerouslySetInnerHTML={{ __html: barcodeImage }} /> Print Barcode</a>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

             
              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-btm-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S color-shadow mrg-btm-S">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-btm-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>

              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-btm-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-btm-M">
                <h2 class="promo-lbl promo-lbl-L">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-btm-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="promo-lbl promo-lbl-L">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-btm-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary btn-full mrg-btm-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">shop home</a>
              <a href="javascript:void(0)" class="std-txt std-txt-XS color-nightsky">see details</a>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Coupons;