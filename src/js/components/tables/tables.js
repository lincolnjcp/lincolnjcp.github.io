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
            <h2 className="std-txt std-txt-XL mrg-L txt-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>
    
    <div className="row" id="standard">
        <div className="small-12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Standard</h3>
            <p className="mrg-XL txt-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
            <p className="mrg-XL txt-max-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="row">
                <div className="small-12 medium-4 large-2 columns">
                    <h4 className="title title-XXL mrg-L">Tab Title</h4>
                </div>
                <div className="small-12 medium-8 large-10 columns">
                    <table className="std-txt std-txt-S width-full table-no-bottom-border mrg-L algn-lft" width="100%" border="0">
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