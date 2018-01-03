import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');

class Header extends Component {

  componentDidMount() {
        
        $('.dropdown-button').on('click', function () {
            
            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            parent_box.find('.dropdown-menu').slideToggle(200, 'swing');
            
            $(this).toggleClass("arrow-down"); 

        });
  }

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Header</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>
    
<header className="main-menu">
  <div className="main-menu-promotional-banner">
    <div className="main-menu-promotional-banner-content">
      <p className="S mrg-zero main-menu-promotional-banner-text">Get it today with FREE same day pickup</p>
      <p className="S mrg-zero">
        <a className="main-menu-promotional-banner-link" href="javascript:void(0);">See Details</a>
      </p>
    </div>
  </div>
  <div className="main-menu-bar-tier1">
    <ul className="main-menu-tier1">
        <li className="main-menu-tier1-item main-menu-tier1-logo">
          <a title="JCPenney Home" aria-label="JCPenney Home Page" href="javascript:void(0);">
            <div className="main-menu-tier1-logo-svg" dangerouslySetInnerHTML={{__html: logoImage}} />
          </a>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-search">
          <form action="http://www.jcpenney.com/s/search">
            <input type="text" placeholder="Search Products" size="20" aria-required="false" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" />
            <button type="submit">
              <div className="main-menu-tier1-search-svg icon" dangerouslySetInnerHTML={{__html: searchImage}} />
            </button>
          </form>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-rewards hide-for-small-only">
          <a href="javascript:void(0);"><img src="/images/global/jcpenney-rewards.png" alt="JCPenney Rewards" /></a>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-account">          
          <div className="dropdown-menu-block">
            <button className="dropdown-button" type="button" tabindex="-1">
              <div className="main-menu-tier1-account-title">My Account</div>
              <div className="main-menu-tier1-account-link">Sign In <span className="arrow"></span></div>
            </button>
            <div className="dropdown-menu">
              <ul className="tooltip tooltip-top-left tooltip-light dropdown-account">
                <li>
                    <a href="javascript:void(0)">My Account</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Find a Store</a>
                </li>
                <li>
                    <a href="javascript:void(0)">My Orders</a>
                </li>
                <li>
                    <a href="javascript:void(0)">My Rewards (0)</a>
                </li>
                <li>
                    <a href="javascript:void(0)">My List</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Profile Settings</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Notifications</a>
                </li>
                <li>
                    <a href="javascript:void(0)">My Jcpenney.com</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Gift Registry</a>
                </li>
                <li>
                    <a href="javascript:void(0)">JCPenney Credit Card</a>
                </li>
                <li className="main-menu-tier1-sign-out">
                    <a href="javascript:void(0)">Sign Out</a>
                </li>
                <li className="main-menu-tier1-sign-rewards">
                  <a href="javascript:void(0);">
                    <span class="main-menu-tier1-sign-rewards-amount">$20</span>
                    <span class="main-menu-tier1-sign-rewards-label">Redeem Your Rewards</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="main-menu-tier1-item main-menu-tier1-cart">
          <a href="javascript:void(0);" className="main-menu-tier1-cart-icon-full">
            <span className="main-menu-tier1-cart-icon-full-items">28</span>
          </a>
        </li>
      </ul>
  </div>
  <div className="main-menu-bar-tier2">
    <div className="main-menu-tier2-left">
      <ul className="main-menu-tier2">
        <li className="main-menu-tier2-li">
          <button className="main-menu-tier2-shop-departments">
            <div className="main-menu-tier2-shop-departments-menu-svg icon color-nightsky-svg" dangerouslySetInnerHTML={{__html: menuImage}} />
            <span className="main-menu-tier2-shop-departments-menu-label">Shop Departments</span>
          </button>
        </li>
        <li className="main-menu-tier2-li main-menu-tier2-li-primary">
          <a href="javascript:void(0)">Same Day Pickup</a>
        </li>
        <li className="main-menu-tier2-li main-menu-tier2-li-primary">
          <a href="javascript:void(0)">Gifts</a>
        </li>
        <li className="main-menu-tier2-li main-menu-tier2-li-primary">
          <a href="javascript:void(0)">Toys</a>
        </li>
        <li className="main-menu-tier2-li main-menu-tier2-li-primary">
          <a href="javascript:void(0)">My List</a>
        </li>
        <li className="main-menu-tier2-li main-menu-tier2-li-primary main-menu-tier2-li-highlight">
          <a href="javascript:void(0)">Coupons</a>
        </li>
      </ul>
    </div>
    <div className="main-menu-tier2-right">
      <div className="dropdown-menu-block main-menu-tier2-my-store">
            <button className="dropdown-button" type="button" tabindex="-1">
              <strong>My Store:</strong> Collin Creek Mall <span className="arrow"></span>
            </button>
            <div className="dropdown-menu">
              <ul className="tooltip tooltip-top-left tooltip-light dropdown-account">
                <li>
                    <a href="javascript:void(0)"></a>
                </li>
              </ul>
            </div>
          </div>
    </div>
  </div>

<div className="SecondaryNavigationPanel-secondaryMenu" data-reactid="51">
    <div className="SecondaryNavigationPanel-containerWidth" data-reactid="52">
        <div data-reactid="53">
            <div className="SecondaryNavigationPanel-LeftNavigationWrapper" data-reactid="54">
                <div className="SecondaryNavigationPanel-shopDepartmentsBlock " data-reactid="55">
                    <button className="SecondaryNavigationPanel-shopdepartments" data-reactid="56">SHOP DEPARTMENTS</button>
                    <div className="SecondaryNavigationPanel-largeSubMenu">
                        <div className="SecondaryNavigationPanel-subMenuList SecondaryNavigationPanel-level1Block">
                            <ul className="subMenuListBlock">
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">For the Home</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">For the Home</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Bed &amp; Bath</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Bed &amp; Bath</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Window</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Window</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Appliances</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Appliances</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Women</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Women</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Lingerie</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Lingerie</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Men</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Men</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Juniors</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Juniors</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Kids</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Kids</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Baby</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Baby</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Shoes</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Shoes</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Handbags</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Handbags</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Jewelry</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Jewelry</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Salon</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Salon</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Sephora</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Sephora</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="SecondaryNavigationPanel-menuItem">
                                    <button className="SecondaryNavigationPanel-menuItemLink" data-automation-id="menu-item">Clearance</button>
                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel">
                                        <div className="SecondaryNavigationPanel-subMenuLevel1ListBlock">
                                            <button className="SecondaryNavigationPanel-subMenuItemTitle" data-automation-id="menu-item-heading">Clearance</button>
                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-level2Block">
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Furniture</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Furniture</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Mattresses</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sofas</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Beds &amp; Headboards</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Chairs &amp; Recliners</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Dining Sets</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">View All Furniture</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Home Decor</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Home Decor</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Kitchen &amp; Dining</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Kitchen</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Window</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Window</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Bed &amp; Bath</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Bed &amp; Bath</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Appliances</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Appliances</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">More For Your Home</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">More For Your Home</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="SecondaryNavigationPanel-subMenuLevelList"><a href="javascript:void(0)" data-automation-id="sub-menu-level1" className="SecondaryNavigationPanel-subMenuLevelLink SecondaryNavigationPanel-subMenuLevel1Link">Shop Sale &amp; Clearance</a>
                                                    <div className="SecondaryNavigationPanel-subMenuInnerLevel2">
                                                        <div className="subMenuLevel2ListBlock">
                                                            <h3 className="SecondaryNavigationPanel-subMenuItemTitle">Shop Sale &amp; Clearance</h3>
                                                            <ul className="SecondaryNavigationPanel-subMenuLevel1List SecondaryNavigationPanel-subMenuLevel2List">
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 1</button>
                                                                </li>
                                                                <li>
                                                                    <button className="SecondaryNavigationPanel-subMenuLevelLink" data-automation-id="sub-menu-level2">Sample Link 2</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="SecondaryNavigationPanelBg"></div>
                        </div>
                    </div>
                </div>
                <div className="SecondaryNavigationPanel-config-links" data-reactid="57">
                    <div className="List-list-main List-cozy" data-automation-id="at-error-helpfullinks-renderer" data-reactid="58">
                        <div className="list-body SecondaryNavigationPanel-listBody List-list-scroll-h" data-reactid="59">
                            <ul className="List-list-ul SecondaryNavigationPanel-listBlock" data-automation-id="at-error-helpfullinks-renderer" data-reactid="60">
                                <li className="List-list-li List-cozy SecondaryNavigationPanel-listItem" data-automation-id="list-item-0">
                                    <button className="SecondaryNavigationPanel-links" data-reactid="62">JCPenney Rewards</button>
                                </li>
                                <li className="List-list-li List-cozy SecondaryNavigationPanel-listItem" data-automation-id="list-item-1" data-reactid="63">
                                    <button className="SecondaryNavigationPanel-links" data-reactid="64">Saved Items</button>
                                </li>
                                <li className="List-list-li List-cozy SecondaryNavigationPanel-listItem" data-automation-id="list-item-2" data-reactid="65">
                                    <button className="SecondaryNavigationPanel-links" data-reactid="66">Coupons</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button data-automation-id="test-automation-btn-0" type="button" className="Button-btn Button-btnDefault Button-btnText SecondaryNavigationPanel-findStoreWrapper" data-reactid="67">
                <div className="SecondaryNavigationPanel-store-iconWrapper" data-reactid="68">
                  
                </div>
                <div className="SecondaryNavigationPanel-store-Text" data-reactid="71">
                    <div className="SecondaryNavigationPanel-findTitle" data-reactid="72">Near You</div>
                    <div className="SecondaryNavigationPanel-findText" title="Change or update your local store" data-reactid="73">
                        Find a Store
                       <span className="SecondaryNavigationPanel-storeDropDownIcon" data-reactid="75"></span></div>
                </div>
            </button>
        </div>
        <div className="SecondaryNavigationPanel-verticalmenu-wrapper" data-reactid="76">
            <div className="SecondaryNavigationPanel-hideStoreWrapper" data-reactid="77"></div>
            <div className="SecondaryNavigationPanel-verticalslide" data-reactid="78">
                <div className="SecondaryNavigationPanel-sliderHeader" data-reactid="79">
                    <button data-automation-id="test-automation-btn-0" type="button" className="Button-btn Button-btnDefault Button-btnText SecondaryNavigationPanel-leftArrowWrapper" data-reactid="80">
                       
                       Back
                    </button>
                </div>
                <div className="SecondaryNavigationPanel-slider-data" data-reactid="84"></div>
            </div>
        </div>
    </div>
</div>
            </header>
    
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

export default Header;