import React, { Component } from 'react';
import $ from 'jquery'

import CodeGenerator from '../../containers/CodeGenerator.js';

class ContentLoaders extends Component {

    componentDidMount() {

        window.progressLoader = function() {
            $('.loader-count').each(function () {
                if(!$(this).hasClass('active')) {
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

        window.lazyLoader = function() {
            //For code generator
            setTimeout(function () { $(".code-generator-preview .lazy-load-1").addClass("lazy-count"); }, 500);
            setTimeout(function () { $(".code-generator-preview .lazy-load-2").addClass("lazy-count"); }, 1200);
            setTimeout(function () { $(".code-generator-preview .lazy-load-3").addClass("lazy-count"); }, 1900);
            setTimeout(function () { $(".code-generator-preview .lazy-load-4").addClass("lazy-count"); }, 2600);
        }
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
                <div className="row">
                    <div className="small-12 columns">
                        <h1 className="title title-XL mrg-L">Content Loaders</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                </div>
                <div className="row" id="code-generator">
                    <div className="small-12 columns">
                        <hr />
                        <h3 className="title title-L mrg-L">Code Generator</h3>


                        <CodeGenerator 
                            formFields={
                                [
                                    { 
                                        fieldType: 'select-pattern',
                                        displayLabel: 'Type',
                                        name: 'patterns',
                                        value: [
                                            {
                                                text: 'Page',
                                                value: 'default'
                                            },
                                            {
                                                text: 'Progress',
                                                value: 'loader2'
                                            },
                                            {
                                                text: 'Section',
                                                value: 'loader3'
                                            },
                                            {
                                                text: 'Lazy Load',
                                                value: 'loader4'
                                            }
                                        ],
                                        defaultSelect: 'default'
                                    }
                                ]}

                            htmlPattern={ 
                                [
                                    {
                                        default: [
                                            {
                                                html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-container[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-spin[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-circle[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]svg[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-circle-spinner[[format_tag_value_end]][[format_attribute_start]]" viewbox="[[format_attribute_end]][[format_tag_value_start]]0 0 500 500[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]circle[[format_tag_end]] [[format_attribute_start]]cx="[[format_attribute_end]][[format_tag_value_start]]250[[format_tag_value_end]][[format_attribute_start]]" cy="[[format_attribute_end]][[format_tag_value_start]]250[[format_tag_value_end]][[format_attribute_start]]" r="[[format_attribute_end]][[format_tag_value_start]]239[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]] <[[format_tag_start]]/circle[[format_tag_end]]>[[format_tab_end]]
                                                                    <[[format_tag_start]]/svg[[format_tag_end]]>[[format_tab_end]]
                                                                <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                        <[[format_tag_start]]/div[[format_tag_end]]>`,                                        
                                            },
                                            {
                                                javascript:``,                                        
                                            }

                                        ],
                                        loader2: [
                                            {
                                                html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-checkmark-container[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                        [[format_tab_start]]<[[format_tag_start]]svg[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]checkmark[[format_tag_value_end]][[format_attribute_start]]" version="[[format_attribute_end]][[format_tag_value_start]]1.1[[format_tag_value_end]][[format_attribute_start]]" xmlns="[[format_attribute_end]][[format_tag_value_start]]http://www.w3.org/2000/svg[[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                            [[format_tab_start]]<[[format_tag_start]]ellipse[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]checkmark-circle[[format_tag_value_end]][[format_attribute_start]]" cx="[[format_attribute_end]][[format_tag_value_start]]32.5[[format_tag_value_end]][[format_attribute_start]]" cy="[[format_attribute_end]][[format_tag_value_start]]32.5[[format_tag_value_end]][[format_attribute_start]]" rx="[[format_attribute_end]][[format_tag_value_start]]30[[format_tag_value_end]][[format_attribute_start]]" ry="[[format_attribute_end]][[format_tag_value_start]]30[[format_tag_value_end]][[format_attribute_start]]" fill="[[format_attribute_end]][[format_tag_value_start]]none[[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]][[format_tag_start]] /[[format_tag_end]]>[[format_tab_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]polyline[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]checkmark-icon[[format_tag_value_end]][[format_attribute_start]]" points="[[format_attribute_end]][[format_tag_value_start]]45.9,22 30,45.6 20.9,37.6[[format_tag_value_end]][[format_attribute_start]]" fill="[[format_attribute_end]][[format_tag_value_start]]none[[format_tag_value_end]]" [[format_tag_start]] /[[format_tag_end]]>[[format_tab_end]]
                                                        <[[format_tag_start]]/svg[[format_tag_end]]>[[format_tab_end]]
                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-count-container[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]span[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]loader-count[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]100<[[format_tag_start]]/span[[format_tag_end]]>[[format_tab_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]span[[format_tag_end]]>%<[[format_tag_start]]/span[[format_tag_end]]>[[format_tab_end]]
                                                        <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                    <[[format_tag_start]]/div[[format_tag_end]]>`,                                        
                                            },
                                            {
                                                javascript:`window.progressLoader();`,                                        
                                            }

                                        ],
                                        loader3: [
                                            {
                                                html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]section-container[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]shimmer-bg progressbar-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]shimmer-bg progressbar-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]shimmer-bg progressbar-3[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                <[[format_tag_start]]/div[[format_tag_end]]>`,                                        
                                            },
                                            {
                                                javascript:``,                                        
                                            }

                                        ],
                                        loader4: [
                                            {
                                                html:`<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]row[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-load-container code-generator-preview columns[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_end]][[format_tag_value_start]]lazy-border[[format_tag_value_end]][[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade lazy-main[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]hr /[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-sub[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-3[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_end]][[format_tag_value_start]]lazy-border[[format_tag_value_end]][[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade lazy-main[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]hr /[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-sub[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-3[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-3 hide-for-small-only[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_end]][[format_tag_value_start]]lazy-border[[format_tag_value_end]][[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade lazy-main[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]hr /[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-sub[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-3[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-load small-6 medium-4 large-3 xlarge-3 column lazy-load-4 hide-for-small-only hide-for-medium-only[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_end]][[format_tag_value_start]]lazy-border[[format_tag_value_end]][[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade lazy-main[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]hr /[[format_tag_end]]>[[format_tab_end]]
                                                                    [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazy-sub[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-1[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-2[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                        [[format_tab_start]]<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]lazyload-bg lazyload-fade progressbar-3[[format_tag_value_end]][[format_attribute_start]]">[[format_attribute_end]]<[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                    <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                                <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                            <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                        <[[format_tag_start]]/div[[format_tag_end]]>[[format_tab_end]]
                                                    <[[format_tag_start]]/div[[format_tag_end]]>`,                                        
                                            },
                                            {
                                                javascript:`window.lazyLoader();`,                                        
                                            }

                                        ]
                                         
                                    }
                                ]}

                          />
                    </div>
                </div>
                <div className="row" id="types">
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-M">Types</h3>
                        <p className="mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="small-12 medium-12 columns">
                            <div className="small-12 medium-4 columns">
                                <div className="loader-container">
                                    <div className="loader-spin">
                                        <div className="loader-circle">
                                            <svg className="loader-circle-spinner" viewBox="0 0 500 500">
                                                <circle cx="250" cy="250" r="239"> </circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Page</h4>
                                <p className="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns">
                            <div className="small-12 medium-4 columns position-rel">
                                <div className="loader-checkmark-container">
                                    <svg className="checkmark" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse className="checkmark-circle"cx="32.5" cy="32.5" rx="30" ry="30" fill="none" />
                                        <polyline className="checkmark-icon" points="45.9,22 30,45.6 20.9,37.6" fill="none" />
                                    </svg>
                                    <div className="loader-count-container">
                                        <span className="loader-count">100</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Progress</h4>
                                <p className="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns">
                            <div className="small-12 medium-4 columns">
                                <div className="section-container">
                                    <div className="shimmer-bg progressbar-1"></div>
                                    <div className="shimmer-bg progressbar-2"></div>
                                    <div className="shimmer-bg progressbar-3"></div>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Section</h4>
                                <p className="max-width-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" id="lazy-load">
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-L">Lazy Load</h3>
                        <p className="max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="lazy-load-container lazy-load-container-preview columns">
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