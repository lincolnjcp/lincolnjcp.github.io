import React, { Component } from 'react';
import CodeGenerator from '../../containers/CodeGenerator.js';

class Typography extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-L">Typography</h1>
                        <h2 class="std-txt std-txt-XL mrg-L max-width-text">Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.<br /><br />
                            By consistently tying typographic styles to appropriate fuctions in the interface, we create a clear visual pattern for customers while they’re interacting with our product. </h2>
                        <hr />
                    </div>
                </div>

                <div class="row" id="price">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Price <span class="design-system-css-class design-system-css-class-inline">class="price"</span></h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="mrg-L">
                            <p class="price price-XL">$75.00</p>
                            <p class="design-system-css-class">.price-XL</p>
                        </div>
                        <div class="mrg-L">
                            <p class="price price-L">$75.00</p>
                            <p class="design-system-css-class">.price-L</p>
                        </div>
                        <div class="mrg-L">
                            <p class="price price-M">$75.00</p>
                            <p class="design-system-css-class">.price-M</p>
                        </div>
                        <div>
                            <p class="price price-S">$75.00</p>
                            <p class="design-system-css-class">.price-S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="row" id="title">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Title <span class="design-system-css-class design-system-css-class-inline">class="title"</span></h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="mrg-L">
                            <p class="title title-XXL">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.title-XXL</p>
                        </div>
                        <div class="mrg-L">
                            <p class="title title-XL">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.title-XL</p>
                        </div>
                        <div class="mrg-L">
                            <p class="title title-L">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.title-L</p>
                        </div>
                        <div class="mrg-L">
                            <p class="title title-M">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.title-M</p>
                        </div>
                        <div>
                            <p class="title title-S">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.title-S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="row" id="standard-text">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Standard Text <span class="design-system-css-class design-system-css-class-inline">class="std-txt"</span></h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="mrg-L">
                            <p class="std-txt std-txt-L">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.std-txt-L</p>
                        </div>
                        <div class="mrg-L">
                            <p class="std-txt std-txt-M">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.std-txt-M</p>
                        </div>
                        <div class="mrg-L">
                            <p class="std-txt std-txt-S">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.std-txt-S</p>
                        </div>
                        <div>
                            <p class="std-txt std-txt-XS">The quick brown fox jumps over the lazy dog.</p>
                            <p class="design-system-css-class">.std-txt-XS</p>
                        </div>
                        <hr />
                    </div>
                </div>

                <div class="row" id="copy">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Copy <span class="design-system-css-class design-system-css-class-inline">&lt;p&gt;</span></h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="mrg-L">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p class="design-system-css-class">.M</p>
                        </div>
                        <div>
                            <p class="S">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p class="design-system-css-class">.S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="row" id="links">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Links</h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p class="mrg-L"><a href="javascript:void();">The quick brown fox jumps over the lazy dog.</a></p><br /><br /><br />
                        <p class="mrg-L title-XSlink-S"><a href="javascript:void();">See Details</a></p>

                        <hr />
                    </div>
                </div>
                <div class="row" id="promo-labels">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">Promo Labels <span class="design-system-css-class design-system-css-class-inline">class=“promo-lbl”</span></h3>
                        <p class="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p class="promo-lbl promo-lbl-XXXL">Extra 20% Off</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-XXXL</p>
                        <p class="promo-lbl promo-lbl-XXL">Extra 20% Off</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-XXL</p>
                        <p class="promo-lbl promo-lbl-XL">Extra 20% Off</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-XL</p>
                        <p class="promo-lbl promo-lbl-L">Extra 20% Off</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-L</p>
                        <p class="promo-lbl promo-lbl-M">Extra 20% Off</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-M</p>
                        <p class="promo-lbl promo-lbl-S">+ get an extra 10% off with your JCPenney Credit Card</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-S</p>
                        <p class="promo-lbl promo-lbl-XS">+ get an extra 10% off with your JCPenney Credit Card</p>
                        <p class="design-system-css-class mrg-XL">.promo-lbl-XS</p>
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

export default Typography;