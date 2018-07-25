import React, { Component } from 'react';
import Header from '../header/header';
import StyleAWithoutButton from '../styleawithoutbutton/styleawithoutbutton';
import StyleBLeft from '../stylebleft/stylebleft';
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
                <div class="home-container">
                    <div class="lg12 xl12 xxl12">
                        <StyleAWithoutButton />
                    </div>
                    <div class="lg12 xl12 xxl12">
                        <StyleBLeft />
                    </div>
                    <div class="lg6 xl6 xxl6">
                        <StyleCMultiplecta />
                    </div>
                    <div class="lg6 xl6 xxl6">
                        <StyleCMultiplecta />
                    </div>
                    <div class="lg4 xl4 xxl4">
                        <StyleDMultipleCTA />
                    </div>
                    <div class="lg4 xl4 xxl4">
                        <StyleDSingleCTA />
                    </div>
                    <div class="lg4 xl4 xxl4">
                        <StyleDMultipleCTA />
                    </div>
                    {/* <RecommendationZone /> */}
                    <div class="lg12 xl12 xxl12">
                        <StyleEMultipleCTA />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomepageLayout;