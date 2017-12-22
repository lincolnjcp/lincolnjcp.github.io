import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

const ChevronUpImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-up.svg');
const ChevronDownImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-down.svg');


class CarouselLeftButton extends React.Component {
  render() {
    return <button {...this.props}>Previous</button>
  }
}

class CarouselRightButton extends React.Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}

class CarouselUpButton extends React.Component {
  render() {
    return <button {...this.props}><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronUpImage}} /></button>
  }
}

class CarouselDownButton extends React.Component {
  render() {
    return <button {...this.props}><span className="icon color-shadow-svg" dangerouslySetInnerHTML={{__html: ChevronDownImage}} /></button>
  }
}

class CarouselImage extends React.Component {
  render() {
    return <div><img src={this.props.imgSrc} /></div>
  }
}

class CarouselNavImage extends React.Component {
  render() {
    return <div><img src={this.props.imgSrc} />
                    <div className="carousel-dot"></div></div>
  }
}


class Carousel extends Component {

  render() {
    let that = this;
    var pdpPrimaryCarouselSettings = {

      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      focusOnSelect: true,
      arrows: false,
      variableWidth: true,
      beforeChange: function(index) {
        /*if(that.refs.mainSlider.state.currentSlide != that.refs.navSlider.state.currentSlide) {
            console.log("change reg"+that.refs.navSlider.state.currentSlide);
            that.refs.navSlider.setState({ currentSlide: index });
            that.refs.mainSlider.setState({ currentSlide: index });
            that.refs.navSlider.slickGoTo(index);
        }
        //that.refs.navSlider.slickGoTo(index);*/
      },
      afterChange: function(index) {
        
      },
      responsive: [ 
        { 
            breakpoint: 1440, 
            settings: { 
            } 
        }
      ]
    };

    var pdpPrimaryCarouselNavSettings = {

      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      nextArrow: <CarouselDownButton />,
      prevArrow: <CarouselUpButton />,
      beforeChange: function(index) {
        that.refs.navSlider.setState({ currentSlide: index });
        if(that.refs.mainSlider.state.currentSlide != that.refs.navSlider.state.currentSlide) {
            console.log("change"+index);
            that.refs.navSlider.setState({ currentSlideID: index });
            that.refs.mainSlider.setState({ currentSlideID: index });
            that.refs.mainSlider.slickGoTo(index);
        }
        
        
      },
      afterChange: function(index) {
        
      },
      responsive: [ 
        { 
            breakpoint: 1440, 
            settings: { 
            } 
        }
      ]
    };
    return (
      <div>
      
    <div className="row">
        <div className="sm12 columns">
            <h1 className="title title-XL mrg-L">Carousels</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>


    <div className="row" id="carousel">
        <div className="md12 lg12 sm12 column mrg-XL">
      <h2 className="title title-L mrg-M">PDP Carousels & Video Player</h2>
        <div className="carousel-container carousel-container-vertical mrg-L">
            <div className="carousel-main-img">
                <Slider ref='mainSlider' {...pdpPrimaryCarouselSettings}>
              
                  <div>
                    <CarouselImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-video" />
                  </div>

                </Slider>

                <div class="flag flag-info std-txt std-txt-XS">
                    Low Stock
                </div>
            </div>
            <div className="carousel-component">

                <Slider ref='navSlider' {...pdpPrimaryCarouselNavSettings}>
              
                  <div>
                    <CarouselNavImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselNavImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M.tif?$gallery$" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselNavImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M.tif?$gallery$" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselNavImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M.tif?$gallery$" navType="carousel-dot-image" />
                  </div>
                  <div>
                    <CarouselNavImage imgSrc="https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M.tif?$gallery$" navType="carousel-dot-video" />
                  </div>

                </Slider>
             
            </div>
          
        </div>

     

    </div>
    </div>

    <div className="row" id="content-guidelines">
        <div className="sm12 columns">
            <hr />
            <h3 className="title title-L mrg-L">Content Guidelines</h3>
            <p className="mrg-L">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

            <h4 className="title title-M mrg-L">How to write effective alerts:</h4>
            <ul className="list max-width-text color-slate">
                <li>Aenean lacinia bibendum nulla sed consectetur</li>
                <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
            </ul>
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

export default Carousel;