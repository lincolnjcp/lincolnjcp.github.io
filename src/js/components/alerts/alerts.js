import React, { Component } from 'react';
import CodeGenerator from '../../containers/CodeGenerator.js';

const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');

class Alerts extends Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-L">Alerts &amp; Messaging</h1>
                        <h2 class="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>

                <div class="row" id="when-to-use">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-L">When to Use</h3>
                        <p class=" mrg-L max-width-text">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
                        <div class="msg msg-success mrg-M">Success! Item added to cart.<span class="icon msg-close color-success-type" dangerouslySetInnerHTML={{ __html: closeImage }} /></div>
                        <div class="msg msg-error mrg-XL">Please select a size.<span class="icon msg-close color-error-type" dangerouslySetInnerHTML={{ __html: closeImage }} /></div>

                        <h4 class="title title-M mrg-L">Best Practices</h4>
                        <ul class="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
                        </ul>
                    </div>
                </div>
                <div class="row" id="appearance">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-L">Appearance</h3>
                        <p class="max-width-text mrg-XL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns alert-preview-col">
                                <div class="msg msg-success mrg-M">Success alert. <a href="javascript:void();">Text Link</a>
                                    <span class="icon msg-close color-success-type" dangerouslySetInnerHTML={{ __html: closeImage }} />
                                </div>
                                <div class="msg msg-success mrg-M">Example to display a longer alert message with a full paragraph of content.</div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-S">Success</h5>
                                <p class="max-width-text mrg-M">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns alert-preview-col">
                                <div class="msg msg-error mrg-M">Error alert.</div>
                                <div class="msg msg-error mrg-XL">Example to display a longer alert message with a full paragraph of content.</div>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-S">Error</h5>
                                <p class="max-width-text mrg-XL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row" id="content-guidelines">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-L">Content Guidelines</h3>
                        <p class="mrg-L">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

                        <h4 class="title title-M mrg-L">How to write effective alerts:</h4>
                        <ul class="list max-width-text color-slate">
                            <li>Aenean lacinia bibendum nulla sed consectetur</li>
                            <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                            <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
                        </ul>
                    </div>
                </div>
                <div class="row" id="related-content">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-L">Related Content</h3>
                        <ul class="list max-width-text color-slate">
                            <li><a href="javascript:void();">Form Fields</a></li>
                        </ul>
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

export default Alerts;