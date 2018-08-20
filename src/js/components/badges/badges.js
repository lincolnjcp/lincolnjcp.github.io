import React, { Component } from 'react';

import CodeGenerator from '../../containers/CodeGenerator.js';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');

class Badges extends Component {

    render() {
        return (
            <div>

                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-btm-L">Badges</h1>
                        <h2 class="std-txt std-txt-XL mrg-btm-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>
                <div class="row" id="when-to-use">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-btm-L">When to Use</h3>
                        <p class="mrg-btm-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="algn-mid mrg-btm-M"><img src="/images/design-system/badges/product-cards.jpg" alt="" /></div>
                                <h5 class="title title-M mrg-btm-S">Product Cards</h5>
                                <p class="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                            <div class="sm12 md6 columns">
                                <div class="algn-mid mrg-btm-M"><img src="/images/design-system/badges/product-page.jpg" alt="" /></div>
                                <h5 class="title title-M mrg-btm-S">Product Page</h5>
                                <p class="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="appearance">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Appearance</h3>
                        <p class="mrg-btm-XL max-width-text">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns algn-mid">
                                <div class="flag std-txt std-txt-XS flag-new">Low Stock</div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-btm-S">Single Line</h5>
                                <p class="mrg-btm-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns algn-mid">
                                <div class="flag std-txt std-txt-XS flag-new">Low<br /> Stock</div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-btm-S">Double Line</h5>
                                <p class="mrg-btm-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row" id="responsive-behavior">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Examples</h3>
                        <p class="mrg-btm-L">Min Width: 60px; 8px padding left and right; 85% Opacity on BG</p>
                        <div>
                            <div class="flag std-txt std-txt-XS flag-new mrg-btm-S mrg-rght-S">New</div>
                            <div class="flag std-txt std-txt-XS flag-new mrg-btm-S mrg-rght-S">Online Only</div>
                            <div class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">Low Stock</div>
                            <div class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">Sale Ends In 2 Hrs</div>
                            <div class="flag std-txt std-txt-XS flag-deal mrg-btm-S mrg-rght-S">Pre-Order</div>
                            <div class="flag std-txt std-txt-XS flag-info mrg-btm-S mrg-rght-S">Only at JCP</div>
                            <div class="flag std-txt std-txt-XS flag-urgency mrg-btm-S mrg-rght-S">Clearance</div>

                        </div>
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

export default Badges;