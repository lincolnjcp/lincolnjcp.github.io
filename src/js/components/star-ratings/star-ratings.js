import React, { Component } from 'react';
import $ from 'jquery'

import CodeGenerator from '../../containers/CodeGenerator.js';

const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');

class ContentLoaders extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="sm12 columns">
                        <h1 className="title title-XL mrg-L">Star Ratings</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
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
                                        fieldType: 'select',
                                        displayLabel: 'Status',
                                        name: 'code_alert_status',
                                        value: [
                                            {
                                                text: 'Large',
                                                value: 'msg-neutral'
                                            },
                                            {
                                                text: 'Medium',
                                                value: 'msg-success'
                                            },
                                            {
                                                text: 'Small',
                                                value: 'msg-warning'
                                            }
                                        ],
                                        defaultSelect: 'msg-success'
                                    }
                                ]}

                            htmlPattern={
                                [
                                    {
                                        default: [
                                            {
                                                html: `<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]
                                                                class="[[format_attribute_end]][[format_tag_value_start]]msg mrg-M [[code_alert_status]] [[code_alert_width]] [[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                                [[format_tab_start]]
                                                                    This is an alert message.[[code_alert_dismissable]]
                                                                [[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>`,
                                            },
                                            {
                                                javascript: ``,
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
                        <p class=" mrg-L max-width-text">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                    </div>
                </div>
                <div className="row" id="appearance">
                    <div className="sm12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Appearance</h3>
                        <p className="max-width-text mrg-XL">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns star-preview-col">
                                <ul className="star-ratings-XL">
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-half">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                    </li>
                                    <li className="star-ratings star-rating-empty">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                </ul>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-S">States</h5>
                                <p className="max-width-text mrg-M">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns star-preview-col">
                                <p className="S">Example of Gallery Product</p>
                                <ul className="star-ratings-L">
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-half">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                    </li>
                                    <li className="star-ratings star-rating-empty">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings">
                                        <a href="javascript:void();" className="rating-count">47</a>
                                    </li>
                                </ul><br /><br />
                                <p className="XS">Example of Rec Zone Product </p>
                                <ul className="star-ratings-S">
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-full">
                                        <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings start-ratings-half">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                    </li>
                                    <li className="star-ratings star-rating-empty">
                                        <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                                    </li>
                                    <li className="star-ratings">
                                        <a href="javascript:void();" className="rating-count">47</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-S">Sizing</h5>
                                <p className="max-width-text mrg-XL">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
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

export default ContentLoaders;