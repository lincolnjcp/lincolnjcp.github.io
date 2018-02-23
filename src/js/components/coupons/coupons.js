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
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS
              </span>
              <span class="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow"> SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
                <a href="javascript:void();" class="title-XS">shop home</a>
                <a href="javascript:void();" class="title-XS">see details</a>
              </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-bottom">
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              {/* <a href="javascript:void();" role="button" class="btn btn-S btn-secondary apply-btn btn-full mrg-S btn-icon color-nightsky">
                <span class="icon mrg-rght-XS" dangerouslySetInnerHTML={{ __html: barcodeImage }}/>
                  Print Barcode
                </a> */}
                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S btn-full mrg-S btn-icon "><span class="icon color-nightsky-svg" dangerouslySetInnerHTML={{ __html: barcodeImage }} /> Print Barcode</a>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

             
              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>

              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div class="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div class="coupon-list">
              <span class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span class="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div class="coupon-primary-offer mrg-M">
                <h2 class="price price-M">Extra 30% OFF $100+</h2>
                <p class="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 class="price price-M">Extra 25% OFF Under $100</h4>
                <p class="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div class="coupon-code mrg-M">
                <span class="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span class="std-txt std-txt-S color-shadow">Code: </span><span class="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>

              <div class="coupon-see-details">
              <a href="javascript:void(0)" class="title-XS">shop home</a>
              <a href="javascript:void(0)" class="title-XS">see details</a>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Coupons;