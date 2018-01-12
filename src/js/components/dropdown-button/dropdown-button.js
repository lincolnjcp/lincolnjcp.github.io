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
                <div className="row md12 sm12 lg12 mrg-XL prevent-event">
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Default</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S hover">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Hover</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S hover arrow-down">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Active</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S disabled">Product Type <span className="arrow"></span></a>
                        <span className="std-txt-label">Disabled</span>
                    </div>
                </div>
                <div className="row md12 sm12 lg12 mrg-XL prevent-event">
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Default with selected value</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S hover">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Hover with selected value</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S hover arrow-down">Sort by: <span className="sortby">Featured</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">Active with selected value</span>
                    </div>
                    <div className="dropdown-menu-block sm12 md3 lg3 column">
                        <a className="dropdown-button title-S">Sort by: <span className="sortby">Ratings High to Low</span> <span className="arrow"></span></a>
                        <span className="std-txt-label">display text overflows in area</span>
                    </div>
                </div>
                <div className="row md12 sm12 lg12">
                    <div className="dropdown-menu-block column md4 sm12 lg4">
                        <div className="pos-rel fl-left">
                            <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                            <div className="dropdown-menu">
                                <div className="tooltip tooltip-top-right">
                                    <span>
                                    <ul>
                                        <div className="search-type">
                                            <input type="text" placeholder="Search Item Type" />
                                        </div>
                                        <li className="dropdown-list">
                                            <label className="checkbox mrg-M" >
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
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-menu-block column md4 sm12 lg4">
                        <div className="pos-rel fl-left">
                            <a className="dropdown-button title-S">Product Type <span className="arrow"></span></a>
                            <div className="dropdown-menu">
                                <div className="tooltip tooltip-top-right">
                                    <span>
                                    <ul>
                                        <li className="dropdown-list">
                                            <label className="checkbox mrg-M" >
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
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown-menu-block column md4 sm12 lg4">
                        <div className="pos-rel fl-left">
                            <a className="dropdown-button title-S">Sort by: <span class="sortby">Featured</span><span className="arrow"></span></a>
                            <div className="dropdown-menu">
                                <div className="tooltip tooltip-top-right">
                                    <span>
                                        <ul className="dropdown-sort">
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
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DropdownButton;