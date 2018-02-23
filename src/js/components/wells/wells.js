import React, { Component } from 'react';

const returnImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/return.svg');
const truckImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/truck.svg');
const haulawayImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/ship/haul-away.svg');
const trashcanImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/trash-can.svg');
const storeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/store.svg');
const devicephoneImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/device-phone.svg');
const shieldImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/shield.svg');


class Wells extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="mrg-XXL sm12 md12 well mrg-rght-XS">
                        <h3 class="title title-M mrg-M mrg-lft-S">General Information</h3>
                        <ul class="list list-icons mrg-lft-S">
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: trashcanImage }} /> 
                                <h3>Disposal Fee</h3>
                                <span>Please note that some states may charge a disposal fee per item. <a href="javascript:void(0);"> see details</a></span>
                            </li>
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: storeImage }} /> 
                                <h3>InStore Display</h3>
                                <span>Check for stores with major appliance display. <a href="javascript:void(0);"> find a store</a></span>
                            </li>
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: devicephoneImage }} /> 
                                <h3>Need Help</h3>
                                <span>Please call 1.899.JCP.APP. <a href="callto:1-844-527-2775"> (1-844-527-2775)</a></span>
                            </li>
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: shieldImage }} /> 
                                <h3>Protection Plan Terms & Conditions</h3>
                                <span>Limitations and exclusions may apply for major appliances. <a href="javascript:void(0);"> see details</a></span>
                            </li>
                        </ul>
                    </div>
                    <div class="mrg-XXL sm12 md12 xl6 lg6 well mrg-rght-XS">
                        <h3 class="title title-M mrg-M mrg-lft-S">Shipping & Returns</h3>
                        <ul class="list list-icons mrg-lft-S">
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: returnImage }} /> 
                                <h3>Easy Returns</h3>
                                <span>Shop with confidence. Read our full, common sense <a href="javascript:void(0);"> return policy</a></span>
                            </li>
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: truckImage }} /> 
                                <h3>Truck Delivery</h3>
                                <span>Some heavy or bulky items cannot be Shipped via UPS are shipped via truck. <a href="javascript:void(0);"> see details</a></span>
                            </li>
                            <li class="title-txt title-S">
                                <span class="icon color-shadow-svg icon-L" dangerouslySetInnerHTML={{ __html: haulawayImage }} /> 
                                <h3>Haul Away</h3>
                                <span>Appliance haul away and/or moving services are available for purchase. <a href="javascript:void(0);"> see details</a></span>
                            </li>
                        </ul>
                    </div>
                    <div class="mrg-XXL sm12 md12 xl6 lg6 well-fill mrg-rght-XS">
                        <div class="title-S mrg-S">
                            <em>Protection Plan </em>
                            <a href="javascript:void(0);">Edit</a>
                        </div>
                        <div class="mrg-XL">
                            <div class="border-dashed"></div>
                            <span class="fl-left title-XS protection-plan-bg-fill padding-rght-S">1 Year Limited</span>
                            <span class="fl-right title-XS protection-plan-bg-fill padding-lft-S"><em>Included</em></span>
                        </div>
                        <div class="title-S mrg-S mrg-top-M">
                            <em>Parts & Services </em>
                            <a href="javascript:void(0);">Edit</a>
                        </div>
                        <div class="mrg-L">
                            <div class="border-dashed"></div>
                            <span class="fl-left title-XS protection-plan-bg-fill padding-rght-S">Appliance Installation</span>
                            <span class="fl-right title-XS protection-plan-bg-fill padding-lft-S"><a href="javascript:void(0);">Show Details</a></span>
                        </div>
                        <div class="mrg-XL">
                            <div class="border-dashed"></div>
                            <span class="fl-left title-XS protection-plan-bg-fill padding-rght-S">Reinforced Hose</span>
                            <span class="fl-right title-XS protection-plan-bg-fill padding-lft-S"><em>$9.99</em></span>
                        </div>
                        <div class="mrg-L protection-plan-price">
                            <span class="fl-left price price-S">Item Total</span>
                            <span class="fl-right price price-S">$999.99</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wells;