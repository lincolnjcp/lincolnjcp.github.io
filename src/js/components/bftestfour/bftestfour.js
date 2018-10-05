import React, { Component } from 'react';
import Slider from "react-slick";
import Header from '../header/header';
import Footer from '../footer/footer';

import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

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


class BfTestFour extends Component {
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
        $( document ).ready(function() {
            $(this).scrollTop(0);
            $(".design-system-content").css('padding',0);
            $(".design-system-enable-hide").css('display', 'none');
            $('.design-system-nav-mobile-header').hide();
            $(".design-system-wrap").css('margin',0);
        });
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
                   <Header />
                   <div >
                <div class="row black-columns mrg-top-L">
                    <div class="sm12 columns">
                        <h2 class="title title-M mrg-btm-M fl-left">Black Friday Deals for Home</h2>
                        <p class="std-txt std-txt-S fl-right"><a href="">view all</a></p>
                    </div>

                    <div className="sm12 columns nopad">
                        <div className="product-card-wrapper product-card-wrapper-blackfriday" ref={(wrapper) => { this.wrapper = wrapper }} style={listStyle}>
                            <div className="chevron-wrapper">
                                <a style={{ visibility: disableLeftArrow ? 'hidden' : 'visible' }}
                                    href="/#/page-layouts/pdp"
                                    className="rec-zone-chevron-left hide-for-small-only hide-for-medium-only">
                                    {/* <span onClick={() => this.scrollCartridge(false)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronLeftImage }} /> */}
                                </a>
                                <a style={{ visibility: disableRightArrow ? 'hidden' : 'visible' }}
                                    href="/#/page-layouts/pdp"
                                    className="rec-zone-chevron-right hide-for-small-only hide-for-medium-only">
                                    {/* <span onClick={() => this.scrollCartridge(true)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronRightImage }} /> */}
                                </a>

                                {this.state.currentDotIndex == 1 ? '' : mobLeftFade}
                                {this.state.currentDotIndex == this.state.dotNodes.length ? '' : mobRightFade}

                            </div>
                            <div className="product-card-block" id="product-card-section" onScroll={isMobile ? () => this.listenScrollEvent() : ''}>
                                <ul style={listStyle} className="listStyleClass">
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 2rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 3rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred clearance std-text">sale</span>
                                                        <span class="price price-note color-penneyred after-coupon std-text"> BLACK FRIDAY DEAL</span>
                                                       
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 4rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>


                                    {/* <!-- 5rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 6rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>


                                    {/* <!-- 7rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 8rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">clearance</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 9rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">clearance</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>
                                </ul>


                            </div>
                            <ul class="slidesjs-pagination hide">
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="0" class="active"></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="1" class=""></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="2" class=""></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="3" class=""></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

           
                {/* <!-- Popular Black Friday Deals div -->  */}

                <div class="row black-columns mrg-top-L">
                    <div class="sm12 columns">
                        <h2 class="title title-M mrg-btm-M fl-left">Popular Black Friday Deals</h2>
                        <p class="std-txt std-txt-S fl-right"><a href="">view all</a></p>
                    </div>

                    <div className="sm12 columns nopad">
                        <div className="product-card-wrapper product-card-wrapper-blackfriday" ref={(wrapper) => { this.wrapper = wrapper }} style={listStyle}>
                            <div className="chevron-wrapper">
                                <a style={{ visibility: disableLeftArrow ? 'hidden' : 'visible' }}
                                    href="/#/page-layouts/pdp"
                                    className="rec-zone-chevron-left hide-for-small-only hide-for-medium-only">
                                    {/* <span onClick={() => this.scrollCartridge(false)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronLeftImage }} /> */}
                                </a>
                                <a style={{ visibility: disableRightArrow ? 'hidden' : 'visible' }}
                                    href="/#/page-layouts/pdp"
                                    className="rec-zone-chevron-right hide-for-small-only hide-for-medium-only">
                                    {/* <span onClick={() => this.scrollCartridge(true)} className="icon chevron-icon" dangerouslySetInnerHTML={{ __html: ChevronRightImage }} /> */}
                                </a>

                                {this.state.currentDotIndex == 1 ? '' : mobLeftFade}
                                {this.state.currentDotIndex == this.state.dotNodes.length ? '' : mobRightFade}

                            </div>
                            <div className="product-card-block" id="product-card-section" onScroll={isMobile ? () => this.listenScrollEvent() : ''}>
                                <ul style={listStyle} className="listStyleClass">
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-1.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 2rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-2.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred clearance std-text">sale</span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 3rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 4rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-4.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>


                                    {/* <!-- 5rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 6rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-6.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>


                                    {/* <!-- 7rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-7.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>29<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 8rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-8.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <!-- 9rd col--> */}
                                    <li className="product-card">
                                        <a href="/#/page-layouts/pdp" className="product-rec-zone" ref={(productPane) => { this.productPane = productPane }}>
                                            <div className="product-card-black">

                                                <div className="product-card-thumbnail mrg-btm-S">
                                                    <a href="/#/page-layouts/pdp">
                                                        <img src='/images/design-system/fpo/product-cards/product-card-recommendations-5.jpg' alt="product-image" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <span>
                                                    </span>
                                                </div>

                                                <div className="price price-note std-txt mrg-top-XS">
                                                    <div class="price price-XS color-penneyred black-productcard">
                                                        <span class="mrg-rght-XS">
                                                            <sup class="sup-text-XS">$</sup>9<sup class="sup-text-XS">99</sup>
                                                        </span>
                                                        <span class="price price-note color-penneyred after-coupon std-text">BLACK FRIDAY DEAL</span>
                                                    </div>
                                                </div>
                                                <div className="std-txt std-txt-XS color-slate">
                                                    Nicole Miller Double Strap P…
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-btm-M mrg-top-XS quick-btn">Quick View</a>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul class="slidesjs-pagination hide">
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="0" class="active"></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="1" class=""></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="2" class=""></a></li>
                                <li class="slidesjs-pagination-item"><a data-slidesjs-item="3" class=""></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <br/>
                <div class="sm12 lg12 md12 xl12 xxl12 nopad text-center">
                    <a class="black-banner-image" href="/#/page-modules/product-cards">
                        <img src="/images/design-system/blackfridaydeal.png" alt="blackFridayImg" /></a>
                </div>
<br/><br/>
<div>
        <div class="department-container dept-nav mrg-btm-XXL mrg-top-M">
            <ul class="department-block">
            <li class="lg3 md3 xl3 xxl3 sm6 nopad nopadd ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-001.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bed & Bath</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad nopadd ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-002.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Window</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-01.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Furniture</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-02.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Mattresses</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-03.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Appliances</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-04.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Kitchen & Dining</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-05.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Rugs</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-06.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Home Decor</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-07.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Electronics & Smart Home</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-08.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Luggage & Travel Accessories</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-09.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Patio & Outdoor Living</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-10.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Campus Style</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-11.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Arts & Crafts</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-12.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">As Seen On TV</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-13.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Auto Accessories</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-14.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Backpacks</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-15.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Bikes</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-16.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Books & Games</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-17.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Camping & Outdoor</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-18.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Fitness & Healthy Living</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-19.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Heating & Cooling</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-20.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Holiday Decor</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-21.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Home Improvement</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-22.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Home Services</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-23.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Irons & Laundry Care</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-24.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Mobility & Daily Living Aids</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-25.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Party Supplies</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-26.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Pet Care</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-27.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Sporting Goods & Recreation</h2>
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
                  <h2 class="title title-M mrg-btm-XS algn-mid">Storage & Organization</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-30.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Vacuums & Floor Care</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-31.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Sale</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-32.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Clearance</h2>
                </a>
              </li>
              <li class="lg3 md3 xl3 xxl3 sm6 nopad ">
                <a href="/#/page-modules/product-cards">
                  <div class="viz-nav-img ">
                    <img src="/images/design-system/dept-33.png" alt="product-image" />
                  </div>
                  <h2 class="title title-M mrg-btm-XS algn-mid">Rebate Center</h2>
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

export default BfTestFour;