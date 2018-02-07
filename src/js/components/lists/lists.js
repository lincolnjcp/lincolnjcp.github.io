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
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Lists</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>

    <div className="row" id="lists">
        <div className="sm12 columns">
            <h3 className="title title-L mrg-L">Lists <span className="design-system-css-class design-system-css-class-inline">class=“list”</span></h3>
            <h5 className="title title-M mrg-S">List Underline</h5>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list list-underline max-width-400 mrg-XL">
              <li>list item 1</li>
              <li>list item 3</li>
              <li>list item 4</li>
              <li>list item 5</li>
            </ul>
            <p className="design-system-css-class mrg-XL">.list-underline</p>
            <h5 className="title title-M mrg-S">Text Lists</h5>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list mrg-XL">
              <li>List Item Normal</li>
              <li>List Item Normal</li>
              <li>List Item Normal</li>
              <li>List Item Normal</li>
              <li>List Item Normal</li>
            </ul>
            <p className="design-system-css-class mrg-XL">.list</p>
            <h5 className="title title-M mrg-S">Icon Lists</h5>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list list-icons max-width-text ">
              <li className="title-txt title-S"><span className="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{__html: chatfillImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li className="title-txt title-S"><span className="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{__html: thumbsupfillImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li className="title-txt title-S"><span className="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{__html: heartlineImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li className="title-txt title-S"><span className="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{__html: trianglerightImage}} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
            <p className="design-system-css-class mrg-XL">.list-icons</p>
            <h5 className="title title-M mrg-S">Link Lists</h5>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list list-links mrg-XL">
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Measuring Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Refrigerator Buying Guide</a></li>
              <li className="title-txt title-S"><a href="javascript:void(0);">Delivery Checklist</a></li>
            </ul>
            <p className="design-system-css-class">.list-links</p>

            <div className="">

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

export default Lists;