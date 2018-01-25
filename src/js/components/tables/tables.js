import React, { Component } from 'react';
import $ from 'jquery';
import CodeGenerator from '../../containers/CodeGenerator.js';
const arrowdownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/arrow-down.svg');
const cartImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/cart/cart.svg');
const storeImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/store/store.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');
class Tables extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Tables</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="sm12 columns">
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
        <div className="sm12 columns">
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
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Feature</h3>
            <p className="mrg-XL max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="row">
                <div className="sm12 md4 lg2 columns">
                    <h4 className="title title-XXL mrg-L">Tab Title</h4>
                </div>
                <div className="sm12 md8 lg10 columns">
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

            <div className="row">
                <div className="sm12 columns">
                    <h4 className="title title-M mrg-L">Headers &amp; Optional Stripes</h4>
                </div>
            </div>
            <div className="row">
                <div className="sm12 md6 lg4 columns">
                    <table className="table-striped-columns width-full std-txt std-txt-S mrg-L algn-lft" width="208" border="0">               
                        <thead>
                            <tr>
                                <th colspan="2">Details</th>
                            </tr>
                        </thead>
                         <tbody>
                            <tr>
                                <th className="title-S width-quarter">Appliance Types</th>
                                <td className="width-quarter">French Door</td>
                            </tr>
                            <tr>
                                <th className="title-S">Color of Cabinet</th>
                                <td>White</td>
                            </tr>
                            <tr>
                                <th className="title-S">Defrost Type</th>
                                <td>Auto</td>
                            </tr>
                            <tr>
                                <th className="title-S">Dispenser Features</th>
                                <td>Filtration System, Water Filtration, Dispenser Lock-out, Water Dispenser, Cubed Ice, Filter Replace Light, Crushed Ice, In Door Dispenser</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>


        </div>
    </div>
    <div className="row " id="activity">
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Activity History</h3>
          
            <table className="table-striped-columns activity-table-striped-columns width-full std-txt std-txt-S mrg-L algn-lft" width="100%" border="0">
                <tbody>
                    <tr>
                        <th className="title-S width-quarter bg-color-white">Date <span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: arrowdownImage }}/></th>
                        <th className="title-S width-quarter bg-color-white">Description</th>
                        <th className="title-S width-quarter bg-color-white">Transaction Type</th>
                        <th className="title-S width-quarter table-points">Points Earned/Used</th>
                        
                    </tr>
                    <tr>
                        <td>12/01/2017</td>
                        <td><span>jcp.com</span> <span>Master Card</span><span> Eligible Amount: $46.99</span></td>
                        <td><span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: cartImage }}/><span class="table-icon-content">Online Purchase</span></td>
                        <td class="table-points">+23 points</td>
                    </tr>
                    <tr>
                        <td>12/01/2017</td>
                        <td><span>Stonebriar Mall</span> <span>JCPenney Credit Card</span><span> Eligible Amount: $80.75</span></td>
                        <td><span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: storeImage }}/><span class="table-icon-content">In Store Purchase</span></td>
                        <td class="table-points">+80 points</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    <div className="row">
                <div className="sm12 columns">
                    <h4 className="title title-M mrg-L">Activity History</h4>
                </div>
            </div>
            <div className="row">
                <div className="sm12 md6 lg4 columns">
                    <table className="table-striped-columns activity-table-striped-columns width-full std-txt std-txt-S mrg-L algn-lft" width="208" border="0">               
                
                         <tbody>
                            <tr>
                            <th className="title-S width-quarter bg-color-white">Date <span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: arrowdownImage }}/></th>
                                <th className="title-S width-quarter table-points">Points</th>
                            </tr>
                            <tr>
                                <td><span>12/30/2017</span><span>Stonebriar Mall</span><span>JCPenney Credit Card</span><span className="mrg-XS">Eligible Amount: $80.75</span>
                                <span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: storeImage }}/><span class="table-icon-content">In Store Purchase</span></td>
                            <td class="table-points">+80 points</td>
                            </tr>
                            <tr>
                            <td><span>12/30/2017</span><span>jcp.com</span><span>Master Card</span><span className="mrg-XS">Eligible Amount: $46.99</span>
                            <span className="activity-icon color-slate-svg" dangerouslySetInnerHTML={{ __html: cartImage }}/><span class="table-icon-content">Online Purchase</span></td>
                            <td class="table-points">+23 points</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>


            <section className="row noPad sm12 md12 lg12 xl12 prodCompareContainer">
    <div className="prodCompare">
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S noBackground" />
            <div className="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt=""/><span className="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
            <div className="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt=""/><span className="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
            <div className="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt=""/><span className="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
            <div className="colChild"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0120201617040708M" alt=""/><span className="prodName std-txt std-txt-S">25.5 cu. ft. French Door Refrigerator in Stainless Steel</span></div>
        </div>
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S">Price</div>
            <div className="colChild priceCol">
            <p class="title title-XS color-penneyred mrg-XS">CYBER WEEK</p>
            <div class="price price-M mrg-rght-XS mrg-XS mrg-top-M">$1099 <span class="price price-note-M mrg-lft-XS color-penneyred"> sale </span></div>
               <div><span class="price price-note-M color-slate font-body">was $2,999  |</span><span class="price price-note-M mrg-lft-XS color-slate font-body">33% off</span></div>
            </div>
            <div className="colChild priceCol">
            <p class="title title-XS color-penneyred mrg-XS">CYBER WEEK</p>
            <div class="price price-M mrg-rght-XS mrg-XS mrg-top-M">$1099 <span class="price price-note-M mrg-lft-XS color-penneyred"> sale </span></div>
               <div><span class="price price-note-M color-slate font-body">was $2,999  |</span><span class="price price-note-M mrg-lft-XS color-slate font-body">33% off</span></div>
            </div>
            <div className="colChild priceCol">
            <p class="title title-XS color-penneyred mrg-XS">CYBER WEEK</p>
            <div class="price price-M mrg-rght-XS mrg-XS mrg-top-M">$1099 <span class="price price-note-M mrg-lft-XS color-penneyred"> sale </span></div>
               <div><span class="price price-note-M color-slate font-body">was $2,999  |</span><span class="price price-note-M mrg-lft-XS color-slate font-body">33% off</span></div>
            </div>
            <div className="colChild priceCol">
            <p class="title title-XS color-penneyred mrg-XS">CYBER WEEK</p>
            <div class="price price-M mrg-rght-XS mrg-XS mrg-top-M">$1099 <span class="price price-note-M mrg-lft-XS color-penneyred"> sale </span></div>
               <div><span class="price price-note-M color-slate font-body">was $2,999  |</span><span class="price price-note-M mrg-lft-XS color-slate font-body">33% off</span></div>
            </div>
        </div>
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S">Brand</div>
            <div className="colChild std-txt std-txt-S">LG</div>
            <div className="colChild std-txt std-txt-S">Samsung</div>
            <div className="colChild std-txt std-txt-S">LG</div>
            <div className="colChild std-txt std-txt-S">LG</div>
        </div>
        <div className="rowChild star-preview-col">
            <div className="colHeader std-txt std-txt-S">Rating</div>
            <div className="colChild">
            <ul className="star-ratings-S">
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-half">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                </li>
                <li className="star-ratings star-rating-empty">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings">
                    <a href="javascript:void();" className="rating-count">(99,999)</a>
                </li>
            </ul>
            </div>
            <div className="colChild">
            <ul className="star-ratings-S">
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-half">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                </li>
                <li className="star-ratings star-rating-empty">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings">
                    <a href="javascript:void();" className="rating-count">(99,999)</a>
                </li>
            </ul>
            </div>
            <div className="colChild">
            <ul className="star-ratings-S">
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-half">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                </li>
                <li className="star-ratings star-rating-empty">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings">
                    <a href="javascript:void();" className="rating-count">(99,999)</a>
                </li>
            </ul>
            </div>
            <div className="colChild">
            <ul className="star-ratings-S">
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-full">
                    <span className="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings start-ratings-half">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                </li>
                <li className="star-ratings star-rating-empty">
                    <span className="icon" dangerouslySetInnerHTML={{ __html: starImage }} />
                </li>
                <li className="star-ratings">
                    <a href="javascript:void();" className="rating-count">(99,999)</a>
                </li>
            </ul>
            </div>
        </div>
      
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S">Depth (in.)</div>
            <div className="colChild std-txt std-txt-S">34 1/4 Inch</div>
            <div className="colChild std-txt std-txt-S">36 1/4 Inch</div>
            <div className="colChild std-txt std-txt-S">34 1/4 Inch</div>
            <div className="colChild std-txt std-txt-S">34 1/4 Inch</div>
        </div>
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S">Height (in.)</div>
            <div className="colChild std-txt std-txt-S">68 3/8 inch</div>
            <div className="colChild std-txt std-txt-S">68 3/8 inch</div>
            <div className="colChild std-txt std-txt-S">68 3/8 inch</div>
            <div className="colChild std-txt std-txt-S">68 3/8 inch</div>
        </div>
        <div className="rowChild">
            <div className="colHeader std-txt std-txt-S">Width (in.)</div>
            <div className="colChild std-txt std-txt-S">35 3/4 inch</div>
            <div className="colChild std-txt std-txt-S">35 3/4 inch</div>
            <div className="colChild std-txt std-txt-S">35 3/4 inch</div>
            <div className="colChild std-txt std-txt-S">35 3/4 inch</div>
        </div>
    </div>
</section>
 
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

export default Tables;