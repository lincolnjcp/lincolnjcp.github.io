import React, { Component } from 'react';
import $ from 'jquery';
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');

class LikeDislike extends Component {

    componentDidMount() {

        $(".heart").on("click", function () {
            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            parent.closest('.like-icon').toggleClass("is-active");
            if (parent.hasClass("is-active")) {
                $('.like-icon .tooltip').css('display', 'inline-block');
                tooltip.html('Added<br /><a href="javascript:void(0);">View My Favorites</a>');
            }
        });
        $(".like-icon").mouseenter(function () {
            $('.like-icon .tooltip').css('display', 'inline-block');
        });

        $(".like-icon").mouseleave(function () {

            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            if (parent.hasClass("is-active")) {
                setTimeout(function () {
                    $('.like-icon .tooltip').css('display', 'none');
                    tooltip.html('Remove Favorite');
                }, 2000);
            } else {
                $('.like-icon .tooltip').css('display', 'none');
                tooltip.html('Favorite');
            }
        });

    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-L">Like / Dislike Messages</h1>
                        <h2 class="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="sm12 columns">
                        <div class="product-card"><img src="/images/design-system/fpo/product-cards/product-like-dislike.jpg" alt="product-image" />
                            <div class="like-icon">
                                <span class="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                <div class="tooltip tooltip-single tooltip-top-right">
                                    <span class="tooltip-content">Favorite</span>
                                </div>
                            </div>
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

export default LikeDislike;