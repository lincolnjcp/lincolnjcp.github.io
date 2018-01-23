import React, { Component } from 'react';

class Selectors extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="selectors">
          <h3 className="title title-L mrg-L">SKU Selectors</h3>
          <div className="std-txt-label mrg-S">Small</div>
          <div className="mrg-XL">
            <span className="sku-block selected mrg-rght-S">XS</span>
            <span className="sku-block normal mrg-rght-S">M</span>
            <span className="sku-block mrg-rght-S hover">Hover</span>
            <span className="sku-block error mrg-rght-S">L</span>
            <a href="javascript:void(0)" className="oo-label-block">
              <span className="sku-block oo-stock mrg-rght-S">XL</span>
              <span className="oo-stock-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" className="sku-focus">
              <span className="sku-block normal mrg-rght-S">1X</span>
            </a>
          </div>

          <div className="std-txt-label mrg-S">Large</div>
          <div className="mrg-XL">
            <span className="sku-block sku-block-L selected mrg-rght-S">small</span>
            <span className="sku-block sku-block-L normal mrg-rght-S">medium</span>
            <span className="sku-block sku-block-L hover mrg-rght-S">medium</span>
            <span className="sku-block sku-block-L error mrg-rght-S">large</span>
            <a href="javascript:void(0)" className="oo-label-block">
              <span className="sku-block sku-block-L oo-stock mrg-rght-S">xlarge</span>
              <span className="oo-stock-label">Out of Stock Online</span>
            </a>
          </div>

          <div className="std-txt-label mrg-S">Large with Image</div>
          <div className="mrg-XL">
            <span className="sku-block sku-block-L selected mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
            </span>
            <span className="sku-block sku-block-L normal mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
            </span>
            <span className="sku-block sku-block-L error mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
            </span>
            <a href="javascript:void(0)" className="oo-label-block">
              <span className="sku-block sku-block-L oo-stock mrg-rght-S">
                <img src="http://placehold.it/100/100" alt="" />
              </span>
              <span className="oo-stock-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" className="sku-focus oo-label-block">
              <span className="sku-block sku-block-L error mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
              </span>
            </a>
          </div>


          <div className="std-txt-label mrg-S">Large with double line</div>
          <div className="mrg-XL">
          <p className="sku-block sku-block-L sku-double-block-L selected mrg-rght-S"><span class="price-content">$29.99 </span> <span class="standart-content">1 year protection plan</span></p>
          <p className="sku-block sku-block-L sku-double-block-L normal mrg-rght-S"><span class="price-content">$59.99 </span> <span class="standart-content">2 year protection plan</span></p>
          <p className="sku-block sku-block-L sku-double-block-L hover mrg-rght-S"><span class="price-content">$55.99 </span> <span class="standart-content">2 year protection plan</span></p>
    
            
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Selectors;