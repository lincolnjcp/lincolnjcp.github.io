import React, { Component } from 'react';

import CodeGenerator from '../../containers/CodeGenerator.js';

import $ from 'jquery'

const searchIcon = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const tooltipIcon = require('!!raw-loader?es5=1!../../../images/global/icons/action/tooltip.svg');
const cardJCP = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-jcp.svg');
const cardneutralImage = require('!!raw-loader?es5=1!../../../images/global/icons/payment/card-neutral.svg');

class Forms extends Component {

    componentDidMount() {

        
        Array.from(document.getElementsByClassName('show-pwd')).map(function (el) {
            el.onclick = onShowPwd;
        });

        function onShowPwd(evt) {
            var textid = evt.target.getAttribute('data-textid');
            var passwordElement = document.getElementById(textid);
            var currentType = passwordElement.getAttribute('type');
            var newType = currentType == "password" ? 'text' : 'password';
            passwordElement.setAttribute('type', newType);
            evt.target.innerHTML = (newType == 'password') ? 'show' : 'hide';
        }

        $(function () {
            $('#creditcard').on('keypress change', function () {
                $(this).val(function (index, value) {
                    return value.replace(/[^0-9]/g, "").replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
                });
            });

            $("#creditcard").focus(function() {
                $('.credit-card-icon').show('fast');       
            });
              
            
            $('#creditcard').blur(function(){
              if( !$(this).val() ) {
                    $('.credit-card-icon').hide('fast');
              }
            });
        });

        $(function () {
            function selector(event) {
                var $this = $(this);
                if ($this.val() != " ") {
                    $('.' + $this.attr('data-label')).removeClass("hide");
                    $this.addClass("select-selected");
                } else {
                    $('.' + $this.attr('data-label')).addClass("hide");
                    $this.removeClass("select-selected");
                }
            }
            $(".form-select select").on('change', selector);

        });



        $(function () {
            $(".phone-number").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3) {
                    $(this).val(curval + "-");
                } else if (curchr == 7) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '12');
            });

            $(".birthday").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 2) {
                    $(this).val(curval + "/");
                } else if (curchr == 5) {
                    $(this).val(curval + "/");
                }
                $(this).attr('maxlength', '10');
            });
        });

        $(".zipcode_text").on('focus blur', function () {
            $(this).parent('div').parent('div').toggleClass('is_focused');
        })

    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-L">Forms</h1>
                        <h2 class="std-txt std-txt-XL mrg-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
                        <hr />
                    </div>
                </div>
                <div class="row" id="when-to-use">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">When to Use</h3>
                        <p class="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /> </p>
                    </div>
                    <div class="sm12 columns">
                        <h5 class="title title-M">Best Practices</h5>
                        <ul class="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <br /><br /><hr />
                    </div>
                </div>
                <div class="row" id="appearance">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Appearance</h3>
                        <p class="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /> </p>
                        <div class="row">
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <div class="form-float-label">
                                                <input class="form-control email-text input-text" id="email" type="text" placeholder="Email " />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Text Field</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns select-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="select">
                                            <div class="form-float-label form-select" >
                                                <select class="form-control custom-select" data-label="select-label1">
                                                    <option value=' '>Month</option>
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
                                                <span class="select-label hide select-label1">Month</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Select Input</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns text-area-form input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <div class="form-float-label">
                                                <textarea class="form-control input-text text-area" name="instructions" placeholder="Delivery Instructions"></textarea>
                                                <label htmlFor="instructions">Delivery Instructions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Textarea</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns radio-button-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <div class="mrg-XL">
                                                <input type="radio" id="two" name="name" value="" defaultChecked="false" />
                                                <label htmlFor="two">
                                                    <p class="std-txt std-txt-M"><span class="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                            <div class="mrg-XL">
                                                <input type="radio" disabled id="three" name="name" value="" />
                                                <label htmlFor="three">
                                                    <span class="std-txt">Arrives May 5th - May 23rd</span></label>
                                            </div>
                                            <div class="mrg-XL">
                                                <input type="radio" id="two" name="name" value="" defaultChecked="false" />
                                                <label htmlFor="two">
                                                    <p class="std-txt std-txt-M"><span class="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                            <div class="mrg-XL">
                                                <input type="radio" disabled id="three" name="name" value="" />
                                                <label htmlFor="three">
                                                    <p class="std-txt std-txt-M"><span class="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Radio Button</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns checkbox-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <label class="checkbox mrg-M">
                                                <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
                                            </label>

                                            <label class="checkbox mrg-M">
                                                <input type="checkbox" /> <span>Checkbox</span>
                                            </label>

                                            <label class="checkbox mrg-M">
                                                <input type="checkbox" defaultChecked="true" /> <span>Checkbox</span>
                                            </label>

                                            <label class="checkbox checkbox-M mrg-M">
                                                <input type="checkbox" /> <span>Checkbox Medium</span>
                                            </label>
                                            <label class="checkbox checkbox-S mrg-M">
                                                <input type="checkbox" /> <span>Checkbox Small</span>
                                            </label>
                                            <br />

                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Checkbox</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <div class="form-float-label">
                                                <input class="form-control input-text phone-number" id="phone-number" maxLength="14" type="tel" placeholder="( ___ ) ___-____" />
                                                <label htmlFor="Phone">Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Phone Number</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group credit-card-form">
                                            <div class="form-float-label">
                                                <input id="creditcard" type="text" maxLength="25" name="ccnumber" placeholder=" " class="form-control creditcard-text input-text masked"/>
                                                <label class="creditcard" htmlFor="creditcard">Card Number</label>
                                                <span class="icon credit-card-icon" dangerouslySetInnerHTML={{ __html: cardneutralImage }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Credit Card</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form password-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="position-rel">
                                            <div class="form-float-label">
                                                <input class="form-control input-text" id="password" maxLength="16" type="password" placeholder="••••••••••" />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <a href="javascript:void(0);" data-textid="password" class="show-pwd title-S">show</a>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Password</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns select-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="row">
                                            <div class="sm6 columns">
                                                <div class="select">
                                                    <div class="form-float-label form-select">
                                                        <select class="form-control custom-select" data-label="select-label2">
                                                            <option value=' '>Month</option>
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
                                                        <span class="select-label2 hide">Month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sm6 columns">
                                                <div class="select">
                                                    <div class="form-float-label form-select">
                                                        <select class="form-control custom-select" data-label="select-label3">
                                                            <option value=' '>Year</option>
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
                                                        <span class="select-label3 hide">Year</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Condensed Fields</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="position-rel search-block">
                                            <form>
                                                <input type="text" id="search" name="focus" placeholder="Search Products" required class="input-text placeholder-text" />
                                                <button class="search-close-icon" type="reset"></button>
                                            </form>
                                            <span class="icon search-icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchIcon }} />
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Search Box</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>


                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-form-store-locator">
                                            <div class="input-form-store-locator-field-1">
                                                <input class="form-control input-text zipcode_text placeholder-text" id="search" type="number" placeholder="Zip Code" />
                                            </div>
                                            <div class="input-form-store-locator-field-2">
                                                <div class="select">
                                                    <select class="form-control custom-select">
                                                        <option value='5'>5 miles</option>
                                                        <option value='10'>10 miles</option>
                                                        <option value='20'>20 miles</option>
                                                        <option value='50'>50 miles</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" class="search-icon">
                                                <span class="icon color-lipstick-svg" dangerouslySetInnerHTML={{ __html: searchIcon }} />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Store Locator</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="position-rel">
                                            <input type="tel" id="zipcode" name="zipcode" placeholder="Enter Code" required class="input-text placeholder-text" />
                                            <a href="javascript:void();" role="button" class="btn btn-S btn-primary apply-btn">Apply</a>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Inline Action</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group position-rel">
                                            <div class="form-float-label">
                                                <input type="tel" id="birthday1" name="date" placeholder="mm/dd/yyyy" class="form-control input-text input-birthday birthday" />
                                                <label htmlFor="birthday1">Birthday (Optional)</label>
                                            </div>
                                            <span class="icon tooltip-icon" dangerouslySetInnerHTML={{ __html: tooltipIcon }} />
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Optional Fields with Tooltip</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="input-group">
                                            <div class="form-float-label">
                                                <input class="form-control email-text input-text disabled" id="disemail" type="text" value="jesse@email.com" placeholder="jesse@email.com" disabled />
                                                <label htmlFor="disemail" class="disabled-label">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Disabled</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 columns input-form">
                                <div class="row">
                                    <div class="sm12 md4 columns">
                                        <div class="position-rel">
                                            <div class="form-float-label">
                                                <input class="form-control input-text" id="date-picker" maxLength="5" type="text" placeholder="11/07/2017" />
                                                <label htmlFor="date-picker">Delivery Date</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm12 md8 columns">
                                        <h4 class="title title-M mrg-L">Date Picker</h4>
                                        <p class="max-width-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <hr />
                    </div>
                </div>
                <div class="row" id="form-validation">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Form Validation</h3>
                        <p class="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                    </div>
                    <div class="sm12 columns input-form error">
                        <div class="row">
                            <div class="sm12 columns">
                                <div class="row">
                                    <div class="position-rel sm12 md4 columns">
                                        <div class="form-float-label">
                                            <input class="form-control email-text input-text" id="email1" type="text" placeholder="Email" />
                                            <label htmlFor="email1">Email</label>
                                            <br />
                                        </div>
                                    </div>
                                    <div class="sm12 columns">
                                        <span class="error-message title-S">Please enter a valid email address</span>
                                        <br /><br /><br />
                                        <p class="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                                        <div class="sm12 md5 columns row">
                                            <div class="form-float-label">
                                                <div class="msg msg-error mrg-L">Email or password is incorrect</div>
                                            </div>
                                            <div class="form-float-label mrg-L">
                                                <input class="form-control email-text input-text" id="email" type="text" placeholder="Email " />
                                                <label htmlFor="email">Email</label>
                                                <br />
                                            </div>
                                            <div class="form-float-label password-form">
                                                <input class="form-control input-text" id="password2" maxLength="16" type="password" placeholder="Password" />
                                                <label htmlFor="password">Password</label>
                                                <a href="javascript:void(0);" data-textid="password2" class="show-pwd title-S">show</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <hr />
                    </div>
                </div>
                <div class="row sample-layout" id="sample-layout">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Sample Layout</h3>
                        <p class="max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.  <br /><br /> </p>
                    </div>
                    <div class="sm12 md4 form-layout input-form select-form">
                        <div class="form-group column">
                            <div class="form-float-label">
                                <input class="form-control input-text" type="text" id="name" placeholder="Name" />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div class="form-group column">
                            <div class="position-rel">
                                <div class="form-float-label">
                                    <input type="tel" id="birthday" name="date" placeholder="mm/dd/yyyy" class="form-control input-text input-birthday birthday" />
                                    <label htmlFor="birthday">Birthday (Optional)</label>
                                </div>
                                <span class="icon tooltip-icon" dangerouslySetInnerHTML={{ __html: tooltipIcon }} />
                            </div>
                        </div>
                        <div class="form-group md6 sm6 column row padding-right-zero">
                            <div class="form-float-label">
                                <input class="form-control input-text" id="zip" type="text" placeholder="Zip Code" />
                                <label htmlFor="zip">Zip Code</label>
                            </div>
                        </div>
                        <div class="select md6 sm6 form-layout column">
                            <div class="form-float-label form-select">
                                <select class="form-control custom-select" data-label="select-label4">
                                    <option value=' '>Month</option>
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
                                <span class="select-label4 hide">Month</span>
                            </div>
                        </div>
                        <div class="form-group column">
                            <div class="form-float-label">
                                <input class="form-control input-text phone-number" id="phonenumber" type="text" maxLength="14" placeholder="Phone Number" />
                                <label htmlFor="phonenumber">Phone Number</label>
                            </div>
                        </div>
                        <div class="form-group column">
                            <label class="checkbox checkbox-M mrg-M">
                                <input type="checkbox" /> <span>Set as default address</span>
                            </label>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row" id="related-content">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Related Content</h3>
                        <ul class="list max-width-text color-slate">
                            <li><a href="javascript:void();">Alerts & Messaging</a></li>
                            <li><a href="javascript:void();">Filter & Sorting</a></li>
                            <li><a href="javascript:void();">Tooltips </a></li>
                        </ul>
                    </div>
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

export default Forms;
