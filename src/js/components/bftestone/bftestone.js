
import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import $ from 'jquery';

class BFTestOne extends Component {

  componentDidMount() {
        $( document ).ready(function() {
          $(this).scrollTop(0);
          $(".design-system-content").css('padding',0);
          $(".design-system-enable-hide").css('display', 'none');
          $('.design-system-nav-mobile-header').hide();
          $(".design-system-wrap").css('margin',0);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="row">
            <div className="lg12 sm12 md12 xl12">
              <h1 className="title title-XL fl-left black-friday-title">Black Friday Deals for Bed and Bath</h1>
              <p className="std-txt std-txt-S fl-right black-friday-std-txt black-friday-shop-txt"><a href="/#/page-modules/product-cards">Shop All</a></p>
            </div>
            <div className="lg12 sm12 md12 xl12">
              <div className="product-card-wrapper black-friday-wrapper">
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product1">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">14<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name">Quinto or Soleil 16-pc Dinnerware set; service for 4 ›
                                          <span className="black-friday-price">reg. $50</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product2">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">14<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name">16-pc Luminarc Glassware set ›
                                          <span className="black-friday-price">reg. $50</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product3">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">2<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name">Home Expressions ombre stripe or solid bath towel ›
                                          <span className="black-friday-price">reg. $10</span>
                                          <span className="black-friday-price">while supplies last limited quantities</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product4">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">8<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name black-friday-card-name-pillow">Mermaid Sequin Pillow ›
                                          <span className="black-friday-price">reg. $27</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product5">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">49<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name">Oneida 78-pc Flatware set ›
                                          <span className="black-friday-price">reg. $200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/#/page-modules/product-cards" className="black-friday-container sm6 nopad">
                  <div className="product-card product-card-pane-grid black-friday-pane-grid">
                    <div className="black-friday-card-inner black-friday-product6">
                      <div className="product-card-details">
                        <div className="price price-M black-friday-price-L color-penneyred">59<sup class="sup-text black-friday-sup-text">99</sup></div>
                        <div class="product-card-name-wrap">
                          <div className="black-friday-card-name">Nutribullet Blender ›
                                          <span className="black-friday-price">reg. $109</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
          <div>
          <div className="lg12 sm12 md12 xl12">
          <h1 className="title title-XL fl-left black-friday-dep-title">Shop Bed and Bath</h1>
          </div>
        <div class="department-container dept-nav mrg-btm-XXL mrg-top-M">
            <ul class="department-block">
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-01.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bedding</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-02.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bath</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-03.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Mattresses</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-04.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Campus Style</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-05.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Comforters & Bedding Sets</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-06.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Quilts & Bedspreads</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-07.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Sheets</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-08.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Duvet Covers</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-09.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Kids Bedding</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-10.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Teen Bedding</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-11.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bedskirts</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-12.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Mattress Pads & Toppers</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-13.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Pillows</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-14.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Blankets & Throws</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-15.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Down & Down-Alt Comforters</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-16.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Mattress & Pillow Protectors</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-17.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bath Towels</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-18.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bath Rugs & Bath Mats</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-19.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Shower Curtains</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-20.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bathroom Accessories</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-21.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bath Hardware</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-22.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Toilet Seats & Accessories</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-23.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Personal Care</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-24.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bathroom Vanitites</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-25.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bathroom Faucets & Sinks</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-26.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Kids & Teens Bath</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-27.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Beach Towels</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-28.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Sports Fan Shop</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-29.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Sale</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-30.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Final Take Clearance</h2>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default BFTestOne;