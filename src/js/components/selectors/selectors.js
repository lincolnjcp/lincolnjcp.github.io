import React, { Component } from 'react';
const successImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success.svg');
class Selectors extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row">
        <div class="selectors">
          <h3 class="title title-L mrg-L">SKU Selectors</h3>
          <div class="std-txt-label mrg-S">Small</div>
          <div class="mrg-XL">
            <span class="sku-block sku-block-selected mrg-rght-S mrg-S">XS <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">M</span>
            <span class="sku-block mrg-rght-S hover mrg-S">Hover</span>
            <span class="sku-block error mrg-rght-S mrg-S">L</span>
            <a href="javascript:void(0)" class="sku-block-oos-label">
            <span class="sku-block sku-block-selected mrg-rght-S">XS <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-block-oos-label">
              <span class="sku-block sku-block-oos mrg-rght-S">XL</span>
              <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-focus">
              <span class="sku-block sku-block-normal">1X</span>
            </a>
          </div>

          <div class="std-txt-label mrg-S">Large</div>
          <div class="mrg-XL">
            <span class="sku-block sku-block-L sku-block-selected mrg-rght-S">small <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} /></span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S">medium</span>
            <span class="sku-block sku-block-L hover mrg-rght-S">medium</span>
            <span class="sku-block sku-block-L error mrg-rght-S">large</span>
            <a href="javascript:void(0)" class="sku-block-oos-label">
            <span class="sku-block sku-block-L sku-block-selected mrg-rght-S">XS <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-block-oos-label">
              <span class="sku-block sku-block-L sku-block-oos mrg-rght-S">xlarge</span>
              <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-focus">
              <span class="sku-block sku-block-L sku-block-normal mrg-rght-S">1X</span>
            </a>
          </div>

          <div class="std-txt-label mrg-S">Large with Image</div>
          <div class="mrg-XL">
            <span class="sku-block sku-block-L sku-block-selected mrg-rght-S">
            
              <img src="http://placehold.it/100/100" alt="" />
              <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
            </span>
            <span class="sku-block sku-block-L error mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
            </span>
            <a href="javascript:void(0)" class="sku-block-oos-label">
              <span class="sku-block sku-block-L sku-block-oos mrg-rght-S">
                <img src="http://placehold.it/100/100" alt="" />
              </span>
              <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-block-oos-label">
              <span class="sku-block sku-block-oos sku-block-selected sku-block-L mrg-rght-S">
                <img src="http://placehold.it/100/100" alt="" />
                <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
              </span>
              <span class="oos-label">Out of Stock Online</span>
            </a>
            <a href="javascript:void(0)" class="sku-focus sku-block-oos-label">
              <span class="sku-block sku-block-L error mrg-rght-S">
              <img src="http://placehold.it/100/100" alt="" />
              </span>
            </a>
          </div>


          <div class="std-txt-label mrg-S">Large with double line</div>
          <div class="mrg-XL">
          <p class="sku-block sku-block-L sku-double-block-L sku-block-selected mrg-rght-S"><span class="price-content">$29.99 </span> <span class="standart-content">1 year protection plan</span> <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} /></p>
          <p class="sku-block sku-block-L sku-double-block-L sku-block-normal mrg-rght-S"><span class="price-content">$59.99 </span> <span class="standart-content">2 year protection plan</span></p>
          <p class="sku-block sku-block-L sku-double-block-L hover mrg-rght-S"><span class="price-content">$55.99 </span> <span class="standart-content">2 year protection plan</span></p>
          </div>

          <h3 class="title title-L mrg-L">Overflow</h3>
          <div class="std-txt-label mrg-S">Overflow XL - M</div>
          <div class="mrg-XL lg8">
            <span class="sku-block sku-block-selected mrg-rght-S">size label <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal show-more mrg-rght-S mrg-S">show more</span>
          </div>

          <div class="mrg-XL lg8">
            <span class="sku-block sku-block-L sku-block-selected mrg-rght-S">size label <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-L sku-block-normal show-more mrg-rght-S mrg-S">show more</span>
          </div>
        
          <div class="std-txt-label mrg-S">Overflow S</div>
          <div class="mrg-XL lg5">
            <span class="sku-block sku-block-selected mrg-rght-S">size label <span class="color-shadow-svg success-checkbox"  dangerouslySetInnerHTML={{ __html: successImage }} />
            </span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal mrg-rght-S mrg-S">size label</span>
            <span class="sku-block sku-block-normal show-more mrg-rght-S mrg-S">show more</span>

          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Selectors;