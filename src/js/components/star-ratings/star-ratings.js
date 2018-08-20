import React, { Component } from 'react';

import CodeGenerator from '../../containers/CodeGenerator.js';

const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');

class ContentLoaders extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-btm-L">Star Ratings</h1>
                        <h2 class="std-txt std-txt-XL mrg-btm-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    </div>
                </div>
               
                <div class="row" id="when-to-use">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-btm-L">When to Use</h3>
                        <p class=" mrg-btm-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                    </div>
                </div>
                <div class="row" id="appearance">
                    <div class="sm12 columns">
                        <hr />
                        <h3 class="title title-L mrg-btm-L">Appearance</h3>
                        <p class="max-width-text mrg-btm-XL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns star-preview-col">
                                <ul class="star-ratings-XL">
                                    <li class="star-ratings start-ratings-full">
                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings start-ratings-half">
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                    </li>
                                    <li class="star-ratings star-rating-full color-concrete-svg">
                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                </ul>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-btm-S">States</h5>
                                <p class="max-width-text mrg-btm-M">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="sm12 md5 lg4 columns star-preview-col">
                                <p class="S">Example of Gallery Product</p>
                                <ul class="star-ratings-L">
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
                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <span href="javascript:void();" class="rating-count">47</span>
                                    </li>
                                </ul><br /><br />
                                <p class="XS">Example of Rec Zone Product </p>
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
                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li class="star-ratings">
                                        <span href="javascript:void();" class="rating-count">47</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="sm12 md7 lg8 columns">
                                <h5 class="title title-M mrg-btm-S">Sizing</h5>
                                <p class="max-width-text mrg-btm-XL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
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

export default ContentLoaders;