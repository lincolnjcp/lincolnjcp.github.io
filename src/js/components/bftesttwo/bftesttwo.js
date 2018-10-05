
import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import $ from 'jquery';

class BFTestTwo extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $(this).scrollTop(0);
      $(".design-system-content").css('padding', 0);
      $(".design-system-enable-hide").css('display', 'none');
      $('.design-system-nav-mobile-header').hide();
      $(".design-system-wrap").css('margin', 0);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="black-headbanner">
          <div class="department-container dept-nav mrg-btm-M">
            <div class="sm12 lg12 md12 xl12 xxl12 nopad text-center">
              <a class="black-banner-image" href="/#/page-modules/product-cards">
                <img src="/images/design-system/blackfridaydeal.png" alt="blackFridayImg" /></a>
            </div>
            <div className="lg12 sm12 md12 xl12 mrg-top-M">
              <h1 className="title title-XL fl-left black-friday-dep-title">Shop Bed and Bath</h1>
            </div>
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
        <Footer />
      </div>
    );
  }
}

export default BFTestTwo;