import React, { Component } from 'react';

class Coupons extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="coupon-block flex-grid sm12 md6 lg4 xl3">
            <div className="coupon-list">
              <span className="std-txt std-txt-S">Online Only</span>
              <h2 className="title-L">Extra 30% OFF $100+</h2>
              <p className="title title-S">select apparel, shoes, accessories, fine jewelry & home</p>
              <h4 className="title-M">Or Extra 25% OFF Under $100</h4>
              <p className="title-S">with any method of payment</p>
              <span className="std-txt-S">Expires: 11/05/2017</span>
              <p><span>Code: </span><span className="std-txt-S">SHOPNOW4</span></p>
              <a href="javascript:void();" className="btn btn-S btn-primary apply-btn btn-full">Apply</a>
              <p>
                <a href="javascript:void(0)">shop home</a>
                <a href="javascript:void(0)">see details</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coupons;