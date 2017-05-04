import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_navigation';
import { browserHistory } from 'react-router';

class Navigation extends Component {

    render () {return (<div></div>);}

    componentDidUpdate() {
        if(this.props.navTo) {
            const navigateTo = this.props.navTo;
            this.props.resetNavigateTo();
            browserHistory.push(navigateTo);
        }
    }
}

export default connect(
    (state) => {
        return {
            navTo: state.navigation.get('navTo')
        }
    },
    {
        resetNavigateTo: actions.resetNavigateTo
    }
)(Navigation);