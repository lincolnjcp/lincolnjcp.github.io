import React, { Component } from 'react';
import $ from 'jquery';

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


class RecommendationZone extends Component {
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




  productCardRecommendations(productInfo) {
    return (
      <li className="product-card">
        <a href="javascript:void(0)" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
          <div className="product-card-recommendation">

            {(() => {
              if (productInfo.thumb) {
                return (
                  <div className="product-card-thumbnail mrg-S">
                    <a href="javascript:void(0)">
                      <img src={productInfo.thumb} alt="product-image" />
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
                      <div class="std-txt std-txt-XS mrg-rght-XS">
                        <div className="price price-XS">{productInfo.price}</div>
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
            <div className="product-card-name std-txt std-txt-S color-nightsky">
              {productInfo.name}
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
                                        <a href="javascript:void();" className="rating-count rating-count-underline">99,999</a>
                   </li>
                  </ul>
                </div>
              </div>


            </div>

          </div>
        </a>
      </li>
    )
  }

  componentWillMount() {

    isMobile = window.innerWidth < 1024;
  }
  componentDidMount() {
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (isMobile) {
      if (this.state.currentDotIndex === nextState.currentDotIndex && isSameStateFirstTime) {
        isSameStateFirstTime = false;
        return true;
      }
      else if (this.state.currentDotIndex !== nextState.currentDotIndex) {
        isSameStateFirstTime = true;
        return true;
      }
    } else return true;
  }

  getDots() {
    if (!this.wrapper) return;
    const productCartridgeList = 16;
    const pane = this.productPane;
    // const pane = 176;
    const wrapperWidth = this.wrapper.getBoundingClientRect().width;
    const productPaneWidth = pane.getBoundingClientRect().width;
    const { scrollPixels, scrolledPanes } = this.scrollStatus;

    const totalProductPanes = productCartridgeList;
    const result = (wrapperWidth / productPaneWidth);
    const productPanesDisplayed = Math.floor(result);
    const numberOfDots = Math.ceil(totalProductPanes / productPanesDisplayed);
    
    const generateDots = () => {
      const listDots = [];
      for (let i = 1; i <= numberOfDots; i += 1) {
        
        let checkStatus = false;
        if (this.state.currentDotIndex === i) {
          checkStatus = true;
        }
        listDots.push(<span>
          <input type="radio" className="bullet" id={"id" + i} name="name" value="" checked={checkStatus} />
          <label htmlFor={"id" + i}></label>
        </span>);
      }
      dotsToDisplay = listDots.length > 1 ? listDots : [];
      return dotsToDisplay;
    };
    let node = generateDots();
    this.setState({
      dotNodes: node,
    })
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

  getDotsWithDeley() {
    let node;
    this.delayedExec(100, () => {
      node = this.getDots();
      return node;
    })
  }
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
          <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Recommendation Zone</h1>
          </div>
          <div className="row">
            <div className="sm12 columns">
              <h2><strong>Rec Row</strong></h2>
              <hr />
              <div className="product-card-wrapper product-card-wrapper-recommendations" ref={(wrapper) => { this.wrapper = wrapper }} style={listStyle}>
                <div className="chevron-wrapper">
                  <a style={{ visibility: disableLeftArrow ? 'hidden' : 'visible' }}
                    href="javascript:void(0);"
                    onClick={() => this.scrollCartridge(false)}
                    className="rec-zone-chevron-left icon chevron-icon hide-for-small-only hide-for-medium-only"
                    dangerouslySetInnerHTML={{ __html: ChevronLeftImage }}></a>
                  <a style={{ visibility: disableRightArrow ? 'hidden' : 'visible' }}
                    href="javascript:void(0);"
                    onClick={() => this.scrollCartridge(true)}
                    className="rec-zone-chevron-right icon chevron-icon hide-for-small-only hide-for-medium-only"
                    dangerouslySetInnerHTML={{ __html: ChevronRightImage }}></a>
                  
                  {this.state.currentDotIndex == 1 ? '' : mobLeftFade}
                  {this.state.currentDotIndex == this.state.dotNodes.length? '' : mobRightFade}
                  
                </div>
                <div className="product-card-block" id="product-card-section" onScroll={isMobile ? () => this.listenScrollEvent() : ''}>
                  <ul style={listStyle} className="listStyleClass">
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
                </div>
                <div className="rec-zone-carousel show-for-small-only show-for-medium-only">
                  <div>{isMobile ? this.getDotsWithDeley() : ''} {isMobile ? this.state.dotNodes : ''}</div>
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