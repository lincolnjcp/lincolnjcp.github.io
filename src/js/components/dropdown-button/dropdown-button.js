import React, { Component } from 'react';
import $ from 'jquery'

class DropdownButton extends Component {

    componentDidMount() {

        $('.dropdown-button').on('click', function () {

            var parent_box = $(this).closest('.dropdown-menu-block');
            parent_box.find('.dropdown-menu').slideToggle(200, "swing");
            parent_box.siblings().find('.dropdown-menu').hide();

            $(this).toggleClass("arrow-down");
            return false;
        });

        // (function ($) {
        //     $.fn.dropdown = function () {
        //         var dropdown = this;
        //         dropdown.find('.dropdown-button').click(function () {
        //             var p = $(this).parent();
        //             $('.dropdown').not(p).removeClass('active');
        //             $(this).parent('.dropdown').toggleClass('active');
        //         });
        //         dropdown.find('.menu').find('.item').click(function () {
        //             var html = $(this).text();
        //             $(this).parent('.dropdown').find('button').text('haha');
        //         });

        //         $(window).click(function () {
        //             $('.dropdown').removeClass('active');
        //         });

        //         $('.dropdown').click(function (event) {
        //             event.stopPropagation();
        //         });
        //     }
        // })(jQuery);

        // $('.dropdown').dropdown();
    }

    render() {
        return (
            <div id="dropdown-button">
                <h1 class="title title-XL mrg-L">Dropdown Button</h1>

                <div class="row md12 sm12 lg12">
                    <div class="dropdown-menu-block column md4 sm6 lg3 mrg-M">
                        <div class="pos-rel fl-left">
                            <a class="dropdown-button title-S">Product Type <span class="arrow"></span></a>
                            <div class="dropdown-menu">
                                <div class="tooltip tooltip-top-left tooltip-Large">
                                    <span>
                                        <ul class="list list-underline list-checkboxes">
                                            <li><label class="checkbox">
                                                <input type="checkbox" /> <span>$200 - $300</span>
                                            </label> <span class="list-qty">(14)</span></li>
                                            <li><label class="checkbox">
                                                <input type="checkbox" /> <span>$200 - $300</span>
                                            </label> <span class="list-qty">(14)</span></li>
                                            <li><label class="checkbox">
                                                <input type="checkbox" /> <span>$200 - $300</span>
                                            </label> <span class="list-qty">(14)</span></li>
                                            <li><label class="checkbox">
                                                <input type="checkbox" /> <span>$200 - $300</span>
                                            </label> <span class="list-qty">(14)</span></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-menu-block column md4 sm6 lg3 mrg-M">
                        <div class="pos-rel fl-left">
                            <a class="dropdown-button title-S">Product Type <span class="arrow"></span></a>
                            <div class="dropdown-menu">
                                <div class="tooltip tooltip-top-left tooltip-Large">
                                    <span>
                                        <ul>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M" >
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                            <li class="dropdown-list">
                                                <label class="checkbox mrg-M">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span class="left">label</span>
                                                    <span class="right-label">(1,008)</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="dropdown-menu-block column md4 sm6 lg3 mrg-M">
                        <div class="pos-rel fl-left">
                            <a class="dropdown-button title-S">Sort by: <span class="sortby">Featured</span><span class="arrow"></span></a>
                            <div class="dropdown-menu">
                                <div class="tooltip tooltip-top-left">
                                    <span>
                                        <ul class="dropdown-sort">
                                            <li class="dropdown-list">
                                                <a href="javascript:void(0)" class="sort-list">Featured</a>
                                            </li>
                                            <li class="dropdown-list">
                                                <a href="javascript:void(0)" class="sort-list">Best Sellers</a>
                                            </li>
                                            <li class="dropdown-list">
                                                <a href="javascript:void(0)" class="sort-list">New Arrivals</a>
                                            </li>
                                            <li class="dropdown-list">
                                                <a href="javascript:void(0)" class="sort-list">Price High to Low</a>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br />
                <div class="row md12 sm12 lg12 mrg-XL prevent-event">
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S">Product Type <span class="arrow"></span></a>
                        <span class="std-txt-label">Default</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S hover">Product Type <span class="arrow"></span></a>
                        <span class="std-txt-label">Hover</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S hover arrow-down">Product Type <span class="arrow"></span></a>
                        <span class="std-txt-label">Active</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S disabled">Product Type <span class="arrow"></span></a>
                        <span class="std-txt-label">Disabled</span>
                    </div>
                </div>
                <div class="row md12 sm12 lg12 mrg-XL prevent-event">
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S">Sort by: <span class="sortby">Featured</span> <span class="arrow"></span></a>
                        <span class="std-txt-label">Default with selected value</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S hover">Sort by: <span class="sortby">Featured</span> <span class="arrow"></span></a>
                        <span class="std-txt-label">Hover with selected value</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S hover arrow-down">Sort by: <span class="sortby">Featured</span> <span class="arrow"></span></a>
                        <span class="std-txt-label">Active with selected value</span>
                    </div>
                    <div class="dropdown-menu-block sm12 md4 lg3 column">
                        <a class="dropdown-button title-S">Sort by: <span class="sortby">Ratings High to Low</span> <span class="arrow"></span></a>
                        <span class="std-txt-label">display text overflows in area</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DropdownButton;