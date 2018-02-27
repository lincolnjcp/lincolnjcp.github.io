import React, { Component } from 'react';
const devicephoneImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-phone.svg');

class FooterMinimized extends Component {

    componentDidMount() {
        }
    render() {
        return (
            <div>
                <div class="row">
                   <footer class="footer-mini text-center">
                       <div class="footer-need-help">
                            <span class="icon device-phone" dangerouslySetInnerHTML={{ __html: devicephoneImage }} />
                            <span class="need-help">Need Help? Give us a call 1 (800) 322-1189</span>
                       </div>
                       <div class="footer-mini-links text-center mrg-M mrg-top-M">
                            <ul>
                                <li><a href="javascript:void(0);">Legal</a></li>
                                <li><a href="javascript:void(0);">Recalls</a></li>
                                <li><a href="javascript:void(0);">AdChoices</a></li>
                                <li><a href="javascript:void(0);">CA Privacy Rts</a></li>
                                <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                <li><a href="javascript:void(0);">CA Supply Chain Act</a></li>
                            </ul>
                       </div>
                       <div class="std-txt std-txt-XXS">
                           <span>©JCP Media, Inc. 2017. All Rights Reserved</span>
                       </div>
                   </footer>
                </div>
            </div>
        );
    }
}

export default FooterMinimized;