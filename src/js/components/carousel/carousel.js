import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

const ChevronLeftImage = require("!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-left.svg");
const ChevronRightImage = require("!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-right.svg");
const ChevronUpImage = require("!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-up.svg");
const ChevronDownImage = require("!!raw-loader?es5=1!../../../images/global/icons/nav/chevron-down.svg");

class CarouselLeftButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        <span
          className="icon color-shadow-svg"
          dangerouslySetInnerHTML={{ __html: ChevronLeftImage }}
        />
      </button>
    );
  }
}

class CarouselRightButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        <span
          className="icon color-shadow-svg"
          dangerouslySetInnerHTML={{ __html: ChevronRightImage }}
        />
      </button>
    );
  }
}

class CarouselUpButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        <span
          className="icon color-shadow-svg"
          dangerouslySetInnerHTML={{ __html: ChevronUpImage }}
        />
      </button>
    );
  }
}

class CarouselDownButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        <span
          className="icon color-shadow-svg"
          dangerouslySetInnerHTML={{ __html: ChevronDownImage }}
        />
      </button>
    );
  }
}

class CarouselImage extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgSrc} alt="product-image" />
      </div>
    );
  }
}

const CarouselNavImage = (args) => {
  const selectedImageStyle =
    args.index === args.selectedIndex
      ? "slide-inner slick-current"
      : "slide-inner";
  return (
    <div className={selectedImageStyle}>
      <div className={args.navClass}>
        <img src={args.imgSrc} alt="product-image" />
      </div>
    </div>
  );
};

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
      secondarySlideIndex: 0,
      selectedImage:
        "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      secondarySelectedImage:
        "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
    };
  }

  componentDidMount() {
    window.slickNav = ReactDOM.findDOMNode(
      this.refs.navSlider,
    ).querySelectorAll('[data-index="0"]');
    window.slickMain = ReactDOM.findDOMNode(
      this.refs.mainSlider,
    ).querySelectorAll('[data-index="0"]');
    window.secondarySlider = ReactDOM.findDOMNode(
      this.refs.secondarySlider,
    ).querySelectorAll('[data-index="0"]');
    window.secondaryNavSlider = ReactDOM.findDOMNode(
      this.refs.secondaryNavSlider,
    ).querySelectorAll('[data-index="0"]');

  }

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
      beforeChange: function (currentSlide, nextSlide) {
        that.refs.mainSlider.setState({ currentSlide: nextSlide });

        if (
          that.refs.mainSlider.state.currentSlide !==
          that.refs.navSlider.state.currentSlide
        ) {
          that.refs.navSlider.setState({ currentSlide: nextSlide });
          that.refs.navSlider.slickGoTo(nextSlide);
        }

        var slickCurrentPrevious = ReactDOM.findDOMNode(
          that.refs.mainSlider,
        ).querySelectorAll('[data-index="' + currentSlide + '"]');
        slickCurrentPrevious[0].classList.remove("slick-current");
      },
      afterChange: function (index) {
        var slickCurrentNext = ReactDOM.findDOMNode(
          that.refs.mainSlider,
        ).querySelectorAll('[data-index="' + index + '"]');
        slickCurrentNext[0].classList.add("slick-current");
      },
      responsive: [
        {
          breakpoint: 1440,
          settings: {},
        },
      ],
    };

    var pdpPrimaryCarouselNavSettings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      vertical: true,
      arrows: true,
      nextArrow: <CarouselDownButton />,
      prevArrow: <CarouselUpButton />,
      centerMode: false,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            dots: true,
          },
        },
      ],
    };

    var pdpPrimaryMobileCarouselNavSettings = {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      arrows: true,
      // nextArrow: <CarouselDownButton />,
      // prevArrow: <CarouselUpButton />,
      centerMode: false,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            dots: true,
          },
        },
      ],
    };

    var pdpSecondaryCarouselSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      focusOnSelect: true,
      arrows: true,
      variableWidth: true,
      beforeChange: function (currentSlide, nextSlide) {
        that.refs.secondarySlider.setState({ currentSlide: nextSlide });

        if (
          that.refs.secondarySlider.state.currentSlide !==
          that.refs.secondaryNavSlider.state.currentSlide
        ) {
          that.refs.secondaryNavSlider.setState({ currentSlide: nextSlide });
          that.refs.secondaryNavSlider.slickGoTo(nextSlide);
        }

        var slickCurrentPrevious = ReactDOM.findDOMNode(
          that.refs.secondarySlider,
        ).querySelectorAll('[data-index="' + currentSlide + '"]');
        slickCurrentPrevious[0].classList.remove("slick-current");
      },
      afterChange: function (index) {
        var slickCurrentNext = ReactDOM.findDOMNode(
          that.refs.secondarySlider,
        ).querySelectorAll('[data-index="' + index + '"]');
        slickCurrentNext[0].classList.add("slick-current");
      },
      responsive: [
        {
          breakpoint: 1440,
          settings: {},
        },
      ],
    };

    var pdpSecondaryCarouselNavSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // focusOnSelect: true,
      centerMode: false,
      nextArrow: <CarouselRightButton />,
      prevArrow: <CarouselLeftButton />,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            dots: true,
          },
        },
      ],
    };

    const PrimaryImgUrls = [
      "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
    ];

    const secondarySlideImageUrls = [
      "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0726201617201191M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0607201617024741M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0615201717271938M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
      "https://s7d9.scene7.com/is/image/JCPenney/DP0913201618055525M?hei=500&amp;wid=500&op_usm=.4,.8,0,0&resmode=sharp2",
    ];

    return (
      <div>

        <div className="row" id="carousel">
          <div className="md12 lg12 sm12 column nopad-XXL mrg-btm-M">
            <h2 className="title title-L mrg-btm-M">
              PDP Carousels & Video Player
            </h2>

            <div className="carousel-container carousel-container-vertical hide-for-medium-only hide-for-small-only hide-for-medium-down">
              <div className="carousel-main-img">
                <Slider ref="mainSlider" {...pdpPrimaryCarouselSettings}>
                  {/* first carousel main image */}
                  <div>
                    <CarouselImage
                      imgSrc={this.state.selectedImage}
                    />
                  </div>
                </Slider>

                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
              </div>

           
              <div className="carousel-nav">
              {
                PrimaryImgUrls.length && (<Slider ref="navSlider" {...pdpPrimaryCarouselNavSettings}>
                {PrimaryImgUrls.map((url, index) => {
                  return (
                    <div
                      onClick={() => {
                        this.setState({
                          currentSlideIndex: index,
                          selectedImage: url,
                        });
                      }}
                    >
                      <CarouselNavImage
                        imgSrc={url}
                        navClass="carousel-dot-image carousel-dot-video"
                        index={index}
                        selectedIndex={this.state.currentSlideIndex}
                      />
                    </div>
                  );
                })}
              </Slider>)
              }
                
              </div>
            </div>


            <div className="carousel-container carousel-secondary carousel-container-horizontal hide-for-medium-only hide-for-small-only">
              <div className="carousel-main-img">
                <Slider ref="secondarySlider" {...pdpSecondaryCarouselSettings}>
                  <div>
                    <CarouselImage
                      imgSrc={this.state.secondarySelectedImage}
                      navClass="carousel-dot-video"
                    />
                  </div>
                </Slider>

                <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
              </div>
              <div className="carousel-nav">
                <Slider
                  ref="secondaryNavSlider"
                  {...pdpSecondaryCarouselNavSettings}
                >
                  {secondarySlideImageUrls.map((url, index) => {
                    return (
                      <div
                        onClick={() => {
                          this.setState({
                            secondarySlideIndex: index,
                            secondarySelectedImage: url,
                          });
                        }}
                      >
                        <CarouselNavImage
                          imgSrc={url}
                          navClass="carousel-dot-image"
                          index={index}
                          selectedIndex={this.state.secondarySlideIndex}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>

            <div className="carousel-container carousel-container-horizontal mrg-btm-L show-for-medium-only show-for-small-only">
              <Slider ref="navSlider" {...pdpPrimaryMobileCarouselNavSettings}>
                {PrimaryImgUrls.map((url, index) => {
                  return (
                    <div
                      onClick={() => {
                        this.setState({
                          currentSlideIndex: index,
                          selectedImage: url,
                        });
                      }}
                    >
                      <CarouselNavImage
                        imgSrc={url}
                        navClass="carousel-dot-image"
                        index={index}
                        selectedIndex={this.state.currentSlideIndex}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
