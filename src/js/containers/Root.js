import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { rootNav } from './config/rootConfig';

import DesignSystemPage from '../containers/DesignSystemPage';
import WorkInProgress from '../components/work-in-progress';

import $ from 'jquery'

const Home = () => (
    <div className="design-system-inner-content">
        <div className="design-system-content">
            <div className="row">
                <div className="sm12 columns">
                    <h1 className="title title-XL mrg-btm-L">Home</h1>
                    <h2 className="std-txt std-txt-XL mrg-btm-L max-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mattis orci. Nunc et ullamcorper quam, id dignissim lacus. </h2>
                </div>
            </div>
        </div>
    </div>
)

const renderNavLinkItems = (parentItem) =>
    (<li>
        <a href="javascript:void(0)" className="icn-expand js-menu-expand">{parentItem.parentName}</a>
        <ul>
            {
                parentItem.childItems && parentItem.childItems.map(item =>
                    <li>
                        {item.content ? <NavLink to={item.to} activeClassName={item.activeClassName}>{item.content}</NavLink> : <hr />}
                    </li>)
            }
        </ul>
    </li>);

const RenderNavLink = () =>
    <ul className="design-system-menu">
        <li><NavLink to="/page-modules/bf/" activeClassName="active">Black Friday</NavLink></li>
        {
            rootNav.map(parentItem => parentItem.parentName === 'drawLine' ? <li><hr /></li> : renderNavLinkItems(parentItem))
        }
        <li><NavLink to="/work-in-progress" activeClassName="active">Work In Progress</NavLink></li>
        <li><NavLink to="/" activeClassName="active">Questions? <br /> Send us an email</NavLink></li>
    </ul>;

class App extends React.Component {

    componentDidMount() {

        $(document).ready(function () {

            $(".off-canvas-button").click(function () {
                if($(this).hasClass('off-canvas-open')) {
                    $(this).removeClass('off-canvas-open');
                    $(".design-system-nav-mobile").removeClass("off-canvas-open");
                    $(".off-canvas").removeClass("is-open");
                    $(".off-canvas-content").removeClass("is-open-left").removeClass("has-transition-push").removeClass("has-position-left");
                } else {
                   $(this).addClass('off-canvas-open');
                   $(".design-system-nav-mobile").addClass("off-canvas-open");
                   $(".off-canvas").addClass("is-open");
                   $(".off-canvas-content").addClass("is-open-left").addClass("has-transition-push").addClass("has-position-left");
                }
            });

            $(".js-menu-expand").click(function () {
                var targetLI = $(this).closest("li");
                var targetMenu = $(this).closest(".design-system-menu");
                if (!targetLI.hasClass("menu-open")) {
                    var openMenus = targetMenu.find(".menu-open");
                    if (openMenus.length > 0) {
                        openMenus.find("ul").css('height', '');
                        targetMenu.find(".menu-open").removeClass("menu-open");
                    }
                    var targetUL = targetLI.find("ul");
                    targetUL.css('height', targetUL.prop('scrollHeight'));
                    targetLI.addClass("menu-open");
                } else {
                    targetLI.removeClass("menu-open");
                    targetLI.find("ul").css('height', '');
                }
            });
            $(".js-search-toggle-mobile, .js-search-toggle-desktop").click(function (event) {
                event.stopImmediatePropagation();
                if ($(this).hasClass("js-search-toggle-mobile")) {
                    var targetMenu = $(this).closest(".design-system-nav-mobile").find(".design-system-search-field");
                } else {
                    var targetMenu = $(this).closest(".design-system-nav-col").find(".design-system-search-field");
                }
                if (!targetMenu.hasClass("search-open")) {
                    targetMenu.addClass("search-open").css('height', targetMenu.prop('scrollHeight'));
                    $(this).addClass("selected");
                } else {
                    targetMenu.removeClass("search-open").css('height', "");
                    $(this).removeClass("selected");
                }
                return false;
            });

            $(".off-canvas a").click(function (event) {
                if ($(this).attr("href") !== "javascript:void(0)") {
                    $("#offCanvasBtn").trigger("click");
                    $("html, body").animate({ scrollTop: 0 }, 300);

                }
            });
            $(".design-system-nav-desktop .design-system-menu a").click(function (event) {
                if ($(this).attr("href") !== "javascript:void(0)") {
                    $("html, body").animate({ scrollTop: 0 }, 300);
                }
            });
        });
    }

    render() {
        return (
            <Router>

                <div className="design-system">

                    <div className="design-system-nav-mobile">
                        <div className="row expand design-system-nav-mobile-header">
                            <div className="sm4 columns algn-lft no-side-padding">
                                <a href="javascript:void();" className="button off-canvas-button" data-toggle="offCanvas" id="offCanvasBtn"><img src="/images/design-system/menu.svg" width="30" /></a>
                            </div>
                            <div className="sm4 columns algn-mid no-side-padding"><Link to="/"><img src="/images/design-system/penny.svg" width="56" className="design-system-logo-mobile" /></Link></div>
                            <div className="sm4 columns algn-rght no-side-padding"><a href="javascript:void(0)" className="js-search-toggle-mobile design-system-search-btn"><img src="/images/design-system/search.svg" width="34" /></a></div>
                        </div>
                        <div className="row expand design-system-search-field">
                            <div className="sm12">
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="off-canvas position-left hide-for-large hide-for-xlarge" id="offCanvas" data-off-canvas>
                        {/* <Nav /> */}
                        <RenderNavLink />
                    </div>
                    <div className="off-canvas-content" data-off-canvas-content>

                        <div className="design-system-wrap">
                            <div className="design-system-nav-col design-system-nav-desktop">
                                <div className="design-system-menu-header algn-mid">
                                    <Link to="/"><img src="/images/design-system/penny.svg" width="84" /></Link>
                                    <a href="javascript:void(0)" className="js-search-toggle-desktop design-system-search-desktop-btn"><img src="/images/design-system/search.svg" width="34" /></a>
                                </div>
                                <div className="design-system-search-field">
                                    <input type="text" placeholder="Search" />
                                </div>
                                <RenderNavLink />
                            </div>

                            <Route exact path="/" component={Home} />
                            <Route exact path="/visual-design/buttons" render={() => <DesignSystemPage componentName="Buttons" />} />
                            <Route exact path="/visual-design/color" render={() => <DesignSystemPage componentName="Color" />} />
                            <Route exact path="/visual-design/icons" render={() => <DesignSystemPage componentName="Icons" />} />
                            <Route exact path="/visual-design/grid" render={() => <DesignSystemPage componentName="Grid" />} />
                            <Route exact path="/visual-design/typography" render={() => <DesignSystemPage componentName="Typography" />} />
                            <Route exact path="/work-in-progress" component={WorkInProgress} />

                            <Route exact path="/components/alerts" render={() => <DesignSystemPage componentName="Alerts" />} />
                            <Route exact path="/components/badges" render={() => <DesignSystemPage componentName="Badges" />} />
                            <Route exact path="/components/content-loaders" render={() => <DesignSystemPage componentName="ContentLoaders" />} />
                            <Route exact path="/components/tables" render={() => <DesignSystemPage componentName="Tables" />} />
                            <Route exact path="/components/forms" render={() => <DesignSystemPage componentName="Forms" />} />
                            <Route exact path="/components/dropdown-button" render={() => <DesignSystemPage componentName="DropdownButton" />} />
                            <Route exact path="/components/star-ratings" render={() => <DesignSystemPage componentName="StarRatings" />} />
                            <Route exact path="/components/scrollbar" render={() => <DesignSystemPage componentName="Scrollbar" />} />
                            <Route exact path="/components/wells" render={() => <DesignSystemPage componentName="Wells" />} />
                            <Route exact path="/components/progressbar" render={() => <DesignSystemPage componentName="ProgressBar" />} />
                            <Route exact path="/components/modals" render={() => <DesignSystemPage componentName="Modals" />} />
                            <Route exact path="/components/visual-navigation" render={() => <DesignSystemPage componentName="VisualNavigation" />} />
                            <Route exact path="/components/countdown-timers" render={() => <DesignSystemPage componentName="CountdownTimers" />} />
                            <Route exact path="/components/tooltips" render={() => <DesignSystemPage componentName="Tooltips" />} />
                            <Route exact path="/components/tabs" render={() => <DesignSystemPage componentName="Tabs" />} />
                            <Route exact path="/components/pagination" render={() => <DesignSystemPage componentName="Pagination" />} />
                            <Route exact path="/components/carousels" render={() => <DesignSystemPage componentName="Carousel" />} />
                            <Route exact path="/components/swatches" render={() => <DesignSystemPage componentName="Swatches" />} />
                            <Route exact path="/components/selectors" render={() => <DesignSystemPage componentName="Selectors" />} />
                            <Route exact path="/components/expand-collapse" render={() => <DesignSystemPage componentName="ExpandCollapse" />} />
                            <Route exact path="/components/lists" render={() => <DesignSystemPage componentName="Lists" />} />
                            <Route exact path="/components/pricing" render={() => <DesignSystemPage componentName="Pricing" />} />
                            <Route exact path="/page-modules/header" render={() => <DesignSystemPage componentName="Header" />} />
                            <Route exact path="/page-modules/footer" render={() => <DesignSystemPage componentName="Footer" />} />
                            <Route exact path="/page-modules/footer-minimized" render={() => <DesignSystemPage componentName="FooterMinimized" />} />
                            <Route exact path="/page-modules/bf" render={() => <DesignSystemPage componentName="BF" />} />
                            <Route exact path="/page-modules/bftestone" render={() => <DesignSystemPage componentName="BFTestOne" />} />
                            <Route exact path="/page-modules/bftesttwo" render={() => <DesignSystemPage componentName="BFTestTwo" />} />
                            <Route exact path="/page-modules/bftestthree" render={() => <DesignSystemPage componentName="BFTestThree" />} />
                            <Route exact path="/page-modules/bftestfour" render={() => <DesignSystemPage componentName="BFTestFour" />} />
                            <Route exact path="/page-modules/coupons" render={() => <DesignSystemPage componentName="Coupons" />} />
                            <Route exact path="/page-modules/slide-out-panels" render={() => <DesignSystemPage componentName="SlideOutPanels" />} />
                            <Route exact path="/page-modules/product-cards" render={() => <DesignSystemPage componentName="ProductCards" />} />
                            <Route exact path="/page-modules/filter-sort" render={() => <DesignSystemPage componentName="FilterSort" />} />
                            <Route exact path="/page-modules/like-dislike" render={() => <DesignSystemPage componentName="LikeDislike" />} />
                            <Route exact path="/page-modules/recommendation-zone" render={() => <DesignSystemPage componentName="RecommendationZone" />} />
                            <Route exact path="/page-layouts/pdp" render={() => <DesignSystemPage componentName="Pdp" />} />
                            <Route exact path="/home-page-redesign/styleawithbutton" render={() => <DesignSystemPage componentName="styleAWithButton" />} />
                            <Route exact path="/home-page-redesign/styleawithoutbutton" render={() => <DesignSystemPage componentName="styleAWithoutButton" />} />
                            <Route exact path="/home-page-redesign/styleawithbuttonnocarousal" render={() => <DesignSystemPage componentName="styleAWithButtonNocarousal" />} />
                            <Route exact path="/home-page-redesign/styleawithoutbuttonnocarousal" render={() => <DesignSystemPage componentName="styleAWithoutButtonNocarousal" />} />
                            <Route exact path="/home-page-redesign/stylebleft" render={() => <DesignSystemPage componentName="styleBLeft" />} />
                            <Route exact path="/home-page-redesign/stylebright" render={() => <DesignSystemPage componentName="styleBRight" />} />
                            <Route exact path="/home-page-redesign/stylebcentre" render={() => <DesignSystemPage componentName="styleBCentre" />} />
                            <Route exact path="/home-page-redesign/stylebleftcta" render={() => <DesignSystemPage componentName="styleBLeftCTA" />} />
                            <Route exact path="/home-page-redesign/stylecsinglecta" render={() => <DesignSystemPage componentName="styleCSingleCTA" />} />
                            <Route exact path="/home-page-redesign/stylecmultiplecta" render={() => <DesignSystemPage componentName="styleCMultipleCTA" />} />
                            <Route exact path="/home-page-redesign/styledmultiplecta" render={() => <DesignSystemPage componentName="styleDMultipleCTA" />} />
                            <Route exact path="/home-page-redesign/styledoddmultiplecta" render={() => <DesignSystemPage componentName="styleDOddMultipleCTA" />} />                            
                            <Route exact path="/home-page-redesign/styledsinglecta" render={() => <DesignSystemPage componentName="styleDSingleCTA" />} />
                            <Route exact path="/home-page-redesign/styleemultiplecta" render={() => <DesignSystemPage componentName="styleEMultipleCTA" />} />
                            <Route exact path="/home-page-redesign/styleesinglecta" render={() => <DesignSystemPage componentName="styleESingleCTA" />} />
                            <Route exact path="/home-page-redesign/homepage-layout" render={() => <DesignSystemPage componentName="HomepageLayout" />} />
                        </div>
                    </div>

                </div></Router>

        );
    }
}

export default App;