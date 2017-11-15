import React, { Component } from 'react';
import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const thumbsUpImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-line.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const heartImageFill = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const settingsImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/settings.svg');

class Buttons extends Component {
    componentDidMount() {
        $(".icon-hover").hover(function() {
            $(this).addClass("hover");
        }, function() {
            $(this).removeClass("hover");
        });
      }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="small-12 columns">
                        <h1 className="title title-XL mrg-L">Buttons</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>
                <div className="row" id="code-generator">
                    <div className="small-12 columns">
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
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-L">When to Use</h3>
                        <p className="max-width-text mrg-XL">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
                        <div className="button-overview algn-mid-S mrg-XL">
                            <a href="javascript:void();" className="btn btn-primary btn-L mrg-L">Primary Large</a>
                            <a href="javascript:void();" className="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                            <a href="javascript:void();" className="btn btn-L btn-disabled mrg-L">Disabled Large</a>

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
                    <div className="small-12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Appearance</h3>
                        <p className="max-width-text mrg-XXL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div className="row">
                            <div className="small-12 medium-5 large-4 columns mrg-XL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-primary btn-S mrg-M">Primary Small</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-primary btn-M mrg-M">Primary Medium</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-primary btn-L mrg-M">Primary Large</a>
                                </div>
                            </div>
                            <div className="small-12 medium-7 large-8 columns">
                                <h5 className="title title-M mrg-M">Primary Action</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-5 large-4 columns mrg-XXL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-secondary btn-S mrg-M">Secondary Small</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-secondary btn-M mrg-M">Secondary Medium</a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-secondary btn-L mrg-M">Secondary Large</a>
                                </div>
                            </div>
                            <div className="small-12 medium-7 large-8 columns">
                                <h5 className="title title-M mrg-M">Secondary Action</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-5 large-4 columns">
                                <div className="button-preview algn-mid mrg-XL">
                                    <a href="javascript:void();" className="btn btn-primary btn-L mrg-M btn-icon"><span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> Checkout</a>
                                </div>

                            </div>
                            <div className="small-12 medium-7 large-8 columns">
                                <h5 className="title title-M mrg-M">Icon and Label</h5>
                                <p className="mrg-XXL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-5 large-4 columns mrg-XXL">
                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-primary btn-L mrg-M btn-icon btn-icon-slide"><span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span className="btn-label">Add to Cart</span></a>
                                </div>

                                <div className="button-preview algn-mid">
                                    <a href="javascript:void();" className="btn btn-secondary btn-L mrg-M btn-icon btn-icon-slide"><span className="icon" dangerouslySetInnerHTML={{ __html: cartImage }} /> <span className="btn-label">Add to Cart</span></a>
                                </div>
                            </div>
                            <div className="small-12 medium-7 large-8 columns">
                                <h5 className="title title-M mrg-M">Icon Hover Effect</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="responsive-behavior">
                    <div className="small-12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Responsive Behavior</h3>
                        <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                        <div className="design-system-container hide-for-small-only mrg-L">
                            <p className="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div className="design-system-container-inner algn-rght btn-set-desktop-example">
                                <a href="javascript:void();" className="btn btn-secondary btn-L mrg-zero">Cancel</a>
                                <a href="javascript:void();" className="btn btn-primary btn-L mrg-zero">Save</a>
                            </div>
                        </div>
                        <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>

                        <div className="design-system-container design-system-container-small mrg-L">
                            <p className="std-txt std-txt-S color-slate mrg-L">CONTAINER</p>
                            <div className="design-system-container-inner algn-rght">
                                <a href="javascript:void();" className="btn btn-primary btn-L btn-full mrg-M">Save</a>
                                <a href="javascript:void();" className="btn btn-secondary btn-L btn-full mrg-M">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/>

                <div className="toggle-list small-12 medium-12 column row">
                    <h2 className="title-XL mrg-L">Icon Toggle</h2>
                    <div className="icon-toggle mrg-rght-L mrg-L">
                        <figure className="toggle-img">
                            <img src="http://via.placeholder.com/220x220" alt="" />
                            <a href="javascript:void(0);" className="heart-icon">
                                <span className="icon icon-hover" dangerouslySetInnerHTML={{ __html: heartlineImage }} />
                            </a>
                            <span className="std-txt-label algn-lft">Default</span>
                        </figure>
                    </div>
                    <div className="icon-toggle mrg-rght-L mrg-L">
                        <figure className="toggle-img">
                            <img src="http://via.placeholder.com/220x220" alt="" />
                            <a href="javascript:void(0);" className="heart-icon">
                                <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartlineImage }} />
                            </a>
                            <span className="std-txt-label algn-lft">Hover</span>
                        </figure>
                    </div>
                    <div className="icon-toggle mrg-rght-L mrg-L">
                        <figure className="toggle-img">
                            <img src="http://via.placeholder.com/220x220" alt="" />
                            <a href="javascript:void(0);" className="heart-icon">
                                <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartImageFill }} />
                            </a>
                            <span className="std-txt-label algn-lft">Active</span>
                        </figure>
                    </div>
                </div>
                <div className="small-12 medium-12 column row">
                    <div className="thumb-icon row mrg-XL">
                        <div className="toggle-thumbs mrg-rght-L">
                            <span className="icon icon-hover" dangerouslySetInnerHTML={{ __html: thumbsUpImage }} />
                            <span className="std-txt-label algn-lft">Default</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-L">
                            <span className="icon hover" dangerouslySetInnerHTML={{ __html: thumbsUpImage }} />
                            <span className="std-txt-label algn-lft">Hover</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-L">
                            <span className="icon hover" dangerouslySetInnerHTML={{ __html: thumbsupfillImage }} />
                            <span className="std-txt-label algn-lft">Active</span>
                        </div>
                    </div><br/><br/>
                    <div className="row column small-12 medium-12 text-buttons">
                        <h2 className="title-XL mrg-L">Text Button</h2>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <button className="txt-btn">Text Button</button>
                            <span className="std-txt-label algn-lft">Default</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <a href="#" className="txt-btn hover">Text Button</a>
                            <span className="std-txt-label algn-lft">Hover</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <button className="txt-btn" disabled>Text Button</button>
                            <span className="std-txt-label algn-lft">Disabled</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <button className="txt-btn txt-btn-S focus">Text Button</button>
                            <span className="std-txt-label algn-lft">ARIA focus</span>
                        </div>
                    </div><br/><br/><br/>

                    <div className="row column small-12 medium-12 icon-buttons">
                        <h2 className="title-XL mrg-L">Icon Button</h2>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <a href="javascript:void(0)" className="cart-button">
                                <span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} ></span>
                                <span className="cart-count">12</span>
                            </a>
                            <span className="std-txt-label algn-lft">Default</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <a href="javascript:void(0)" className="cart-button">
                                <span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} ></span>
                                <span className="cart-count">12</span>
                            </a>
                            <span className="std-txt-label algn-lft">Hover</span>
                        </div>
                        <div className="toggle-thumbs mrg-rght-XL">
                            <a href="javascript:void(0)" className="cart-button focus">
                                <span className="icon color-white-svg" dangerouslySetInnerHTML={{ __html: cartImage }} ></span>
                                <span className="cart-count">12</span>
                            </a>
                            <span className="std-txt-label algn-lft">ARIA focus</span>
                        </div>
                    </div><br/><br/>
                    <div className="row column small-12 medium-12 icon-buttons">
                        <div className="toggle-settings mrg-rght-XL">
                            <a href="javascript:void(0)" className="icon-button">
                                <span className="icon icon-hover" dangerouslySetInnerHTML={{ __html: settingsImage }} ></span>
                            </a>
                            <span className="std-txt-label algn-lft">Default</span>
                        </div>
                        <div className="toggle-settings mrg-rght-XL">
                            <a href="javascript:void(0)" className="icon-button">
                                <span className="icon color-penneyred hover" dangerouslySetInnerHTML={{ __html: settingsImage }} ></span>
                            </a>
                            <span className="std-txt-label algn-lft">Hover</span>
                        </div>
                        <div className="toggle-settings mrg-rght-XL">
                            <a href="javascript:void(0)" className="icon-button">
                                <span className="icon focus" dangerouslySetInnerHTML={{ __html: settingsImage }} ></span>
                            </a>
                            <span className="std-txt-label algn-lft">ARIA focus</span>
                        </div>
                        <div className="toggle-settings mrg-rght-XL">
                            <a href="javascript:void(0)" className="icon-button disable">
                                <span className="icon disable" dangerouslySetInnerHTML={{ __html: settingsImage }} ></span>
                            </a>
                            <span className="std-txt-label algn-lft">Disabled</span>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="small-12 columns">
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