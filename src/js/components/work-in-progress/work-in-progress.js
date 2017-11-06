import React, { Component } from 'react';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');

class WorkInProgress extends Component {

componentDidMount() {
}

  render() {
    return (
        <div className="row">
        <div className="small-12 columns">
<h1 className="promo-lbl promo-lbl-L">Lincoln Design System</h1>


    <p className="anno">Price Text Styles</p>
    <h2 className="price price-XL">$75.00 - XL</h2>
    <h2 className="price price-L">$65.00 - L</h2>
    <h2 className="price price-M">$55.00 - M</h2>
    <h2 className="price price-S color-penneyred">$45.00 - S</h2>


    <p className="anno">Title Text Styles</p>
    <h2 className="title title-XL">Title XL</h2>
    <h2 className="title title-L">Title L</h2>
    <h2 className="title title-M">Title M</h2>
    <h2 className="title title-S">Title S</h2>


    <p className="anno">Standard Text Styles</p>
    <p className="std-txt std-txt-L"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-S"><span className="color-penneyred">FREE</span> Store Pickup Today at
     <br /><a href="#">Stonebriar Mall</a></p>

    <p className="std-txt std-txt-XS">Select Styles
     <br /><a href="#">See details</a></p>

    <p className="M">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash...</p>

    <p className="S">That’s it! You’re done with that ancient comforter on your bed! You want a <a href="#">fresh pop</a> of style, a cool contemporary look, and a surprising splash... <em>now with emphasis!</em></p>


    <p className="anno">Promo Labels</p>
    <h2 className="promo-lbl promo-lbl-L mrg-S"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>
    <h3 className="promo-lbl promo-lbl-S mrg-XL">+ get an extra 10% off with your JCPenney Credit Card</h3>

    <h2 className="promo-lbl promo-lbl-XL algn-mid">Extra 20% Off <br />
    Women’s Clothing</h2>

    <h2 className="promo-lbl promo-lbl-M algn-rght"><span className="color-penneyred">Extra 20% Off</span> <br />
    Women’s Clothing</h2>

    <div className="color-penneyred-bg">
      <h2 className="promo-lbl promo-display promo-lbl-XXL">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-XL">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-L">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-M">30% off!</h2>
      <h2 className="promo-lbl promo-display promo-lbl-S">30% off!</h2>
    </div>

    <p className="anno">Marketing Labels</p>
    <h3 className="marketing-lbl">BOGO 50% off</h3>
    <h3 className="marketing-lbl">Clearance</h3>
    <h3 className="marketing-lbl">With Code Fundeal</h3>

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
      <a href="#" className="btn btn-secondary btn-L mrg-L">Cancel</a>
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
      <a href="#" className="btn btn-primary btn-L mrg-L btn-icon btn-icon-slide"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-M mrg-L btn-icon btn-icon-slide"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-primary btn-S mrg-L btn-icon btn-icon-slide"><span className="icon color-white-svg" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-L mrg-L btn-icon btn-icon-slide"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-M mrg-L btn-icon btn-icon-slide"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
    </div>

    <div>
      <a href="#" className="btn btn-secondary btn-S mrg-L btn-icon btn-icon-slide"><span className="icon" dangerouslySetInnerHTML={{__html: cartImage}} /><span className="btn-label">Add to Cart</span></a>
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
    <div>
      <span className="select select-S mrg-L">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </span>
    </div>

    <div>
      <label for="" className="mrg-S">Quantity</label>
      <span className="select select-S mrg-L">
        <select>
          <option>Select Small...</option>
          <option>The Great Gatsby</option>
          <option>V for Vendetta</option>
          <option>The Wolf of Wallstreet</option>
          <option>Quantum of Solace</option>
        </select>
      </span>
    </div>

    <div>
      <span className="select select-M mrg-L">
        <select>
          <option>Select Medium...</option>
          <option>The Great Gatsby</option>
          <option>V for Vendetta</option>
          <option>The Wolf of Wallstreet</option>
          <option>Quantum of Solace</option>
        </select>
      </span>
    </div>

    <div>
      <span className="select select-L mrg-L">
        <select>
          <option>Select Large...</option>
          <option>The Great Gatsby</option>
          <option>V for Vendetta</option>
          <option>The Wolf of Wallstreet</option>
          <option>Quantum of Solace</option>
        </select>
      </span>
    </div>

    <div>
      <span className="select select-L select-full mrg-L">
        <select>
          <option>Select Full Width...</option>
          <option>The Great Gatsby</option>
          <option>V for Vendetta</option>
          <option>The Wolf of Wallstreet</option>
          <option>Quantum of Solace</option>
        </select>
      </span>
    </div>


    <p className="anno">Forms</p>
    <label for="email">Email</label>
    <input type="text" name="email" placeholder="Email@email.com" />

    <label for="name">Name</label>
    <input type="text" name="name" />
    <a href="#" className="btn btn-primary btn-M elevation-none">Submit</a>

    <label for="name">Phone Number</label>
    <input type="text" name="name" placeholder="( ___ ) ___-____" />

    <label for="name">Phone Number</label>
    <input type="text" className="input-error" name="name" placeholder="( ___ ) ___-____" />

    <label for="name">Full Width</label>
    <input type="text" className="form-full" name="name" />


    <label for="textarea">Textarea</label>
    <textarea name="textarea" rows="8" cols="40">Large text area</textarea>

    <p className="anno">
      Inline Forms
    </p>
    <form className="form-inline form-css-label">
      <fieldset>
        <input id="firstName" name="firstName" type="text" autocomplete="off" required />
        <label for="firstName">First Name</label>
      </fieldset>
      <fieldset>
        <input id="lastName" name="lastName" type="text" autocomplete="off" required />
        <label for="lastName">Last Name</label>
      </fieldset>
      <fieldset>
        <input id="email" name="email" type="text" autocomplete="off" required />
        <label for="email">Email Address</label>
      </fieldset>
    </form>

    <p className="anno">Icons</p>
    <p>
      Placeholder for icons
    </p>


    <p className="anno">Lists</p>
    <ul className="list">
      <li>list item 1</li>
      <li>list item 3</li>
      <li>list item 4</li>
      <li>list item 5</li>
    </ul>

    <ul className="mrg-XL">
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

    <br />

    <ul className="list list-icons">
      <li><img src="images/icon/chat-fill.svg" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><img src="images/icon/thumbsup-fill.svg" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><img src="images/icon/heart-line.svg" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      <li><img src="images/icon/triangle-right.svg" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
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

    <label className="checkbox mrg-M">
      <input type="checkbox" /> <span>Standard Delivery - <span className="color-penneyred">FREE</span>
      <br /><span className="std-txt">Arrives May 5th - May 23rd</span></span>
    </label>

    <br />

    <label className="checkbox mrg-M">
      <input type="checkbox" /> <span>Checkbox</span>
    </label>

    <br />

    <label className="checkbox mrg-M">
      <input type="checkbox" checked="true" /> <span>Checkbox</span>
    </label>

    <br />

    <label className="checkbox mrg-XL">
      <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
    </label>

    <div>
      <h3 className="title title-L mrg-S">Checkbox List</h3>
      <ul className="list list-checkboxes">
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

    <div className="msg msg-neutral mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-error mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      <button type="button" className="msg-close"></button>
    </div>

    <div className="msg msg-neutral mrg-M">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <button type="button" className="msg-close"></button>
    </div>


    <p className="anno">Tables</p>
    <table border="0" width="100%" className="table-full mrg-XL">
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

    <table border="0" width="100%" className="table-striped">
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
      <h2 className="title title-L">Title In A Well</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className="well">
      <h2 className="title title-L">List In A Well</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </div>


    <p className="anno">Tabs</p>
    <div>
      <ul className="tabs">
        <li className="tab-section">
          tab
        </li>
        <li className="tab-section">
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
    <div>
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
        <div className="msg msg-neutral">
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

    <div className="flag std-txt std-txt-XS color-penneyred-bg">
      Low<br />Stock
    </div>

    <div className="flag std-txt std-txt-XS color-penneyred-bg">
      Low Stock
    </div>

    <br />
    <br />

    <div className="flag std-txt std-txt-XS color-penneyred-bg">
      Low Stock
    </div>

    <div className="flag std-txt std-txt-XS color-marketing-green-1-bg">
      Few Left
    </div>

    <br />


    <p className="anno">Frames</p>
    <div className="frame-S mrg-L">
      Frame S
    </div>

    <div className="frame-M mrg-L">
      Frame M
    </div>

    <div className="frame-L mrg-L">
      Frame L
    </div>


    <p className="anno">Elevation</p>

    <div className="frame-S mrg-L elevation-1">
      Frame S Elevation 1
    </div>

    <div className="frame-M mrg-L elevation-2">
      Frame M Elevation 2
    </div>


    <p className="anno">Product</p>
    <div className="product">
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
    

    <div className="anno">Text Buttons</div>
    <button className="txt-btn">Button</button>
    <a href="#" className="txt-btn">Button</a>
    <button className="txt-btn" disabled>Disabled</button>
    <button className="txt-btn txt-btn-S">Small Button</button>
    <button className="txt-btn txt-btn-S" disabled>Small Button</button>


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

    </div>
    </div>

    );
  }
}

export default WorkInProgress;
