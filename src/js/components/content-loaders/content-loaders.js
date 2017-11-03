import React, { Component } from 'react';
import $ from 'jquery'

class ContentLoaders extends Component {

    componentDidMount() {
        $('.loader-count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 2000,
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });
        $(document).ready(function () {
            function isScrolledIntoView(elem) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }

            $(window).scroll(function () {
                $('.lazy-load-container').each(function () {
                    if (isScrolledIntoView(this) === true) {
                        setTimeout(function () { $(".lazy-load-1").addClass("lazy-count"); }, 500);
                        setTimeout(function () { $(".lazy-load-2").addClass("lazy-count"); }, 1200);
                        setTimeout(function () { $(".lazy-load-3").addClass("lazy-count"); }, 1900);
                        setTimeout(function () { $(".lazy-load-4").addClass("lazy-count"); }, 2600);
                    } else {
                        setTimeout(function () { $(".lazy-load-1").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-2").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-3").removeClass("lazy-count"); });
                        setTimeout(function () { $(".lazy-load-4").removeClass("lazy-count"); });
                    }
                });

            });
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h1 className="title title-XL mrg-L">Content Loaders</h1>
                        <h2 className="std-txt std-txt-XL mrg-L txt-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <hr />
                    </div>
                </div>

                <div className="row" id="types">
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-M">Types</h3>
                        <p className="mrg-L txt-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="small-12 medium-12 columns">
                            <div className="small-12 medium-4 columns">
                                <div className="loader-container">
                                    <div className="loader-spin">
                                        <div className="loader-logo">
                                            <div className="loader-circle">
                                                <svg className="loader-circle-spinner" viewBox="0 0 500 500">
                                                    <circle cx="250" cy="250" r="239"> </circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Page</h4>
                                <p className="txt-max-width">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns">
                            <div className="small-12 medium-4 columns position-rel">
                                <div className="loader-checkmark-container">
                                    <svg className="checkmark" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="checkmark-circle" fill="none" cx="85.6" cy="80.6" r="30" transform="rotate(-45, 93, 93)" />
                                        <polyline className="checkmark-icon" fill="none" points="93,79.8 77.1,103.4 68,95.4" />
                                    </svg>
                                </div>
                                <div className="loader-count-container">
                                    <span className="loader-count">100</span>
                                    <span>%</span>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Progress</h4>
                                <p className="txt-max-width">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns section-container">
                            <div className="small-12 medium-4 columns">
                                <div className="shimmer-bg progressbar-1"></div>
                                <div className="shimmer-bg progressbar-2"></div>
                                <div className="shimmer-bg progressbar-3"></div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Section</h4>
                                <p className="txt-max-width">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" id="lazy-load">
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-L">Lazy Load</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="lazy-load-container columns">
                            <div className="lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-1">
                                <div className="lazy-border">
                                    <div className="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div className="lazy-sub">
                                        <div className="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-2">
                                <div className="lazy-border">
                                    <div className="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div className="lazy-sub">
                                        <div className="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-3 hide-for-small-only">
                                <div className="lazy-border">
                                    <div className="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div className="lazy-sub">
                                        <div className="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-4 hide-for-small-only hide-for-medium-only">
                                <div className="lazy-border">
                                    <div className="lazyload-bg lazyload-fade lazy-main"></div>
                                    <hr />
                                    <div className="lazy-sub">
                                        <div className="lazyload-bg lazyload-fade progressbar-1"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-2"></div>
                                        <div className="lazyload-bg lazyload-fade progressbar-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <hr />
                <br />
                <div className="bala"></div>
                <div className="row">
                    <div className="small-12 columns">
                        <hr />
                        <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                            <br /> Latest update: 04/05/2017</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentLoaders;