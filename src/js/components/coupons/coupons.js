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
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS
                <div>style</div><div>Days</div>
              </span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
                <a className="link-S btn-tiny">shop home</a>
                <a className="link-S btn-tiny">see details</a>
              </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S">shop home</a>
              <a href="javascript:void(0)" className="link-S">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <a href="javascript:void();" className="btn btn-S btn-secondary apply-btn btn-full mrg-S print-barcode">
                <span className="icon" dangerouslySetInnerHTML={{ __html: barcodeImage }}/>
                  Print Barcode
                </a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>

          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="coupon-badge title mrg-S">SALE ENDS IN 2HRS</span>
              <span className="std-txt std-txt-S mrg-S">Online Only</span>
              <div className="coupon-primary-offer mrg-M">
                <h2 className="price price-M">Extra 30% OFF $100+</h2>
                <p className="std-txt std-txt-S">select apparel, shoes, accessories, fine jewelry & home</p>
              </div>
              <div className="coupon-secondary-offer mrg-M">
              <p class="price coupon-text-or">OR</p>
                <h4 className="price price-M">Extra 25% OFF Under $100</h4>
                <p className="std-txt std-txt-S">with any method of payment</p>
              </div>
              <div className="coupon-code mrg-S">
                <span className="std-txt std-txt-S">Expires: 11/05/2017</span>
                <p><span>Code: </span><span className="std-txt std-txt-S">SHOPNOW4</span></p>
              </div>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full mrg-S">Apply</a>
              <div className="coupon-see-details">
              <a href="javascript:void(0)" className="link-S btn-tiny">shop home</a>
              <a href="javascript:void(0)" className="link-S btn-tiny">see details</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coupons;