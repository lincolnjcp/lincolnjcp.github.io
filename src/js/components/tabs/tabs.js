import React, { Component } from 'react';

class Tabs extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="tab-container mrg-XL">
            <ul class="tab-header">
              <li class="title tab-lbl btn-active">
                <span>Tab 1</span>
              </li>
              <li class="title tab-lbl">
                <span>Tab 2</span>
              </li>
              <li class="title tab-lbl">
                <span>Tab 3</span>
              </li>
              <li class="title tab-lbl tab-lbl-disabled" disabled="true">
                <span>Tab 4</span>
              </li>
              <li class="title tab-lbl tab-lbl-focus">
                <span>Tab 5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;