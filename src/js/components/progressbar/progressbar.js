import React, { Component } from 'react';

class ProgressBar extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row sm12 md4 lg4 xl4">
          <div class="row">
            <p class="std-txt std-txt-M color-nightsky"><strong>Points</strong></p>
            <div class="progress-bar progress-bar-rewards position-rel">
              <div class="tooltip tooltip-bottom-center tooltip-single">$10</div>
              <span class="progress-bar-max-points">200</span>
              <div class="progress-bar-percent">150</div>
            </div>
            <p class="S text-center"><strong>35 points</strong> away from your next <strong>$10 reward*</strong></p>
          </div>
          <br /><br /><br />
          <div class="row">
            <div class="progress-bar">
              <div class="progress-bar-percent"></div>
            </div>
            <p class="std-txt std-txt-M color-nightsky text-center">Spend <strong>$83.00</strong> more to earn <strong class="color-penneyred">FREE SHIPPING</strong></p>
          </div>

          <br /><br /><br />

          <div class="row progress-bar-box">
            <p class="std-txt std-txt-M color-nightsky"><strong>Points</strong></p>
            <div class="progress-bar progress-bar-rewards position-rel">
              <div class="tooltip tooltip-bottom-center tooltip-single">$10</div>
              <span class="progress-bar-max-points">200</span>
              <div class="progress-bar-percent">150</div>
            </div>
            <p class="S text-center"><strong>35 points</strong> away from your next <strong>$10 reward*</strong></p>
          </div>

        </div>
      </div>
    );
  }
}

export default ProgressBar;