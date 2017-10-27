import React, { Component } from 'react';
import $ from 'jquery'

class ContentLoaders extends Component {

componentDidMount() {
    $('.loader-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

    render() {
    return (
<div>
    <div className="row">
        <div className="small-12 columns">
            <h1>Content Loaders</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <hr />
        </div>
    </div>
    
    <div className="row" id="types">
        <div className="small-12 columns">
            <h3>Types</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="small-12 medium-12 columns">
                <div className="small-12 medium-4 columns">
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
                </div>
                <div className="small-12 medium-8 columns">
                    <h4>Page</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                </div>
            </div>
            <div className="small-12 medium-12 columns">
                <div className="small-12 medium-4 columns">
                    <div className="loader-checkmark-container">
                        <span className="loader-checkmark checkmark-icon"></span>
                    </div>
                    <div className="loader-count-container">
                        <span className="loader-count">100</span>
                        <span>%</span>
                    </div>
                </div>
                <div className="small-12 medium-8 columns">
                    <h4>Progress</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                </div>
            </div>
            <div className="small-12 medium-12 columns">
                <div className="small-12 medium-4 columns">

                </div>
                <div className="small-12 medium-8 columns">
                    <h4>System</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /><br /></p>
                </div>
            </div>
        </div>
    </div>
    <hr />
    
    <div className="row" id="lazy-load">
        <div className="small-12 columns">
            <h3>Lazy Load</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>    

    <div className="row created-by">
        <div className="small-12 columns">
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    );
  }
}

export default ContentLoaders;