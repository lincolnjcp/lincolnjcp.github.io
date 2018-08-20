import React, { Component } from 'react';

const chatfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/chat-fill.svg');
const thumbsupfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/thumbsup-fill.svg');
const heartlineImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-line.svg');
const trianglerightImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/triangle-right.svg');

class Lists extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>

                <div class="row" id="lists">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-btm-L">Lists <span class="design-system-css-class design-system-css-class-inline">class=“list”</span></h3>
                        <h5 class="title title-M mrg-btm-S">List Underline</h5>
                        <p class="mrg-btm-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="list list-underline max-width-400 mrg-btm-XL">
                            <li>list item 1</li>
                            <li>list item 3</li>
                            <li>list item 4</li>
                            <li>list item 5</li>
                        </ul>
                        <p class="design-system-css-class mrg-btm-XL">.list-underline</p>
                        <h5 class="title title-M mrg-btm-S">Text Lists</h5>
                        <p class="mrg-btm-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="list mrg-btm-XL">
                            <li>List Item Normal</li>
                            <li>List Item Normal</li>
                            <li>List Item Normal</li>
                            <li>List Item Normal</li>
                            <li>List Item Normal</li>
                        </ul>
                        <p class="design-system-css-class mrg-btm-XL">.list</p>
                        <h5 class="title title-M mrg-btm-S">Icon Lists</h5>
                        <p class="mrg-btm-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="list list-icons max-width-text ">
                            <li class="title-txt title-S"><span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: chatfillImage }} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li class="title-txt title-S"><span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: thumbsupfillImage }} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li class="title-txt title-S"><span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: heartlineImage }} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li class="title-txt title-S"><span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: trianglerightImage }} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                        <p class="design-system-css-class mrg-btm-XL">.list-icons</p>
                        <h5 class="title title-M mrg-btm-S">Link Lists</h5>
                        <p class="mrg-btm-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="list list-links mrg-btm-XL">
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
                            <li class="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
                        </ul>
                        <p class="design-system-css-class">.list-links</p>

                        <div class="">

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

export default Lists;