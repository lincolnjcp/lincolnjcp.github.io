import React, { Component } from 'react';

import $ from 'jquery'

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const chatfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-fill.svg');
const trianglerightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-right.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const gridfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/grid-fill.svg');
const listLineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-line.svg');
const listLineImageFill = require('!!raw-loader?es5=1!../../../images/global/icons/action/list-fill.svg');
const ChevronUpImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-up.svg');
const ChevronDownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-down.svg');

class WorkInProgress extends Component {

  render() {
    return (
        <div className="row">
        <div className="sm12 columns">
<h1 className="promo-lbl promo-lbl-L">Lincoln Design System</h1>


    <p className="anno">Price Text Styles</p>
    <h2 className="price price-XL mrg-btm-L">$75.00 - XL</h2>
    <h2 className="price price-L mrg-btm-L">$65.00 - L</h2>
    <h2 className="price price-M mrg-btm-L">$55.00 - M</h2>
    <h2 className="price price-S color-penneyred">$45.00 - S</h2>


    <p className="anno">Title Text Styles</p>
    <h2 className="title title-XL mrg-btm-L">Title XL</h2>
    <h2 className="title title-L mrg-btm-L">Title L</h2>
    <h2 className="title title-M mrg-btm-L">Title M</h2>
    <h2 className="title title-S mrg-btm-L">Title S</h2>


    <p className="anno">Standard Text Styles</p>
    <p className="std-txt std-txt-L mrg-btm-L"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-M mrg-btm-L"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-S mrg-btm-L"><span className="color-penneyred">FREE</span> Store Pickup Today at
     <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-XS mrg-btm-L">Select Styles
     <br /><a href="#">See details</a></p>

    <p className="M max-width-350 mrg-btm-L">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash...</p>

    <p className="S max-width-350 mrg-btm-L">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash... <em>now with emphasis!</em></p>


    <p className="anno">Promo Labels</p>
    <h2 className="promo-lbl promo-lbl-L mrg-btm-S"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>
    <h3 className="promo-lbl promo-lbl-S mrg-btm-XL">+ get an extra 10% off with your JCPenney Credit Card</h3>

    <h2 className="promo-lbl promo-lbl-XL algn-mid mrg-btm-XL">Extra 20% Off <br />
    Women’s Clothing</h2>

    <h2 className="promo-lbl promo-lbl-M algn-rght mrg-btm-XL"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>

    <div className="color-penneyred-bg padding-50">
      <h2 className="promo-lbl promo-display promo-lbl-XXL mrg-btm-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-XL mrg-btm-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-L mrg-btm-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-M mrg-btm-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-S mrg-btm-L">30% off!</h2>
    </div>

    <p className="anno">Marketing Labels</p>
    <h3 className="marketing-lbl mrg-btm-M">BOGO 50% off</h3>
    <h3 className="marketing-lbl mrg-btm-M">Clearance</h3>
    <h3 className="marketing-lbl mrg-btm-M">With Code Fundeal</h3>

    <p className="anno">Radio Buttons</p>

    <div className="mrg-btm-XL">
      <input type="radio" id="one" name="name" value="" checked />
      <label for="one">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-btm-XL">
      <input type="radio" id="two" name="name" value="" />
      <label for="two">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-btm-XL">
      <input type="radio" id="three" name="name" value="" />
      <label for="three">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-btm-XL">
      <input type="radio" id="four" name="name" value="" />
      <label for="four">Vanilla label</label>
    </div>

    <div className="mrg-btm-XL">
      <input type="radio" id="fifth" name="name" value="" disabled />
      <label for="fifth">Disabled radio</label>
    </div>


    <p className="anno">Buttons</p>
    <div className="">
      <a href="#" className="btn btn-secondary btn-L mrg-btm-L">Cancel</a>&nbsp;
      <a href="#" className="btn btn-primary btn-L mrg-btm-L">Save</a>
    </div>
    <div>
      <a href="#" className="btn btn-primary btn-S mrg-btm-L">Primary Button Small</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-M mrg-btm-L">Primary Button Medium</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-btm-L">Primary Button Large</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L btn-full mrg-btm-L">Primary Button Full</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-btm-L btn-icon"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} />Checkout</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-btm-L btn-full btn-icon"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} />Checkout</a>
    </div>

    <p className="anno">
      Icon on Hover Button
    </p>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-M mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-S mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-L mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-M mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-S mrg-btm-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>



    <p className="anno">
      Secondary Buttons
    </p>

    <div>
      <a href="#" className="btn btn-S btn-secondary mrg-btm-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-M btn-secondary mrg-btm-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-secondary mrg-btm-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-full btn-secondary mrg-btm-L">Secondary Button full</a>
    </div>

    <div>
      <a href="#" className="btn btn-S btn-disabled mrg-btm-L">Disabled Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-M btn-disabled mrg-btm-L">Disabled Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-disabled mrg-btm-L">Disabled Button</a>
    </div>

    <div>
      <button type="button" name="button" className="btn btn-primary btn-L" disabled="true">Active Button Turned Disabled</button>
    </div>


    <p className="anno">Button Tag</p>
    <button type="button" className="btn btn-primary btn-L mrg-btm-L" name="button">Button from a Button tag</button>
    <button type="button" className="btn btn-primary btn-L btn-full" name="button">Button from a Button tag</button>


    <p className="anno">Dropdowns</p>

    <div className="row mrg-btm-XL">
      <div className="sm12 md12 columns select-form">
          <div className="sm12 md4 columns select">
              <div className="form-float-label">
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
                  <span>Standard</span>
              </div>
          </div>
      </div>
    </div>

    <div className="row mrg-btm-XL">
      <div className="sm12 md12 columns select-form">
          <div className="sm12 columns select">
              <div className="form-float-label">
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
                  <span>Full Width</span>
              </div>
          </div>
      </div>
    </div>


    <p className="anno">Forms</p>
    <div className="mrg-btm-M">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email@email.com" />
    </div>

    <div className="mrg-btm-M">
      <label for="name">Name</label>
      <input type="text" name="name" className="mrg-rght-S" />
      <a href="#" className="btn btn-primary btn-M elevation-none">Submit</a>
    </div>

    <div className="mrg-btm-M">
      <label for="name">Phone Number</label>
      <input type="text" name="name" placeholder="( ___ ) ___-____" />
    </div>

    <div className="mrg-btm-M">
      <label for="name">Phone Number</label>
      <input type="text" className="input-error" name="name" placeholder="( ___ ) ___-____" />
    </div>

    <div className="mrg-btm-M">
      <label for="name">Full Width</label>
      <input type="text" className="form-full" name="name" />
    </div>

    <div className="mrg-btm-M">
      <label for="textarea">Textarea</label>
      <textarea name="textarea" rows="8" cols="40">Large text area</textarea>
    </div>

    <p className="anno">
      Inline Forms
    </p>
    <form className="form-inline form-css-label">
      <fieldset className="mrg-btm-L">
        <input id="firstName" name="firstName" type="text" autocomplete="off" required />
        <label for="firstName">First Name</label>
      </fieldset>
      <fieldset className="mrg-btm-L">
        <input id="lastName" name="lastName" type="text" autocomplete="off" required />
        <label for="lastName">Last Name</label>
      </fieldset>
      <fieldset className="mrg-btm-L">
        <input id="email" name="email" type="text" autocomplete="off" required />
        <label for="email">Email Address</label>
      </fieldset>
    </form>

    <p className="anno">Icons</p>
    <p>
      Placeholder for icons
    </p>


    <p className="anno">Lists</p>
    <ul className="list list-underline max-width-400 mrg-btm-XL">
      <li>list item 1</li>
      <li>list item 3</li>
      <li>list item 4</li>
      <li>list item 5</li>
    </ul>

    <ul className="list mrg-btm-XL">
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
    </ul>

    <h3 className="title title-L mrg-btm-S">List with Links</h3>
    <ul className="list list-links mrg-btm-XL">
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
      <li><a href="#">List item with link</a></li>
    </ul>
    <ul className="list list-icons max-width-text ">
      <li><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: chatfillImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: thumbsupfillImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: heartlineImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: trianglerightImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    </ul>

    <p className="anno">Default Headers</p>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <h6>Headline 6</h6>

    <p className="anno">Images</p>
    <img src="http://lorempixel/300/300" alt="" />

    <p className="anno">Colors</p>
    <div className="color color-passion-bg">
      Passion
    </div>
    <div className="color color-lipstick-bg">
      Lipstick
    </div>
    <div className="color color-penneyred-bg">
      Penney Red
    </div>
    <div className="color color-blush-bg mrg-btm-M">
      Blush
    </div>

    <div className="color color-shadow-bg">
      Shadow
    </div>
    <div className="color color-slate-bg">
      Slate
    </div>
    <div className="color color-concrete-bg">
      Concrete
    </div>
    <div className="color color-lightgrey-bg mrg-btm-M">
      Light Grey
    </div>


    <div className="color color-rewards-grape-bg">
      Rewards Grape
    </div>
    <div className="color color-rewards-eggplant-bg">
      Rewards Eggplant
    </div>
    <div className="color color-rewards-plum-bg mrg-btm-M">
      Rewards Plum
    </div>


    <div className="color color-rewards-platinum-1-bg">
      Platinum 1
    </div>
    <div className="color color-rewards-platinum-2-bg">
      Platinum 2
    </div>
    <div className="color color-rewards-platinum-3-bg mrg-btm-M">
      Platinum 3
    </div>

    <div className="color color-rewards-gold-1-bg">
      Gold 1
    </div>
    <div className="color color-rewards-gold-2-bg">
      Gold 2
    </div>
    <div className="color color-rewards-gold-3-bg mrg-btm-M">
      Gold 3
    </div>


    <div className="color color-marketing-brown-1-bg">
      Marketing Brown 1
    </div>
    <div className="color color-marketing-brown-2-bg">
      Marketing Brown 2
    </div>
    <div className="color color-marketing-brown-3-bg mrg-btm-M">
      Marketing Brown 3
    </div>

    <div className="color color-marketing-orange-1-bg">
      Marketing Orange 1
    </div>
    <div className="color color-marketing-orange-2-bg">
      Marketing Orange 2
    </div>
    <div className="color color-marketing-orange-3-bg mrg-btm-M">
      Marketing Orange 3
    </div>

    <div className="color color-marketing-green-1-bg">
      Marketing Green 1
    </div>
    <div className="color color-marketing-green-2-bg">
      Marketing Green 2
    </div>
    <div className="color color-marketing-green-3-bg mrg-btm-M">
      Marketing Green 3
    </div>

    <div className="color color-marketing-aqua-1-bg">
      Marketing Aqua 1
    </div>
    <div className="color color-marketing-aqua-2-bg">
      Marketing Aqua 2
    </div>
    <div className="color color-marketing-aqua-3-bg mrg-btm-M">
      Marketing Aqua 3
    </div>

    <div className="color color-marketing-blue-1-bg">
      Marketing Blue 1
    </div>
    <div className="color color-marketing-blue-2-bg">
      Marketing Blue 2
    </div>
    <div className="color color-marketing-blue-3-bg mrg-btm-M">
      Marketing Blue 3
    </div>

    <div className="color color-marketing-pink-1-bg">
      Marketing Pink 1
    </div>
    <div className="color color-marketing-pink-2-bg">
      Marketing Pink 2
    </div>
    <div className="color color-marketing-pink-3-bg mrg-btm-M">
      Marketing Pink 3
    </div>

    <div className="color color-blackfriday-primary-1-bg">
      Black Friday Primary 1
    </div>
    <div className="color color-blackfriday-primary-2-bg">
      Black Friday Primary 2
    </div>

    <div className="color color-blackfriday-secondary-1-bg">
      Black Friday Secondary 1
    </div>
    <div className="color color-blackfriday-secondary-2-bg">
      Black Friday Secondary 2
    </div>

    <div className="color color-blackfriday-tertiary-1-bg">
      Black Friday Tertiary 1
    </div>
    <div className="color color-blackfriday-tertiary-2-bg mrg-btm-M">
      Black Friday Tertiary 2
    </div>


    <div className="color color-xmas-bg">
      Seasonal: Xmas
    </div>
    <div className="color color-mothersday-bg">
      Seasonal: Mothers Day
    </div>
    <div className="color color-backtoschool-bg">
      Seasonal: Back to School
    </div>
    <div className="color color-fathersday-bg">
      Seasonal: Fathers Day
    </div>
    <div className="color color-halloween-bg">
      Seasonal: Halloween
    </div>
    <div className="color color-4thofjuly-bg">
      Seasonal: 4th of July
    </div>
    <div className="color color-cybermonday-bg">
      Seasonal: Cyber Monday
    </div>




    <p className="anno">Checkboxes</p>

    <label className="checkbox mrg-btm-L">
      <input type="checkbox" /> <span>Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></span>
    </label>
    <label className="checkbox mrg-btm-L">
      <input type="checkbox" /> <span>Checkbox</span>
    </label>

    <label className="checkbox mrg-btm-L">
      <input type="checkbox" checked="true" /> <span>Checkbox</span>
    </label>

    <label className="checkbox mrg-btm-XL">
      <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
    </label>

    <div>
      <h3 className="title title-L mrg-btm-M">Checkbox List</h3>
      <ul className="list list-underline list-checkboxes max-width-400">
        <li><label className="checkbox">
          <input type="checkbox" /> <span>$200 - $300</span>
        </label> <span className="list-qty">(14)</span></li>
        <li><label className="checkbox">
          <input type="checkbox" /> <span>$200 - $300</span>
        </label> <span className="list-qty">(14)</span></li>
        <li><label className="checkbox">
          <input type="checkbox" /> <span>$200 - $300</span>
        </label> <span className="list-qty">(14)</span></li>
        <li><label className="checkbox">
          <input type="checkbox" /> <span>$200 - $300</span>
        </label> <span className="list-qty">(14)</span></li>
      </ul>
    </div>


    <p className="anno">Messages</p>
    <div className="msg msg-neutral mrg-btm-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-success mrg-btm-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-warning mrg-btm-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-error mrg-btm-M">
      error
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-neutral mrg-btm-M max-width-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-error mrg-btm-M max-width-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-neutral mrg-btm-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <button type="button" className="msg-close"></button>
    </div>


    <p className="anno">Tables</p>
    <table border="0" width="100%" className="table-full mrg-btm-XL algn-lft">
      <thead>
        <tr>
          <th>
            Table Head
          </th>
          <th>
            Table Head
          </th>
          <th>
            Table Head
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
      </tbody>
    </table>

    <table border="0" width="100%" className="table-striped-rows algn-lft">
      <thead>
        <tr>
          <th>
            Table Head
          </th>
          <th>
            Table Head
          </th>
          <th>
            Table Head
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
        <tr>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
          <td>
            table row
          </td>
        </tr>
      </tbody>
    </table>


    <p className="anno">Wells</p>
    <div className="well mrg-btm-L">
      <h2 className="title title-L mrg-btm-M">Title In A Well</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className="well">
      <h2 className="title title-L">List In A Well</h2>
      <ul className="list list-icons max-width-text color-nightsky">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </div>


    <h2 className="title title-L mrg-btm-M">Tabs</h2>
    <div className="tab-container mrg-btm-XL">
      <ul className="tab-header">
        <li className="tab-lbl btn-active">
          <span>Tab 1</span>
        </li>
        <li className="tab-lbl">
          <span>Tab 2</span>
        </li>
        <li className="tab-lbl">
          <span>Tab 3</span>
        </li>
        <li className="tab-lbl tab-lbl-disabled" disabled="true">
          <span>Tab Disabled</span>
        </li>
      </ul>
    </div>

    <div className="md12 lg12 sm12 column mrg-btm-XL">
      <h2 className="title title-L mrg-btm-M">Switch</h2>
        <div className="switch-block md12 lg12 sm12">
          <div className="md4 lg4 sm12 fl-left">
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-off"/>
                <label className="onoffswitch-label" htmlFor="onoffswitch-off"></label>
            </div>
            <div className="std-txt-label">Off</div>
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-offHover"/>
                <label className="onoffswitch-label hover" htmlFor="onoffswitch-offHover"></label>
            </div>
            <div className="std-txt-label">Off Hover</div>
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-on" checked="true"/>
                <label className="onoffswitch-label" htmlFor="onoffswitch-on"></label>
            </div>
            <div className="std-txt-label">On</div>
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-onHover" checked="true"/>
                <label className="onoffswitch-label hover" htmlFor="onoffswitch-onHover"></label>
            </div>
            <div className="std-txt-label">On Hover</div>
          </div>
          <div className="md4 lg4 sm12 fl-left">
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-disabledOff" disabled="true"/>
                <label className="onoffswitch-label disabled" htmlFor="onoffswitch-disabledOff"></label>
            </div>
            <div className="std-txt-label">Disabled Off</div>
            <div className="onoffswitch mrg-btm-XL fl-left">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch-disabledOn" checked="true"/>
                <label className="onoffswitch-label disabled" htmlFor="onoffswitch-disabledOn"></label>
            </div>
            <div className="std-txt-label">Disabled On</div>
          </div>
        </div>
    </div>
    
    <div className="md12 lg12 sm12 column mrg-btm-XL">
      <h2 className="title title-L mrg-btm-M">Button Group</h2>
      <div className="btn-group-block md12 lg12 sm12">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-secondary active">Tab 1</button>
          <button type="button" class="btn btn-secondary">Tab 2</button>
          <button type="button" class="btn btn-secondary hover">Tab 3</button>
          <button type="button" class="btn btn-secondary disabled">Tab 4</button>
        </div>
        <ul className="std-txt-label">
          <li>Active</li>
          <li>Default</li>
          <li>Hover</li>
          <li>Disabled</li>
        </ul>
      </div>
    </div>

    <div className="md12 lg12 sm12 column mrg-btm-XL">
      <h2 className="title title-L mrg-btm-M">Icon Group</h2>
      <div className="icon-group-block md12 lg12 sm12">
        <div class="icon-group" role="group">
          <ul>
            <li>
              <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: gridfillImage}} />
              <span className="std-txt-label">&nbsp;</span>
            </li>
            <li className="mrg-rght-XL">
              <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: listLineImage}} />
              <span className="std-txt-label">&nbsp;</span>
            </li>
            <li className="mrg-lft-XL mrg-rght-L">
              <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: listLineImageFill}} />
              <span className="std-txt-label">Active</span>
            </li>
            <li className="mrg-lft-L mrg-rght-L">
              <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: listLineImage}} />
              <span className="std-txt-label">Default</span>
            </li>
            <li className="mrg-lft-L mrg-rght-L">
              <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: listLineImageFill}} />
              <span className="std-txt-label">Hover</span>
            </li>
            <li className="mrg-lft-L mrg-rght-L">
              <span className="icon color-shadow-svg disabled" dangerouslySetInnerHTML={{__html: listLineImageFill}} />
              <span className="std-txt-label">Disabled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="md12 lg12 sm12 column mrg-btm-XL">
      <h2 className="title title-L mrg-btm-M">PDP Carousels & Video Player</h2>
      <div className="carousel-block md12 lg12 sm12 mrg-btm-XL column">
        <div className="carousel-container md8 lg8 column">
          <div className="carousel-hero-img md2 lg2 column">
            <ul>
              <li className="visible-hide">
                <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronUpImage}} />
              </li>
              <li className="active">
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2"/>
              </li>
              <li>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M.tif?$gallery$"/>
              </li>
              <li>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M.tif?$gallery$"/>
              </li>
              <li>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M.tif?$gallery$"/>
              </li>
              <li>
                <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronDownImage}} />
              </li>
            </ul>
          </div>
          <div className="carousel-main-img md10 lg10 column">
            <span className="badge">LOW STOCK</span>
            <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2"/>
          </div>
        </div>
      </div><br/><br/>

      <div className="carousel-block md12 lg12 sm12 mrg-btm-XL column">
        <div className="carousel-container md8 lg8 column">
          <div className="carousel-hero-img md2 lg2 column">
            <ul>
              <li>
                <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronUpImage}} />
              </li>
              <li>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0926201617173470M"/>
              </li>
              <li>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0731201517030883M"/>
              </li>
              <li className="active">
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP1107201420322726C?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2"/>
              </li>
              <li>
                <span className="play-button"></span>
                <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0725201211262144C?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2"/>
              </li>
              <li className="visible-hide">
                <span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronDownImage}} />
              </li>
            </ul>
          </div>
          <div className="carousel-main-img md10 lg10 column">
            <span className="badge">LOW STOCK</span>
            <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0926201617173470M"/>
          </div>
        </div>
      </div><br/><br/>

      <div className="carousel-block md12 lg12 sm12 mrg-btm-XL column">
        <div className="carousel-main-img badge carousel-main-img-md">
          <span className="badge">LOW STOCK</span>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP1107201420322726C?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2"/>
        </div>
      </div>

    </div>


    <p className="anno">Or - horizontal line break</p>
    <div className="or"></div>


    <p className="anno">Breadcrumbs</p>
    <ul className="breadcrumbs">
      <li><a href="#">Home</a></li>
      <li><a href="#">Clothing</a></li>
      <li>Dresses</li>
    </ul>


    <p className="anno">Modals</p>
    <div className="modal-preview padding-25">
      <div className="modal">
        <button className="modal-close"></button>
        <h2 className="modal-title">This is a Modal</h2>
        <p className="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </p>
        <button type="button" name="button" className="btn btn-secondary btn-L">Cancel</button>
        <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
      </div>

      <br />

      <div className="modal">
        <button className="modal-close"></button>
        <h2 className="modal-title">This is a Modal with One CTA</h2>
        <p className="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </p>
        <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
      </div>

      <br />

      <div className="modal">
        <button className="modal-close"></button>
        <div className="msg msg-neutral mrg-btm-S">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        </div>
        <h2 className="modal-title">This is a Modal</h2>
        <p className="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </p>
        <button type="button" name="button" className="btn btn-secondary btn-L">Cancel</button>
        <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
      </div>
    </div>


    <p className="anno">Cart Header</p>
    <img src="" alt="" />


    <p className="anno">Flags</p>
    <div className="flag mrg-btm-L">
      Normal Flag
    </div>

    <br />

    <div className="flag flag-urgency std-txt std-txt-XS mrg-rght-S">
      Low<br />Stock
    </div>

    <div className="flag flag-urgency std-txt std-txt-XS mrg-rght-S">
      Low Stock
    </div>

    <br />
    <br />

    <div className="flag flag-urgency std-txt std-txt-XS mrg-rght-S">
      Low Stock
    </div>

    <div className="flag flag-deal std-txt std-txt-XS mrg-rght-S">
      Few Left
    </div>

    <br />


    <p className="anno">Frames</p>
    <div className="frame-S mrg-btm-L algn-mid padding-25">
      Frame S
    </div>

    <div className="frame-M mrg-btm-L algn-mid padding-25">
      Frame M
    </div>

    <div className="frame-L mrg-btm-L algn-mid padding-25">
      Frame L
    </div>


    <p className="anno">Elevation</p>

    <div className="frame-S mrg-btm-L algn-mid padding-25 elevation-1">
      Frame S Elevation 1
    </div>

    <div className="frame-M mrg-btm-L algn-mid padding-25 elevation-2">
      Frame M Elevation 2
    </div>


    <p className="anno">Product</p>
    <div className="product width-216">
      <figure className="product-img">
        <img src="http://placehold.it/200/200" alt="" />
      </figure>
      <div className="product-body">
        <div className="marketing-lbl marketing-lbl-S mrg-btm-S">
          BUY MORE AND SAVE WITH CODE: 48GOSHOP
        </div>
        <div className="price price-S mrg-btm-S">$59</div>
        <div className="std-txt std-txt-XS mrg-btm-S">
          St. John's Bay® Straight-Leg Jeans-Plus (31"/29" Short)
        </div>
      </div>
    </div>


    {/*
          <div className="anno">Icon Toggle</div>
          <h2 className="title-XL mrg-btm-L">Icon Toggle</h2>
          <div className="toggle-list sm12 md12 column row">
            <div className="icon-toggle mrg-rght-L mrg-btm-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon icon-hover" dangerouslySetInnerHTML={{ __html: heartlineImage }} />
                </a>
                <span className="std-txt-label">Default</span>
              </figure>
            </div>
            <div className="icon-toggle mrg-rght-L mrg-btm-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartlineImage }} />
                </a>
                <span className="std-txt-label">Hover</span>
              </figure>
            </div>
            <div className="icon-toggle mrg-rght-L mrg-btm-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartImageFill }} />
                </a>
                <span className="std-txt-label">Active</span>
              </figure>
            </div>
          </div>
          <div className="sm12 md12 column row">
          <div className="thumb-icon row mrg-btm-XL">
              <div className="toggle-thumbs mrg-rght-L">
                <span className="icon icon-hover" dangerouslySetInnerHTML={{ __html: thumbsUpImage }} />
                <span className="std-txt-label">Default</span>
              </div>
              <div className="toggle-thumbs mrg-rght-L">
                <span className="icon hover" dangerouslySetInnerHTML={{ __html: thumbsUpImage }} />
                <span className="std-txt-label">Hover</span>
              </div>
              <div className="toggle-thumbs mrg-rght-L">
                <span className="icon hover" dangerouslySetInnerHTML={{ __html: thumbsupfillImage }} />
                <span className="std-txt-label">Active</span>
              </div>
            </div>
            <div className="row column sm12 md12 text-buttons">
              <h2 className="title-XL mrg-btm-L">Text Button</h2>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn">Text Button</button>
                <span className="std-txt-label">Default</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <a href="#" className="txt-btn hover">Text Button</a>
                <span className="std-txt-label">Hover</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn" disabled>Text Button</button>
                <span className="std-txt-label">Disabled</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn txt-btn-S focus">Text Button</button>
                <span className="std-txt-label">ARIA focus</span>
              </div>
            </div>

            <div className="row column sm12 md12 text-buttons">
              <h2 className="title-XL mrg-btm-L">Text Button</h2>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn txt-btn-S">Text Button</button>
                <span className="std-txt-label">Small Default</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <a href="#" className="txt-btn txt-btn-S hover">Text Button</a>
                <span className="std-txt-label">Small Hover</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn txt-btn-S" disabled>Text Button</button>
                <span className="std-txt-label">Small Disabled</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn txt-btn-S txt-btn-S focus">Text Button</button>
                <span className="std-txt-label">Small ARIA focus</span>
              </div>
            </div>

            <div className="row column sm12 md12 icon-buttons">
              <h2 className="title-XL mrg-btm-L">Icon Button</h2>
              <div className="toggle-thumbs mrg-rght-XL">
                <a href="javascript:void(0)" className="cart-button">
                  <span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} ></span>
                  <span className="cart-count">12</span>
                </a>
                <span className="std-txt-label">Default</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <a href="javascript:void(0)" className="cart-button">
                  <span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} ></span>
                  <span className="cart-count">12</span>
                </a>
                <span className="std-txt-label">Hover</span>
              </div>
              <div className="toggle-thumbs mrg-rght-XL">
                <a href="javascript:void(0)" className="cart-button focus">
                  <span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} ></span>
                  <span className="cart-count">12</span>
                </a>
                <span className="std-txt-label">ARIA focus</span>
              </div>
            </div>
            <div className="row column sm12 md12 icon-buttons">
              <div className="toggle-settings mrg-rght-XL">
                <a href="javascript:void(0)" className="icon-button">
                  <span className="icon icon-hover" dangerouslySetInnerHTML={{__html: settingsImage}} ></span>
                </a>
                <span className="std-txt-label">Default</span>
              </div>
              <div className="toggle-settings mrg-rght-XL">
                <a href="javascript:void(0)" className="icon-button">
                  <span className="icon color-penneyred hover" dangerouslySetInnerHTML={{__html: settingsImage}} ></span>
                </a>
                <span className="std-txt-label">Hover</span>
              </div>
              <div className="toggle-settings mrg-rght-XL">
                <a href="javascript:void(0)" className="icon-button focus">
                  <span className="icon" dangerouslySetInnerHTML={{__html: settingsImage}} ></span>
                </a>
                <span className="std-txt-label">ARIA focus</span>
              </div>
              <div className="toggle-settings mrg-rght-XL">
                <a href="javascript:void(0)" className="icon-button disable">
                  <span className="icon" dangerouslySetInnerHTML={{__html: settingsImage}} ></span>
                </a>
                <span className="std-txt-label">Disabled</span>
              </div>
            </div>

          </div>

          */}

    <div className="selectors">
      <h3 className="title title-L mrg-btm-L">SKU Selectors</h3>
      <div className="std-txt-label mrg-btm-S">Small</div>
      <div className="mrg-btm-XL">
        <span className="sku-block selected mrg-rght-S">XS</span>
        <span className="sku-block normal mrg-rght-S">M</span>
        <span className="sku-block error mrg-rght-S">L</span>
        <a href="javascript:void(0)" className="oo-label-block">
          <span className="sku-block oo-stock mrg-rght-S">XL</span>
          <span className="oo-stock-label">Out of Stock Online</span>
        </a>
        <a href="javascript:void(0)" className="sku-focus">
          <span className="sku-block normal mrg-rght-S">1X</span>
        </a>
      </div>

      <div className="std-txt-label mrg-btm-S">Large</div>
      <div className="mrg-btm-XL">
        <span className="sku-block sku-block-L selected mrg-rght-S">small</span>
        <span className="sku-block sku-block-L normal mrg-rght-S">medium</span>
        <span className="sku-block sku-block-L error mrg-rght-S">large</span>
        <a href="javascript:void(0)" className="oo-label-block">
          <span className="sku-block sku-block-L oo-stock mrg-rght-S">xlarge</span>
          <span className="oo-stock-label">Out of Stock Online</span>
        </a>
      </div>

      <div className="std-txt-label mrg-btm-S">Large with Image</div>
      <div className="mrg-btm-XL">
        <span className="sku-block sku-block-L selected mrg-rght-S">
          <img src="http://placehold.it/100/100" alt="" />
        </span>
        <span className="sku-block sku-block-L normal mrg-rght-S">
          <img src="http://placehold.it/100/100" alt="" />
        </span>
        <span className="sku-block sku-block-L error mrg-rght-S">
          <img src="http://placehold.it/100/100" alt="" />
        </span>
        <a href="javascript:void(0)" className="oo-label-block">
          <span className="sku-block sku-block-L oo-stock mrg-rght-S">
            <img src="http://placehold.it/100/100" alt="" />
          </span>
          <span className="oo-stock-label">Out of Stock Online</span>
        </a>
        <a href="javascript:void(0)" className="sku-focus oo-label-block">
          <span className="sku-block sku-block-L error mrg-rght-S">
          <img src="http://placehold.it/100/100" alt="" />
          </span>
        </a>
      </div>

    </div>

    <div className="anno">Text Buttons</div>
    <button className="txt-btn mrg-rght-S">Button</button>
    <a href="#" className="txt-btn mrg-rght-S">Button</a>
    <button className="txt-btn mrg-rght-S" disabled>Disabled</button>
    <button className="txt-btn txt-btn-S mrg-rght-S">Small Button</button>
    <button className="txt-btn txt-btn-S mrg-rght-S" disabled>Small Button</button>


    <div className="anno">Progress Bars</div>
    <p className="std-txt std-txt-M color-nightsky">Spend <strong>$83.00</strong> more to Ship to Home FREE</p>
    <div className="progress-bar">
      <div className="progress-bar-percent"></div>
    </div>
    <p>(will need inline style built into React component)</p>

    <hr></hr>
    <p className="std-txt std-txt-M color-nightsky">Points</p>
    <div className="tooltip tooltip-bottom-center tooltip-single">$10</div>
    <br></br>
    <br></br>
    <div className="progress-bar progress-bar-rewards">
      <span className="progress-bar-max-points">200</span>
      <div className="progress-bar-percent">165</div>
    </div>
    <p className="S"><strong>35 points</strong> away from your next <strong>$10 reward*</strong></p>

    <p className="anno">Tooltips</p>
    <div className="mrg-btm-L row">
      <div className="tooltip">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-single">
        <span>tooltip tooltip new</span>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="tooltip tooltip-single tooltip-right-side">
        <span>tooltip right side</span>
      </div>

      <br></br>
      <br></br>

      <div className="tooltip tooltip-single tooltip-left-side">
        <span>tooltip left side</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-bottom-center">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-bottom-right">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-top-left">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-dark">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-top-center">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-top-right">
        <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>

      <div className="tooltip tooltip-top-right tooltip-long tooltip-list">
        <ul>
          <li><a href="#">My Account</a></li>
          <li><a href="#">My Rewards</a></li>
          <li><a href="#">My Orders</a></li>
          <li><a href="#">My Rewards (0)</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Profile Settings</a></li>
          <li><a href="#">Nofications</a></li>
          <li><a href="#">My JCPenney.com</a></li>
          <li><a href="#">Gift Registry</a></li>
          <li><a href="#">JCPenney Credit Card</a></li>
          <li className="tooltip-divider"><a href="#">Sign Out</a></li>
        </ul>
      </div>

      <br></br>

      <div className="tooltip tooltip-top-right">
        <span>
          <h1 className="title title-M mrg-btm-S">This is a Tooltip H1 Title</h1>
          Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <br></br>
      <br></br>

        <div className="tooltip tooltip-dark tooltip-top-right">
          <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
        </div>

        <br></br>
        <br></br>

        <div className="tooltip tooltip-right-side">
          <div className="tooltip-close">

          </div>
          <span>
            <h1 className="title title-M mrg-btm-S">This is a Tooltip H1 Title</h1>
            <input type="radio" id="tooltip-radio" name="tootlip-radio" />
            <label for="tooltip-radio">Vanilla label</label>
          </span>
        </div>

    </div>

    <p className="anno">Pagination</p>
    <div>
      <ul className="pagination">
        <li class="pagination-prev" aria-label="Prev"></li>
        <li className="pagination-lbl pagination-active">1</li>
        <li className="pagination-lbl">2</li>
        <li className="pagination-lbl">3</li>
        <li className="pagination-lbl">4</li>
        <li class="pagination-elipsis">...</li>
        <li class="pagination-lbl">99</li>
        <li class="pagination-next" aria-label="Next"></li>
      </ul>
    </div>


    <p className="anno">Star Ratings</p>
    <div>
      <ul className="star-ratings star-ratings-L">
        <li className="star-ratings-value">
          <ul>
            <li>★</li>
            <li>★</li>
            <li>★</li>
            <li>★</li>
            <li>★</li>
          </ul>
        </li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li className="star-ratings-total"><a href="#">(14)</a></li>
      </ul>

      <br></br>
      <br></br>
      <br></br>

      <ul className="star-ratings">
        <li className="star-ratings-value">
          <ul>
            <li>★</li>
            <li>★</li>
            <li>★</li>
            <li>★</li>
            <li>★</li>
          </ul>
        </li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li className="star-ratings-total"><a href="#">(14)</a></li>
      </ul>
    </div>

    <p className="anno">Visual Nav</p>
    <ul className="viz-nav">
      <li>
        <a href="#">
          <div className="viz-nav-img mrg-btm-S">
            <img src="https://media.endclothing.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/2/5/25-03-2017_vanquish_fadedslimjean_washedindigo_vjp4025-036_tc_1.jpg" alt="" />
          </div>
          <h2 className="title title-M mrg-btm-XS algn-mid">Liz Claiborne</h2>
          <p className="std-txt std-txt-M algn-mid">(627)</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="viz-nav-img mrg-btm-S">
            <img src="https://media.endclothing.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/2/5/25-03-2017_vanquish_fadedslimjean_washedindigo_vjp4025-036_tc_1.jpg" alt="" />
          </div>
          <h2 className="title title-M mrg-btm-XS algn-mid">Liz Claiborne</h2>
          <p className="std-txt std-txt-M algn-mid">(627)</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="viz-nav-img mrg-btm-S">
            <img src="https://media.endclothing.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/2/5/25-03-2017_vanquish_fadedslimjean_washedindigo_vjp4025-036_tc_1.jpg" alt="" />
          </div>
          <h2 className="title title-M mrg-btm-XS algn-mid">Liz Claiborne</h2>
          <p className="std-txt std-txt-M algn-mid">(627)</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="viz-nav-img mrg-btm-S">
            <img src="https://media.endclothing.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/2/5/25-03-2017_vanquish_fadedslimjean_washedindigo_vjp4025-036_tc_1.jpg" alt="" />
          </div>
          <h2 className="title title-M mrg-btm-XS algn-mid">Liz Claiborne</h2>
          <p className="std-txt std-txt-M algn-mid">(627)</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="viz-nav-img mrg-btm-S">
            <img src="https://media.endclothing.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/2/5/25-03-2017_vanquish_fadedslimjean_washedindigo_vjp4025-036_tc_1.jpg" alt="" />
          </div>
          <h2 className="title title-M mrg-btm-XS algn-mid">Liz Claiborne</h2>
          <p className="std-txt std-txt-M algn-mid">(627)</p>
        </a>
      </li>
    </ul>


    <p className="anno">Color Swatches</p>

    <div className="color-swatches-block mrg-btm-L fl-left">
      <h2 className="title title-L mrg-btm-M">Product Swatches</h2>
      <div className="color-swatches-list md8 lg8">
        <ul className="list-product-colors-container swatches-grid">
          <li>
            <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
            <span className="std-txt-label">Selected</span>
          </li>
          <li>
            <a href="javascript:void(0)" className="list-color-swatch"></a>
            <span className="std-txt-label">Default</span>
          </li>
          <li>
            <a href="javascript:void(0)" className="list-color-swatch hover"></a>
            <span className="std-txt-label">Hover</span>
          </li>
          <li>
            <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-oos"></a>
            <span className="std-txt-label">Out of Stock</span>
          </li>
          <li>
            <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active list-color-swatch-oos"></a>
            <span className="std-txt-label">Out of Stock Selected</span>
          </li>
          <li className="focus">
            <a href="javascript:void(0)" className="list-color-swatch hover"></a>
            <span className="std-txt-label">ARIA focus</span>
          </li>
        </ul>
      </div><br/><br/><br/>
      <div className="md5 lg5 sm12 column">
        <div className="color-swatches-list md12 lg12 sm12">
          <h2 className="title title-L mrg-btm-M">Expand/Collapse</h2>
          <span className="std-txt-label">Large/XL Breakpoint</span>
          <div>
            <p className="md6 sm6 lg6 column">
              <span><strong>Color:</strong> Blue</span>
            </p>
            <p className="md6 sm6 lg6 column">
              <a href="javascript:void(0)" className="show-all-cta">show all colors</a>
            </p>
          </div>
          <div className="color-swatches-list">
              <ul className="list-product-colors-container">
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >

                </li>
              </ul>
          </div>

          <div className="color-swatches-list">
              <ul className="list-product-colors-container">
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0816201717175526S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175023S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175123S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043269S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175173S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111344S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0801201717175223S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111628S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043369S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0726201717065030S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111678S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0807201717111357S"/>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch">
                    <img src="https://s7d9.scene7.com/is/image/JCPenney/DP0719201704043169S"/>
                  </a>
                </li>
                <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >

                </li>
              </ul>
          </div>

        </div><br/><br/><br/>



        <br/><br/><br/>

        <div className="color-swatches-list md12 lg12 sm12">
          <span className="std-txt-label">Small Breakpoint</span>
          <div>
            <p className="md6 sm6 lg6 column">
              <span><strong>Color:</strong> Blue</span>
            </p>
            <p className="md6 sm6 lg6 column">
              <a href="javascript:void(0)" className="show-all-cta">show all colors</a>
            </p>
          </div>
          <div className="color-swatches-list">
              <ul className="list-product-colors-container">
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch list-color-swatch-active"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >
                </li>
              </ul>
          </div>
        </div><br/><br/><br/>

        <div className="color-swatches-list md12 lg12 sm12">
          <div>
            <p className="md6 sm6 lg6 column">
              <span><strong>Color:</strong> Blue</span>
            </p>
            <p className="md6 sm6 lg6 column">
              <a href="javascript:void(0)" className="show-all-cta">fewer colors</a>
            </p>
          </div>
          <div className="color-swatches-list">
              <ul className="list-product-colors-container">
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="list-color-swatch"></a>
                </li>
              </ul>
          </div>
        </div>
      </div>

      <div className="md5 lg5 sm12 column">
      <h2 className="title title-L mrg-btm-M">Sizing</h2>
        <div className="color-swatches-list md12 lg12 sm12">
          <div className="color-swatches-medium mrg-btm-L">
            <ul className="list-product-colors-container">
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >
                </li>
            </ul>
            <span className="std-txt-label">Medium - Gallery (>5)</span>
          </div>
          <div className="color-swatches-small">
            <ul className="list-product-colors-container">
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="list-color-swatch"></a>
              </li>
              <li className="swatches-list-icon" dangerouslySetInnerHTML={{ __html: plusImage }} >
                </li>
            </ul>
            <span className="std-txt-label">Small - Gallery (>5)</span>
          </div>
        </div>
      </div>

    </div>

    <p className="anno">Selectors</p>
    <ul>
      <li className="selector selector-active selector-S">small</li>
      <li className="selector selector-S">small</li>
      <li className="selector selector-S">small</li>
      <li className="selector selector-S selector-disabled">disabled</li>
    </ul>

    <ul>
      <li className="selector selector-active selector-M">medium</li>
      <li className="selector selector-M">medium</li>
      <li className="selector selector-M">medium</li>
      <li className="selector selector-M selector-disabled">disabled</li>
    </ul>

    <ul>
      <li className="selector selector-active"><img src="http://placehold.it/88x56"></img></li>
      <li className="selector"><img src="http://placehold.it/88x56"></img></li>
      <li className="selector"><img src="http://placehold.it/88x56"></img></li>
    </ul>




    </div>
    </div>

    );
  }
}

export default WorkInProgress;
