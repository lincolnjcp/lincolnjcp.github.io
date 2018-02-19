import React, { Component } from 'react';
import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const cartFullImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart-full.svg');
const lockImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/lock.svg');
const clearImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/clear.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');


class Buttons extends Component {
    componentDidMount() {
        $(".icon-hover").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });

        $(".heart").on("click", function () {
            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            parent.closest('.like-icon').toggleClass("is-active");
            if (parent.hasClass("is-active")) {
                $('.like-icon .tooltip').css('display', 'inline-block');
                tooltip.html('Added<br /><a href="javascript:void(0);">View My Favorites</a>');
            }
        });
        $(".like-icon").mouseenter(function () {
            $('.like-icon .tooltip').css('display', 'inline-block');
        });

        $(".like-icon").mouseleave(function () {

            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            if (parent.hasClass("is-active")) {
                setTimeout(function () {
                    $('.like-icon .tooltip').css('display', 'none');
                    tooltip.html('Remove Favorite');
                }, 2000);
            } else {
                $('.like-icon .tooltip').css('display', 'none');
                tooltip.html('Favorite');
            }
        });

        $(".listIcon").on("click", function () {
            $(this).toggleClass("gridIcon");
        });

        $('.show').on('click', function (e) {
            $('.show').toggleClass("less");
        });
        $('.dropdown-button').on('click', function () {

            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            parent_box.find('.dropdown-menu').slideToggle(200, "swing");

            $(this).toggleClass("arrow-down");
            return false;
        });
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-L">Buttons</h1>
                        <h2 class="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>

                <div class="row" id="when-to-use">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">When to Use</h3>
                        <p class="max-width-text mrg-XL">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
                        <div class="button-overview algn-mid-S mrg-XL">
                            <a href="javascript:void();" role="button" class="btn btn-primary btn-L mrg-L">Primary Large</a>
                            <a href="javascript:void();" role="button" class="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                            <a href="javascript:void();" role="button" class="btn btn-L btn-disabled mrg-L">Disabled Large</a>

                        </div>
                        <h5 class="title title-M mrg-M">Best Practices</h5>
                        <ul class="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
                        </ul>
                    </div>
                </div>
                <div class="row" id="appearance">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-L">Appearance</h3>
                        <p class="max-width-text mrg-XXL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns mrg-XL">
                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-primary btn-S mrg-M">Primary Small</a>
                                </div>

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-primary btn-M mrg-M">Primary Medium</a>
                                </div>

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-primary btn-L mrg-M">Primary Large</a>
                                </div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-M">Primary Action</h5>
                                <p class="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns mrg-XXL">
                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-secondary btn-S mrg-M">Secondary Small</a>
                                </div>

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-secondary btn-M mrg-M">Secondary Medium</a>
                                </div>

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-secondary btn-L mrg-M">Secondary Large</a>
                                </div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-M">Secondary Action</h5>
                                <p class="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns">
                                <div class="button-preview algn-mid mrg-XL">
                                    <a href="javascript:void();" role="button" class="btn btn-primary btn-L mrg-M btn-icon "><span class="icon color-white-svg lock-icon" dangerouslySetInnerHTML={{ __html: lockImage }} /> Checkout</a>
                                </div>

                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-M">Icon and Label</h5>
                                <p class="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns mrg-XXL">

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-secondary btn-L mrg-M btn-icon btn-icon-slide"><span class="icon color-penneyred-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span class="btn-label">Add to Cart</span></a>
                                </div>

                                <div class="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" class="btn btn-primary btn-L mrg-M btn-icon btn-icon-slide"><span class="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span class="btn-label">Add to Cart</span></a>
                                </div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-M">Icon Hover Effect</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="responsive-behavior">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-L">Responsive Behavior</h3>
                        <p class="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                        <div class="design-system-container hide-for-small-only mrg-L">
                            <p class="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div class="design-system-container-inner algn-rght btn-set-desktop-example">
                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-L mrg-zero">Cancel</a>
                                <a href="javascript:void();" role="button" class="btn btn-primary btn-L mrg-zero">Save</a>
                            </div>
                        </div>
                        <p class="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>

                        <div class="design-system-container design-system-container-small mrg-L">
                            <p class="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div class="design-system-container-inner algn-rght">
                                <a href="javascript:void();" role="button" class="btn btn-primary btn-L btn-full mrg-M">Save</a>
                                <a href="javascript:void();" role="button" class="btn btn-secondary btn-L btn-full mrg-M">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br />


                <div class="dropdown-menu-block column md4 sm12 lg4">
                    <div class="pos-rel fl-left">
                        <a class="dropdown-button title-S">Product Type <span class="arrow"></span></a>
                        <div class="dropdown-menu">
                            <div class="tooltip tooltip-top-left">
                                <span>
                                    <ul class="dropdown-sort">
                                        <li class="dropdown-list">
                                            <a href="javascript:void(0)" class="sort-list">Featured</a>
                                        </li>
                                        <li class="dropdown-list">
                                            <a href="javascript:void(0)" class="sort-list">Best Sellers</a>
                                        </li>
                                        <li class="dropdown-list">
                                            <a href="javascript:void(0)" class="sort-list">New Arrivals</a>
                                        </li>
                                        <li class="dropdown-list">
                                            <a href="javascript:void(0)" class="sort-list">Price High to Low</a>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div class="main-menu-bar-secondary-container lg4">
                    <div class="main-menu-secondary-left">
                        <div class="bg-color-penneyred"></div>

                        <ul class="main-menu-secondary button-main-menu">
                            <li class="main-menu-secondary-li main-menu-secondary-li-primary title title-S">Gifts</li>
                            <li class="main-menu-secondary-li main-menu-secondary-li-primary title title-S">My List</li>
                            <li class="main-menu-secondary-li main-menu-secondary-li-primary title title-S">Coupons</li>
                        </ul>
                    </div>

                </div>
                <br /><br /><br />
                <div class="cart-icon lg4">
                    <ul>
                        <li class="main-menu-primary-item main-menu-primary-cart"> <a href="javascript:void(0);" class="main-menu-primary-cart-icon-full"> <span class="main-menu-primary-cart-icon-full-items ">28</span>
                            <div class="main-menu-primary-cart-icon-full-icon icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartFullImage }} />
                        </a> </li>
                    </ul>
                </div>
                <br /><br /><br />


                <div class="md12 lg12 sm12 column mrg-XL">
                    <h2 class="title title-L mrg-M">Switch</h2>
                    <div class="switch-block md12 lg12 sm12">
                        <div class="md4 lg4 sm12 fl-left">
                            <div class="onoffswitch mrg-XL fl-left">
                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="onoffswitch-off" />
                                <label class="onoffswitch-label" htmlFor="onoffswitch-off"></label>
                            </div>
                            <div class="onoffswitch mrg-XL fl-left">
                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="onoffswitch-disabledOff" disabled="true" />
                                <label class="onoffswitch-label disabled" htmlFor="onoffswitch-disabledOff"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="toggle-list sm12 md12 column row">
                    <h2 class="title-XL mrg-L">Icon Toggle</h2>
                    <div class="icon-toggle mrg-rght-L mrg-L">
                        <figure class="toggle-img">
                            <img src="http://via.placeholder.com/220x220" alt="" />
                            <div class="like-icon">
                                <span class="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                <div class="tooltip tooltip-single tooltip-top-right">
                                    <span class="tooltip-content">Favorite</span>
                                </div>
                            </div>
                        </figure>

                    </div>
                </div>

                <div class="icon-group-block md12 lg12 sm12">
                    <h2 class="title-XL mrg-L">Icon Group</h2>
                    <div class="icon-group product-gallery-block" role="group">
                        <div class="listIcon fl-left mrg-XXL"></div>
                    </div>
                </div>

                <div class="md12 lg12 sm12 column mrg-XL">
                    <h2 class="title title-L mrg-M">Button Group</h2>
                    <div class="btn-group-block md12 lg12 sm12">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-secondary active">Tab 1</button>
                            <button type="button" class="btn btn-secondary">Tab 2</button>
                            <button type="button" class="btn btn-secondary hover">Tab 3</button>
                            <button type="button" class="btn btn-secondary disabled" disabled>Tab 4</button>
                        </div>
                        <ul class="std-txt-label">
                            <li>Active</li>
                            <li>Default</li>
                            <li>Hover</li>
                            <li>Disabled</li>
                        </ul>
                    </div>
                    
                    <h2 class="title title-L mrg-M">Disabled Button</h2>
                    <div><a href="#" role="button" class="btn btn-S btn-disabled mrg-L">Disabled Button</a></div>
                    <div><a href="#" role="button" class="btn btn-M btn-disabled mrg-L">Disabled Button</a></div>
                    <div><a href="#" role="button" class="btn btn-L btn-disabled mrg-L">Disabled Button</a></div>
                    <div><button type="button" name="button" class="btn btn-primary btn-L" disabled="">Active Button Turned Disabled</button></div>
                </div>
                <br /><br /><br />

                <div class="lg12 xl12 md12 sm12 filter-tags hide-for-medium-only hide-for-small-only nopad">
                    <div class="tags std-txt std-txt-S mrg-top-M">
                        <span class="tag-title">Gender: </span><span class="tag-item">Mens</span>
                        <a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
                    </div>
                    <div class="tags std-txt std-txt-S mrg-top-M">
                        <span class="tag-title">Item Type: </span><span class="tag-item">Suit Jackets</span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
                    </div>
                    <div class="tags std-txt std-txt-S mrg-top-M">
                        <span class="tag-title">Gender: </span>
                        <span class="tag-item">
                            <span class="filter-color-swatches" />Grey</span>
                        <a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
                    </div>
                    <div class="tags std-txt std-txt-S mrg-top-M star-preview-col">
                        <span class="tag-title">Rating: </span>
                        <span class="tag-item">
                            <ul class="star-ratings-S">
                                <li class="star-ratings start-ratings-full">
                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li class="star-ratings start-ratings-full">
                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li class="star-ratings start-ratings-full">
                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                                <li class="star-ratings start-ratings-half">
                                    <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                </li>
                                <li class="star-ratings star-rating-empty">
                                    <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                </li>
                            </ul>

                        </span><a href="javascript:void(0)" class="icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
                    </div>
                    <a class="tag-clear std-txt std-txt-S fl-left mrg-top-L" href="javascript:void(0)">Clear All</a>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <hr />
                        <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                            <br /> Latest update: 04/05/2017</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Buttons;
