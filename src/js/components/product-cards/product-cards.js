import React, { Component } from 'react';
import $ from 'jquery';

const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');

class ProductCards extends Component {
  
  componentDidMount() {
        
    $(".heart").on("click", function() {
      var parent = $(this).closest('.like-icon');
      var tooltip = parent.find('.tooltip-content');
      parent.closest('.like-icon').toggleClass("is-active");
      if (parent.hasClass("is-active")) {
          tooltip.html('Added<br /><a href="javascript:void(0);">View My Favorites</a>');
      }
  });
  
  
  $(".like-icon").mouseleave(function() {
      var parent = $(this).closest('.like-icon');
      var tooltip = parent.find('.tooltip-content');
      if (parent.hasClass("is-active")) {
          tooltip.html('Remove Favorite');
      } else {
          tooltip.html('Favorite');
      }
  });
  
  $(window).on("resize", function() {
      var gridYPos = 0;
      var gridRow = [];
      var gridRowHasCompare = false;
      $(".product-card-pane-grid").each(function(index) {
          if ($(this).find('.product-card-compare').length > 0) {
              gridRowHasCompare = true;
          }
          if (gridYPos == 0) {
              gridYPos = $(this).offset().top;
              gridRow.push($(this));
          } else if (gridYPos !== $(this).offset().top) { //New Row
              $(gridRow).each(function(index) {
                  if (gridRowHasCompare === false) {
  
                      $(this).addClass('product-card-pane-grid-no-compare');
                  } else {
                      $(this).removeClass('product-card-pane-grid-no-compare');
                  }
              });
              gridRow = [];
              gridRow.push($(this));
              gridYPos = $(this).offset().top;
              gridRowHasCompare = false;
          } else {
              gridRow.push($(this));
          }
  
  
      });
      $(gridRow).each(function(index) {
          if (gridRowHasCompare === false) {
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
        <div class="row">
            <div class="row">
              <div class="sm12 columns">
                  <h2><strong>Product Panes Grid</strong></h2>
                  <hr />
                  <div class="product-card-wrapper mrg-M">
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card product-card-pane-grid">
                        <div class="product-card-inner">
                          <div class="product-card-image">
                              <div class="product-card-thumbnail">
                                <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                <div className="like-icon">
                                    <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                    <div className="tooltip tooltip-single tooltip-top-right">
                                      <span className="tooltip-content">Favorite</span>
                                    </div>
                                </div>
                                <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                              </div>
                          </div>
                          <div className="color-swatches-block hide-for-small-only">
                              <div>
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
                          <div class="product-card-details">
                              <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                              <div class="product-card-price">
                                <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                                <div class="product-card-note price price-note color-penneyred">sale</div>
                              </div>
                              <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                              <div class="product-card-name-wrap">
                                <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                              </div>
                              <div class="ratings-and-reviews">
                                <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                                <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                              </div>
                          </div>
                          <div class="product-card-compare">
                              <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Product Panes List</strong></h2>
              <hr />
              <div class="product-card-wrapper mrg-M">
                  <div class="product-card product-card-pane-list">
                    <div class="product-card-inner">
                        <div class="product-card-image">
                          <div class="product-card-thumbnail">
                              <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                              <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                              <div className="like-icon">
                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                <div className="tooltip tooltip-single tooltip-top-right">
                                    <span className="tooltip-content">Favorite</span>
                                </div>
                              </div>
                              <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                          </div>
                          <div class="color-swatches-block hide-for-small-only">
                              <div>
                                <div class="color-swatches-medium">
                                    <ul class="list-product-colors-container">
                                      <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                    </ul>
                                </div>
                              </div>
                          </div>
                          <div class="product-card-compare input-group"><label class="checkbox mrg-M"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                        </div>
                        <div class="product-card-details">
                          <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                          <div class="product-card-price">
                              <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                              <div class="product-card-note price price-note color-penneyred">sale</div>
                          </div>
                          <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                          <div class="product-card-name-wrap">
                              <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                          </div>
                          <div class="ratings-and-reviews">
                              <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                              <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                          </div>
                          <div>
                              <div class="std-txt std-txt-S product-features color-nightsky hide-for-small-only">Product Features</div>
                              <ul class="list hide-for-small-only">
                                <li class="price price-note color-slate std-txt">wide open pantry to store long, flat and wide food items</li>
                                <li class="price price-note color-slate std-txt">humidity-controlled crispers</li>
                                <li class="price price-note color-slate std-txt">3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker</li>
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="product-card product-card-pane-list">
                    <div class="product-card-inner">
                        <div class="product-card-image">
                          <div class="product-card-thumbnail">
                              <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-grid-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                              <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                              <div className="like-icon">
                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                <div className="tooltip tooltip-single tooltip-top-right">
                                    <span className="tooltip-content">Favorite</span>
                                </div>
                              </div>
                              <a class="alt-link std-txt std-txt-XS" href="javascript:void(0);"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</a>
                          </div>
                          <div class="color-swatches-block hide-for-small-only">
                              <div>
                                <div class="color-swatches-medium">
                                    <ul class="list-product-colors-container">
                                      <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                      <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                    </ul>
                                </div>
                              </div>
                          </div>
                          <div class="product-card-compare input-group"><label class="checkbox mrg-M"><input type="checkbox" value="on"/> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                        </div>
                        <div class="product-card-details">
                          <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                          <div class="product-card-price">
                              <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                              <div class="product-card-note price price-note color-penneyred">sale</div>
                          </div>
                          <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                          <div class="product-card-name-wrap">
                              <div class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                          </div>
                          <div class="ratings-and-reviews">
                              <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                              <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                          </div>
                          <div>
                              <div class="std-txt std-txt-S product-features color-nightsky hide-for-small-only">Product Features</div>
                              <ul class="list hide-for-small-only">
                                <li class="price price-note color-slate std-txt">wide open pantry to store long, flat and wide food items</li>
                                <li class="price price-note color-slate std-txt">humidity-controlled crispers</li>
                                <li class="price price-note color-slate std-txt">3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker</li>
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Large Gallery Panes</strong></h2>
              <hr />
              <div class="product-card-wrapper mrg-M">
                  <div class="product-card product-card-pane-L">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="color-swatches-block">
                        <div>
                          <div class="color-swatches-medium">
                              <ul class="list-product-colors-container">
                                <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                              </ul>
                          </div>
                        </div>
                    </div>
                    <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                        <div class="product-card-note price price-note color-penneyred">sale</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-pane-L">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="color-swatches-block">
                        <div>
                          <div class="color-swatches-medium">
                              <ul class="list-product-colors-container">
                                <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                              </ul>
                          </div>
                        </div>
                    </div>
                    <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                    <div class="product-card-price">
                        <div class="product-card-price-value">
                          <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                              <div class="price price-S color-white">$59.99</div>
                          </div>
                        </div>
                        <div class="product-card-note price price-note color-penneyred">after coupon</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Small Gallery Panes</strong></h2>
              <hr />
              <div class="product-card-wrapper mrg-M">
                  <div class="product-card product-card-pane-S">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="color-swatches-block">
                        <div>
                          <div class="color-swatches-medium">
                              <ul class="list-product-colors-container">
                                <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                              </ul>
                          </div>
                        </div>
                    </div>
                    <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-S mrg-rght-XS">$29.99</div>
                        <div class="product-card-note price price-note color-penneyred">sale</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-pane-S">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="color-swatches-block">
                        <div>
                          <div class="color-swatches-medium">
                              <ul class="list-product-colors-container">
                                <li><a href="javascript:void(0)" class="list-color-swatch list-color-swatch-active"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li><a href="javascript:void(0)" class="list-color-swatch"></a></li>
                                <li class="swatches-list-link"><a href="javascript:void(0)" class="std-txt std-txt-S color-nightsky">+23</a></li>
                              </ul>
                          </div>
                        </div>
                    </div>
                    <div class="price price-promo mrg-XS color-penneyred">GREEN MONDAL DEAL!</div>
                    <div class="product-card-price">
                        <div class="product-card-price-value">
                          <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                              <div class="price price-S color-white">$59.99</div>
                          </div>
                        </div>
                        <div class="product-card-note price price-note color-penneyred">after coupon</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Gallery List View</strong></h2>
              <hr />
              <div class="mrg-M">
                  <div class="product-card product-card-list-view">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-1.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div class="flag flag-info flag-S std-txt std-txt-XXS">JCP Only</div>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="product-card-details">
                        <div class="product-card-price">
                          <div class="product-card-price-value price price-XS mrg-rght-XS">$29.99</div>
                          <div class="product-card-note price price-note color-penneyred">sale</div>
                        </div>
                        <div class="product-card-note price price-note color-slate std-txt">was $39.99   20% off</div>
                        <div class="product-card-name std-txt std-txt-XS color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                        <div class="ratings-and-reviews">
                          <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                          <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                        </div>
                    </div>
                  </div>
                  <div class="product-card product-card-list-view">
                    <div class="product-card-thumbnail">
                        <a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-large-pane-2.jpg" alt="Samsung ENERGY STAR"/></a>
                        <div className="like-icon">
                          <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                          <div className="tooltip tooltip-single tooltip-top-right">
                              <span className="tooltip-content">Favorite</span>
                          </div>
                        </div>
                    </div>
                    <div class="product-card-details">
                        <div class="product-card-price">
                          <div class="product-card-price-value">
                              <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                                <div class="price price-XS color-white">$59.99</div>
                              </div>
                          </div>
                          <div class="product-card-note price price-note color-penneyred">after coupon</div>
                        </div>
                        <div class="product-card-note price price-note color-slate std-txt">reg. $60.99</div>
                        <div class="product-card-name std-txt std-txt-XS color-nightsky">Lorem Ipsumd Dolor Sit Amet Consec Ter Adpisicing Alit…</div>
                        <div class="ratings-and-reviews">
                          <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                          <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Rec Row</strong></h2>
              <hr />
              <div class="product-card-wrapper">
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="price price-promo-S mrg-XS color-penneyred">SAMSUNG BUY 4 SAVE 10%</div>
                    <div class="product-card-price">
                        <div class="product-card-price-value">
                          <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                              <div class="price price-XS color-white">$2,499 - $3,999</div>
                          </div>
                        </div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">reg. $2,999 - $5,999</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value">
                          <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                              <div class="price price-XS color-white">$59.99</div>
                          </div>
                        </div>
                        <div class="product-card-note price price-note color-penneyred">after coupon</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">reg. $99.99</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value">
                          <div class="flag flag-urgency std-txt std-txt-XS mrg-rght-XS">
                              <div class="price price-XS color-white">$299.99</div>
                          </div>
                        </div>
                        <div class="product-card-note price price-note color-penneyred">after coupon</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">reg. $99.99</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-XS mrg-rght-XS">$599.99</div>
                    </div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-XS mrg-rght-XS">$29.99</div>
                        <div class="product-card-note price price-note color-penneyred">sale</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $60</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-XS mrg-rght-XS">$99.99</div>
                        <div class="product-card-note price price-note color-penneyred">clearance</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $299.99</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-XS mrg-rght-XS">$299.99 - $399.99</div>
                        <div class="product-card-note price price-note color-penneyred">clearance</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $499.99 - $699.99</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
                  <div class="product-card product-card-recommendation">
                    <div class="product-card-thumbnail mrg-S"><a href="javascript:void(0)"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg" alt="Samsung ENERGY STAR"/></a></div>
                    <div class="product-card-price">
                        <div class="product-card-price-value price price-XS mrg-rght-XS">$2,999 - $3,999</div>
                        <div class="product-card-note price price-note color-penneyred">package deal</div>
                    </div>
                    <div class="product-card-note price price-note color-slate std-txt">was $4,999 - $6,999</div>
                    <div class="product-card-name std-txt std-txt-S color-nightsky">Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…</div>
                    <div class="ratings-and-reviews">
                        <div class="ratings-and-reviews-stars mrg-rght-XS"><img src="/images/design-system/fpo/reviews/reviews-stars-3-5.jpg" alt="Star Ratings"/></div>
                        <div class="ratings-and-reviews-count color-slate std-txt std-txt-XXS">99,999</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <h2><strong>Pricing Cart</strong></h2>
              <hr />
              <div class="product-card-wrapper mrg-M">
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="product-card-price-value price price-XS"><span classname="pricing-cart-price-only">$89.99</span></div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through">$89.99</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="color-shadow">$58.99</span></div>
                        <div class="product-card-price-value price price-XS">$58.99</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$20.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">FUNDEAL <span class="color-penneyred">-$2.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">rewards <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-price-value price price-XS">$8.00</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$30.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="line-through color-shadow">$28.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">FUNDEAL <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">rewards <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-price-value price price-XS">$8.00</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$20.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">FUNDEAL <span class="color-penneyred">-$2.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">rewards <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-price-value price price-XS">$8.00</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label<br/>Package Deal</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$89.99</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="line-through color-shadow">$58.99</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">FUNDEAL <span class="color-penneyred">-$18.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">rewards <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">assoc. disc. <span class="color-penneyred">-$10.00</span></div>
                        <div class="product-card-price-value price price-XS">$20.99</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">BUY 1 GET 1 50% OFF</div>
                        <div class="product-card-price-value price price-XS">$60.00</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">BUY 1 GET 1 50% OFF</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$80.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">buy 1 get 1 50% <span class="line-through color-shadow">$20.00</span></div>
                        <div class="product-card-price-value price price-XS">$60.00</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">BUY 1 GET 1 50% OFF</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$20.99</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">buy 1 get 1 50% <span class="line-through color-shadow">FREE</span></div>
                        <div class="product-card-price-value price price-XS">$10.99</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="price price-promo mrg-XS color-penneyred">SAMSUNG BUY 4 SAVE 10%</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$1,899.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">samsung buy 4 save 10% <span class="line-through color-shadow">$1,509.39</span></div>
                        <div class="product-card-price-value price price-XS">$1,499.40</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="std-txt std-txt-XS mrg-XS color-slate">Recycle fee may apply <a href="javascript:void(0);">see details</a></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$850.99</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="line-through color-shadow">$328.24</span></div>
                        <div class="product-card-price-value price price-XS">$328.24</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="std-txt std-txt-XS mrg-XS color-slate">Disposal fee may apply <a href="javascript:void(0);">see details</a></div>
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$1,899.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="line-through color-shadow">$1,509.39</span></div>
                        <div class="product-card-price-value price price-XS">$1,499.40</div>
                    </div>
                  </div>
                  <div class="pricing-cart algn-rght algn-lft-S">
                    <div class="product-card-details">
                        <div class="std-txt std-txt-XS mrg-XS color-slate">Disposal fee may apply <a href="javascript:void(0);">see details</a></div>
                        <div class="price price-promo mrg-XS color-penneyred">Marketing Label</div>
                        <div class="product-card-note price price-note color-nightsky std-txt">was <span class="line-through color-shadow">$1,899.00</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">sale <span class="line-through color-shadow">$1,509.39</span></div>
                        <div class="product-card-note price price-note color-nightsky std-txt">FUNDEAL <span class="color-penneyred">-$100.00</span></div>
                        <div class="product-card-price-value price price-XS">$1,409.39</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="sm12 columns">
              <hr />
              <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                  <br /> Latest update: 04/05/2017
              </p>
            </div>
        </div>
      </div>
    );
  }
}

export default ProductCards;