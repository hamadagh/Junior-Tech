import React, { Component } from 'react';
import InputGroup from './headerComponents/inputGroup/InputGroup';
import Title from './headerComponents/title/Title';
import './body.css';

import './body.css';
export class Body extends Component {
    render() {
        return (
            <div className="home-body">
                <Title />
                <InputGroup />
            </div>
        )
    }
}

export default Body
