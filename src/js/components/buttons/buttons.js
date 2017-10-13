import React, { Component } from 'react';

class Buttons extends Component {

componentDidMount() {
}

  render() {
    return (
      <div>
    <div className="row">
        <div className="small-12 columns">
            <h1>Buttons</h1>
            <h2>Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="small-12 columns">
            <hr />
            <h3>Code Generator</h3>
        </div>
    </div>
    <div className="row" id="when-to-use">
        <div className="small-12 columns">
            <hr />
            <h3>When to Use</h3>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
            <div class="button-overview">
                <a href="javascript:void();" class="btn btn-primary btn-L mrg-L">Primary Large</a>
                <a href="javascript:void();" class="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                <a href="javascript:void();" class="btn btn-L btn-disabled mrg-L">Disabled Large</a>
                
            </div>
            <h5>Best Practices</h5>
            <ul>
                <li>Aenean lacinia bibendum nulla sed consectetur</li>
                <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
            </ul>
        </div>
    </div>
    <div className="row" id="appearance">
        <div className="small-12 columns">
            <hr />
            <h3>Appearance</h3>
            <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-primary btn-S mrg-L">Primary Small</a>
                    </div>

                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-primary btn-M mrg-L">Primary Medium</a>
                    </div>

                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-primary btn-L mrg-L">Primary Large</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Primary Action</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-secondary btn-S mrg-L">Secondary Small</a>
                    </div>

                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-secondary btn-M mrg-L">Secondary Medium</a>
                    </div>

                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Secondary Action</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-primary btn-L mrg-L btn-icon"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> Checkout</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Icon and Label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-primary btn-L mrg-L btn-icon btn-icon-slide"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> <span>Add to Cart</span></a>
                    </div>

                    <div class="button-preview algn-mid">
                      <a href="javascript:void();" class="btn btn-secondary btn-L mrg-L btn-icon btn-icon-slide"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> <span>Add to Cart</span></a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Icon Hover Effect</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row" id="responsive-behavior">
        <div className="small-12 columns">
            <hr />
            <h3>Responsive Behavior</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
            <div className="design-system-placeholder">Placeholder</div>
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

export default Buttons;