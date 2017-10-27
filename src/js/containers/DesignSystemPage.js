import React, { Component } from 'react';
import $ from 'jquery'
import Buttons from '../components/buttons';
import Color from '../components/color';
import Icons from '../components/icons';
import Grid from '../components/grid';
import Typography from '../components/typography';
import ContentLoaders from '../components/content-loaders';
import SubNav from './SubNav';

class DesignSystemPage extends Component {

  render() {

  const routes = {
   Buttons: {componentElement: Buttons, componentDisplayName: "Buttons", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Responsive Behavior']},
   Color: {componentElement: Color, componentDisplayName: "Color", componentSubNav: ['Core', 'Messaging', 'Rewards', 'Marketing', 'Color Usage', 'Accessibility']},
   Icons: {componentElement: Icons, componentDisplayName: "Icons", componentSubNav: ['When to Use', 'Alert', 'Payment', 'Action', 'Navigation', 'Utility', 'Social']},
   Grid: {componentElement: Grid, componentDisplayName: "Grid", componentSubNav: ['Base Unit', 'Horizontal Grid', 'Vertical Grid', 'Documentation']},
   Typography: {componentElement: Typography, componentDisplayName: "Typography", componentSubNav: ['Code Generator', 'Price', 'Title', 'Standard Text', 'Copy', 'Lists', 'Links', 'Promo Labels']},
   ContentLoaders: {componentElement: ContentLoaders, componentDisplayName: "ContentLoaders", componentSubNav: ['Types', 'Lazy Load']}
  }

  const Scene = routes[this.props.componentName].componentElement;
  const SceneSubNavName = routes[this.props.componentName].componentDisplayName;
  const SceneSubNav = routes[this.props.componentName].componentSubNav;
    return(
      <div className="design-system-inner-wrap">
          <div className="design-system-inner-content">
              <div className="design-system-content">
                  {
                  <Scene />}
              </div>
          </div>
          <SubNav name={SceneSubNavName} data={SceneSubNav} />
      </div>

  )}};

export default DesignSystemPage;