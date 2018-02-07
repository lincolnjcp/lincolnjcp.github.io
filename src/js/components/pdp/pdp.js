import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class Pdp extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="row">
                    <Header />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Pdp;