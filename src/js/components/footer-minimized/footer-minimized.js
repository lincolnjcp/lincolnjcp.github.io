import React, { Component } from 'react';
const devicephoneImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-phone.svg');

class FooterMinimized extends Component {

    componentDidMount() {
        }
    render() {
        return (
            <div>
                <div className="row">
                   <footer className="mini-footer text-center">
                       <div className="footer-need-help">
                            <span className="icon device-phone" dangerouslySetInnerHTML={{ __html: devicephoneImage }} />
                            <span className="need-help">Need Help? Give us a call 1 (800) 322-1189</span>
                       </div>
                       <div className="mini-legal-links text-center mrg-M mrg-top-M">
                            <ul>
                                <li><a href="javascript:void(0);">Legal</a></li>
                                <li><a href="javascript:void(0);">Recalls</a></li>
                                <li><a href="javascript:void(0);">AdChoices</a></li>
                                <li><a href="javascript:void(0);">CA Privacy Rts</a></li>
                                <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                <li><a href="javascript:void(0);">CA Supply Chain Act</a></li>
                            </ul>
                       </div>
                       <div className="mini-footer-copy text-center mrg-M">
                           <span>©JCP Media, Inc. 2017. All Rights Reserved</span>
                       </div>
                   </footer>
                </div>
            </div>
        );
    }
}

export default FooterMinimized;