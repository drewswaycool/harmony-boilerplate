import React from 'react';
import { Component } from 'react';
import Navigation from '../containers/navigation/Navigation';
import Localization from '../containers/localization/Localization';


export default class App extends Component {
    render() {
        return (
            <div>
                <Localization/>
                {this.props.children}
                <Navigation/>
            </div>
        );
    }
}
