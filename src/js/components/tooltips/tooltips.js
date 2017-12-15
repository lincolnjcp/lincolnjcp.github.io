import React, { Component } from 'react';

class Tooltips extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="mrg-L row">
          <div className="tooltip">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-single">
            <span>tooltip tooltip new</span>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="tooltip tooltip-single tooltip-right-side">
            <span>tooltip right side</span>
          </div>

          <br></br>
          <br></br>

          <div className="tooltip tooltip-single tooltip-left-side">
            <span>tooltip left side</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-bottom-center">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-bottom-right">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-top-left">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-dark">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-top-center">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-top-right">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>

          <div className="tooltip tooltip-top-right tooltip-long tooltip-list">
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">My Rewards</a></li>
              <li><a href="#">My Orders</a></li>
              <li><a href="#">My Rewards (0)</a></li>
              <li><a href="#">My List</a></li>
              <li><a href="#">Profile Settings</a></li>
              <li><a href="#">Nofications</a></li>
              <li><a href="#">My JCPenney.com</a></li>
              <li><a href="#">Gift Registry</a></li>
              <li><a href="#">JCPenney Credit Card</a></li>
              <li className="tooltip-divider"><a href="#">Sign Out</a></li>
            </ul>
          </div>

          <br></br>

          <div className="tooltip tooltip-top-right">
            <span>
              <h1 className="title title-M mrg-S">This is a Tooltip H1 Title</h1>
              Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>
          <br></br>

          <div className="tooltip tooltip-dark tooltip-top-right">
            <span>Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.Multi-line tooltips have 16px of padding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
          </div>

          <br></br>
          <br></br>

          <div className="tooltip tooltip-right-side">
            <div className="tooltip-close">

            </div>
            <span>
              <h1 className="title title-M mrg-S">This is a Tooltip H1 Title</h1>
              <input type="radio" id="tooltip-radio" name="tootlip-radio" />
              <label for="tooltip-radio">Vanilla label</label>
            </span>
          </div>

        </div>
      </div>
    );
  }
}

export default Tooltips;