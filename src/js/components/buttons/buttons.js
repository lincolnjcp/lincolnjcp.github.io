import React, { Component } from 'react';
import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const lockImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/lock.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const thumbsUpImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-line.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const heartImageFill = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const settingsImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/settings.svg');
const gridfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/grid-fill.svg');
const listLineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-line.svg');
const listLineImageFill = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-fill.svg');
const clearImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');
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

        $(".listIcon").on("click", function () {
            $(this).toggleClass("gridIcon");
          });
      
          $('.show').on('click', function (e) {
            $('.show').toggleClass("less");
          });
          $('.dropdown-button').on('click', function () {
            
            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            parent_box.find('.dropdown-menu').slideToggle(200 ,"swing");
            
            $(this).toggleClass("arrow-down"); 
            return false;
        });
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="sm12 columns">
                        <h1 className="title title-XL mrg-L">Buttons</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>
                <div className="row" id="code-generator">
                    <div className="sm12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Code Generator</h3>


                        <CodeGenerator
                            formFields={
                                [
                                    {
                                        fieldType: 'text',
                                        displayLabel: 'Text Label',
                                        name: 'code_button_text',
                                        value: 'My Button'
                                    },
                                    {
                                        fieldType: 'select',
                                        displayLabel: 'Style',
                                        name: 'code_button_style',
                                        value: [
                                            {
                                                text: 'Primary',
                                                value: 'btn-primary'
                                            },
                                            {
                                                text: 'Secondary',
                                                value: 'btn-secondary'
                                            }
                                        ],
                                        defaultSelect: 'btn-primary'
                                    },
                                    {
                                        fieldType: 'select',
                                        displayLabel: 'Size',
                                        name: 'code_button_size',
                                        value: [
                                            {
                                                text: 'Medium',
                                                value: 'btn-M'
                                            },
                                            {
                                                text: 'Large',
                                                value: 'btn-L'
                                            }
                                        ],
                                        defaultSelect: 'btn-L'
                                    },
                                    {
                                        fieldType: 'checkbox',
                                        displayLabel: 'Full Width',
                                        name: 'code_button_width',
                                        value: 'btn-full',
                                        defaultSelect: ''
                                    },
                                    {
                                        fieldType: 'checkbox',
                                        displayLabel: 'Disabled',
                                        name: 'code_button_disabled',
                                        value: 'btn-disabled',
                                        defaultSelect: ''
                                    },
                                    {
                                        fieldType: 'checkbox',
                                        displayLabel: 'Display Content Loader',
                                        name: 'code_button_loader',
                                        value: 'none',
                                        defaultSelect: 'true'
                                    }
                                ]}

                            htmlPattern={
                                [
                                    {
                                        default: [
                                            {
                                                html: `<[[format_tag_start]]a[[format_tag_end]] [[format_attribute_start]]
                                            href="[[format_attribute_end]][[format_tag_value_start]]javascript:void();[[format_tag_value_end]][[format_attribute_start]]"
                                            class="[[format_attribute_end]][[format_tag_value_start]]btn [[code_button_size]] [[code_button_style]] [[code_button_width]] [[code_button_disabled]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                            [[format_tab_start]]
                                                [[code_button_text]]
                                            [[format_tab_end]]
                                        <[[format_tag_start]]/a[[format_tag_end]]>`,
                                            },
                                            {
                                                javascript: ``,
                                            }

                                        ]
                                    }
                                ]}

                        />
                    </div>
                </div>
                <div className="row" id="when-to-use">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">When to Use</h3>
                        <p className="max-width-text mrg-XL">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
                        <div className="button-overview algn-mid-S mrg-XL">
                            <a href="javascript:void();" role="button" className="btn btn-primary btn-L mrg-L">Primary Large</a>
                            <a href="javascript:void();" role="button" className="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                            <a href="javascript:void();" role="button" className="btn btn-L btn-disabled mrg-L">Disabled Large</a>

                        </div>
                        <h5 className="title title-M mrg-M">Best Practices</h5>
                        <ul className="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
                        </ul>
                    </div>
                </div>
                <div className="row" id="appearance">
                    <div className="sm12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Appearance</h3>
                        <p className="max-width-text mrg-XXL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns mrg-XL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-primary btn-S mrg-M">Primary Small</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-primary btn-M mrg-M">Primary Medium</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-primary btn-L mrg-M">Primary Large</a>
                                </div>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-M">Primary Action</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns mrg-XXL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-secondary btn-S mrg-M">Secondary Small</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-secondary btn-M mrg-M">Secondary Medium</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-secondary btn-L mrg-M">Secondary Large</a>
                                </div>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-M">Secondary Action</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns">
                                <div className="button-preview algn-mid mrg-XL">
                                    <a href="javascript:void();" role="button" className="btn btn-primary btn-L mrg-M btn-icon "><span className="icon color-white-svg lock-icon" dangerouslySetInnerHTML={{ __html: lockImage }} /> Checkout</a>
                                </div>

                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-M">Icon and Label</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns mrg-XXL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-primary btn-L mrg-M btn-icon btn-icon-slide"><span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span className="btn-label">Add to Cart</span></a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" role="button" className="btn btn-secondary btn-L mrg-M btn-icon btn-icon-slide"><span className="icon color-penneyred-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span className="btn-label">Add to Cart</span></a>
                                </div>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-M">Icon Hover Effect</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="responsive-behavior">
                    <div className="sm12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Responsive Behavior</h3>
                        <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                        <div className="design-system-container hide-for-small-only mrg-L">
                            <p className="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div className="design-system-container-inner algn-rght btn-set-desktop-example">
                                <a href="javascript:void();" role="button" className="btn btn-secondary btn-L mrg-zero">Cancel</a>
                                <a href="javascript:void();" role="button" className="btn btn-primary btn-L mrg-zero">Save</a>
                            </div>
                        </div>
                        <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>

                        <div className="design-system-container design-system-container-small mrg-L">
                            <p className="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div className="design-system-container-inner algn-rght">
                                <a href="javascript:void();" role="button" className="btn btn-primary btn-L btn-full mrg-M">Save</a>
                                <a href="javascript:void();" role="button" className="btn btn-secondary btn-L btn-full mrg-M">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br />


                <div className="dropdown-menu-block column md4 sm12 lg4">
                        <div className="pos-rel fl-left">
                            <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                            <div className="dropdown-menu">
                                <div className="tooltip tooltip-top-left">
                                    <span>
                                        <ul className="dropdown-sort">
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
                                                <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div class="main-menu-bar-secondary-container lg4">
                        <div className="main-menu-secondary-left">
                                    <div className="bg-color-penneyred"></div>

                                    <ul className="main-menu-secondary button-main-menu">
                                        <li className="main-menu-secondary-li main-menu-secondary-li-primary title title-S">Gifts</li>
                                        <li className="main-menu-secondary-li main-menu-secondary-li-primary title title-S">My List</li>
                                        <li className="main-menu-secondary-li main-menu-secondary-li-primary title title-S">Coupons</li>
                                    </ul>
                            </div>
                        
                    </div>
                    <br /><br /><br />
                    <div className="cart-icon lg4">
                    <ul>
                        <li className="main-menu-primary-item main-menu-primary-cart"> <a href="javascript:void(0);" className="main-menu-primary-cart-icon-full"> <span className="main-menu-primary-cart-icon-full-items ">28</span>
                        <div className="main-menu-primary-cart-icon-full-icon icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} />
                        </a> </li>
                    </ul>
                    </div>
                    <br /><br /><br />


                <div className="md12 lg12 sm12 column mrg-XL">
                    <h2 className="title title-L mrg-M">Switch</h2>
                    <div className="switch-block md12 lg12 sm12">
                        <div className="md4 lg4 sm12 fl-left">
                            <div className="onoffswitch mrg-XL fl-left">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-off" />
                                <label className="onoffswitch-label" htmlFor="onoffswitch-off"></label>
                            </div>
                            <div className="onoffswitch mrg-XL fl-left">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-disabledOff" disabled="true" />
                                <label className="onoffswitch-label disabled" htmlFor="onoffswitch-disabledOff"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="toggle-list sm12 md12 column row">
                    <h2 className="title-XL mrg-L">Icon Toggle</h2>
                    <div className="icon-toggle mrg-rght-L mrg-L">
                        <figure className="toggle-img">
                            <img src="http://via.placeholder.com/220x220" alt="" />
                            <div className="like-icon">
                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                <div className="tooltip tooltip-single tooltip-top-right">
                                    <span className="tooltip-content">Favorite</span>
                                </div>
                            </div>
                        </figure>

                    </div>
                </div>

                <div className="icon-group-block md12 lg12 sm12">
                    <h2 className="title-XL mrg-L">Icon Group</h2>
                    <div class="icon-group product-gallery-block" role="group">
                        <div class="listIcon fl-left mrg-XXL"></div>
                    </div>
                </div>

                <div className="md12 lg12 sm12 column mrg-XL">
                    <h2 className="title title-L mrg-M">Button Group</h2>
                    <div className="btn-group-block md12 lg12 sm12">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-secondary active">Tab 1</button>
                            <button type="button" class="btn btn-secondary">Tab 2</button>
                            <button type="button" class="btn btn-secondary hover">Tab 3</button>
                            <button type="button" class="btn btn-secondary disabled" disabled>Tab 4</button>
                        </div>
                        <ul className="std-txt-label">
                            <li>Active</li>
                            <li>Default</li>
                            <li>Hover</li>
                            <li>Disabled</li>
                        </ul>
                    </div>
                    <h2 className="title title-L mrg-M">Tiny Button Coupon</h2>
                    <button className="title-XS">see details</button>
                    <br /><br /><br />
                    <h2 className="title title-L mrg-M">Disabled Button</h2>
                    <div><a href="#" role="button" class="btn btn-S btn-disabled mrg-L">Disabled Button</a></div>
                    <div><a href="#" role="button" class="btn btn-M btn-disabled mrg-L">Disabled Button</a></div>
                    <div><a href="#" role="button" class="btn btn-L btn-disabled mrg-L">Disabled Button</a></div>
                    <div><button type="button" name="button" class="btn btn-primary btn-L" disabled="">Active Button Turned Disabled</button></div>
                </div>
                <br /><br /><br />

                <div className="lg12 xl12 md12 sm12 filter-tags hide-for-medium-only hide-for-small-only nopad">
              <div className="tags std-txt std-txt-S mrg-top-M">
                <span className="tag-title">Gender: </span><span class="tag-item">Mens</span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div className="tags std-txt std-txt-S mrg-top-M">
                <span className="tag-title">Item Type: </span><span class="tag-item">Suit Jackets</span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div className="tags std-txt std-txt-S mrg-top-M">
                <span className="tag-title">Gender: </span>
                <span class="tag-item">
               <span className="filter-color-swatches" />Grey
                  
               
                </span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <div className="tags std-txt std-txt-S mrg-top-M star-preview-col">
                <span className="tag-title">Rating: </span>
                <span class="tag-item">
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
                    <li className="star-ratings star-rating-empty">
                        <span className="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                    </li>
                </ul>
                
                </span><a href="javascript:void(0)" className="color-white-svg icon" dangerouslySetInnerHTML={{ __html: clearImage }} />
              </div>
              <a className="tag-clear std-txt std-txt-S fl-left mrg-top-L" href="javascript:void(0)">Clear All</a>
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

export default Buttons;
