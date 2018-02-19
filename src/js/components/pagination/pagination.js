import React, { Component } from 'react';

const BackToTopImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/back-to-top.svg');
const chevronleftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-left.svg');
const chevronrightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-right.svg');
class Pagination extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="paginiation-block mrg-lft-M">
            <h1 class="title title-XL mrg-L">Pagination</h1>
            <div class="pagination mrg-XXL">
              <p class="std-txt-label">Selected</p>
              <ul>
                <li class="pagination hidden" aria-label="Prev">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronleftImage}} />
                </li>
                <li class="pagination-lbl pagination-active">1</li>
                <li class="pagination-lbl">2</li>
                <li class="pagination-lbl">3</li>
                <li class="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination" aria-label="Next">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronrightImage}} />
                </li>
              </ul>
            </div>
            <div class="pagination mrg-XXL">
              <p class="std-txt-label">On Hover</p>
              <ul>
                <li class="pagination hidden" aria-label="Prev">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronleftImage}} />
                </li>
                <li class="pagination-lbl pagination-active">1</li>
                <li class="pagination-lbl hover">2</li>
                <li class="pagination-lbl">3</li>
                <li class="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination" aria-label="Next">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronrightImage}} />
                </li>
              </ul>
            </div>
            <div class="pagination mrg-XXL">
              <p class="std-txt-label">Other pages selected</p>
              <ul>
                <li class="pagination" aria-label="Prev">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronleftImage}} />
                </li>
                <li class="pagination-lbl">1</li>
                <li class="pagination-lbl">2</li>
                <li class="pagination-lbl pagination-active">3</li>
                <li class="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination" aria-label="Next">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronrightImage}} />
                </li>
              </ul>
            </div>
            <div class="pagination mrg-XXL">
              <p class="std-txt-label">s</p>
              <ul>
                <li class="pagination" aria-label="Prev">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronleftImage}} />
                </li>
                <li class="pagination-lbl">1</li>
                <li class="pagination-lbl pagination-active">2</li>
                <li class="pagination-lbl">3</li>
                <li class="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination" aria-label="Next">
                  <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronrightImage}} />
                </li>
              </ul>
            </div>
          </div>
          <div class="breadcrumbs-block">
              <h1 class="title title-XL mrg-L">Breadcrumbs</h1>
              <ul class="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li><a href="#">Clothing</a></li>
                <li>Dresses</li>
              </ul>
          </div><br/><br/><br/>

          <div class="back-to-product">
            <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chevronleftImage}} /> 
            <li><a href="javascript:void(0);">Back to Products </a> </li>
          </div><br/><br/><br/>
          <div class="back-to-top-block">
              <h1 class="title title-XL mrg-L">Back to Top</h1>
              <div class="back-to-top">
                <span class="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: BackToTopImage}} />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;