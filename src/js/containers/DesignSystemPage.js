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
import Wells from '../components/wells';
import ProgressBar from '../components/progressbar';
import Pricing from '../components/pricing';
import VisualNavigation from '../components/visual-navigation';
import Modal from '../components/modal';
import CountdownTimers from '../components/countdown-timers';
import Tooltips from '../components/tooltips';
import Tabs from '../components/tabs';
import Pagination from '../components/pagination';
import Swatches from '../components/swatches';
import Selectors from '../components/selectors';
import Carousel from '../components/carousel';
import Coupons from '../components/coupons';
import Lists from '../components/lists';

import Header from '../components/header';
import Footer from '../components/footer';
import FooterMinimized from '../components/footer-minimized';
import SlideOutPanels from '../components/slide-out-panels';
import FilterSort from '../components/filter-sort';
import ExpandCollapse from '../components/expand-collapse';
import ProductCards from '../components/product-cards';
import LikeDislike from '../components/like-dislike';
import RecommendationZone from '../components/recommendation-zone';
import Pdp from '../components/pdp';

import SubNav from './SubNav';

class DesignSystemPage extends Component {

  render() {

  const routes = {
   Buttons: {componentElement: Buttons, componentDisplayName: "Buttons", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Responsive Behavior']},
   Color: {componentElement: Color, componentDisplayName: "Color", componentSubNav: ['Core', 'Messaging', 'Rewards', 'Marketing', 'Color Usage', 'Accessibility']},
   Icons: {componentElement: Icons, componentDisplayName: "Icons", componentSubNav: ['When to Use', 'Alert', 'Payment', 'Action', 'Navigation', 'Utility', 'Social']},
   Grid: {componentElement: Grid, componentDisplayName: "Grid", componentSubNav: ['Horizontal Grid', 'Vertical Grid', 'Documentation']},
   Typography: {componentElement: Typography, componentDisplayName: "Typography", componentSubNav: ['Code Generator', 'Price', 'Title', 'Standard Text', 'Copy', 'Links', 'Promo Labels']},
   Alerts: {componentElement: Alerts, componentDisplayName: "Alerts & Messaging", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Content Guidelines', 'Related Content']},
   Badges: {componentElement: Badges, componentDisplayName: "Badges", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Examples']},
   ContentLoaders: {componentElement: ContentLoaders, componentDisplayName: "Content Loaders", componentSubNav: ['Code Generator', 'Types', 'Lazy Load']},
   Tables: {componentElement: Tables, componentDisplayName: "Tables", componentSubNav: ['Code Generator', 'Standard', 'Feature']},
   Forms: {componentElement: Forms, componentDisplayName: "Forms", componentSubNav: ['Code Generator', 'When to Use', 'Appearance', 'Form Validation', 'Sample Layout', 'Related Content']},
   DropdownButton: {componentElement: DropdownButton, componentDisplayName: "Dropdown Button", componentSubNav: ['Dropdown Button']},
   StarRatings: {componentElement: StarRatings, componentDisplayName: "Star Ratings", componentSubNav: ['Star Ratings']},
   Scrollbar: {componentElement: Scrollbar, componentDisplayName: "Scrollbar", componentSubNav: ['Scrollbar']},
   Wells: {componentElement: Wells, componentDisplayName: "Wells", componentSubNav: ['Wells']},
   CountdownTimers: {componentElement: CountdownTimers, componentDisplayName: "Countdown Timers", componentSubNav: ['Countdown Timers']},
   VisualNavigation: {componentElement: VisualNavigation, componentDisplayName: "Visual Navigation", componentSubNav: ['Visual Navigation']},
   Modal: {componentElement: Modal, componentDisplayName: "Modal", componentSubNav: ['Modal']},
   Lists: {componentElement: Lists, componentDisplayName: "Lists", componentSubNav: ['Lists']},
   Tooltips: {componentElement: Tooltips, componentDisplayName: "Tooltips", componentSubNav: ['Tooltips']},
   Tabs: {componentElement: Tabs, componentDisplayName: "Tabs", componentSubNav: ['Tabs']},
   Pagination: {componentElement: Pagination, componentDisplayName: "Pagination", componentSubNav: ['Pagination']},
   Swatches: {componentElement: Swatches, componentDisplayName: "Swatches", componentSubNav: ['Swatches']},
   Selectors: {componentElement: Selectors, componentDisplayName: "Selectors", componentSubNav: ['Selectors']},
   Carousel: {componentElement: Carousel, componentDisplayName: "Carousels", componentSubNav: ['Carousel']},
   Header: {componentElement: Header, componentDisplayName: "Header", componentSubNav: ['Header']},
   Footer: {componentElement: Footer, componentDisplayName: "Footer", componentSubNav: ['Footer']},
   FooterMinimized: {componentElement: FooterMinimized, componentDisplayName: "FooterMinimized", componentSubNav: ['FooterMinimized']},
   Coupons: {componentElement: Coupons, componentDisplayName: "Coupons", componentSubNav: ['Coupons']},
   SlideOutPanels: {componentElement: SlideOutPanels, componentDisplayName: "Slide Out Panels", componentSubNav: ['Slide Out Panels']},
   ProductCards: {componentElement: ProductCards, componentDisplayName: "Product Cards", componentSubNav: ['Product Cards']},
   FilterSort: {componentElement: FilterSort, componentDisplayName: "Filter Sort", componentSubNav: ['FilterSort']},
   LikeDislike: {componentElement: LikeDislike, componentDisplayName: "Like Dislike Messages", componentSubNav: ['Like Dislike Messages']},
   ExpandCollapse: {componentElement: ExpandCollapse, componentDisplayName: "Expand Collapse", componentSubNav: ['ExpandCollapse']},
   RecommendationZone: {componentElement: RecommendationZone, componentDisplayName: "Recommendation Zone", componentSubNav: ['RecommendationZone']},
   Pricing: {componentElement: Pricing, componentDisplayName: "Pricing", componentSubNav: ['Pricing']},
   ProgressBar: {componentElement: ProgressBar, componentDisplayName: "ProgressBar", componentSubNav: ['ProgressBar']},
   Pdp: {componentElement: Pdp, componentDisplayName: "Pdp", componentSubNav: ['Pdp']}
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