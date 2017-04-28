import React from 'react';
import { Component } from 'react';
import Navigation from '../containers/navigation/Navigation'

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Navigation/>
            </div>
        );
    }
}
