import React, { Component } from 'react';
import { connect } from 'react-redux';
import {injectIntl} from 'react-intl';
import translator from '../../utils/translator';

class Localization extends Component {

    render () {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">language
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">en</a></li>
                    <li><a href="#">fr</a></li>
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {

        }
    },
    {

    }
)(injectIntl(Localization));