import React, { Component } from 'react';
import $ from 'jquery'
import Buttons from '../components/buttons';
import Color from '../components/color';
import Icons from '../components/icons';
import Grid from '../components/grid';
import Typography from '../components/typography';

import Alerts from '../components/alerts';
import Badges from '../components/badges';
import ContentLoaders from '../components/content-loaders';
import DropdownButton from '../components/dropdown-button';
import Tables from '../components/tables';
import Forms from '../components/forms';
import StarRatings from '../components/star-ratings';
import Scrollbar from '../components/scrollbar';

import SubNav from './SubNav';

class DesignSystemPage extends Component {

  render() {

  const routes = {
   Buttons: {componentElement: Buttons, componentDisplayName: "Buttons", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Responsive Behavior']},
   Color: {componentElement: Color, componentDisplayName: "Color", componentSubNav: ['Core', 'Messaging', 'Rewards', 'Marketing', 'Color Usage', 'Accessibility']},
   Icons: {componentElement: Icons, componentDisplayName: "Icons", componentSubNav: ['When to Use', 'Alert', 'Payment', 'Action', 'Navigation', 'Utility', 'Social']},
   Grid: {componentElement: Grid, componentDisplayName: "Grid", componentSubNav: ['Horizontal Grid', 'Vertical Grid', 'Documentation']},
   Typography: {componentElement: Typography, componentDisplayName: "Typography", componentSubNav: ['Code Generator', 'Price', 'Title', 'Standard Text', 'Copy', 'Lists', 'Links', 'Promo Labels']},
   Alerts: {componentElement: Alerts, componentDisplayName: "Alerts & Messaging", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Content Guidelines', 'Related Content']},
   Badges: {componentElement: Badges, componentDisplayName: "Badges", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Examples']},
   ContentLoaders: {componentElement: ContentLoaders, componentDisplayName: "Content Loaders", componentSubNav: ['Code Generator', 'Types', 'Lazy Load']},
   Tables: {componentElement: Tables, componentDisplayName: "Tables", componentSubNav: ['Code Generator', 'Standard', 'Feature']},
   Forms: {componentElement: Forms, componentDisplayName: "Forms", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Form Validation', 'Sample Layout', 'Related Content']},
   DropdownButton: {componentElement: DropdownButton, componentDisplayName: "Content Loaders", componentSubNav: ['Code Generator', 'Types', 'Lazy Load']},
   StarRatings: {componentElement: StarRatings, componentDisplayName: "Content Loaders", componentSubNav: ['Code Generator', 'Types', 'Lazy Load']},
   Scrollbar: {componentElement: Scrollbar, componentDisplayName: "Content Loaders", componentSubNav: ['Scrollbar']}
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