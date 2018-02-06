import React, { Component } from 'react';

class VisualNavigation extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="viz-nav mrg-XXL">
            <h1 className="title-L mrg-XL nav-title">Category Level</h1>
            <ul>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/wmns-coats.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Tops</h2>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/wmns_tops.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Jeans</h2>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/wmns_jeans.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Pants</h2>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/wmns_blazer.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Dresses</h2>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/womens%20scrubs%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Cropped Pants</h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="viz-nav mrg-XXL">
            <h1 className="title-L mrg-XL mrg-lft-XL">Subcategory Level</h1>
            <ul>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/mens%20sports%20fan%20shop%20tablet%20category%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Liz Claiborne</h2>
                  <p className="std-txt std-txt-M algn-mid">(627)</p>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/mens%20athletic%20uniforms%20tablet%20category%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Liz Claiborne</h2>
                  <p className="std-txt std-txt-M algn-mid">(627)</p>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/mens%20coats%20jackets%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Liz Claiborne</h2>
                  <p className="std-txt std-txt-M algn-mid">(627)</p>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/mens%20sweaters%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Liz Claiborne</h2>
                  <p className="std-txt std-txt-M algn-mid">(627)</p>
                </a>
              </li>
              <li className="mrg-XL mrg-lft-XL">
                <a href="#">
                  <div className="viz-nav-img mrg-S">
                    <img src="https://m.jcpenney.com/tablet/images/mens%20hoodies2%20tablet%20category%20icon.jpg" alt="product-image" />
                  </div>
                  <h2 className="title title-M mrg-XS algn-mid">Liz Claiborne</h2>
                  <p className="std-txt std-txt-M algn-mid">(627)</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default VisualNavigation;