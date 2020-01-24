import React, { Component } from 'react';
import Body from './body/Body';
import Footer from './footer/Footer';
import './home.css';




class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Home
