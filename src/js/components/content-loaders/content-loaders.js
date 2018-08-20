import React, { Component } from 'react';
import $ from 'jquery'

import CodeGenerator from '../../containers/CodeGenerator.js';

class ContentLoaders extends Component {

    componentDidMount() {

        window.progressLoader = function () {
            $('.loader-count').each(function () {
                if (!$(this).hasClass('active')) {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                            duration: 2000,
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    $(this).addClass('active');
                }
            });
        }
        window.progressLoader();

        $(document).ready(function () {
            function isScrolledIntoView(elem) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }

            $(window).scroll(function () {
                $('.lazy-load-container-preview').each(function () {
                    if (isScrolledIntoView(this) === true) {
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-1").addClass("lazy-count"); }, 500);
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-2").addClass("lazy-count"); }, 1200);
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-3").addClass("lazy-count"); }, 1900);
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-4").addClass("lazy-count"); }, 2600);
                    } else {
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-1").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-2").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-container-preview .lazy-load-3").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-container-preview.lazy-load-4").removeClass("lazy-count"); });
                    }
                });

            });
        });
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h1 class="title title-XL mrg-btm-L">Content Loaders</h1>
                        <h2 class="std-txt std-txt-XL mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                </div>
                <div class="row" id="types">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-btm-M">Types</h3>
                        <p class="mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="sm12 md12 columns">
                            <div class="sm12 md4 columns">
                                <div class="loader-container">
                                    <div class="loader-spin">
                                        <div class="loader-circle">
                                            <svg class="loader-circle-spinner" viewBox="0 0 500 500">
                                                <circle cx="250" cy="250" r="239"> </circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 md8 columns">
                                <h4 class="title title-M mrg-btm-L">Page</h4>
                                <p class="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div class="sm12 md12 columns">
                            <div class="sm12 md4 columns position-rel">
                                <div class="loader-checkmark-container">
                                    <svg class="checkmark" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse class="checkmark-circle" cx="32.5" cy="32.5" rx="30" ry="30" fill="none" />
                                        <polyline class="checkmark-icon" points="45.9,22 30,45.6 20.9,37.6" fill="none" />
                                    </svg>
                                    <div class="loader-count-container">
                                        <span class="loader-count">100</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sm12 md8 columns">
                                <h4 class="title title-M mrg-btm-L">Progress</h4>
                                <p class="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div class="sm12 md12 columns">
                            <div class="sm12 md4 columns">
                                <div class="section-container">
                                    <div class="shimmer-bg progressbar-1"></div>
                                    <div class="shimmer-bg progressbar-2"></div>
                                    <div class="shimmer-bg progressbar-3"></div>
                                </div>
                            </div>
                            <div class="sm12 md8 columns">
                                <h4 class="title title-M mrg-btm-L">Section</h4>
                                <p class="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row" id="lazy-load">
                    <div class="sm12 columns">
                        <h3 class="title title-L mrg-btm-L">Lazy Load</h3>
                        <p class="max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="lazy-load-container lazy-load-container-preview columns">
                            <div class="lazy-load sm6 md4 lg3 xl3 column lazy-load-1">
                                <div class="lazy-border">
                                    <div class="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div class="lazy-sub">
                                        <div class="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="lazy-load sm6 md4 lg3 xl3 column lazy-load-2">
                                <div class="lazy-border">
                                    <div class="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div class="lazy-sub">
                                        <div class="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="lazy-load sm6 md4 lg3 xl3 column lazy-load-3 hide-for-small-only">
                                <div class="lazy-border">
                                    <div class="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div class="lazy-sub">
                                        <div class="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="lazy-load sm6 md4 lg3 xl3 column lazy-load-4 hide-for-small-only hide-for-medium-only">
                                <div class="lazy-border">
                                    <div class="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div class="lazy-sub">
                                        <div class="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div class="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bala"></div>
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

export default ContentLoaders;