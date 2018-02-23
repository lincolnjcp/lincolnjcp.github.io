import React, { Component } from 'react';
import $ from 'jquery';

const logoImage = require('!!raw-loader?es5=1!../../../images/global/jcpenney.svg');
const searchImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/search.svg');
const menuImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/menu.svg');
const closeImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/close.svg');

class SlideOutPanels extends Component {

  componentDidMount() {


        $('.side-panel-btn').unbind('click').on('click', function(event){
          event.preventDefault();
          var parent = $($(this).attr('data-target'));
          parent.addClass('is-visible');
        });

        $('.side-panel').unbind('click').on('click', function(event){
          if( $(event.target).is('.side-panel')) { 
            $(this).removeClass('is-visible');            
          } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close') ) {
             $(event.target).closest('.side-panel').removeClass('is-visible');
          }
          event.preventDefault();
        });
  }

  render() {
    return (

<div>
  <div className="row">
    <div className="sm12 columns">
      <h1 className="title title-XL mrg-L">Slide Out Panels</h1>
      <h2 className="std-txt std-txt-XL mrg-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      <p><a href="javascript:void(0);" class="side-panel-btn" data-target="#leftPanel">Slide In From Left</a></p>
      <p><a href="javascript:void(0);" class="side-panel-btn" data-target="#rightPanel">Slide In From Right</a></p>
    </div>
  </div>
  <div className="side-panel slide-panel-from-right" id="rightPanel">
    <div className="side-panel-container">
      <header className="side-panel-header">
        <h3 className="title title-L color-white">Panel</h3>
        <a href="javascript:void(0);" className="side-panel-close">
        <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{__html: closeImage}} />
        </a> </header>
      <div className="side-panel-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor eget scelerisque lobortis. Nulla metus nisi, commodo et suscipit ac, venenatis ut magna. Nunc in venenatis mi, vitae placerat odio. Aenean est tellus, mollis sed tempus vel, egestas non urna. Suspendisse fringilla neque tincidunt, molestie diam non, facilisis ante. Quisque mattis commodo arcu vehicula lobortis. Cras lorem mauris, molestie ac gravida in, condimentum at enim. Aenean elementum, mauris ac convallis tempus, erat eros aliquam quam, ac sodales ligula mauris nec neque. Aliquam ut turpis lectus. Cras eget felis odio.</p>
      </div>
    </div>
  </div>

  <div className="side-panel slide-panel-from-left" id="leftPanel">
    <div className="side-panel-container">
      <header className="side-panel-header">
        <h3 className="title title-L color-white">Panel</h3>
        <a href="javascript:void(0);" className="side-panel-close">
        <div className="change-my-store-icon-close icon color-white-svg" dangerouslySetInnerHTML={{__html: closeImage}} />
        </a> </header>
      <div className="side-panel-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor eget scelerisque lobortis. Nulla metus nisi, commodo et suscipit ac, venenatis ut magna. Nunc in venenatis mi, vitae placerat odio. Aenean est tellus, mollis sed tempus vel, egestas non urna. Suspendisse fringilla neque tincidunt, molestie diam non, facilisis ante. Quisque mattis commodo arcu vehicula lobortis. Cras lorem mauris, molestie ac gravida in, condimentum at enim. Aenean elementum, mauris ac convallis tempus, erat eros aliquam quam, ac sodales ligula mauris nec neque. Aliquam ut turpis lectus. Cras eget felis odio.</p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="sm12 columns">
      <hr />
      <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong> <br />
        Latest update: 04/05/2017</p>
    </div>
  </div>
</div>

    
    );
  }
}

export default SlideOutPanels;