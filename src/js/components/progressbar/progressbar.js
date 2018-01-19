import React, { Component } from 'react';

class ProgressBar extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row sm12 md4 lg4 xl4">
          <div className="row">
            <p className="std-txt std-txt-M color-nightsky"><strong>Points</strong></p>
            <div className="progress-bar progress-bar-rewards position-rel">
              <div className="tooltip tooltip-bottom-center tooltip-single">$10</div>
              <span className="progress-bar-max-points">200</span>
              <div className="progress-bar-percent">150</div>
            </div>
            <p className="S text-center"><strong>35 points</strong> away from your next <strong>$10 reward*</strong></p>
          </div>
          <br/><br/><br/>
          <div className="row">
            <div className="progress-bar">
              <div className="progress-bar-percent"></div>
            </div>
            <p className="std-txt std-txt-M color-nightsky text-center">Spend <strong>$83.00</strong> more to earn <strong className="color-penneyred">FREE SHIPPING</strong></p>
          </div>

          <br/><br/><br/>

          <div className="row progress-bar-box">
            <p className="std-txt std-txt-M color-nightsky"><strong>Points</strong></p>
            <div className="progress-bar progress-bar-rewards position-rel">
              <div className="tooltip tooltip-bottom-center tooltip-single">$10</div>
              <span className="progress-bar-max-points">200</span>
              <div className="progress-bar-percent">150</div>
            </div>
            <p className="S text-center"><strong>35 points</strong> away from your next <strong>$10 reward*</strong></p>
          </div>

        </div>
      </div>
    );
  }
}

export default ProgressBar;