import React, { Component } from 'react';

class Tabs extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="tab-container mrg-XL">
            <ul className="tab-header">
              <li className="title tab-lbl btn-active">
                <span>Tab 1</span>
              </li>
              <li className="title tab-lbl">
                <span>Tab 2</span>
              </li>
              <li className="title tab-lbl">
                <span>Tab 3</span>
              </li>
              <li className="title tab-lbl tab-lbl-disabled" disabled="true">
                <span>Tab 4</span>
              </li>
              <li className="title tab-lbl tab-lbl-focus">
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