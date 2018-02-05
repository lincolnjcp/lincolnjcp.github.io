import React, { Component } from 'react';
import CodeGenerator from '../../containers/CodeGenerator.js';

class Typography extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="sm12 columns">
                        <h1 className="title title-XL mrg-L">Typography</h1>
                        <h2 className="std-txt std-txt-XL mrg-L max-width-text">Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.<br /><br />

                            By consistently tying typographic styles to appropriate fuctions in the interface, we create a clear visual pattern for customers while they’re interacting with our product. </h2>
                        <hr />
                    </div>
                </div>

                <div className="row" id="code-generator">
                    <div className="sm12 columns">

                        <h3 className="title title-L mrg-L">Code Generator</h3>

                        <CodeGenerator
                            formFields={
                                [
                                    {
                                        fieldType: 'text',
                                        displayLabel: 'Line 1',
                                        name: 'code_type_text',
                                        value: 'Extra 20% Off'
                                    },
                                    {
                                        fieldType: 'select-color',
                                        displayLabel: 'Color',
                                        name: 'code_type_color',
                                        value: [
                                            {
                                                text: 'Passion',
                                                value: 'color-passion'
                                            },
                                            {
                                                text: 'Lipstick',
                                                value: 'color-lipstick'
                                            },
                                            {
                                                text: 'Penney Red',
                                                value: 'color-penneyred'
                                            },
                                            {
                                                text: 'Blush',
                                                value: 'color-blush'
                                            },
                                            {
                                                text: 'Night Sky',
                                                value: 'color-nightsky'
                                            },
                                            {
                                                text: 'Shadow',
                                                value: 'color-shadow'
                                            },
                                            {
                                                text: 'Slate',
                                                value: 'color-slate'
                                            },
                                            {
                                                text: 'Concrete',
                                                value: 'color-concrete'
                                            },
                                            {
                                                text: 'Light Gray',
                                                value: 'color-lightgrey'
                                            },
                                            {
                                                text: 'White',
                                                value: 'color-white'
                                            }
                                        ],
                                        defaultSelect: 'color-nightsky'
                                    },
                                    {
                                        fieldType: 'select-grouped',
                                        displayLabel: 'Size',
                                        name: 'code_type_size',
                                        value: [
                                            {
                                                displayLabel: "Price",
                                                value: [
                                                    {
                                                        text: 'XL',
                                                        value: 'price price-XL',
                                                    },
                                                    {
                                                        text: 'L',
                                                        value: 'price price-L'
                                                    },
                                                    {
                                                        text: 'M',
                                                        value: 'price price-M'
                                                    },
                                                    {
                                                        text: 'S',
                                                        value: 'price price-S'
                                                    },
                                                    {
                                                        text: 'XS',
                                                        value: 'price price-XS'
                                                    },
                                                    {
                                                        text: 'XXS',
                                                        value: 'price price-XXS'
                                                    }
                                                ]
                                            },
                                            {
                                                displayLabel: "Title",
                                                value: [
                                                    {
                                                        text: 'XXL',
                                                        value: 'title title-XXL',
                                                    },
                                                    {
                                                        text: 'XL',
                                                        value: 'title title-XL',
                                                    },
                                                    {
                                                        text: 'L',
                                                        value: 'title title-L'
                                                    },
                                                    {
                                                        text: 'M',
                                                        value: 'title title-M'
                                                    },
                                                    {
                                                        text: 'S',
                                                        value: 'title title-S'
                                                    }
                                                ]
                                            },
                                            {
                                                displayLabel: "Standard",
                                                value: [
                                                    {
                                                        text: 'L',
                                                        value: 'std-txt std-txt-L',
                                                    },
                                                    {
                                                        text: 'M',
                                                        value: 'std-txt std-txt-M'
                                                    },
                                                    {
                                                        text: 'S',
                                                        value: 'std-txt std-txt-S'
                                                    },
                                                    {
                                                        text: 'XS',
                                                        value: 'std-txt std-txt-XS'
                                                    }
                                                ]
                                            }
                                            ,
                                            {
                                                displayLabel: "Copy",
                                                value: [
                                                    {
                                                        text: 'M',
                                                        value: 'M',
                                                    },
                                                    {
                                                        text: 'S',
                                                        value: 'S'
                                                    }
                                                ]
                                            }


                                        ],
                                        defaultSelect: 'std-txt std-txt-M'


                                    },
                                    {
                                        fieldType: 'select',
                                        displayLabel: 'Margin',
                                        name: 'code_type_margin',
                                        value: [
                                            {
                                                text: 'Zero',
                                                value: 'mrg-zero'
                                            },
                                            {
                                                text: 'S',
                                                value: 'mrg-S'
                                            },
                                            {
                                                text: 'M',
                                                value: 'mrg-M'
                                            },
                                            {
                                                text: 'L',
                                                value: 'mrg-L'
                                            },
                                            {
                                                text: 'XL',
                                                value: 'mrg-XL'
                                            }
                                        ],
                                        defaultSelect: 'mrg-zero'
                                    },
                                    {
                                        fieldType: 'select',
                                        displayLabel: 'Alignment',
                                        name: 'code_type_alignment',
                                        value: [
                                            {
                                                text: 'Left',
                                                value: 'algn-lft'
                                            },
                                            {
                                                text: 'Center',
                                                value: 'algn-mid'
                                            },
                                            {
                                                text: 'Right',
                                                value: 'algn-rght'
                                            }
                                        ],
                                        defaultSelect: 'algn-lft'
                                    }
                                ]}

                            htmlPattern={
                                [
                                    {
                                        default: [
                                            {
                                                html: `<[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                                    class="[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                    [[format_tab_start]]
                                                        [[code_type_text]]
                                                    [[format_tab_end]]
                                                <[[format_tag_start]]/p[[format_tag_end]]>
                                                [[format_br]]
                                                <[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                                    class="[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                    [[format_tab_start]]
                                                        [[code_type_text]]
                                                    [[format_tab_end]]
                                                <[[format_tag_start]]/p[[format_tag_end]]>
                                                [[format_br]]
                                                <[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                                    class="[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                    [[format_tab_start]]
                                                        [[code_type_text]]
                                                    [[format_tab_end]]
                                                <[[format_tag_start]]/p[[format_tag_end]]>`,
                                            },
                                            {
                                                javascript: ``,
                                            }

                                        ]
                                    }
                                ]}

                        />



                    </div>
                </div>

                <div className="row" id="price">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Price <span className="design-system-css-class design-system-css-class-inline">class="price"</span></h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="mrg-L">
                            <p className="price price-XL">$75.00</p>
                            <p className="design-system-css-class">.price-XL</p>
                        </div>
                        <div className="mrg-L">
                            <p className="price price-L">$75.00</p>
                            <p className="design-system-css-class">.price-L</p>
                        </div>
                        <div className="mrg-L">
                            <p className="price price-M">$75.00</p>
                            <p className="design-system-css-class">.price-M</p>
                        </div>
                        <div>
                            <p className="price price-S">$75.00</p>
                            <p className="design-system-css-class">.price-S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row" id="title">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Title <span className="design-system-css-class design-system-css-class-inline">class="title"</span></h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="mrg-L">
                            <p className="title title-XXL">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.title-XXL</p>
                        </div>
                        <div className="mrg-L">
                            <p className="title title-XL">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.title-XL</p>
                        </div>
                        <div className="mrg-L">
                            <p className="title title-L">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.title-L</p>
                        </div>
                        <div className="mrg-L">
                            <p className="title title-M">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.title-M</p>
                        </div>
                        <div>
                            <p className="title title-S">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.title-S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row" id="standard-text">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Standard Text <span className="design-system-css-class design-system-css-class-inline">class="std-txt"</span></h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="mrg-L">
                            <p className="std-txt std-txt-L">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.std-txt-L</p>
                        </div>
                        <div className="mrg-L">
                            <p className="std-txt std-txt-M">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.std-txt-M</p>
                        </div>
                        <div className="mrg-L">
                            <p className="std-txt std-txt-S">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.std-txt-S</p>
                        </div>
                        <div>
                            <p className="std-txt std-txt-XS">The quick brown fox jumps over the lazy dog.</p>
                            <p className="design-system-css-class">.std-txt-XS</p>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="row" id="copy">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Copy <span className="design-system-css-class design-system-css-class-inline">&lt;p&gt;</span></h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="mrg-L">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="design-system-css-class">.M</p>
                        </div>
                        <div>
                            <p className="S">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="design-system-css-class">.S</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row" id="links">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Links</h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="mrg-L"><a href="javascript:void();">The quick brown fox jumps over the lazy dog.</a></p><br /><br /><br />
                        <p className="mrg-L title-XSlink-S"><a href="javascript:void();">See Details</a></p>

                        <hr />
                    </div>
                </div>
                <div className="row" id="promo-labels">
                    <div className="sm12 columns">
                        <h3 className="title title-L mrg-L">Promo Labels <span className="design-system-css-class design-system-css-class-inline">class=“promo-lbl”</span></h3>
                        <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="promo-lbl promo-lbl-XXXL">Extra 20% Off</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-XXXL</p>
                        <p className="promo-lbl promo-lbl-XXL">Extra 20% Off</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-XXL</p>
                        <p className="promo-lbl promo-lbl-XL">Extra 20% Off</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-XL</p>
                        <p className="promo-lbl promo-lbl-L">Extra 20% Off</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-L</p>
                        <p className="promo-lbl promo-lbl-M">Extra 20% Off</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-M</p>
                        <p className="promo-lbl promo-lbl-S">+ get an extra 10% off with your JCPenney Credit Card</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-S</p>
                        <p className="promo-lbl promo-lbl-XS">+ get an extra 10% off with your JCPenney Credit Card</p>
                        <p className="design-system-css-class mrg-XL">.promo-lbl-XS</p>
                    </div>
                </div>
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

export default Typography;