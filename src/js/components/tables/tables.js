import React, { Component } from 'react';
import CodeGenerator from '../../containers/CodeGenerator.js';
const arrowdownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/arrow-down.svg');
const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const storeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/store.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');
class Tables extends Component {

    render() {
        return (
            <div>

                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-btm-L">Tables</h1>
                        <h2 class="std-txt std-txt-XL mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                </div>

                <div class="row" id="standard">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Standard</h3>
                        <p class="mrg-btm-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <h4 class="title title-M mrg-btm-L">Tab Title</h4>
                        <table class="table-striped-columns width-full std-txt std-txt-S mrg-btm-L algn-lft" width="100%" border="0">
                            <tbody>
                                <tr>
                                    <th class="title-S width-quarter">Feature</th>
                                    <td class="width-quarter">Detail</td>
                                    <th class="title-S width-quarter">Feature</th>
                                    <td class="width-quarter">Detail</td>
                                </tr>
                                <tr>
                                    <th class="title-S">Feature</th>
                                    <td>Detail</td>
                                    <th class="title-S">Feature</th>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row" id="feature">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Feature</h3>
                        <p class="mrg-btm-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div class="row">
                            <div class="sm12 md4 lg2 columns">
                                <h4 class="title title-XXL mrg-btm-L">Tab Title</h4>
                            </div>
                            <div class="sm12 md8 lg10 columns">
                                <table class="std-txt std-txt-S width-full mrg-btm-L algn-lft" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <th class="title-S width-one-third">Feature</th>
                                            <td class="width-two-third">Detail</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Feature</th>
                                            <td>Detail</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Feature</th>
                                            <td>Detail</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Feature</th>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="sm12 columns">
                                <h4 class="title title-M mrg-btm-L">Headers &amp; Optional Stripes</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 lg4 columns">
                                <table class="table-striped-columns width-full std-txt std-txt-S mrg-btm-L algn-lft" width="208" border="0">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="title-S width-quarter">Appliance Types</th>
                                            <td class="width-quarter">French Door</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Color of Cabinet</th>
                                            <td>White</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Defrost Type</th>
                                            <td>Auto</td>
                                        </tr>
                                        <tr>
                                            <th class="title-S">Dispenser Features</th>
                                            <td>Filtration System, Water Filtration, Dispenser Lock-out, Water Dispenser, Cubed Ice, Filter Replace Light, Crushed Ice, In Door Dispenser</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row " id="activity">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Activity History</h3>

                        <table class="table-striped-columns activity-table-striped-columns width-full std-txt std-txt-S mrg-btm-L algn-lft" width="100%" border="0">
                            <tbody>
                                <tr>
                                    <th class="title-S width-quarter bg-color-white">Date <span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: arrowdownImage }} /></th>
                                    <th class="title-S width-quarter bg-color-white">Description</th>
                                    <th class="title-S width-quarter bg-color-white">Transaction Type</th>
                                    <th class="title-S width-quarter table-points">Points Earned/Used</th>

                                </tr>
                                <tr>
                                    <td>12/01/2017</td>
                                    <td><span>jcp.com</span> <span>Master Card</span><span> Eligible Amount: $46.99</span></td>
                                    <td><span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /><span class="table-icon-content">Online Purchase</span></td>
                                    <td class="table-points">+23 points</td>
                                </tr>
                                <tr>
                                    <td>12/01/2017</td>
                                    <td><span>Stonebriar Mall</span> <span>JCPenney Credit Card</span><span> Eligible Amount: $80.75</span></td>
                                    <td><span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: storeImage }} /><span class="table-icon-content">In Store Purchase</span></td>
                                    <td class="table-points">+80 points</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <h4 class="title title-M mrg-btm-L">Activity History</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 md6 lg4 columns">
                        <table class="table-striped-columns activity-table-striped-columns width-full std-txt std-txt-S mrg-btm-L algn-lft" width="208" border="0">

                            <tbody>
                                <tr>
                                    <th class="title-S width-quarter bg-color-white">Date <span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: arrowdownImage }} /></th>
                                    <th class="title-S width-quarter table-points">Points</th>
                                </tr>
                                <tr>
                                    <td><span>12/30/2017</span><span>Stonebriar Mall</span><span>JCPenney Credit Card</span><span class="mrg-btm-XS">Eligible Amount: $80.75</span>
                                        <span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: storeImage }} /><span class="table-icon-content">In Store Purchase</span></td>
                                    <td class="table-points">+80 points</td>
                                </tr>
                                <tr>
                                    <td><span>12/30/2017</span><span>jcp.com</span><span>Master Card</span><span class="mrg-btm-XS">Eligible Amount: $46.99</span>
                                        <span class="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: cartImage }} /><span class="table-icon-content">Online Purchase</span></td>
                                    <td class="table-points">+23 points</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <section class="row noPad sm12 md12 lg12 xl12 prodCompareContainer">
                    <div class="prodCompare">
                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S noBackground" />
                            <div class="colChild"><p class="current-product title title-XS">Current product</p><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt="" /><span class="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
                            <div class="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt="" /><span class="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
                            <div class="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt="" /><span class="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
                            <div class="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt="" /><span class="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
                        </div>
                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S">Price</div>
                            <div class="colChild priceCol">
                                <div class="price-card">
                                    <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                                    <div class="price price-S mrg-rght-XS mrg-btm-XS">$29.99
                                        <span class="price price-note color-penneyred"> sale</span>
                                    </div>
                                    <div class="price price-note color-slate std-txt">
                                        <span class="mrg-rght-S">was $39.99</span>
                                        <span> 20% off</span>
                                    </div>
                                </div>
                            </div>
                            <div class="colChild priceCol">
                                <div class="price-card">
                                    <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                                    <div class="price price-S mrg-rght-XS mrg-btm-XS">$29.99
                                        <span class="price price-note color-penneyred"> sale</span>
                                    </div>
                                    <div class="price price-note color-slate std-txt">
                                        <span class="mrg-rght-S">was $39.99</span>
                                        <span> 20% off</span>
                                    </div>
                                </div>
                            </div>
                            <div class="colChild priceCol">
                                <div class="price-card">
                                    <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                                    <div class="price price-S mrg-rght-XS mrg-btm-XS">$29.99
                                        <span class="price price-note color-penneyred"> sale</span>
                                    </div>
                                    <div class="price price-note color-slate std-txt">
                                        <span class="mrg-rght-S">was $39.99</span>
                                        <span> 20% off</span>
                                    </div>
                                </div>
                            </div>
                            <div class="colChild priceCol">
                                <div class="price-card">
                                    <div class="price price-promo mrg-btm-XS color-penneyred">GREEN MONDAL DEAL!</div>
                                    <div class="price price-S mrg-rght-XS mrg-btm-XS">$29.99
                                        <span class="price price-note color-penneyred"> sale</span>
                                    </div>
                                    <div class="price price-note color-slate std-txt">
                                        <span class="mrg-rght-S">was $39.99</span>
                                        <span> 20% off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S">Brand</div>
                            <div class="colChild std-txt std-txt-S">LG</div>
                            <div class="colChild std-txt std-txt-S">Samsung</div>
                            <div class="colChild std-txt std-txt-S">LG</div>
                            <div class="colChild std-txt std-txt-S">LG</div>
                        </div>
                        <div class="rowChild star-preview-col">
                            <div class="colHeader std-txt std-txt-S">Rating</div>
                            <div class="colChild">
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
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <a href="javascript:void();" class="rating-count">99,999</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="colChild">
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
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <a href="javascript:void();" class="rating-count">99,999</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="colChild">
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
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <a href="javascript:void();" class="rating-count">99,999</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="colChild">
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
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <a href="javascript:void();" class="rating-count">99,999</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S">Depth (in.)</div>
                            <div class="colChild std-txt std-txt-S">34 1/4 Inch</div>
                            <div class="colChild std-txt std-txt-S">36 1/4 Inch</div>
                            <div class="colChild std-txt std-txt-S">34 1/4 Inch</div>
                            <div class="colChild std-txt std-txt-S">34 1/4 Inch</div>
                        </div>
                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S">Height (in.)</div>
                            <div class="colChild std-txt std-txt-S">68 3/8 inch</div>
                            <div class="colChild std-txt std-txt-S">68 3/8 inch</div>
                            <div class="colChild std-txt std-txt-S">68 3/8 inch</div>
                            <div class="colChild std-txt std-txt-S">68 3/8 inch</div>
                        </div>
                        <div class="rowChild">
                            <div class="colHeader std-txt std-txt-S">Width (in.)</div>
                            <div class="colChild std-txt std-txt-S">35 3/4 inch</div>
                            <div class="colChild std-txt std-txt-S">35 3/4 inch</div>
                            <div class="colChild std-txt std-txt-S">35 3/4 inch</div>
                            <div class="colChild std-txt std-txt-S">35 3/4 inch</div>
                        </div>
                    </div>
                </section>

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

export default Tables;