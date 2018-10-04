import React, { Component } from 'react';

const ChevronLeftImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-left.svg');
const ChevronRightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-right.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');

const add = (param1, param2) => param1 + param2;
const subtract = (param1, param2) => param1 - param2;
let dotsToDisplay = {};
let isSameStateFirstTime = true;
let isMobile = false;

const calculateScrollPixel = ({
    productPanesDisplayed,
  totalProductPanes,
  scrollPixels,
  scrolledPanes,
  productPaneWidth,
  scrollToRight,
  remainingWrapperWidth,
  disableRightArrow,
}) => {
  const operator = scrollToRight ? subtract : add;

  // Calculate remaining(hidden panes) product panes in container to display
  const remainingProductsPanes = scrollToRight
    ? ((totalProductPanes - productPanesDisplayed) - scrolledPanes)
    : scrolledPanes;

  // Calculate product panes to show. It depends on the remaining panes and container size.
  /* istanbul ignore next */
  const numberOfPanesToMove = (remainingProductsPanes >= productPanesDisplayed)
    ? productPanesDisplayed
    : remainingProductsPanes;

  // Calculate next scroll position
  let scrollX = numberOfPanesToMove * productPaneWidth;

  // Calculate the total number of panes which are scrolled
  const productPanesScrolled = scrollToRight
    ? (scrolledPanes + numberOfPanesToMove)
    : (scrolledPanes - numberOfPanesToMove);

  // Calculate the total panes which are displaced from its original position
  const migratedProductPanes = scrollToRight
    ? add(productPanesScrolled, productPanesDisplayed)
    : productPanesScrolled;

  if (totalProductPanes === migratedProductPanes || disableRightArrow) {
    scrollX -= remainingWrapperWidth;
  }
  const scrollContentBy = operator(scrollPixels, scrollX);

  return {
    scrollContentBy,
    migratedProductPanes,
    productPanesScrolled,
  };
};


class RecommendationZone
  extends Component {
  constructor() {
    super();
    this.state = {

      listStyle: {},
      disableLeftArrow: true,
      disableRightArrow: false,
      productCartridgeList: [],
      cartridgeHeader: '',
      currentDotIndex: 1,
      dotNodes: '',
    };
    this.scrollStatus = {
      scrollPixels: 0,
      scrolledPanes: 0,
    };
  }

  componentWillMount() {

    isMobile = window.innerWidth < 1024;
  }
  componentDidMount() {
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  scrollCartridge(scrollToRight) {
    // const { productCartridgeList } = this.state;
    const productCartridgeList = 16;
    const pane = this.productPane;
    // const pane = 176;
    const wrapperWidth = this.wrapper.getBoundingClientRect().width;
    const productPaneWidth = pane.getBoundingClientRect().width;
    const { scrollPixels, scrolledPanes } = this.scrollStatus;

    // Calculate number of products displayed in the container
    const totalProductPanes = productCartridgeList;
    const result = (wrapperWidth / productPaneWidth);
    const productPanesDisplayed = Math.floor(result);
    const remainingWrapperWidth = (result - productPanesDisplayed).toFixed(2) * productPaneWidth;

    const mountedCartrdigeInfo = {
      productPanesDisplayed,
      totalProductPanes,
      scrollPixels,
      scrolledPanes,
      productPaneWidth,
      scrollToRight,
      remainingWrapperWidth,
      disableRightArrow: this.state.disableRightArrow,
    };

    const {
      scrollContentBy,
      productPanesScrolled,
      migratedProductPanes,
    } = calculateScrollPixel(mountedCartrdigeInfo);

    this.scrollStatus.scrollPixels = scrollContentBy;
    this.scrollStatus.scrolledPanes = productPanesScrolled;

    this.setState({
      disableLeftArrow: (migratedProductPanes === 0),
      disableRightArrow: (migratedProductPanes === totalProductPanes),
      listStyle: {
        transform: `translate(${scrollContentBy}px)`,
      },
    });
  };

  delayedExec(after, fn) {
    /* istanbul ignore next */
    this.timer && clearTimeout(this.timer);
    /* istanbul ignore next */
    this.timer = setTimeout(fn, after);
  };

  listenScrollEvent() {
    /* istanbul ignore next */
    this.delayedExec(100, () => {
      this.updateDotsPosition();
    });
  }

  updateDotsPosition() {
    const productCartridgeList = 16;
    const pane = this.productPane;
    const wrapperWidth = this.wrapper.getBoundingClientRect().width;
    const productPaneWidth = pane.getBoundingClientRect().width;
    const { scrollPixels, scrolledPanes } = this.scrollStatus;
    // Calculate number of products displayed in the container
    const totalProductPanes = productCartridgeList;
    const result = (wrapperWidth / productPaneWidth);
    const productPanesDisplayed = Math.floor(result);
    const dots = Math.ceil(totalProductPanes / productPanesDisplayed);

    const elementDOMObj = document.getElementById("product-card-section");
    /* istanbul ignore next */
    // const lstStyle = $(".listStyleClass");

    // const elementDOMObj = document.getElementById(this.props.slotId);
    /* istanbul ignore next */
    const element = elementDOMObj ? elementDOMObj.querySelector(`.listStyleClass`).parentNode : 0;


    // const parentNode = lstStyle[0].parentNode
    // const element = elementDOMObj ? elementDOMObj.parentNode : 0;
    const scrollLeft = element.scrollLeft;
    const maxScrollWidth = (dots - 1) * productPanesDisplayed * productPaneWidth;
    const minscroll = maxScrollWidth / dots;
    let currentPaneSlot = Math.ceil(scrollLeft / minscroll);
    /* istanbul ignore next */
    if (currentPaneSlot <= 0) {
      currentPaneSlot = 1;
    }
    /* istanbul ignore next */
    if (currentPaneSlot > dots) {
      currentPaneSlot = dots;
    }
    this.setState({
      currentDotIndex: currentPaneSlot,
    });
  }

  render() {
    const { listStyle,
      disableLeftArrow,
      disableRightArrow } = this.state;
    const mobLeftFade = <div className="rec-fade-left show-for-small-only show-for-medium-only"></div>;
    const mobRightFade = <div className="rec-fade-right show-for-small-only show-for-medium-only"></div>;
    return (
      <div>
        <div className="row">
          {/* <div className="sm12 columns">
            <h1 className="title title-XL mrg-btm-L">Recommendation Zone</h1>
          </div> */}
          <div className="sm12 columns">
            <h2><strong>Rec Row</strong></h2>
            <hr />
            <div className="product-card-wrapper product-card-wrapper-recommendations" ref={(wrapper) => { this.wrapper = wrapper }} style={listStyle}>
              <div className="chevron-wrapper">
                <a style={{ visibility: disableLeftArrow ? 'hidden' : 'visible' }}
                  href="javascript:void(0);"
                  className="rec-zone-chevron-left hide-for-small-only hide-for-medium-only rec-fade-left">
                  <span onClick={() => this.scrollCartridge(false)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronLeftImage }} />
                </a>
                <a style={{ visibility: disableRightArrow ? 'hidden' : 'visible' }}
                  href="javascript:void(0);"
                  className="rec-zone-chevron-right hide-for-small-only hide-for-medium-only rec-fade-right">
                  <span onClick={() => this.scrollCartridge(true)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronRightImage }} />
                </a>

                {this.state.currentDotIndex == 1 ? '' : mobLeftFade}
                {this.state.currentDotIndex == this.state.dotNodes.length ? '' : mobRightFade}

              </div>
              <div className="product-card-block" id="product-card-section" onScroll={isMobile ? () => this.listenScrollEvent() : ''}>
                <ul style={listStyle} className="listStyleClass">
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg' alt="product-image" />
                          </a>
                        </div>

                        <div className="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">
                          SAMSUNG BUY 4 SAVE 10%
                      </div>
                        <div>
                          <span>
                          </span>
                        </div>
                        <div className="price price-note-M std-txt mrg-top-XS">
                          <div class="price price-M"><sup class="sup-text">$</sup>74<sup class="sup-text">99</sup></div>
                        </div>
                        <div className="price price-note-M std-txt mrg-top-XS">
                          reg. $2,999 - $5,999
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                          Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
          {/* <!-- 2rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div class="price price-M flag flag-price">
                        <span class="mrg-rght-XS"><sup class="sup-text">$</sup>59<sup class="sup-text">99</sup></span></div>
                        <span class="price price-note color-penneyred after-coupon">after coupon</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                            reg. $99.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

{/* <!-- 3rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M">
                        <span className="mrg-rght-XS"><sup className="sup-text">$</sup>299<sup className="sup-text">99</sup></span></div>
                    </div>
                        <span className="price price-note color-penneyred after-coupon">after coupon</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                          reg. $99.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

{/* <!-- 4rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><sup class="sup-text">$</sup>599<sup class="sup-text">99</sup></div>
                    </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 5rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>29<sup class="sup-text">99</sup></span></div>
                    </div>
                      <span class="price price-note color-penneyred clearance">sale</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $60
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>


  {/* <!-- 6rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>99<sup class="sup-text">99</sup></span></div>
                    </div>
                    <span class="price price-note color-penneyred clearance">clearance</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $299.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 7rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>299<sup class="sup-text">99</sup></span></div>
                    </div>
                    <span class="price price-note color-penneyred clearance">clearance</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $499.99 - $699.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 8rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><sup class="sup-text">$</sup>2,999</div>
                    </div>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $4,999 - $6,999
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 9rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div className="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">
                        SAMSUNG BUY 4 SAVE 10%
                    </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><sup class="sup-text">$</sup>2,999</div>
                    </div>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        reg. $2,999 - $5,999
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 10rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div class="price price-M flag flag-price">
                        <span class="mrg-rght-XS"><sup class="sup-text">$</sup>59<sup class="sup-text">99</sup></span></div>
                        <span class="price price-note color-penneyred after-coupon">after coupon</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                            reg. $99.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

{/* <!-- 11rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M">
                        <span className="mrg-rght-XS"><sup className="sup-text">$</sup>299<sup className="sup-text">99</sup></span></div>
                    </div>
                        <span className="price price-note color-penneyred after-coupon">after coupon</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                          reg. $99.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>


{/* <!-- 12rd col--> */}
                  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-S"><sup class="sup-text">$</sup>599<sup class="sup-text">99</sup></div>
                    </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

               
  {/* <!-- 13rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>29<sup class="sup-text">99</sup></span></div>
                    </div>
                      <span class="price price-note color-penneyred clearance">sale</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $60
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>


  {/* <!-- 14rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>99<sup class="sup-text">99</sup></span></div>
                    </div>
                    <span class="price price-note color-penneyred clearance">clearance</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $299.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

  {/* <!-- 15rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M"><span class="mrg-rght-XS"><sup class="sup-text">$</sup>299<sup class="sup-text">99</sup></span></div>
                    </div>
                    <span class="price price-note color-penneyred clearance">clearance</span>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $499.99 - $699.99
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
            
  {/* <!-- 16rd col--> */}
  <li className="product-card">
                    <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                      <div className="product-card-recommendation">

                        <div className="product-card-thumbnail mrg-btm-S">
                          <a href="/#/page-layouts/pdp">
                            <img src='/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg' alt="product-image" />
                          </a>
                        </div>
                        <div>
                        </div>
                        <div className="product-card-price-value">
                        <div class="price price-M color-penneyred"><span class="price price-XXS from-label">packages from</span><sup class="sup-text">$</sup>9,999<sup class="sup-text">99</sup></div>
                    </div>
                        <div className="price price-note-M std-txt mrg-top-XS">
                        was $4,999 - $6,999
                  </div>
                        <div className="product-card-name std-txt std-txt-S color-nightsky">
                        Lorem Ipsum Dolor Sec Mud Deler LoreM Dol…
            </div>

                        <div className="ratings-and-reviews">
                          <div className="ratings-and-reviews-stars mrg-rght-XS">
                            <div className="star-preview-col fl-right">
                              <ul className="star-ratings-S">
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-full">
                                  <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings start-ratings-half">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li className="star-ratings star-rating-empty color-concrete-svg">
                                  <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li className="star-ratings">
                                  <a href="/#/page-layouts/pdp" className="rating-count rating-count-underline">99,999</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default RecommendationZone
  ;