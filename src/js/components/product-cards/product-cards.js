import React, { Component } from 'react';
import $ from 'jquery';

const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');

class ProductCards extends Component {
  productCardRecommendations(productInfo) {
    return(
    <div className="product-card product-card-recommendation">
          
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
            <div className="product-card-note price price-note color-slate std-txt">
              {productInfo.priceRegular}
            </div>      
          )
        }
      })()}

      

      <div className="product-card-name std-txt std-txt-S color-nightsky">
        {productInfo.name}
      </div>

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



  productCardGalleryPanesLarge(productInfo) {
    return(
    <div className="product-card product-card-pane-L">
          
      {(() => {
        if (productInfo.thumb) {
          return (
            <div className="product-card-thumbnail">
              <a href="javascript:void(0)">
                <img src={productInfo.thumb} alt="" />
              </a>
              {(() => {
                if (productInfo.flag) {
                  return (
                    <div class="flag flag-info std-txt std-txt-XS">
                      {productInfo.flag}
                    </div>
                  )
                }
              })()}
              <div className="like-icon">
                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                <div className="tooltip tooltip-single tooltip-top-right">
                  <span className="tooltip-content">Favorite</span>
                </div>
              </div>
            </div>
          )
        }
      })()}

      <div className="color-swatches-block">
        <div className="color-swatches-list">
          <div className="color-swatches-medium">
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
              <li className="swatches-list-link">
                <a href="javascript:void(0)" className="std-txt std-txt-S color-nightsky">
                  +23
                </a>                  
              </li>
            </ul>
          </div>
        </div>
      </div>

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
                <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                  <div className="price price-S color-white">{productInfo.price}</div>
                </div>
              </div>      
            )
          } else {
            return (
              <div className="product-card-price-value price price-S mrg-rght-XS">
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
            <div className="product-card-note price price-note color-slate std-txt">
              {productInfo.priceRegular}
            </div>      
          )
        }
      })()}

      

      <div className="product-card-name std-txt std-txt-S color-nightsky">
        {productInfo.name}
      </div>

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



    productCardGalleryPanesSmall(productInfo) {
    return(
    <div className="product-card product-card-pane-S">
          
      {(() => {
        if (productInfo.thumb) {
          return (
            <div className="product-card-thumbnail">
              <a href="javascript:void(0)">
                <img src={productInfo.thumb} alt="" />
              </a>
              {(() => {
                if (productInfo.flag) {
                  return (
                    <div class="flag flag-info std-txt std-txt-XS">
                      {productInfo.flag}
                    </div>
                  )
                }
              })()}
              <div className="like-icon">
                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                <div className="tooltip tooltip-single tooltip-top-right">
                  <span className="tooltip-content">Favorite</span>
                </div>
              </div>
            </div>
          )
        }
      })()}

      <div className="color-swatches-block">
        <div className="color-swatches-list">
          <div className="color-swatches-small">
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
              <li className="swatches-list-link">
                <a href="javascript:void(0)" className="std-txt std-txt-S color-nightsky">
                  +23
                </a>                  
              </li>
            </ul>
          </div>
        </div>
      </div>

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
            <div className="product-card-note price price-note color-slate std-txt">
              {productInfo.priceRegular}
            </div>      
          )
        }
      })()}

      

      <div className="product-card-name std-txt std-txt-XS color-nightsky">
        {productInfo.name}
      </div>

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


   productCardGalleryListView(productInfo) {
    return(
    <div className="product-card product-card-list-view">
          
      {(() => {
        if (productInfo.thumb) {
          return (
            <div className="product-card-thumbnail">
              <a href="javascript:void(0)">
                <img src={productInfo.thumb} alt="" />
              </a>
              {(() => {
                if (productInfo.flag) {
                  return (
                    <div class="flag flag-info flag-S std-txt std-txt-XXS">
                      {productInfo.flag}
                    </div>
                  )
                }
              })()}
              <div className="like-icon">
                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                <div className="tooltip tooltip-single tooltip-top-right">
                  <span className="tooltip-content">Favorite</span>
                </div>
              </div>
            </div>
          )
        }
      })()}
      <div className="product-card-details">

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
              <div className="product-card-note price price-note color-slate std-txt">
                {productInfo.priceRegular}
              </div>      
            )
          }
        })()}

        

        <div className="product-card-name std-txt std-txt-XS color-nightsky">
          {productInfo.name}
        </div>

        <div className="ratings-and-reviews">
          <div className="ratings-and-reviews-stars mrg-rght-XS">
            <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
          </div>
          <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
            99,999
          </div>

        </div>
      </div>
    </div>
    )
  }




  pricingCart(productInfo) {
    return(
    <div className="pricing-cart algn-rght algn-lft-S">
          
      
      <div className="product-card-details">

        {(() => {
          if (productInfo.details) {
            return (
              <div className="std-txt std-txt-XS mrg-XS color-slate"  dangerouslySetInnerHTML={{__html: productInfo.details}}>
              </div>      
            )
          }
        })()}

        {(() => {
          if (productInfo.promo) {
            return (
              <div className="price price-promo mrg-XS color-penneyred" dangerouslySetInnerHTML={{__html: productInfo.promo}}></div>      
            )
          }
        })()}

        {(() => {
          if (productInfo.priceNotes) {         

             return productInfo.priceNotes.map(function(value) {
              return <div className="product-card-note price price-note color-nightsky font-body" dangerouslySetInnerHTML={{ __html: value.text }}></div>;
            });

          }
        })()}

        {(() => {
          if (productInfo.price) {
            return (
              <div className="product-card-price-value price price-XS" dangerouslySetInnerHTML={{__html: productInfo.price}}></div>      
            )
          }
        })()}
 
      </div>
    </div>
    )
  }


















    productPanesList(productInfo) {
    return(
    <div className="product-card product-card-pane-list">
      <div className="product-card-inner">
      <div className="product-card-image">
        {(() => {
          if (productInfo.thumb) {
            return (
              <div className="product-card-thumbnail">
                <a href="javascript:void(0)">
                  <img src={productInfo.thumb} alt="" />
                </a>
                {(() => {
                  if (productInfo.flag) {
                    return (
                      <div class="flag flag-info std-txt std-txt-XS">
                        {productInfo.flag}
                      </div>
                    )
                  }
                })()}
                <div className="like-icon">
                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                  <div className="tooltip tooltip-single tooltip-top-right">
                    <span className="tooltip-content">Favorite</span>
                  </div>
                </div>
                {(() => {
                  if (productInfo.altLink) {
                    return (
                      <a className="alt-link std-txt std-txt-XS" href="javascript:void(0);" dangerouslySetInnerHTML={{ __html: productInfo.altLink }} />
                    )
                  }
                })()}
              </div>
            )
          }
        })()}

        <div className="color-swatches-block hide-for-small-only">
          <div className="color-swatches-list">
            <div className="color-swatches-medium">
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
                <li className="swatches-list-link">
                  <a href="javascript:void(0)" className="std-txt std-txt-S color-nightsky">
                    +23
                  </a>                  
                </li>
              </ul>
            </div>
          </div>
        </div>

         {(() => {
          if (productInfo.compare) {         

            return (
              <div className="product-card-compare input-group">
                <label className="checkbox mrg-M">
                    <input type="checkbox" /> <span className="std-txt std-txt-S color-nightsky">Compare</span>
                </label>
              </div>
            )

            }
          })()}
      </div>

      <div className="product-card-details">

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
              return (
                  <div className="product-card-price-value price price-S mrg-rght-XS">
                    {productInfo.price}
                  </div>      
                )
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
                <div className="product-card-note price price-note color-slate std-txt">
                  {productInfo.priceRegular}
                </div>      
              )
            }
          })()}

          
          <div className="product-card-name-wrap">
            <div className="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">
              {productInfo.name}
            </div>
          </div>

          <div className="ratings-and-reviews">
            <div className="ratings-and-reviews-stars mrg-rght-XS">
              <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
            </div>
            <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
              99,999
            </div>
          </div>

          

          {(() => {
          if (productInfo.productFeatures) {         

             var listItems = productInfo.productFeatures.map(function(value) {
                return <li className="price price-note color-slate font-body" dangerouslySetInnerHTML={{ __html: value.text }}></li>;
              });

             return (<div><div className="std-txt std-txt-S product-features color-nightsky hide-for-small-only">Product Features</div><ul className="list hide-for-small-only">{listItems}</ul></div>)

            }
          })()}
          </div>
        </div>
    </div>
    )
  }















  productPanesGrid(productInfo) {
    return(
    <div className="product-card product-card-pane-grid">
      <div className="product-card-inner">
      <div className="product-card-image">
        {(() => {
          if (productInfo.thumb) {
            return (
              <div className="product-card-thumbnail">
                <a href="javascript:void(0)">
                  <img src={productInfo.thumb} alt="" />
                </a>
                {(() => {
                  if (productInfo.flag) {
                    return (
                      <div class="flag flag-info std-txt std-txt-XS">
                        {productInfo.flag}
                      </div>
                    )
                  }
                })()}
                <div className="like-icon">
                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                  <div className="tooltip tooltip-single tooltip-top-right">
                    <span className="tooltip-content">Favorite</span>
                  </div>
                </div>
                {(() => {
                  if (productInfo.altLink) {
                    return (
                      <a className="alt-link std-txt std-txt-XS" href="javascript:void(0);" dangerouslySetInnerHTML={{ __html: productInfo.altLink }} />
                    )
                  }
                })()}
              </div>
            )
          }
        })()}

        <div className="color-swatches-block hide-for-small-only">
          <div className="color-swatches-list">
            <div className="color-swatches-medium">
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
                <li className="swatches-list-link">
                  <a href="javascript:void(0)" className="std-txt std-txt-S color-nightsky">
                    +23
                  </a>                  
                </li>
              </ul>
            </div>
          </div>
        </div>

         
      </div>

      <div className="product-card-details">

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
              return (
                  <div className="product-card-price-value price price-S mrg-rght-XS">
                    {productInfo.price}
                  </div>      
                )
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
                <div className="product-card-note price price-note color-slate std-txt">
                  {productInfo.priceRegular}
                </div>      
              )
            }
          })()}

          
          <div className="product-card-name-wrap">
            <div className="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">
              {productInfo.name}
            </div>
          </div>

          <div className="ratings-and-reviews">
            <div className="ratings-and-reviews-stars mrg-rght-XS">
              <img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="" />
            </div>
            <div className="ratings-and-reviews-count color-slate std-txt std-txt-XXS">
              99,999
            </div>
          </div>

          
          </div>

          {(() => {
          if (productInfo.compare) {         

            return (
              <div className="product-card-compare">
                <div className="product-card-compare-inner input-group">
                  <label className="checkbox">
                      <input type="checkbox" /> <span className="std-txt std-txt-S color-nightsky">Compare</span>
                  </label>
                </div>
              </div>
            )

            }
          })()}

        </div>
    </div>
    )
  }


  componentDidMount() {
        
    $(".heart").on("click", function() {
      var parent = $(this).closest('.like-icon');
      var tooltip = parent.find('.tooltip-content');
      parent.closest('.like-icon').toggleClass("is-active");
        if(parent.hasClass("is-active")) {
          tooltip.html('Added<br /><a href="javascript:void(0);">View My Favorites</a>');
        }
    });


    $(".like-icon").mouseleave(function() {
        var parent = $(this).closest('.like-icon');
        var tooltip = parent.find('.tooltip-content');
        if(parent.hasClass("is-active")) {
          tooltip.html('Remove Favorite');
        } else {
          tooltip.html('Favorite');
        }
    });



    $(window).on("resize", function () {        
        var gridYPos = 0;
        var gridRow = [];
        var gridRowHasCompare = false;
        $( ".product-card-pane-grid" ).each(function( index ) {
          if($(this).find('.product-card-compare').length > 0) {
            gridRowHasCompare = true;
          }
          if(gridYPos == 0) {
            gridYPos = $( this ).offset().top;
            gridRow.push($(this));
          } else if(gridYPos !== $( this ).offset().top) { //New Row
            $(gridRow).each(function( index ) {
              if(gridRowHasCompare === false) {
                
                $(this).addClass('product-card-pane-grid-no-compare');
              } else {
                $(this).removeClass('product-card-pane-grid-no-compare');
              }
            });
            gridRow = [];
            gridRow.push($(this));
            gridYPos = $( this ).offset().top;
            gridRowHasCompare = false;
          } else {
            gridRow.push($(this));
          }
          

        });
        $(gridRow).each(function( index ) {
          if(gridRowHasCompare === false) {
            $(this).addClass('product-card-pane-grid-no-compare');
          } else {
                $(this).removeClass('product-card-pane-grid-no-compare');
              }
        });
    }).resize();



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
            <h2><strong>Product Panes Grid</strong></h2>
            <hr />
            <div className="product-card-wrapper mrg-M">
              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: true
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: true
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: true
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: false
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: false
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: false
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: false
              })}

              {this.productPanesGrid({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                compare: false
              })}

              
            </div>

        </div>
    </div>


    <div className="row">
        <div className="sm12 columns">
            <h2><strong>Product Panes List</strong></h2>
            <hr />
            <div className="product-card-wrapper mrg-M">
              {this.productPanesList({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                productFeatures: [
                    {
                        text: 'wide open pantry to store long, flat and wide food items'
                    },
                    {
                        text: 'humidity-controlled crispers'
                    },
                    {
                        text: '3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker'
                    }
                ],
                compare: true
              })}

              {this.productPanesList({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg',
                flag: 'Low Stock',
                altLink: '<span class="hide-for-small-only">SHOP THE</span> COLLECTION',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
                productFeatures: [
                    {
                        text: 'wide open pantry to store long, flat and wide food items'
                    },
                    {
                        text: 'humidity-controlled crispers'
                    },
                    {
                        text: '3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker'
                    }
                ],
                compare: true
              })}

              
            </div>

        </div>
    </div>


    <div className="row">
        <div className="sm12 columns">
            <h2><strong>Large Gallery Panes</strong></h2>
            <hr />
            <div className="product-card-wrapper mrg-M">
              {this.productCardGalleryPanesLarge({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                flag: 'Low Stock',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceHighlight: false,
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off'
              })}

              {this.productCardGalleryPanesLarge({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                flag: 'Low Stock',
                promo: 'GREEN MONDAL DEAL!',
                price: '$59.99',
                priceHighlight: true,
                priceRestriction: 'after coupon',
                priceRegular: 'reg. $60.99'
              })}
              
            </div>

        </div>
    </div>

    <div className="row">
        <div className="sm12 columns">
            <h2><strong>Small Gallery Panes</strong></h2>
            <hr />
            <div className="product-card-wrapper mrg-M">
              {this.productCardGalleryPanesSmall({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                flag: 'New',
                promo: 'GREEN MONDAL DEAL!',
                price: '$29.99',
                priceHighlight: false,
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
              })}

              {this.productCardGalleryPanesSmall({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                flag: 'New',
                promo: 'GREEN MONDAL DEAL!',
                price: '$59.99',
                priceHighlight: true,
                priceRestriction: 'after coupon',
                priceRegular: 'reg. $60.99',
              })}
              
            </div>

        </div>
    </div>

    <div className="row">
        <div className="sm12 columns">
            <h2><strong>Gallery List View</strong></h2>
            <hr />
            <div className="mrg-M">
              {this.productCardGalleryListView({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg',
                flag: 'JCP Only',
                promo: '',
                price: '$29.99',
                priceHighlight: false,
                priceRestriction: 'sale',
                priceRegular: 'was $39.99   20% off',
              })}

              {this.productCardGalleryListView({
                name:"Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…", 
                thumb: '/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg',
                flag: '',
                promo: '',
                price: '$59.99',
                priceHighlight: true,
                priceRestriction: 'after coupon',
                priceRegular: 'reg. $60.99',
              })}
              
            </div>

        </div>
    </div>


    <div className="row">
        <div className="sm12 columns">
            <h2><strong>Rec Row</strong></h2>
            <hr />
            <div className="product-card-wrapper">
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
            <h2><strong>Pricing Cart</strong></h2>
            <hr />
            <div className="product-card-wrapper mrg-M">
              {this.pricingCart({
                price: '<span className="pricing-cart-price-only">$89.99</span>'
                
              })}
              {this.pricingCart({
                priceNotes: [
                    {
                        text: 'was <span class="line-through">$89.99</span>'
                    },
                    {
                        text: 'sale <span class="color-shadow">$58.99</span>'
                    }

                ],
                price: '$58.99'
                
              })}
              {this.pricingCart({
                details: '',
                promo: 'Marketing Label',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$20.00</span>'
                    },
                    {
                        text: 'FUNDEAL <span class="color-penneyred">-$2.00</span>'
                    },
                    {
                        text: 'rewards <span class="color-penneyred">-$10.00</span>'
                    }

                ],
                price: '$8.00'
                
              })}
              {this.pricingCart({
                details: '',
                promo: 'Marketing Label',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$30.00</span>'
                    },
                    {
                        text: 'sale <span class="line-through color-shadow">$28.00</span>'
                    },
                    {
                        text: 'FUNDEAL <span class="color-penneyred">-$10.00</span>'
                    },
                    {
                        text: 'rewards <span class="color-penneyred">-$10.00</span>'
                    }

                ],
                price: '$8.00'
                
              })}
              {this.pricingCart({
                details: '',
                promo: 'Marketing Label',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$20.00</span>'
                    },
                    {
                        text: 'FUNDEAL <span class="color-penneyred">-$2.00</span>'
                    },
                    {
                        text: 'rewards <span class="color-penneyred">-$10.00</span>'
                    }

                ],
                price: '$8.00'
                
              })}
              {this.pricingCart({
                details: '',
                promo: 'Marketing Label<br />Package Deal',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$89.99</span>'
                    },
                    {
                        text: 'sale <span class="line-through color-shadow">$58.99</span>'
                    },
                    {
                        text: 'FUNDEAL <span class="color-penneyred">-$18.00</span>'
                    },
                    {
                        text: 'rewards <span class="color-penneyred">-$10.00</span>'
                    },
                    {
                        text: 'assoc. disc. <span class="color-penneyred">-$10.00</span>'
                    }

                ],
                price: '$20.99'
                
              })}

                {this.pricingCart({
                  details: '',
                  promo: 'BUY 1 GET 1 50% OFF',
                  price: '$60.00'
                  
                })}

                {this.pricingCart({
                  details: '',
                  promo: 'BUY 1 GET 1 50% OFF',
                  priceNotes: [
                      {
                          text: 'was <span class="line-through color-shadow">$80.00</span>'
                      },
                      {
                          text: 'buy 1 get 1 50% <span class="line-through color-shadow">$20.00</span>'
                      }

                  ],
                  price: '$60.00'
                  
                })}

                {this.pricingCart({
                  details: '',
                  promo: 'BUY 1 GET 1 50% OFF',
                  priceNotes: [
                      {
                          text: 'was <span class="line-through color-shadow">$20.99</span>'
                      },
                      {
                          text: 'buy 1 get 1 50% <span class="line-through color-shadow">FREE</span>'
                      }

                  ],
                  price: '$10.99'
                  
                })}

                {this.pricingCart({
                  details: '',
                  promo: 'SAMSUNG BUY 4 SAVE 10%',
                  priceNotes: [
                      {
                          text: 'was <span class="line-through color-shadow">$1,899.00</span>'
                      },
                      {
                          text: 'samsung buy 4 save 10% <span class="line-through color-shadow">$1,509.39</span>'
                      }

                  ],
                  price: '$1,499.40'
                  
                })}

              {this.pricingCart({
                details: 'Recycle fee may apply <a href="javascript:void(0);">see details</a>',
                promo: '',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$850.99</span>'
                    },
                    {
                        text: 'sale <span class="line-through color-shadow">$328.24</span>'
                    }

                ],
                price: '$328.24'
                
              })}

              {this.pricingCart({
                details: 'Disposal fee may apply <a href="javascript:void(0);">see details</a>',
                promo: 'Marketing Label',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$1,899.00</span>'
                    },
                    {
                        text: 'sale <span class="line-through color-shadow">$1,509.39</span>'
                    }

                ],
                price: '$1,499.40'
                
              })}

              {this.pricingCart({
                details: 'Disposal fee may apply <a href="javascript:void(0);">see details</a>',
                promo: 'Marketing Label',
                priceNotes: [
                    {
                        text: 'was <span class="line-through color-shadow">$1,899.00</span>'
                    },
                    {
                        text: 'sale <span class="line-through color-shadow">$1,509.39</span>'
                    },
                    {
                        text: 'FUNDEAL <span class="color-penneyred">-$100.00</span>'
                    }

                ],
                price: '$1,409.39'
                
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