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
                    <div class="lg12 xl12 stylea-banner">
                        <StyleAWithoutButton />
                    </div>
                    <div class="lg12 xl12 styleb-banner">
                        <StyleBLeft />
                    </div>
                    <div class="lg6 xl6 xxl6 stylec-banner">
                        <StyleCMultiplecta />
                    </div>
                    <div class="lg6 xl6 xxl6 stylec-banner">
                        <StyleCMultiplecta />
                    </div>
                    <div class="lg4 xl4 xxl4 styled-banner">
                        <StyleDMultipleCTA />
                    </div>
                    <div class="lg4 xl4 xxl4 styled-banner">
                        <StyleDSingleCTA />
                    </div>
                    <div class="lg4 xl4 xxl4 styled-banner">
                        <StyleDMultipleCTA />
                    </div>
                    {/* <RecommendationZone /> */}
                    <div class="lg12 xl12 xxl12 stylee-banner">
                        <StyleEMultipleCTA />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomepageLayout;