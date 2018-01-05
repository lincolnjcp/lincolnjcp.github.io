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
import VisualNavigation from '../components/visual-navigation';
import CountdownTimers from '../components/countdown-timers';
import Tooltips from '../components/tooltips';
import Tabs from '../components/tabs';
import Pagination from '../components/pagination';
import Swatches from '../components/swatches';
import Selectors from '../components/selectors';
import Carousel from '../components/carousel';
import Coupons from '../components/coupons';

import Header from '../components/header';
import Footer from '../components/footer';

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
   DropdownButton: {componentElement: DropdownButton, componentDisplayName: "Dropdown Button", componentSubNav: ['Dropdown Button']},
   StarRatings: {componentElement: StarRatings, componentDisplayName: "Star Ratings", componentSubNav: ['Star Ratings']},
   Scrollbar: {componentElement: Scrollbar, componentDisplayName: "Scrollbar", componentSubNav: ['Scrollbar']},
   CountdownTimers: {componentElement: CountdownTimers, componentDisplayName: "Countdown Timers", componentSubNav: ['Countdown Timers']},
   VisualNavigation: {componentElement: VisualNavigation, componentDisplayName: "Visual Navigation", componentSubNav: ['Visual Navigation']},
   Tooltips: {componentElement: Tooltips, componentDisplayName: "Tooltips", componentSubNav: ['Tooltips']},
   Tabs: {componentElement: Tabs, componentDisplayName: "Tabs", componentSubNav: ['Tabs']},
   Pagination: {componentElement: Pagination, componentDisplayName: "Pagination", componentSubNav: ['Pagination']},
   Swatches: {componentElement: Swatches, componentDisplayName: "Swatches", componentSubNav: ['Swatches']},
   Selectors: {componentElement: Selectors, componentDisplayName: "Selectors", componentSubNav: ['Selectors']},
   Carousel: {componentElement: Carousel, componentDisplayName: "Carousels", componentSubNav: ['Carousel']},
   Header: {componentElement: Header, componentDisplayName: "Header", componentSubNav: ['Header']},
   Footer: {componentElement: Footer, componentDisplayName: "Footer", componentSubNav: ['Footer']},
   Coupons: {componentElement: Coupons, componentDisplayName: "Coupons", componentSubNav: ['Coupons']}

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