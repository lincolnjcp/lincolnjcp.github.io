import React, { Component } from 'react';
import $ from 'jquery';

const ChevronLeftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-left.svg');
const ChevronRightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-right.svg');

class RecommendationZone extends Component {
  productCardRecommendations(productInfo) {
    return (
      <li className="product-card">
        <a href="javascript:void(0)" className="">
          <div className="product-card-recommendation">

            {(() => {
              if (productInfo.thumb) {
                return (
                  <div className="product-card-thumbnail mrg-S">
                    <a href="javascript:void(0)">
                      <img src={productInfo.thumb} alt="" />
                    </a>
                  </div>
                )
              }
            })()}

            {(() => {
              if (productInfo.promo) {
                return (
                  <div className="price price-promo-S mrg-XS color-penneyred">
                    {productInfo.promo}
                  </div>
                )
              }
            })()}

            <div className="product-card-price">
              {(() => {
                if (productInfo.priceHighlight === true) {
                  return (
                    <div className="product-card-price-value">
                      <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                        <div className="price price-XS color-white">{productInfo.price}</div>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="product-card-price-value price price-XS mrg-rght-XS">
                      {productInfo.price}
                    </div>
                  )
                }
              })()}


              {(() => {
                if (productInfo.priceRestriction) {
                  return (
                    <div className="product-card-note price price-note color-penneyred">
                      {productInfo.priceRestriction}
                    </div>
                  )
                }
              })()}

            </div>

            {(() => {
              if (productInfo.priceRegular) {
                return (
                  <div className="product-card-note price price-note color-slate font-body">
                    {productInfo.priceRegular}
                  </div>
                )
              }
            })()}
            <h6 className="product-card-name std-txt std-txt-S color-nightsky">
              {productInfo.name}
            </h6>

            <div className="ratings-and-reviews">
              <div className="ratings-and-reviews-stars mrg-rght-XS">
                <div className="star-preview-col fl-right">
                  <ul className="star-ratings-L">
                    <li className="star-ratings full">★</li>
                    <li className="star-ratings full">★</li>
                    <li className="star-ratings full">★</li>
                    <li className="star-ratings full">★</li>
                    <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
                      99,999
                    </div>
                  </ul>
                </div>
              </div>


            </div>

          </div>
        </a>
      </li>
    )
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Recommendation Zone</h1>
          </div>
          <div className="row">
            <div className="sm12 columns">
              <h2><strong>Rec Row</strong></h2>
              <hr />
              <div className="product-card-wrapper position-rel">
                <ul>
                  <div className="chevron-wrapper hide-for-small-only hide-for-medium-only">
                    <a href="javascript:void(0);" className="rec-zone-chevron-left icon chevron-icon" dangerouslySetInnerHTML={{__html: ChevronLeftImage}}></a>
                    <a href="javascript:void(0);" className="rec-zone-chevron-right icon chevron-icon" dangerouslySetInnerHTML={{__html: ChevronRightImage}}></a>
                  </div>
                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg',
                    promo: 'SAMSUNG BUY 4 SAVE 10%',
                    price: '$2,499 - $3,999',
                    priceHighlight: true,
                    priceRestriction: '',
                    priceRegular: 'reg. $2,999 - $5,999'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg',
                    promo: '',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $99.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg',
                    promo: '',
                    price: '$299.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $99.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg',
                    promo: '',
                    price: '$599.99',
                    priceHighlight: false,
                    priceRestriction: '',
                    priceRegular: ''
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg',
                    promo: '',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $60'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg',
                    promo: '',
                    price: '$99.99',
                    priceHighlight: false,
                    priceRestriction: 'clearance',
                    priceRegular: 'was $299.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg',
                    promo: '',
                    price: '$299.99 - $399.99',
                    priceHighlight: false,
                    priceRestriction: 'clearance',
                    priceRegular: 'was $499.99 - $699.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg',
                    promo: '',
                    price: '$2,999 - $3,999',
                    priceHighlight: false,
                    priceRestriction: 'package deal',
                    priceRegular: 'was $4,999 - $6,999'
                  })}
                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg',
                    promo: 'SAMSUNG BUY 4 SAVE 10%',
                    price: '$2,499 - $3,999',
                    priceHighlight: true,
                    priceRestriction: '',
                    priceRegular: 'reg. $2,999 - $5,999'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg',
                    promo: '',
                    price: '$59.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $99.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg',
                    promo: '',
                    price: '$299.99',
                    priceHighlight: true,
                    priceRestriction: 'after coupon',
                    priceRegular: 'reg. $99.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg',
                    promo: '',
                    price: '$599.99',
                    priceHighlight: false,
                    priceRestriction: '',
                    priceRegular: ''
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg',
                    promo: '',
                    price: '$29.99',
                    priceHighlight: false,
                    priceRestriction: 'sale',
                    priceRegular: 'was $60'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg',
                    promo: '',
                    price: '$99.99',
                    priceHighlight: false,
                    priceRestriction: 'clearance',
                    priceRegular: 'was $299.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg',
                    promo: '',
                    price: '$299.99 - $399.99',
                    priceHighlight: false,
                    priceRestriction: 'clearance',
                    priceRegular: 'was $499.99 - $699.99'
                  })}

                  {this.productCardRecommendations({
                    name: "Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…",
                    thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg',
                    promo: '',
                    price: '$2,999 - $3,999',
                    priceHighlight: false,
                    priceRestriction: 'package deal',
                    priceRegular: 'was $4,999 - $6,999'
                  })}
                </ul>
                <div classname="rec-zone-carousel show-for-small-only show-for-medium-only">
                  <input type="radio" id="one" name="name" value="" defaultChecked="true"/>
                  <label htmlFor="one"></label>
                  <input type="radio" id="two" name="name" value=""/>
                  <label htmlFor="two"></label>
                  <input type="radio" id="three" name="name" value=""/>
                  <label htmlFor="three"></label>
                  <input type="radio" id="four" name="name" value=""/>
                  <label htmlFor="four"></label>
                  <input type="radio" id="five" name="name" value=""/>
                  <label htmlFor="five"></label>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="sm12 columns">
            <hr />
            <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
              <br /> Latest update: 04/05/2017</p>
          </div>
        </div>
      </div>

    );
  }
}

export default RecommendationZone;