import React, { Component } from 'react';
import $ from 'jquery'

import CodeGenerator from '../../containers/CodeGenerator.js';

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
                                                text: 'Neutral',
                                                value: 'msg-neutral'
                                            },
                                            {
                                                text: 'Success',
                                                value: 'msg-success'
                                            },
                                            {
                                                text: 'Warning',
                                                value: 'msg-warning'
                                            },
                                            {
                                                text: 'Error',
                                                value: 'msg-error'
                                            }
            
                                        ],
                                        defaultSelect: 'msg-success'
                                    },
                                    { 
                                        fieldType: 'checkbox',
                                        displayLabel: 'Inline',
                                        name: 'code_alert_width',
                                        value: 'msg-inline',
                                        defaultSelect: ''
                                    },
                                    { 
                                        fieldType: 'checkbox',
                                        displayLabel: 'Dismissable',
                                        name: 'code_alert_dismissable',
                                        value: '[[format_br]]<[[format_tag_start]]button[[format_tag_end]] [[format_attribute_start]]type="[[format_attribute_end]][[format_tag_value_start]]button[[format_tag_value_end]][[format_attribute_start]]" class="[[format_attribute_end]][[format_tag_value_start]]msg-close[[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]></[[format_tag_start]]button[[format_tag_end]]>',
                                        defaultSelect: 'true'
                                    }
                                ]}
            
                                htmlPattern={ 
                                    [
                                        {
                                            default: [
                                                {
                                                    html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]
                                                                class="[[format_attribute_end]][[format_tag_value_start]]msg mrg-M [[code_alert_status]] [[code_alert_width]] [[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                                [[format_tab_start]]
                                                                    This is an alert message.[[code_alert_dismissable]]
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
                                <ul className="star-ratings star-ratings-XL">
                                    <li>★</li>
                                    <li>★</li>
                                    <li className="star-disable">★</li>
                                </ul>
                            </div>
                            <div className="sm12 md7 lg8 columns">
                                <h5 className="title title-M mrg-S">States</h5>
                                <p className="max-width-text mrg-M">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sm12 md5 lg4 columns star-preview-col">
                            <ul className="star-ratings star-ratings-L">
                                <li className="title">
                                    <p>Example of Gallery Product</p>
                                </li>
                                <li>★</li>
                                <li>★</li>
                                <li>★</li>
                                <li>★</li>
                                <li>★</li>
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