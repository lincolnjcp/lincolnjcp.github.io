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
        <div class="row">
          <div class="color-swatches-block mrg-L fl-left">
            <h2 class="title title-L mrg-btm-M">Product Swatches</h2>
            <div class="md8 lg8">
              <ul class="list-product-colors-container swatches-grid">
                <li>
                  <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a>
                  <span class="std-txt-label">Selected</span>
                </li>
                <li>
                  <a href="javascript:void(0)" class="list-color-swatch"></a>
                  <span class="std-txt-label">Default</span>
                </li>
                <li>
                  <a href="javascript:void(0)" class="list-color-swatch hover"></a>
                  <span class="std-txt-label">Hover</span>
                </li>
                <li>
                  <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-oos"></a>
                  <span class="std-txt-label">Out of Stock</span>
                </li>
                <li>
                  <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active list-color-swatch-oos"></a>
                  <span class="std-txt-label">Out of Stock Selected</span>
                </li>
                <li class="focus">
                  <a href="javascript:void(0)" class="list-color-swatch hover"></a>
                  <span class="std-txt-label">ARIA focus</span>
                </li>
              </ul>
            </div><br /><br /><br /><br />
            <div class="md6 lg4 sm12 column">
              <div class="md12 lg12 sm12">
                <h2 class="title title-L mrg-btm-M">Expand/Collapse</h2>
                <span class="std-txt-label">Large/XL Breakpoint</span>
                <div>
                  <p>
                    <span><strong>Color:</strong> Blue</span>
                  </p>
                </div>
                <div>
                  <ul class="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li class="swatches-list-icon">
                      <a href="javascript:void(0)" class="list-color-swatch list-expand plus-expand">
                        <span dangerouslySetInnerHTML={{ __html: plusImage }} />
                      </a>
                    </li>
                  </ul>
                </div>

              </div><br /><br /><br />

              <br /><br /><br />

              <div class="md12 lg12 sm12">
                <span class="std-txt-label">Small Breakpoint</span>
                <div>
                  <p>
                    <span><strong>Color:</strong> Blue</span>
                  </p>
                </div>
                <div>
                  <ul class="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li class="swatches-list-icon swatches-list-icon-large" dangerouslySetInnerHTML={{ __html: plusImage }} >
                    </li>
                  </ul>
                </div>
              </div><br /><br /><br />

              <div class="md12 lg12 sm12">
                <div>
                  <p>
                    <span><strong>Color:</strong> Blue</span>
                  </p>
                </div>
                <div>
                  <ul class="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="md6 lg4 sm12 column">
              <h2 class="title title-L mrg-btm-M">Sizing</h2>
              <div class="md12 lg12 sm12">
                <div class="color-swatches-medium mrg-btm-L">
                  <ul class="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                  </ul>
                  <span class="std-txt-label">Medium - Gallery (>5)</span>
                </div>
                <div class="color-swatches-small">
                  <ul class="list-product-colors-container">
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="list-color-swatch"></a>
                    </li>
                    <li class="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >
                    </li>
                  </ul>
                  <span class="std-txt-label">Small - Gallery (>5)</span>
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