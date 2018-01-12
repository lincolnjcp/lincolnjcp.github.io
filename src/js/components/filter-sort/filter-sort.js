import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');

class FilterSort extends Component {
  productCardRecommendations(productInfo) {
    return (
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

    $('.side-panel-btn').unbind('click').on('click', function (event) {
      event.preventDefault();
      var parent = $($(this).attr('data-target'));
      parent.addClass('is-visible');
    });

    $('.side-panel').unbind('click').on('click', function (event) {
      if ($(event.target).is('.side-panel')) {
        $(this).removeClass('is-visible');
      } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close')) {
        $(event.target).closest('.side-panel').removeClass('is-visible');
      }
      event.preventDefault();
    });

    $('.dropdown-button').on('click', function () {
      
      var parent_box = $(this).closest('.dropdown-menu-block');
      parent_box.siblings().find('.dropdown-menu').hide();
      parent_box.find('.dropdown-menu').slideToggle(200, 'swing');
      
      $(this).toggleClass("arrow-down"); 

    });
  }

    render() {
      return (

        <div>
          <div className="row">
            <div className="sm12 columns">
              <h1 className="title title-XL mrg-L">Filter & Sort</h1>
              <div className="filter-left-block"></div>
              <div className="product-gallery-block">
                <div className="form-group column fl-left">
                    <label className="checkbox mrg-M">
                        <input type="checkbox" /> <span><p className="title title-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <a href="#"> Stonebriar Mall</a></p></span>
                    </label>
                </div>
                <div className="dropdown-menu-block column fl-right md2 lg2 xl2">
                        <a className="dropdown-button title-S">Sort by: <span className="arrow"></span></a>
                        <div className="dropdown-menu">
                            <ul className="tooltip tooltip-top-right tooltip-light dropdown-sort">
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Featured</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Price Low to High</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Ratings High to Low</a>
                                </li>
                            </ul>
                        </div>
                    </div>
              </div>
            </div>
          </div>

          <div className="side-panel from-left" id="leftPanel">
            <div className="side-panel-container">
              <header className="side-panel-header">
                <h3 className="title title-L color-white">Panel</h3>
                <a href="javascript:void(0);" className="side-panel-close">
                  <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{ __html: closeImage }} />
                </a> </header>
              <div className="side-panel-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor eget scelerisque lobortis. Nulla metus nisi, commodo et suscipit ac, venenatis ut magna. Nunc in venenatis mi, vitae placerat odio. Aenean est tellus, mollis sed tempus vel, egestas non urna. Suspendisse fringilla neque tincidunt, molestie diam non, facilisis ante. Quisque mattis commodo arcu vehicula lobortis. Cras lorem mauris, molestie ac gravida in, condimentum at enim. Aenean elementum, mauris ac convallis tempus, erat eros aliquam quam, ac sodales ligula mauris nec neque. Aliquam ut turpis lectus. Cras eget felis odio.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="sm12 columns">
              <div className="product-card-recommendations">
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="sm12 columns">
              <hr />
              <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong> <br />
                Latest update: 04/05/2017</p>
            </div>
          </div>
        </div>


      );
    }
  }

  export default FilterSort;