import React, { Component } from 'react';

const barcodeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/barcode.svg');

class Coupons extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row flex-box">
          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS
              </span>
              <span className="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow"> SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
                <a href="javascript:void();" className="title-XS">shop home</a>
                <a href="javascript:void();" className="title-XS">see details</a>
              </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div class="coupon-bottom">
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-secondary apply-btn btn-full mrg-M print-barcode">
                <span className="icon mrg-rght-XS" dangerouslySetInnerHTML={{ __html: barcodeImage }}/>
                  Print Barcode
                </a>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
             
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S color-shadow mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S color-shadow">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S color-shadow">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or color-shadow">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S color-shadow">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-M">
                <span className="std-txt std-txt-S color-shadow">Expires: 11/05/2017</span>
                <div><span classname="std-txt std-txt-S color-shadow">Code: </span><span className="std-txt std-txt-S color-shadow">SHOPNOW4</span></div>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-M">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="title-XS">shop home</a>
              <a href="javascript:void(0)" className="title-XS">see details</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coupons;