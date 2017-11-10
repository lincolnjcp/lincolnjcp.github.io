import React, { Component } from 'react';
import $ from 'jquery';
import CodeGenerator from '../../containers/CodeGenerator.js';

class Tables extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="small-12 columns">
            <h1 className="title title-XL mrg-L">Tables</h1>
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
                            fieldType: 'select',
                            displayLabel: 'Style',
                            name: 'code_table_style',
                            value: [
                                {
                                    text: 'Default',
                                    value: ''
                                },
                                {
                                    text: 'Striped Columns',
                                    value: 'table-striped-columns'
                                },
                                {
                                    text: 'Striped Rows',
                                    value: 'table-striped-rows'
                                }
                            ],
                            defaultSelect: 'table-striped-columns'
                        },
                        { 
                            fieldType: 'select',
                            displayLabel: 'Style',
                            name: 'code_table_color',
                            value: [
                                {
                                    text: 'Default',
                                    value: ''
                                },
                                {
                                    text: 'Rewards',
                                    value: 'table-striped-rewards'
                                }
                            ],
                            defaultSelect: ''
                        },
                        
                        { 
                            fieldType: 'select',
                            displayLabel: 'Vertical Align',
                            name: 'code_table_vertical_align',
                            value: [
                                {
                                    text: 'Top',
                                    value: 'valgn-top'
                                },
                                {
                                    text: 'Middle',
                                    value: 'valgn-mid'
                                },
                                {
                                    text: 'Bottom',
                                    value: 'valgn-btm'
                                }
                            ],
                            defaultSelect: 'valgn-top'
                        },
                        { 
                            fieldType: 'select',
                            displayLabel: 'First Cell Width',
                            name: 'code_table_cell_width',
                            value: [
                                {
                                    text: '50% Width',
                                    value: 'width-half'
                                },
                                {
                                    text: '25% Width',
                                    value: 'width-quarter'
                                },
                                {
                                    text: '1/3 Width',
                                    value: 'width-one-third'
                                },
                                {
                                    text: '2/3 Width',
                                    value: 'width-two-third'
                                },
                                {
                                    text: '300px Width',
                                    value: 'width-300'
                                }
                            ],
                            defaultSelect: 'width-half'
                        }, 
                        { 
                            fieldType: 'checkbox',
                            displayLabel: 'All Borders',
                            name: 'code_table_all_borders',
                            value: 'table-borders',
                            defaultSelect: ''
                        },
                        { 
                            fieldType: 'checkbox',
                            displayLabel: 'Full Width Table',
                            name: 'code_table_width',
                            value: 'width-full',
                            defaultSelect: 'true'
                        }
                    ]}

                htmlPattern={ 
                    [
                        {
                            default: [
                                {
                                    html:`<[[format_tag_start]]table[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]][[code_table_style]] [[code_table_all_borders]] [[code_table_width]] [[code_table_color]] [[code_table_vertical_align]] std-txt std-txt-S mrg-L algn-lft[[format_tag_value_end]][[format_attribute_start]]" border="[[format_attribute_end]][[format_tag_value_start]]0[[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                            [[format_tab_start]]
                                                <[[format_tag_start]]tbody[[format_tag_end]]>
                                                    [[format_tab_start]]
                                                    <[[format_tag_start]]tr[[format_tag_end]]>
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]th[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]title-S [[code_table_cell_width]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                                [[format_tab_start]]Feature[[format_tab_end]]
                                                            <[[format_tag_start]]/th[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]td[[format_tag_end]]>
                                                                [[format_tab_start]]Detail[[format_tab_end]]
                                                            <[[format_tag_start]]/td[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                    </[[format_tag_start]]tr[[format_tag_end]]>
                                                    [[format_tab_end]]
                                                    [[format_tab_start]]
                                                    <[[format_tag_start]]tr[[format_tag_end]]>
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]th[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]title-S [[code_table_cell_width]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                                [[format_tab_start]]Feature[[format_tab_end]]
                                                            <[[format_tag_start]]/th[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]td[[format_tag_end]]>
                                                                [[format_tab_start]]Detail[[format_tab_end]]
                                                            <[[format_tag_start]]/td[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                    <[[format_tag_start]]/tr[[format_tag_end]]>
                                                    [[format_tab_end]]
                                                    [[format_tab_start]]
                                                    <[[format_tag_start]]tr[[format_tag_end]]>
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]th[[format_tag_end]] [[format_attribute_start]]class="[[format_attribute_end]][[format_tag_value_start]]title-S [[code_table_cell_width]][[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]>
                                                                [[format_tab_start]]Feature[[format_tab_end]]
                                                            <[[format_tag_start]]/th[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                        [[format_tab_start]]
                                                            <[[format_tag_start]]td[[format_tag_end]]>
                                                                [[format_tab_start]]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.[[format_tab_end]]
                                                            <[[format_tag_start]]/td[[format_tag_end]]>
                                                        [[format_tab_end]]
                                                    <[[format_tag_start]]/tr[[format_tag_end]]>
                                                    [[format_tab_end]]
                                                <[[format_tag_start]]/tbody[[format_tag_end]]>
                                            [[format_tab_end]]
                                        <[[format_tag_start]]/table[[format_tag_end]]>`,                                        
                                },
                                {
                                    javascript:``,
                                }

                            ]
                             
                        }
                    ]}

              />
        </div>
    </div>
    <div className="row" id="standard">
        <div className="small-12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Standard</h3>
            <p className="mrg-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h4 className="title title-M mrg-L">Tab Title</h4>
            <table className="table-striped-columns width-full std-txt std-txt-S mrg-L algn-lft" width="100%" border="0">
                <tbody>
                    <tr>
                        <th className="title-S width-quarter">Feature</th>
                        <td className="width-quarter">Detail</td>
                        <th className="title-S width-quarter">Feature</th>
                        <td className="width-quarter">Detail</td>
                    </tr>
                    <tr>
                        <th className="title-S">Feature</th>
                        <td>Detail</td>
                        <th className="title-S">Feature</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row" id="feature">
        <div className="small-12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Feature</h3>
            <p className="mrg-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="row">
                <div className="small-12 medium-4 large-2 columns">
                    <h4 className="title title-XXL mrg-L">Tab Title</h4>
                </div>
                <div className="small-12 medium-8 large-10 columns">
                    <table className="std-txt std-txt-S width-full mrg-L algn-lft" width="100%" border="0">
                        <tbody>
                            <tr>
                                <th className="title-S width-one-third">Feature</th>
                                <td className="width-two-third">Detail</td>
                            </tr>
                            <tr>
                                <th className="title-S">Feature</th>
                                <td>Detail</td>
                            </tr>
                            <tr>
                                <th className="title-S">Feature</th>
                                <td>Detail</td>
                            </tr>
                            <tr>
                                <th className="title-S">Feature</th>
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
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

export default Tables;