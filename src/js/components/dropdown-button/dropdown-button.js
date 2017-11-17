import React, { Component } from 'react';
import $ from 'jquery'

class DropdownButton extends Component {

    componentDidMount() {
        $('.dropdown-button').on('click', function () {
            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.siblings().find('.dropdown-menu').hide();
            //parent_box.find('.dropdown-menu').toggle();
            parent_box.find('.dropdown-menu').slideToggle(500, 'swing');
        });
    }

    render() {
        return (
            <div id="dropdown-button">
                <h1 className="title title-XL mrg-L">Dropdown Button</h1>
                <div className="dropdown-menu-block">
                    <a className="dropdown-button">Product Type</a>
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
            </div>
        );
    }
}

export default DropdownButton;