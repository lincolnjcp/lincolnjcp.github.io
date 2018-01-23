import React, { Component } from 'react';

import CodeGenerator from '../../containers/CodeGenerator.js';

import $ from 'jquery'

const searchIcon = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const tooltipIcon = require('!!raw-loader?es5=1!../../../images/global/icons/action/tooltip.svg');
const cardJCPRed = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp-red.svg');

class Forms extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="sm12 columns">
                        <h1 className="title title-XL mrg-L">Forms</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
                        <hr />
                    </div>
                </div>
                <div className="row" id="code-generator">
                    <div className="sm12 columns">
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
                                                html:`<[[format_tag_start]]a[[format_tag_end]] [[format_attribute_start]]
                                                            href="[[format_attribute_end]][[format_tag_value_start]]javascript:void();[[format_tag_value_end]][[format_attribute_start]]"
                                                            class="[[format_attribute_end]][[format_tag_value_start]]btn [[code_button_size]] [[code_button_style]] [[code_button_width]] [[code_button_disabled]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                            [[format_tab_start]]
                                                                [[code_button_text]]
                                                            [[format_tab_end]]
                                                        <[[format_tag_start]]/a[[format_tag_end]]>`,
                                            },
                                            {
                                                javascript:``,                                        
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
                        <p className="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /> </p>
                    </div>
                    <div className="sm12 columns">
                        <h5 className="title title-M">Best Practices</h5>
                        <ul className="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <br /><br /><hr />
                    </div>
                </div>
                <div className="row" id="appearance">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Appearance</h3>
                        <p className="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /> </p>
                        <div className="row">
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="css-float-label">
                                                <input className="form-control email-text input-text" id="email" type="text" placeholder="example@email.com" />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Text Field</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns select-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="select">
                                            <div className="css-float-label">
                                                <select className="form-control custom-select">
                                                    <option value=''>Month</option>
                                                    <option value='1'>01 - Janaury</option>
                                                    <option value='2'>02 - February</option>
                                                    <option value='3'>03 - March</option>
                                                    <option value='4'>04 - April</option>
                                                    <option value='5'>05 - May</option>
                                                    <option value='6'>06 - June</option>
                                                    <option value='7'>07 - July</option>
                                                    <option value='8'>08 - August</option>
                                                    <option value='9'>09 - September</option>
                                                    <option value='10'>10 - October</option>
                                                    <option value='11'>11 - November</option>
                                                    <option value='12'>12 - December</option>
                                                </select>
                                                <span>Month</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Select Input</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns text-area-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="css-float-label">
                                                <textarea className="form-control" name="instructions">Please deliver to side service entrance of apartment building. Enter code 9090 to access garage.</textarea>
                                                <label htmlFor="instructions">Delivery Instructions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Textarea</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns radio-button-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="mrg-XL">
                                                <input type="radio" id="two" name="name" value="" defaultChecked="false" />
                                                <label htmlFor="two">
                                                    <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                            <div className="mrg-XL">
                                                <input type="radio" disabled id="three" name="name" value="" />
                                                <label htmlFor="three">
                                                    <span className="std-txt">Arrives May 5th - May 23rd</span></label>
                                            </div>
                                            <div className="mrg-XL">
                                                <input type="radio" id="two" name="name" value="" defaultChecked="false" />
                                                <label htmlFor="two">
                                                    <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                            <div className="mrg-XL">
                                                <input type="radio" disabled id="three" name="name" value="" />
                                                <label htmlFor="three">
                                                    <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Radio Button</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns checkbox-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <label className="checkbox mrg-M">
                                                <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
                                            </label>

                                            <label className="checkbox mrg-M">
                                                <input type="checkbox" /> <span>Checkbox</span>
                                            </label>

                                            <label className="checkbox mrg-M">
                                                <input type="checkbox" defaultChecked="true" /> <span>Checkbox</span>
                                            </label>

                                            <br />

                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Checkbox</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="css-float-label">
                                                <input className="form-control input-text" id="phone-number" maxLength="14" type="text" placeholder="( ___ ) ___-____" />
                                                <label htmlFor="Phone">Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Phone Number</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="css-float-label">
                                                <span className="icon jcp-icon-red" dangerouslySetInnerHTML={{ __html: cardJCPRed }} />
                                                <input id="creditcard" type="tel" name="ccnumber" placeholder="8888 8888 888" className="form-control creditcard-text input-text masked" />
                                                <label className="creditcard" htmlFor="creditcard">Card Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Credit Card</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form password-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="position-rel">
                                            <div className="css-float-label">
                                                <input className="form-control input-text" id="password" maxLength="16" type="password" placeholder="••••••••••" />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <a href="javascript:void(0);" className="show-pwd">show</a>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Password</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns select-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="row">
                                            <div className="sm6 columns">
                                                <div className="select">
                                                    <div className="css-float-label">
                                                        <select className="form-control custom-select">
                                                            <option value=''>Month</option>
                                                            <option value='1'>01</option>
                                                            <option value='2'>02</option>
                                                            <option value='3'>03</option>
                                                            <option value='4'>04</option>
                                                            <option value='5'>05</option>
                                                            <option value='6'>06</option>
                                                            <option value='7'>07</option>
                                                            <option value='8'>08</option>
                                                            <option value='9'>09</option>
                                                            <option value='10'>10</option>
                                                            <option value='11'>11</option>
                                                            <option value='12'>12</option>
                                                        </select>
                                                        <span>Month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm6 columns">
                                                <div className="select">
                                                    <div className="css-float-label">
                                                        <select className="form-control custom-select">
                                                            <option value=''>Year</option>
                                                            <option value='1'>2001</option>
                                                            <option value='2'>2002</option>
                                                            <option value='3'>2003</option>
                                                            <option value='4'>2004</option>
                                                            <option value='5'>2005</option>
                                                            <option value='6'>2006</option>
                                                            <option value='7'>2007</option>
                                                            <option value='8'>2008</option>
                                                            <option value='9'>2009</option>
                                                            <option value='10'>2010</option>
                                                            <option value='11'>2011</option>
                                                            <option value='12'>2012</option>
                                                        </select>
                                                        <span>Year</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Condensed Fields</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="position-rel search-block">
                                            <div className="css-float-label">
                                                <form>
                                                <input className="form-control input-text" id="search" type="text" name="focus" required placeholder="Search Products" />
                                                <label htmlFor="search">Search Products</label>
                                                <a href="javascript:void();" class="search-close-icon" type="reset"></a>
                                                </form>
                                            </div>
                                            <span className="icon search-icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchIcon }} />
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Search Box</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>


                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-form-store-locator">
                                            <div className="input-form-store-locator-field-1">
                                                <input className="form-control input-text" id="search" type="text" placeholder="Zip Code" />
                                            </div>
                                            <div className="input-form-store-locator-field-2">
                                                <div className="select">
                                                    <select className="form-control custom-select">
                                                        <option value='5'>5 miles</option>
                                                        <option value='10'>10 miles</option>
                                                        <option value='20'>20 miles</option>
                                                        <option value='50'>50 miles</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" className="search-icon">
                                                <span className="icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchIcon }} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Store Locator</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="position-rel">
                                            <div className="css-float-label">
                                                <input id="zipcode" type="tel" name="zipcode" placeholder="Enter Code" maxLength="5" className="form-control input-text" />
                                                <label htmlFor="zipcode">Enter Code</label>
                                                <a href="javascript:void();" className="btn btn-S btn-primary apply-btn">Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Inline Action</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="position-rel">
                                            <div className="css-float-label">
                                                <input className="form-control input-text" id="date" maxLength="5" type="text" placeholder="Birthday (Optional)" />
                                                <label htmlFor="date">Birthday (Optional)</label>
                                            </div>
                                            <span className="icon tooltip-icon" dangerouslySetInnerHTML={{ __html: tooltipIcon }} />
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Optional Fields with Tooltip</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="input-group">
                                            <div className="css-float-label">
                                                <input className="form-control email-text input-text disabled" id="disemail" type="text" value="example@email.com" disabled />
                                                <label htmlFor="disemail" className="disabled-label">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Disabled</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm12 columns input-form">
                                <div className="row">
                                    <div className="sm12 md4 columns">
                                        <div className="position-rel">
                                            <div className="css-float-label">
                                                <input className="form-control input-text" id="date-picker" maxLength="5" type="text" placeholder="11/07/2017" />
                                                <label htmlFor="date-picker">Delivery Date</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm12 md8 columns">
                                        <h4 className="title title-M mrg-L">Date Picker</h4>
                                        <p className="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sm12 columns">
                        <hr />
                    </div>
                </div>
                <div className="row" id="form-validation">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Form Validation</h3>
                        <p className="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                    </div>
                    <div className="sm12 columns input-form error">
                        <div className="row">
                            <div className="sm12 columns">
                                <div className="row">        
                                    <div className="position-rel sm12 md4 columns">
                                        <div className="css-float-label">
                                            <input className="form-control email-text input-text" id="email" type="text" placeholder="example@email.com" />
                                            <label htmlFor="email">Email</label>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="sm12 columns">
                                        <span className="error-message">Please enter a valid email address</span>
                                        <br /><br /><br />
                                        <p className="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                                        <div className="sm12 md5 columns row">
                                            <div className="css-float-label">
                                                <div className="msg msg-error mrg-M">Email or password is incorrect</div>
                                                <br />
                                            </div>
                                            <div className="css-float-label">
                                                <input className="form-control email-text input-text" id="email" type="text" placeholder="example@email.com" />
                                                <label htmlFor="email">Email</label>
                                                <br />
                                            </div>
                                            <div className="css-float-label password-form">
                                                <input className="form-control input-text" id="password" maxLength="16" type="password" placeholder="••••••••••" />
                                                <label htmlFor="password">Password</label>
                                                <a href="javascript:void(0);" className="show-pwd">show</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sm12 columns">
                        <hr />
                    </div>
                </div>
                <div className="row" id="sample-layout">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Sample Layout</h3>
                        <p className="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                    </div>
                    <div className="sm12 md4 form-layout">
                        <div className="form-group column">
                            <input className="form-control input-text" type="text" placeholder="Name" />
                        </div>
                        <div className="form-group column">
                            <input className="form-control input-text" type="text" placeholder="Birthday (Optional)" />
                        </div>
                        <div className="form-group md6 sm4 column row">
                            <input className="form-control input-text" type="text" placeholder="Zip Code" />
                        </div>
                        <div className="select md6 form-layout column">
                            <select className="form-control custom-select">
                                <option value=''>State</option>
                                <option value='1'>01</option>
                                <option value='2'>02</option>
                                <option value='3'>03</option>
                                <option value='4'>04</option>
                                <option value='5'>05</option>
                                <option value='6'>06</option>
                                <option value='7'>07</option>
                                <option value='8'>08</option>
                                <option value='9'>09</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                            </select>
                        </div>
                        <div className="form-group column">
                            <input className="form-control input-text" id="name" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="form-group column">
                            <label className="checkbox mrg-M">
                                <input type="checkbox" /> <span>Set as default address</span>
                            </label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" id="related-content">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Related Content</h3>
                        <ul className="list max-width-text color-slate">
                            <li><a href="javascript:void();">Alerts & Messaging</a></li>
                            <li><a href="javascript:void();">Filter & Sorting</a></li>
                            <li><a href="javascript:void();">Tooltips </a></li>
                        </ul>
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

export default Forms;
