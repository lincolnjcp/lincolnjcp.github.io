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
          <div className="color-swatches-list md8 lg8">
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
          <div className="md6 lg6 sm12 column">
            <div className="color-swatches-list md12 lg12 sm12">
              <h2 className="title title-L mrg-M">Expand/Collapse</h2>
              <span className="std-txt-label">Large/XL Breakpoint</span>
              <div className="color-swatches-list-label">
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div className="color-swatches-list">
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

              <div className="color-swatches-list images-swatches-list">
                  <ul className="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0816201717175526S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175023S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175123S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043269S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175173S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111344S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175223S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111628S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043369S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0726201717065030S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111678S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111357S"/>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="list-color-swatch">
                        <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043169S"/>
                      </a>
                    </li>
                    <li className="swatches-list-icon swatches-list-icon-large" dangerouslySetInnerHTML={{ __html: plusImage }} >

                    </li>
                  </ul>
              </div>

            </div><br/><br/><br/>



            <br/><br/><br/>

            <div className="color-swatches-list md12 lg12 sm12">
              <span className="std-txt-label">Small Breakpoint</span>
              <div className="color-swatches-list-label">
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div className="color-swatches-list">
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

            <div className="color-swatches-list md12 lg12 sm12">
              <div className="color-swatches-list-label">
                <p>
                  <span><strong>Color:</strong> Blue</span>
                </p>
              </div>
              <div className="color-swatches-list">
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

          <div className="md6 lg6 sm12 column">
          <h2 className="title title-L mrg-M">Sizing</h2>
            <div className="color-swatches-list md12 lg12 sm12">
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