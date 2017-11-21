import React, { Component } from 'react';
import $ from 'jquery'

class DropdownButton extends Component {

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
            <div id="dropdown-button">
                <h1 className="title title-XL mrg-L">Dropdown Button</h1>
                <div className="row medium-12 small-12 large-12 mrg-XL prevent-event">
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Default</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S hover">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Hover</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S hover arrow-down">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Active</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S disabled">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Disabled</span>
                    </div>
                </div>
                <div className="row medium-12 small-12 large-12 mrg-XL prevent-event">
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Default with selected value</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S hover">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Hover with selected value</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S hover arrow-down">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Active with selected value</span>
                    </div>
                    <div className="dropdown-menu-block small-12 medium-3 large-3 column">
                        <a className="dropdown-button title-S">Sort by: <span className="sortby">Ratings High to Low</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">display text overflows in area</span>
                    </div>
                </div>
                <div className="row medium-12 small-12 large-12">
                    <div className="dropdown-menu-block column medium-4 small-12 large-4">
                        <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                        <div className="dropdown-menu">
                            <ul className="tooltip tooltip-top-left tooltip-light dropdown-search-type">
                                <div className="search-type">
                                    <input type="text" placeholder="Search Item Type" />
                                </div>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dropdown-menu-block column medium-4 small-12 large-4">
                        <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                        <div className="dropdown-menu">
                            <ul className="tooltip tooltip-top-left tooltip-light dropdown-search-type">
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                                <li className="dropdown-list">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="left">label</span>
                                        <span className="right-label">(1,008)</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dropdown-menu-block column medium-4 small-12 large-4">
                        <a className="dropdown-button title-S">Sort by: <span className="arrow"></span></a>
                        <div className="dropdown-menu">
                            <ul className="tooltip tooltip-top-left tooltip-light dropdown-sort">
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Featured</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Best Sellers</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">New Arrivals</a>
                                </li>
                                <li className="dropdown-list">
                                    <a href="javascript:void(0)" className="sort-list">Price High to Low</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DropdownButton;