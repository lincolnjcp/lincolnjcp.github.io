import React, { Component } from 'react';
import Header from '../header/header';
import StyleAWithoutButton from '../styleawithoutbutton/styleawithoutbutton';
import StyleBLeft from '../stylebleft/stylebleft';
import StyleCSingleCTA from '../stylecsinglecta/stylecsinglecta';
import StyleCMultiplecta from '../stylecmultiplecta/stylecmultiplecta';
import StyleDMultipleCTA from '../styledmultiplecta/styledmultiplecta';
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
                    <div class="stylec-banner mrgn-L mrgn-M-at-M mrgn-S-at-XS">
                        <div class="sm12 lg6 xl6 xxl6 mrg-XL-m stylec-left-aligned">
                            <StyleCSingleCTA />
                        </div>
                        <div class="sm12 lg6 xl6 xxl6 stylec-right-aligned">
                            <StyleCMultiplecta />
                        </div>
                    </div>
                    <div class="styled-banner mrgn-L mrgn-M-at-M mrgn-S-at-XS">
                        <div class="sm12 lg4 xl4 xxl4">
                            <StyleDMultipleCTA />
                        </div>
                        <div class="sm12 lg4 xl4 xxl4 mrgn-XXS-at-M">
                            <StyleDSingleCTA />
                        </div>
                        <div class="sm12 lg4 xl4 xxl4 mrgn-XXS-at-M">
                            <StyleDMultipleCTA />
                        </div>
                    </div>
                    {/* <RecommendationZone /> */}
                    <div class="lg12 xl12 xxl12 stylee-banner mrgn-M mrgn-XS-at-M mrgn-S-at-XS">
                        <StyleEMultipleCTA />
                    </div>
                </div>
                <div class="lg12 xl12 xxl12 mrgn-S mrgn-M-at-M mrgn-S-at-XS">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomepageLayout;