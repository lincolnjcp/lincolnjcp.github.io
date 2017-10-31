import React, { Component } from 'react';
import $ from 'jquery';
import CodeGenerator from '../../containers/CodeGenerator.js';

class Tables extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="small-12 columns">
            <h1>Tables</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
    </div>
    
    <div className="row" id="standard">
        <div className="small-12 columns">
            <hr />
            <h3>Standard</h3>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h4 className="title-L mrg-M">Tab Title</h4>
            <table class="table-striped-columns table-full std-txt std-txt-S mrg-L" width="100%" border="0">
                <tbody>
                    <tr>
                        <th class="title-S">Feature</th>
                        <td>Detail</td>
                        <th class="title-S">Feature</th>
                        <td>Detail</td>
                    </tr>
                    <tr>
                        <th class="title-S">Feature</th>
                        <td>Detail</td>
                        <th class="title-S">Feature</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row" id="feature">
        <div className="small-12 columns">
            <hr />
            <h3>Feature</h3>
            <p className="mrg-L">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="row">
                <div className="small-12 medium-4 large-2 columns">
                    <h4 className="title-XXL mrg-M">Tab Title</h4>
                </div>
                <div className="small-12 medium-8 large-10 columns">
                    <table class="std-txt std-txt-S table-full table-no-bottom-border mrg-L" width="100%" border="0">
                        <tbody>
                            <tr>
                                <th class="title-S">Feature</th>
                                <td>Detail</td>
                            </tr>
                            <tr>
                                <th class="title-S">Feature</th>
                                <td>Detail</td>
                            </tr>
                            <tr>
                                <th class="title-S">Feature</th>
                                <td>Detail</td>
                            </tr>
                            <tr>
                                <th class="title-S">Feature</th>
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <hr />
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Tables;