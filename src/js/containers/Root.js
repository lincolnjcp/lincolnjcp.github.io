import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import DesignSystemPage from '../containers/DesignSystemPage';
import WorkInProgress from '../components/work-in-progress';

import $ from 'jquery'
import 'foundation-sites';
import 'what-input';

const Home = () => (
    <div className="design-system-inner-content">
    <div className="row">
        <div className="small-12 columns">
            <h1>Home</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mattis orci. Nunc et ullamcorper quam, id dignissim lacus. </h2>
        </div>
    </div>
</div>
)

const Nav = () =>
    <ul className="design-system-menu">
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Visual Design</a>
                        <ul> 
                            <li><NavLink to="/visual-design/buttons" activeClassName="active">Buttons</NavLink></li>
                            <li><NavLink to="/visual-design/color" activeClassName="active">Color</NavLink></li>
                            <li><NavLink to="/visual-design/icons" activeClassName="active">Icons</NavLink></li>
                            <li><NavLink to="/visual-design/grid" activeClassName="active">Grid</NavLink></li>
                            <li><NavLink to="/visual-design/typography" activeClassName="active">Typography</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Branding</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Imagery</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Motion</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Patterns</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Components</a>
                        <ul>
                            <li><NavLink to="/components/alerts" activeClassName="active">Alerts</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Apply Coupons</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Back to Top</NavLink></li>
                            <li><NavLink to="/components/badges" activeClassName="active">Badges</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Breadcrumbs</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Carousels</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Color &amp; Image Swatches</NavLink></li>
                            <li><NavLink to="/components/content-loaders" activeClassName="active">Content Loaders</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Countdown Timers</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Discount &amp; Savings</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Expand/Collapse</NavLink></li>
                            <li><NavLink to="/components/forms" activeClassName="active">Forms</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Pagination</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Pricing</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Progress Bar</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Selectors</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Star Ratings</NavLink></li>
                            <li><NavLink to="/components/tables" activeClassName="active">Tables</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Tabs</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Tooltips</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Video Player</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Visual Navigation</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Heroes</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Page Modules</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">Coupon List</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Coupons</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Find a Store</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Footer</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Header</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Lists</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Mini PDP/Quick Add </NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Product Cards (Gallery/Rec Row/Cart)</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Promo/Marketing Cards</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Recommendation Zones</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Filter &amp; Sorting</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Like/Dislike Messages</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Modals</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Slide Out Panels</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Sticky Elements</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Page Layouts</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">Cart</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Category Pages</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Checkout</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Coupons</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Gallery Pages</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Homepage</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Lists</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Marketing Pages</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">My Account</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">PDPs</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Rewards</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Search Pages</NavLink></li>
                            <li><NavLink to="/" activeClassName="active">Sign In</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Accessibility</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">TBD</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">UX Research</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">TBD</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">A/B Testing</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">TBD</NavLink></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" className="icn-expand js-menu-expand">Foresee</a>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">TBD</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li><NavLink to="/work-in-progress" activeClassName="active">Work In Progress</NavLink></li>
                    <li><NavLink to="/" activeClassName="active">Questions? <br /> Send us an email</NavLink></li>
                </ul>;

class App extends React.Component {

    componentDidMount() {

        $(document).foundation();

        $( document ).ready(function() {
            
            $(".off-canvas").on("opened.zf.offcanvas", function(e) {
                $(".design-system-nav-mobile").addClass("off-canvas-open");
            });
            $(".off-canvas").on("closed.zf.offcanvas", function(e) {
                $(".design-system-nav-mobile").removeClass("off-canvas-open");
            });
            $(".js-menu-expand").click(function(){
                var targetLI = $(this).closest("li");
                var targetMenu = $(this).closest(".design-system-menu");
                if(!targetLI.hasClass("menu-open")){
                    var openMenus = targetMenu.find(".menu-open");
                    if(openMenus.length > 0) {
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
            $(".js-search-toggle-mobile, .js-search-toggle-desktop").click(function(event){
                event.stopImmediatePropagation();
                if($(this).hasClass("js-search-toggle-mobile")){
                    var targetMenu = $(this).closest(".design-system-nav-mobile").find(".design-system-search-field");
                } else {
                    var targetMenu = $(this).closest(".design-system-nav-col").find(".design-system-search-field");
                }
                if(!targetMenu.hasClass("search-open")){
                    targetMenu.addClass("search-open").css('height', targetMenu.prop('scrollHeight'));
                    $(this).addClass("selected");
                } else {
                    targetMenu.removeClass("search-open").css('height', "");
                    $(this).removeClass("selected");
                }
                return false;
            });

            $(".off-canvas a").click(function(event) { 
                if($(this).attr("href") !== "javascript:void(0)"){
                    $("#offCanvasBtn").trigger("click");
                     $("html, body").animate({ scrollTop: 0 }, 300);

                }
            });
            $(".design-system-nav-desktop .design-system-menu a").click(function(event) { 
                if($(this).attr("href") !== "javascript:void(0)"){
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
                <div className="small-4 columns algn-lft no-side-padding">
                    <a href="javascript:void();" className="button off-canvas-button" data-toggle="offCanvas" id="offCanvasBtn"><img src="/images/design-system/menu.svg" width="30" /></a>
                </div>
                <div className="small-4 columns algn-mid no-side-padding"><Link to="/"><img src="/images/design-system/penny.svg" width="56" className="design-system-logo-mobile" /></Link></div>
                <div className="small-4 columns algn-rght no-side-padding"><a href="javascript:void(0)" className="js-search-toggle-mobile design-system-search-btn"><img src="/images/design-system/search.svg" width="34" /></a></div>
            </div>
            <div className="row expand design-system-search-field">
                <div className="small-12">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    <div className="off-canvas position-left hide-for-large hide-for-xlarge" id="offCanvas" data-off-canvas>
        <Nav />
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
                <Nav />
            </div>

            <Route exact path="/" component={Home}/>
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
        </div>
    </div>
    
    </div></Router>
    
    );
  }
}

export default App;