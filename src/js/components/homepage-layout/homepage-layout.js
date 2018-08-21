import React, { Component } from 'react';
import Header from '../header/header';
import StyleAWithoutButton from '../styleawithoutbutton/styleawithoutbutton';
import StyleBLeft from '../stylebleft/stylebleft';
import StyleCSingleCTA from '../stylecsinglecta/stylecsinglecta';
import StyleCMultiplecta from '../stylecmultiplecta/stylecmultiplecta';
import StyleDMultipleCTA from '../styledmultiplecta/styledmultiplecta';
import  StyleDOddMultipleCTA from'../styledoddmultiplecta/styledoddmultiplecta';
import StyleDSingleCTA from '../styledsinglecta/styledsinglecta';
// import RecommendationZone from '../recommendation-zone/recommendation-zone';
import StyleEMultipleCTA from '../styleemultiplecta/styleemultiplecta'
import Footer from '../footer/footer';


class HomepageLayout extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Header />
                <div class="stylea-banner">
                    <StyleAWithoutButton />
                </div>
                <div class="home-container">
                    <div class="lg12 xl12 styleb-banner">
                        <StyleBLeft />
                    </div>
                    <div class="stylec-banner mrg-L mrg-S-at-XS mrg-M-at-M">
                        <div class="sm12 lg6 xl6 xxl6 mrg-XL-m stylec-left-aligned">
                            <StyleCSingleCTA />
                        </div>
                        <div class="sm12 lg6 xl6 xxl6 stylec-right-aligned">
                            <StyleCMultiplecta />
                        </div>
                    </div>
                    <div class="styled-banner mrg-L mrg-M-at-M mrg-S-at-XS">
                        <div class="sm12 lg4 xl4 xxl4 nopad-sm">
                            <StyleDMultipleCTA />
                        </div>
                        <div class="sm12 lg4 xl4 xxl4 mrg-XXS-at-M nopad-sm">
                            <StyleDSingleCTA />
                        </div>
                        <div class="sm12 lg4 xl4 xxl4 mrg-XXS-at-M nopad-sm">
                            <StyleDMultipleCTA />
                        </div>
                    </div>
                    {/* <RecommendationZone /> */}
                    <div class="lg12 xl12 xxl12 stylee-banner mrg-M mrg-XS-at-M mrg-S-at-XS">
                        <StyleEMultipleCTA />
                    </div>
                </div>
                <div class="lg12 xl12 xxl12 mrg-S mrg-M-at-M mrg-S-at-XS">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomepageLayout;