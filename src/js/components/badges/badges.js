import React, { Component } from 'react';
import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');

class Badges extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="small-12 columns">
            <h1>Badges</h1>
            <h2>Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="small-12 columns">
            <hr />
            <h3>Code Generator</h3>


            <CodeGenerator 
                formFields={
                    [
                        { 
                            fieldType: 'select',
                            displayLabel: 'Style',
                            name: 'code_badges_style',
                            value: [
                                {
                                    text: 'Single Line',
                                    value: ''
                                },
                                {
                                    text: 'Multi Line',
                                    value: ''
                                }
                            ],
                            defaultSelect: ''
                        }, 
                        { 
                            fieldType: 'text',
                            displayLabel: 'Text Label',
                            name: 'code_badge_text',
                            value: 'Badge'
                        },
                        { 
                            fieldType: 'select-color',
                            displayLabel: 'Text Color',
                            name: 'code_badge_text_color',
                            value: [
                                {
                                    text: 'Passion',
                                    value: 'color-passion'
                                },
                                {
                                    text: 'Lipstick',
                                    value: 'color-lipstick'
                                },
                                {
                                    text: 'Penney Red',
                                    value: 'color-penneyred'
                                },
                                {
                                    text: 'Blush',
                                    value: 'color-blush'
                                },
                                {
                                    text: 'Night Sky',
                                    value: 'color-nightsky'
                                },
                                {
                                    text: 'Shadow',
                                    value: 'color-shadow'
                                },
                                {
                                    text: 'Slate',
                                    value: 'color-slate'
                                },
                                {
                                    text: 'Concrete',
                                    value: 'color-concrete'
                                },
                                {
                                    text: 'Light Gray',
                                    value: 'color-lightgrey'
                                },
                                {
                                    text: 'White',
                                    value: 'color-white'
                                }
                            ],
                            defaultSelect: 'color-white'
                        },
                        { 
                            fieldType: 'select-color',
                            displayLabel: 'Badge Color',
                            name: 'code_badge_color',
                            value: [
                                {
                                    text: 'Passion',
                                    value: 'color-passion-bg'
                                },
                                {
                                    text: 'Lipstick',
                                    value: 'color-lipstick-bg'
                                },
                                {
                                    text: 'Penney Red',
                                    value: 'color-penneyred-bg'
                                },
                                {
                                    text: 'Blush',
                                    value: 'color-blush-bg'
                                },
                                {
                                    text: 'Night Sky',
                                    value: 'color-nightsky-bg'
                                },
                                {
                                    text: 'Shadow',
                                    value: 'color-shadow-bg'
                                },
                                {
                                    text: 'Slate',
                                    value: 'color-slate-bg'
                                },
                                {
                                    text: 'Concrete',
                                    value: 'color-concrete-bg'
                                },
                                {
                                    text: 'Light Gray',
                                    value: 'color-lightgrey-bg'
                                },
                                {
                                    text: 'White',
                                    value: 'color-white-bg'
                                }
                            ],
                            defaultSelect: 'color-penneyred-bg'
                        }
                    ]}
                htmlPattern="<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]
                            class=&quot;[[format_attribute_end]][[format_tag_value_start]]flag std-txt std-txt-XS [[code_badge_color]] [[code_badge_text_color]][[format_tag_value_end]][[format_attribute_start]]&quot;[[format_attribute_end]]>
                            [[format_tab_start]]
                                [[code_badge_text]]
                            [[format_tab_end]]
                        <[[format_tag_start]]/div[[format_tag_end]]>"

              />

        </div>
    </div>
    <div className="row" id="when-to-use">
        <div className="small-12 columns">
            <h3>When to Use</h3>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row">
                <div className="small-12 medium-6 columns">
                    <div className="algn-mid mrg-M"><img src="/images/design-system/badges/product-cards.jpg" alt="" /></div>
                    <h5 className="button-title">Product Cards</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="algn-mid mrg-M"><img src="/images/design-system/badges/product-page.jpg" alt="" /></div>
                    <h5 className="button-title">Product Page</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row" id="appearance">
        <div className="small-12 columns">
            <hr />
            <h3>Appearance</h3>
            <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="row">
                <div className="small-12 medium-5 large-4 columns badges-preview-col algn-mid">
                    <div class="flag std-txt std-txt-XS color-penneyred-bg color-white">Low Stock</div>
                </div>
                <div className="small-12 medium-7 large-8 columns">
                    <h5 className="button-title">Single Line</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-5 large-4 columns badges-preview-col algn-mid">
                    <div class="flag std-txt std-txt-XS color-penneyred-bg color-white">Low<br /> Stock</div>
                </div>
                <div className="small-12 medium-7 large-8 columns">
                    <h5 className="button-title">Double Line</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
           
        </div>
    </div>
    <div className="row" id="responsive-behavior">
        <div className="small-12 columns">
            <hr />
            <h3>Examples</h3>
            <p className="mrg-L">Min Width: 60px; 8px padding left and right; 85% Opacity on BG</p>
            <div>
                <div class="flag std-txt std-txt-XS color-nightsky-bg color-white">New</div>
                <div class="flag std-txt std-txt-XS color-nightsky-bg color-white">Online Only</div>
                <div class="flag std-txt std-txt-XS color-penneyred-bg color-white">Low Stock</div>
                <div class="flag std-txt std-txt-XS color-penneyred-bg color-white">Sale Ends In 2 Hrs</div>
                <div class="flag std-txt std-txt-XS color-success-type-bg color-white">Pre-Order</div>
                <div class="flag std-txt std-txt-XS color-white-bg color-nightsky">Only at JCP</div>
                <div class="flag std-txt std-txt-XS color-penneyred-bg color-white">Clearance</div>

            </div>
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <hr />
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Badges;