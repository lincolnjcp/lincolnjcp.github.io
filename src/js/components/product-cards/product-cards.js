import React, { Component } from 'react';

class ProductCards extends Component {
  productCardRecommendations(productInfo) {
    return(
    <div className="product-card product-card-recommendation">
          
      {(() => {
        if (productInfo.thumb) {
          return (
            <div className="product-card-thumbnail mrg-S">
              <a href="javascript:void(0)" className="product-card-name">
                <img src={productInfo.thumb} alt="" />
              </a>      
            </div>
          )
        }
      })()}

      {(() => {
        if (productInfo.promo) {
          return (
            <div className="price price-promo mrg-XS color-penneyred">
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
                <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">{productInfo.price}</div>
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

      

      <a href="javascript:void(0)" className="product-card-name std-txt std-txt-S color-nightsky">
        {productInfo.name}
      </a>

      <div className="ratings-and-reviews">
        <div className="ratings-and-reviews-stars mrg-rght-XS">
          <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
        </div>
        <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
          99,999
        </div>

      </div>

    </div>
    )
  }


  componentDidMount() {
        
        
  }

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Product Cards</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>

        </div>
    </div>

    <div className="row">
        <div className="sm12 columns">
            <div className="product-card-recommendations">
              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg',
                promo: 'SAMSUNG BUY 4 SAVE 10%',
                price: '$2,499 - $3,999',
                priceHighlight: true,
                priceRestriction: '',
                priceRegular: 'reg. $2,999 - $5,999'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg',
                promo: '',
                price: '$59.99',
                priceHighlight: true,
                priceRestriction: 'after coupon',
                priceRegular: 'reg. $99.99'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg',
                promo: '',
                price: '$299.99',
                priceHighlight: true,
                priceRestriction: 'after coupon',
                priceRegular: 'reg. $99.99'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg',
                promo: '',
                price: '$599.99',
                priceHighlight: false,
                priceRestriction: '',
                priceRegular: ''
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg',
                promo: '',
                price: '$29.99',
                priceHighlight: false,
                priceRestriction: 'sale',
                priceRegular: 'was $60'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg',
                promo: '',
                price: '$99.99',
                priceHighlight: false,
                priceRestriction: 'clearance',
                priceRegular: 'was $299.99'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg',
                promo: '',
                price: '$299.99 - $399.99',
                priceHighlight: false,
                priceRestriction: 'clearance',
                priceRegular: 'was $499.99 - $699.99'
              })}

              {this.productCardRecommendations({
                name:"Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg',
                promo: '',
                price: '$2,999 - $3,999',
                priceHighlight: false,
                priceRestriction: 'package deal',
                priceRegular: 'was $4,999 - $6,999'
              })}
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

export default ProductCards;