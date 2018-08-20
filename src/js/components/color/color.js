import React, { Component } from 'react';

import $ from 'jquery'

class Color extends Component {

    componentDidMount() {

        $(".design-system-toggle").click(function () {
            if (!$(this).hasClass("active")) {
                if ($(this).hasClass('right')) {
                    $(this).closest(".design-system-toggle-section").addClass("show-hex");
                    $(this).addClass("active");
                    $(this).closest(".design-system-headline-toggle").find(".left").removeClass("active");
                } else {
                    $(this).closest(".design-system-toggle-section").removeClass("show-hex");
                    $(this).addClass("active");
                    $(this).closest(".design-system-headline-toggle").find(".right").removeClass("active");
                }
            }
        });
    }

    colorBar(colorName, colorHex, colorVar, size, colorLabelHex) {
        var colorLabelStyle = {
            color: colorLabelHex
        }
        return (
            <div class={"design-system-content-swatch-bar " + colorVar + "-bg " + size}>
                <div class="row">
                    <div class="sm4 columns algn-lft" style={colorLabelStyle}>{colorName}
                    </div>
                    <div class="sm8 columns algn-rght" style={colorLabelStyle} >
                        <span class="design-system-color-class">.{colorVar}</span>
                        <span class="design-system-color-hex">{colorHex}</span>
                    </div>
                </div>
            </div>)

    }

    render() {
        return (

            <div class="row">
                <div class="sm12 columns">
                    <h1 class="title title-XL mrg-btm-L">Color</h1>
                    <h2 class="std-txt std-txt-XL mrg-btm-L max-width-text">JCPenney uses colors purposefully to communicate how things function in the interface. This helps us create visual patterns that can make interacting with our product easier and more predictable for customers.</h2>
                    <hr />
                    <div class="design-system-toggle-section">
                        <div class="row design-system-headline-with-toggle" id="core">
                            <div class="sm12 columns">
                                <h3 class="title title-L mrg-btm-L">Core</h3>
                                <div class="design-system-headline-toggle">
                                    <a href="javascript:void(0)" class="design-system-toggle left active">SCSS</a>
                                    <a href="javascript:void(0)" class="design-system-toggle right">Hex</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Passion", "#5F1417", "color-passion", "", "")} {this.colorBar("Lipstick", "#A32026", "color-lipstick", "", "")} {this.colorBar("Penney Red", "#CC0000", "color-penneyred", "size-large", "")} {this.colorBar("Blush", "#F8BFC6", "color-blush", "", "#c02020")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Red</h4>
                                <p>Red is the corporate and primary color for JCPenney. It is used strategically to call attention to elements on a page. The JCPenney red is used for primary CTAs, brand/marketing assets, marketing labels, star rating, etc…</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Night Sky", "#111111", "color-nightsky", "size-large", "")} {this.colorBar("Shadow", "#384048", "color-shadow", "", "")} {this.colorBar("Slate", "#636F79", "color-slate", "", "")} {this.colorBar("Concrete", "#d8d8d8", "color-concrete", "", "#111111")} {this.colorBar("Light Gray", "#f1f1f1", "color-lightgrey", "", "#111111")} {this.colorBar("White", "#FFFFFF", "color-white", "", "#111111")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Grayscale</h4>
                                <p>Gray is primarily used as an accent color and to aid in creating a visual separation with blocks of content. </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="design-system-toggle-section">
                        <div class="row design-system-headline-with-toggle" id="messaging">
                            <div class="sm12 columns">
                                <h3 class="title title-L mrg-btm-L">Messaging</h3>
                                <div class="design-system-headline-toggle">
                                    <a href="javascript:void(0)" class="design-system-toggle left active">SCSS</a>
                                    <a href="javascript:void(0)" class="design-system-toggle right">Hex</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 columns">
                                <p class="mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Error Type", "#9d2028", "color-error-type", "size-large", "")} {this.colorBar("Error Border", "#e6b9b9", "color-error-border", "", "#9d2028")} {this.colorBar("Error Fill", "#f9dbdb", "color-error-fill", "", "#9d2028")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Error</h4>
                                <p>Error Red is used to message an error to the customer at the page, component or field level.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Warning Type", "#615d14", "color-warning-type", "size-large", "")} {this.colorBar("Warning Border", "#e9e3a3", "color-warning-border", "", "#615d14")} {this.colorBar("Warning Fill", "#fffde1", "color-warning-fill", "", "#615d14")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Warning</h4>
                                <p>Yellow is used to message a warning to the customer at the page, component or field level.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Success Type", "#2a7952", "color-success-type", "size-large", "")} {this.colorBar("Success Border", "#c9e7d9", "color-success-border", "", "#2a7952")} {this.colorBar("Success Fill", "#e8f7f0", "color-success-fill", "", "#2a7952")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Success</h4>
                                <p>Green is used to signify savings and success messaging. May also be used with the checkmark icon with input fields to conserve space. Success messaging can occur at the page, component or field level.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Neutral Type", "#056b9e", "color-neutral-type", "size-large", "")} {this.colorBar("Neutral Border", "#c0d8e3", "color-neutral-border", "", "#056b9e")} {this.colorBar("Neutral Fill", "#ebf4f8", "color-neutral-fill", "", "#056b9e")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Neutral</h4>
                                <p>Neurtal Blue is used to message a notice to the customer at the page, component or field level.</p>
                            </div>
                        </div>
                    </div>
                    <div class="design-system-toggle-section">
                        <div class="row design-system-headline-with-toggle" id="rewards">
                            <div class="sm12 columns">
                                <h3 class="title title-L mrg-btm-L">Rewards</h3>
                                <div class="design-system-headline-toggle">
                                    <a href="javascript:void(0)" class="design-system-toggle left active">SCSS</a>
                                    <a href="javascript:void(0)" class="design-system-toggle right">Hex</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 columns">
                                <p class="mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Grape", "#362e4c", "color-rewards-grape", "", "")} {this.colorBar("Eggplant", "#4f4764", "color-rewards-eggplant", "size-large", "")} {this.colorBar("Plum", "#d1c7ec", "color-rewards-plum", "", "#362e4c")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Eggplant</h4>
                                <p>Eggplant is used primarily for Loyalty marketing assets, but can also be used to visually emphasize blocks of content withing the Loyalty experience.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Silver", "#6F787B", "color-rewards-platinum-2", "", "")} {this.colorBar("Platinum", "#8f9699", "color-rewards-platinum-1", "size-large", "")} {this.colorBar("Shine", "#6b7883", "color-rewards-platinum-3", "", "#6f787b")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Platinum</h4>
                                <p>Platinum is used to signify the platinum level JCPenney Credit Card customer within Loyalty and can also be used as an accent color for Loyalty marketing material.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("Premium", "#887330", "color-rewards-gold-2", "", "")} {this.colorBar("Gold", "#9c8137", "color-rewards-gold-1", "size-large", "")} {this.colorBar("Tan", "#6b7883", "color-rewards-gold-3", "", "#887330")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <h4 class="title title-M mrg-btm-M">Gold</h4>
                                <p>Gold is used to signify the gold level JCPenney Credit Card customer within Loyalty and can also be used as an accent color for Loyalty marketing material.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="design-system-toggle-section">
                        <div class="row design-system-headline-with-toggle" id="marketing">
                            <div class="sm12 columns">
                                <h3 class="title title-L mrg-btm-L">Markerting</h3>
                                <div class="design-system-headline-toggle">
                                    <a href="javascript:void(0)" class="design-system-toggle left active">SCSS</a>
                                    <a href="javascript:void(0)" class="design-system-toggle right">Hex</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 columns">
                                <p class="mrg-btm-L max-width-text">The current brand pallete is reserved for brand and marketing assets. These color are not typically used in the UI. When using these color it is required to consult with the appropriate brand and/or marketing teams to ensure proper usage.</p>
                                <h5 class="title title-M mrg-btm-S">Fall</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#713916", "color-marketing-brown-3", "", "")} {this.colorBar("", "#984f21", "color-marketing-brown-2", "", "")} {this.colorBar("", "#ba5f28", "color-marketing-brown-1", "size-large", "")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#773309", "color-marketing-orange-3", "", "")} {this.colorBar("", "#B7561A", "color-marketing-orange-2", "", "")} {this.colorBar("", "#DE681F", "color-marketing-orange-1", "size-large", "")}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#1D463E", "color-marketing-green-3", "", "")} {this.colorBar("", "#317064", "color-marketing-green-2", "", "")} {this.colorBar("", "#46A491", "color-marketing-green-1", "size-large", "")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#713916", "color-marketing-aqua-3", "", "")} {this.colorBar("", "#984f21", "color-marketing-aqua-2", "", "")} {this.colorBar("", "#33A0C1", "color-marketing-aqua-1", "size-large", "")}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#1D4D5C", "color-marketing-blue-3", "", "")} {this.colorBar("", "#2D768B", "color-marketing-blue-2", "", "")} {this.colorBar("", "#ba5f28", "color-marketing-blue-1", "size-large", "")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#761F4A", "color-marketing-pink-3", "", "")} {this.colorBar("", "#A72D69", "color-marketing-pink-2", "", "")} {this.colorBar("", "#D15895", "color-marketing-pink-1", "size-large", "")}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 columns">
                                <h5 class="title title-M mrg-btm-S">Black Friday</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#A4A824", "color-blackfriday-primary-2", "", "")} {this.colorBar("", "#DEE335", "color-blackfriday-primary-1", "size-large", "#111")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#111111", "color-blackfriday-secondary-2", "", "")} {this.colorBar("", "#373737", "color-blackfriday-secondary-1", "size-large", "")}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md6 columns">
                                <div class="mrg-btm-L">
                                    {this.colorBar("", "#16304A", "color-blackfriday-tertiary-2", "", "")} {this.colorBar("", "#003C78", "color-blackfriday-tertiary-1", "size-large", "")}
                                </div>
                            </div>
                            <div class="sm12 md6 columns">
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row" id="color-usage">
                        <div class="sm12 columns">
                            <h3 class="title title-L mrg-btm-L">Color Usage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="design-system-placeholder">Placeholder</div>
                        </div>
                    </div>
                    <hr />
                    <div class="row" id="accessibility">
                        <div class="sm12 columns">
                            <h3 class="title title-L mrg-btm-L">Accessibility</h3>
                            <p>It’s important for JCPenney to meet all web accessibility standards, including the minimum contrast ratios that the WCAG 2.0 specifies for text and background colors according to their AA level.</p>
                            <div class="design-system-placeholder">Placeholder</div>
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
            </div>
        );
    }
}

export default Color;
