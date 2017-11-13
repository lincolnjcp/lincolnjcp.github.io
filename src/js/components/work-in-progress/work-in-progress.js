import React, { Component } from 'react';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const chatfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-fill.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const thumbsUpImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-line.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const heartImageFill = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const trianglerightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-right.svg');

class WorkInProgress extends Component {

componentDidMount() {
}

  render() {
    return (
        <div className="row">
        <div className="small-12 columns">
<h1 className="promo-lbl promo-lbl-L">Lincoln Design System</h1>


    <p className="anno">Price Text Styles</p>
    <h2 className="price price-XL mrg-L">$75.00 - XL</h2>
    <h2 className="price price-L mrg-L">$65.00 - L</h2>
    <h2 className="price price-M mrg-L">$55.00 - M</h2>
    <h2 className="price price-S color-penneyred">$45.00 - S</h2>


    <p className="anno">Title Text Styles</p>
    <h2 className="title title-XL mrg-L">Title XL</h2>
    <h2 className="title title-L mrg-L">Title L</h2>
    <h2 className="title title-M mrg-L">Title M</h2>
    <h2 className="title title-S mrg-L">Title S</h2>


    <p className="anno">Standard Text Styles</p>
    <p className="std-txt std-txt-L mrg-L"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-M mrg-L"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-S mrg-L"><span className="color-penneyred">FREE</span> Store Pickup Today at
     <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-XS mrg-L">Select Styles
     <br /><a href="#">See details</a></p>

    <p className="M max-width-350 mrg-L">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash...</p>

    <p className="S max-width-350 mrg-L">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash... <em>now with emphasis!</em></p>


    <p className="anno">Promo Labels</p>
    <h2 className="promo-lbl promo-lbl-L mrg-S"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>
    <h3 className="promo-lbl promo-lbl-S mrg-XL">+ get an extra 10% off with your JCPenney Credit Card</h3>

    <h2 className="promo-lbl promo-lbl-XL algn-mid mrg-XL">Extra 20% Off <br />
    Women’s Clothing</h2>

    <h2 className="promo-lbl promo-lbl-M algn-rght mrg-XL"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>

    <div className="color-penneyred-bg padding-50">
      <h2 className="promo-lbl promo-display promo-lbl-XXL mrg-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-XL mrg-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-L mrg-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-M mrg-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-S mrg-L">30% off!</h2>
    </div>

    <p className="anno">Marketing Labels</p>
    <h3 className="marketing-lbl mrg-M">BOGO 50% off</h3>
    <h3 className="marketing-lbl mrg-M">Clearance</h3>
    <h3 className="marketing-lbl mrg-M">With Code Fundeal</h3>

    <p className="anno">Radio Buttons</p>

    <div className="mrg-XL">
      <input type="radio" id="one" name="name" value="" checked />
      <label for="one">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-XL">
      <input type="radio" id="two" name="name" value="" />
      <label for="two">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-XL">
      <input type="radio" id="three" name="name" value="" />
      <label for="three">Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></label>
    </div>

    <div className="mrg-XL">
      <input type="radio" id="four" name="name" value="" />
      <label for="four">Vanilla label</label>
    </div>

    <div className="mrg-XL">
      <input type="radio" id="fifth" name="name" value="" disabled />
      <label for="fifth">Disabled radio</label>
    </div>


    <p className="anno">Buttons</p>
    <div className="">
      <a href="#" className="btn btn-secondary btn-L mrg-L">Cancel</a>&nbsp;
      <a href="#" className="btn btn-primary btn-L mrg-L">Save</a>
    </div>
    <div>
      <a href="#" className="btn btn-primary btn-S mrg-L">Primary Button Small</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-M mrg-L">Primary Button Medium</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-L">Primary Button Large</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L btn-full mrg-L">Primary Button Full</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-L btn-icon"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} />Checkout</a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-L btn-full btn-icon"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} />Checkout</a>
    </div>

    <p className="anno">
      Icon on Hover Button
    </p>

    <div>
      <a href="#" className="btn btn-primary btn-L mrg-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-M mrg-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-S mrg-L btn-icon btn-icon-slide width-300"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-L mrg-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-M mrg-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-S mrg-L btn-icon btn-icon-slide width-300"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>



    <p className="anno">
      Secondary Buttons
    </p>

    <div>
      <a href="#" className="btn btn-S btn-secondary mrg-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-M btn-secondary mrg-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-secondary mrg-L">Secondary Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-full btn-secondary mrg-L">Secondary Button full</a>
    </div>

    <div>
      <a href="#" className="btn btn-S btn-disabled mrg-L">Disabled Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-M btn-disabled mrg-L">Disabled Button</a>
    </div>

    <div>
      <a href="#" className="btn btn-L btn-disabled mrg-L">Disabled Button</a>
    </div>

    <div>
      <button type="button" name="button" className="btn btn-primary btn-L" disabled="true">Active Button Turned Disabled</button>
    </div>


    <p className="anno">Button Tag</p>
    <button type="button" className="btn btn-primary btn-L mrg-L" name="button">Button from a Button tag</button>
    <button type="button" className="btn btn-primary btn-L btn-full" name="button">Button from a Button tag</button>


    <p className="anno">Dropdowns</p>

    <div className="row mrg-XL">
      <div className="small-12 medium-12 columns select-form">
          <div className="small-12 medium-4 columns select">
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
                  <span>Standard</span>
              </div>
          </div>
      </div>                            
    </div>

    <div className="row mrg-XL">
      <div className="small-12 medium-12 columns select-form">
          <div className="small-12 columns select">
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
                  <span>Full Width</span>
              </div>
          </div>
      </div>                            
    </div>
    

    <p className="anno">Forms</p>
    <div className="mrg-M">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email@email.com" />
    </div>

    <div className="mrg-M">
      <label for="name">Name</label>
      <input type="text" name="name" className="mrg-rght-S" />
      <a href="#" className="btn btn-primary btn-M elevation-none">Submit</a>
    </div>

    <div className="mrg-M">
      <label for="name">Phone Number</label>
      <input type="text" name="name" placeholder="( ___ ) ___-____" />
    </div>

    <div className="mrg-M">
      <label for="name">Phone Number</label>
      <input type="text" className="input-error" name="name" placeholder="( ___ ) ___-____" />
    </div>

    <div className="mrg-M">
      <label for="name">Full Width</label>
      <input type="text" className="form-full" name="name" />
    </div>

    <div className="mrg-M">
      <label for="textarea">Textarea</label>
      <textarea name="textarea" rows="8" cols="40">Large text area</textarea>
    </div>

    <p className="anno">
      Inline Forms
    </p>
    <form className="form-inline form-css-label">
      <fieldset className="mrg-L">
        <input id="firstName" name="firstName" type="text" autocomplete="off" required />
        <label for="firstName">First Name</label>
      </fieldset>
      <fieldset className="mrg-L">
        <input id="lastName" name="lastName" type="text" autocomplete="off" required />
        <label for="lastName">Last Name</label>
      </fieldset>
      <fieldset className="mrg-L">
        <input id="email" name="email" type="text" autocomplete="off" required />
        <label for="email">Email Address</label>
      </fieldset>
    </form>

    <p className="anno">Icons</p>
    <p>
      Placeholder for icons
    </p>


    <p className="anno">Lists</p>
    <ul className="list list-underline max-width-400 mrg-XL">
      <li>list item 1</li>
      <li>list item 3</li>
      <li>list item 4</li>
      <li>list item 5</li>
    </ul>

    <ul className="list mrg-XL">
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
      <li>List Item Normal</li>
    </ul>

    <h3 className="title title-L mrg-S">List with Links</h3>
    <ul className="list list-links mrg-XL">
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
    <div className="color color-blush-bg mrg-M">
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
    <div className="color color-lightgrey-bg mrg-M">
      Light Grey
    </div>


    <div className="color color-rewards-grape-bg">
      Rewards Grape
    </div>
    <div className="color color-rewards-eggplant-bg">
      Rewards Eggplant
    </div>
    <div className="color color-rewards-plum-bg mrg-M">
      Rewards Plum
    </div>


    <div className="color color-rewards-platinum-1-bg">
      Platinum 1
    </div>
    <div className="color color-rewards-platinum-2-bg">
      Platinum 2
    </div>
    <div className="color color-rewards-platinum-3-bg mrg-M">
      Platinum 3
    </div>

    <div className="color color-rewards-gold-1-bg">
      Gold 1
    </div>
    <div className="color color-rewards-gold-2-bg">
      Gold 2
    </div>
    <div className="color color-rewards-gold-3-bg mrg-M">
      Gold 3
    </div>


    <div className="color color-marketing-brown-1-bg">
      Marketing Brown 1
    </div>
    <div className="color color-marketing-brown-2-bg">
      Marketing Brown 2
    </div>
    <div className="color color-marketing-brown-3-bg mrg-M">
      Marketing Brown 3
    </div>

    <div className="color color-marketing-orange-1-bg">
      Marketing Orange 1
    </div>
    <div className="color color-marketing-orange-2-bg">
      Marketing Orange 2
    </div>
    <div className="color color-marketing-orange-3-bg mrg-M">
      Marketing Orange 3
    </div>

    <div className="color color-marketing-green-1-bg">
      Marketing Green 1
    </div>
    <div className="color color-marketing-green-2-bg">
      Marketing Green 2
    </div>
    <div className="color color-marketing-green-3-bg mrg-M">
      Marketing Green 3
    </div>

    <div className="color color-marketing-aqua-1-bg">
      Marketing Aqua 1
    </div>
    <div className="color color-marketing-aqua-2-bg">
      Marketing Aqua 2
    </div>
    <div className="color color-marketing-aqua-3-bg mrg-M">
      Marketing Aqua 3
    </div>

    <div className="color color-marketing-blue-1-bg">
      Marketing Blue 1
    </div>
    <div className="color color-marketing-blue-2-bg">
      Marketing Blue 2
    </div>
    <div className="color color-marketing-blue-3-bg mrg-M">
      Marketing Blue 3
    </div>

    <div className="color color-marketing-pink-1-bg">
      Marketing Pink 1
    </div>
    <div className="color color-marketing-pink-2-bg">
      Marketing Pink 2
    </div>
    <div className="color color-marketing-pink-3-bg mrg-M">
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
    <div className="color color-blackfriday-tertiary-2-bg mrg-M">
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

    <label className="checkbox mrg-L">
      <input type="checkbox" /> <span>Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></span>
    </label>
    <label className="checkbox mrg-L">
      <input type="checkbox" /> <span>Checkbox</span>
    </label>

    <label className="checkbox mrg-L">
      <input type="checkbox" checked="true" /> <span>Checkbox</span>
    </label>

    <label className="checkbox mrg-XL">
      <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
    </label>

    <div>
      <h3 className="title title-L mrg-M">Checkbox List</h3>
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
    <div className="msg msg-neutral mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-success mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-warning mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-error mrg-M">
      error
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href="#">click here</a>
    </div>

    <div className="msg msg-neutral mrg-M max-width-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-error mrg-M max-width-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-neutral mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <button type="button" className="msg-close"></button>
    </div>


    <p className="anno">Tables</p>
    <table border="0" width="100%" className="table-full mrg-XL algn-lft">
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
    <div className="well mrg-L">
      <h2 className="title title-L mrg-M">Title In A Well</h2>
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


    <p className="anno">Tabs</p>
    <div>
      <ul className="tabs">
        <li className="tab-section mrg-rght-S">
          tab
        </li>
        <li className="tab-section mrg-rght-S">
          tab
        </li>
      </ul>
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
        <div className="msg msg-neutral mrg-S">
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
    <div className="flag mrg-L">
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
    <div className="frame-S mrg-L algn-mid padding-25">
      Frame S
    </div>

    <div className="frame-M mrg-L algn-mid padding-25">
      Frame M
    </div>

    <div className="frame-L mrg-L algn-mid padding-25">
      Frame L
    </div>


    <p className="anno">Elevation</p>

    <div className="frame-S mrg-L algn-mid padding-25 elevation-1">
      Frame S Elevation 1
    </div>

    <div className="frame-M mrg-L algn-mid padding-25 elevation-2">
      Frame M Elevation 2
    </div>


    <p className="anno">Product</p>
    <div className="product width-216">
      <figure className="product-img">
        <img src="http://placehold.it/200/200" alt="" />
      </figure>
      <div className="product-body">
        <div className="marketing-lbl marketing-lbl-S mrg-S">
          BUY MORE AND SAVE WITH CODE: 48GOSHOP
        </div>
        <div className="price price-S mrg-S">$59</div>
        <div className="std-txt std-txt-XS mrg-S">
          St. John's Bay® Straight-Leg Jeans-Plus (31"/29" Short)
        </div>
      </div>
    </div>

    <div className="anno">Icon Buttons</div>


          <div className="anno">Icon Toggle</div>
          <h2 className="title-XL mrg-L">Icon Toggle</h2>
          <div className="toggle-list small-12 medium-12 column row">
            <div className="icon-toggle mrg-rght-L mrg-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon" dangerouslySetInnerHTML={{ __html: heartlineImage }} />
                </a>
                <span className="std-txt-label">Default</span>
              </figure>
            </div>
            <div className="icon-toggle mrg-rght-L mrg-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartlineImage }} /> 
                </a>
                <span className="std-txt-label">Hover</span>
              </figure>
            </div>
            <div className="icon-toggle mrg-rght-L mrg-L">
              <figure className="toggle-img">
                <img src="http://via.placeholder.com/220x220" alt="" />
                <a href="javascript:void(0);" className="heart-icon">
                  <span className="icon hover" dangerouslySetInnerHTML={{ __html: heartImageFill }} />
                </a>
                <span className="std-txt-label">Active</span>
              </figure>
            </div>
          </div>
          <div className="small-12 medium-12 column row">
          <div className="thumb-icon row mrg-XL">
              <div className="toggle-thumbs mrg-rght-L">
                <span className="icon" dangerouslySetInnerHTML={{ __html: thumbsUpImage }} /> 
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
            <div className="row column small-12 medium-12 text-buttons">
              <h2 className="title-XL mrg-L">Text Button</h2>
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
            
            <div className="row column small-12 medium-12 text-buttons">
              <h2 className="title-XL mrg-L">Text Button</h2>
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

            <div className="row column small-12 medium-12 text-buttons">
              <h2 className="title-XL mrg-L">Icon Button</h2>
              <div className="toggle-thumbs mrg-rght-XL">
                <button className="txt-btn txt-btn-S">Text Button</button>
                <span className="std-txt-label">Small Default</span>
              </div>
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
    <div className="progress-bar progress-bar-rewards">
      <span className="progress-bar-max-points">200</span>
      <div className="progress-bar-percent">165</div>
    </div>
    <p className="S">35 points away from your next $10 reward*</p>

    <p className="anno">Color Swatches</p>

    <div className="list-product-colors mrg-L">
      <div className="list-product-colors-header">
        <div className="list-product-colors-lbl">label</div>
        <button className="list-product-colors-show link">Show</button>
      </div>
      <ul className="list-product-colors-container">
        <li>
          <button className="list-color-swatch list-color-swatch-active"></button>
        </li>
        <li>
          <div className="list-color-swatch"></div>
        </li>
        <li>
          <div className="list-color-swatch"></div>
        </li>
        <li>
          <div className="list-color-swatch"></div>
        </li>
        <li>
          <div className="list-color-swatch list-color-swatch-oos"></div>
        </li>
        <li>
          <div className="list-color-swatch list-color-swatch-active list-color-swatch-oos"></div>
        </li>
      </ul>
    </div>

    </div>
    </div>

    );
  }
}

export default WorkInProgress;
