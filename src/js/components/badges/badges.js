import React, { Component } from 'react';
import $ from 'jquery';

import CodeGenerator from '../../containers/CodeGenerator.js';

const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');

class Badges extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Badges</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Code Generator</h3>


            <CodeGenerator 
                formFields={
                    [
                        { 
                            fieldType: 'text',
                            displayLabel: 'Text Label',
                            name: 'code_badge_text',
                            value: 'Badge'
                        },
                        { 
                            fieldType: 'select',
                            displayLabel: 'Type',
                            name: 'code_badge_type',
                            value: [
                                {
                                    text: 'Urgency',
                                    value: 'flag-urgency'
                                },
                                {
                                    text: 'New',
                                    value: 'flag-new'
                                },
                                {
                                    text: 'Deal',
                                    value: 'flag-deal'
                                },
                                {
                                    text: 'Info',
                                    value: 'flag-info'
                                }
                            ],
                            defaultSelect: 'flag-urgency'
                        }
                    ]}

                htmlPattern={ 
                    [
                        {
                            default: [
                                {
                                    html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]
                                            class="[[format_attribute_end]][[format_tag_value_start]]flag [[code_badge_type]] std-txt std-txt-XS [[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                            [[format_tab_start]]
                                                [[code_badge_text]]
                                            [[format_tab_end]]
                                        <[[format_tag_start]]/div[[format_tag_end]]>`,
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
            <p className="mrg-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row">
                <div className="sm12 md6 columns">
                    <div className="algn-mid mrg-M"><img src="/images/design-system/badges/product-cards.jpg" alt="" /></div>
                    <h5 className="title title-M mrg-S">Product Cards</h5>
                    <p className="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
                <div className="sm12 md6 columns">
                    <div className="algn-mid mrg-M"><img src="/images/design-system/badges/product-page.jpg" alt="" /></div>
                    <h5 className="title title-M mrg-S">Product Page</h5>
                    <p className="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row" id="appearance">
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Appearance</h3>
            <p className="mrg-XL max-width-text">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="row">
                <div className="sm12 md5 lg4 columns badges-preview-col algn-mid">
                    <div class="flag std-txt std-txt-XS flag-new">Low Stock</div>
                </div>
                <div className="sm12 md7 lg8 columns">
                    <h5 className="title title-M mrg-S">Single Line</h5>
                    <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
            <div className="row">
                <div className="sm12 md5 lg4 columns badges-preview-col algn-mid">
                    <div class="flag std-txt std-txt-XS flag-new">Low<br /> Stock</div>
                </div>
                <div className="sm12 md7 lg8 columns">
                    <h5 className="title title-M mrg-S">Double Line</h5>
                    <p className="mrg-L max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                </div>
            </div>
           
        </div>
    </div>
    <div className="row" id="responsive-behavior">
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Examples</h3>
            <p className="mrg-L">Min Width: 60px; 8px padding left and right; 85% Opacity on BG</p>
            <div>
                <div class="flag std-txt std-txt-XS flag-new mrg-S mrg-rght-S">New</div>
                <div class="flag std-txt std-txt-XS flag-new mrg-S mrg-rght-S">Online Only</div>
                <div class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">Low Stock</div>
                <div class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">Sale Ends In 2 Hrs</div>
                <div class="flag std-txt std-txt-XS flag-deal mrg-S mrg-rght-S">Pre-Order</div>
                <div class="flag std-txt std-txt-XS flag-info mrg-S mrg-rght-S">Only at JCP</div>
                <div class="flag std-txt std-txt-XS flag-urgency mrg-S mrg-rght-S">Clearance</div>

            </div>
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

export default Badges;