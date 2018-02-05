import React, { Component } from 'react';
import $ from 'jquery';
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class Swatches extends Component {

  componentDidMount() {
    $('.plus-expand').on('click', function (e) {
      $(this).toggleClass("close-expand");
  });
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="color-swatches-block mrg-L fl-left">
          <h2 className="title title-L mrg-M">Product Swatches</h2>
          <div className="md8 lg8">
            <ul className="list-product-colors-container swatches-grid">
              <li>
                <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                <span className="std-txt-label">Selected</span>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
                <span className="std-txt-label">Default</span>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch hover"></a>
                <span className="std-txt-label">Hover</span>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-oos"></a>
                <span className="std-txt-label">Out of Stock</span>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active list-color-swatch-oos"></a>
                <span className="std-txt-label">Out of Stock Selected</span>
              </li>
              <li className="focus">
                <a href="javascript:void(0)" className="list-color-swatch hover"></a>
                <span className="std-txt-label">ARIA focus</span>
              </li>
            </ul>
          </div><br/><br/><br/><br/>
          <div className="md6 lg4 sm12 column">
            <div className="md12 lg12 sm12">
              <h2 className="title title-L mrg-M">Expand/Collapse</h2>
              <span className="std-txt-label">Large/XL Breakpoint</span>
              <div>
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div>
                  <ul className="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li className="swatches-list-icon">
                      <a href="javascript:void(0)" className="list-color-swatch list-expand plus-expand">
                        <span dangerouslySetInnerHTML={{ __html: plusImage }}/>
                      </a>                  
                  </li>
                  </ul>
              </div>

            </div><br/><br/><br/>



            <br/><br/><br/>

            <div className="md12 lg12 sm12">
              <span className="std-txt-label">Small Breakpoint</span>
              <div>
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div>
                  <ul className="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li className="swatches-list-icon swatches-list-icon-large" dangerouslySetInnerHTML={{ __html: plusImage }} >
                    </li>
                  </ul>
              </div>
            </div><br/><br/><br/>

            <div className="md12 lg12 sm12">
              <div>
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div>
                  <ul className="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch"></a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="md6 lg4 sm12 column">
          <h2 className="title title-L mrg-M">Sizing</h2>
            <div className="md12 lg12 sm12">
              <div className="color-swatches-medium mrg-L">
                <ul className="list-product-colors-container">
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li className="swatches-list-icon">
                    <a href="javascript:void(0)" className="list-color-swatch plus-expand">
                      <span dangerouslySetInnerHTML={{ __html: plusImage }}/>
                    </a>                  
                  </li>
                </ul>
                <span className="std-txt-label">Medium - Gallery (>5)</span>
              </div>
              <div className="color-swatches-small">
                <ul className="list-product-colors-container">
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="list-color-swatch"></a>
                  </li>
                  <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >
                    </li>
                </ul>
                <span className="std-txt-label">Small - Gallery (>5)</span>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    );
  }
}

export default Swatches;