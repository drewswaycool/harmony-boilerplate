import React, { Component } from 'react';
import { harmonyConnect } from '../harmony-redux-react-connect';
import { changeLocale } from '../harmony-i18n/actions/actions_i18n';

class Localization extends Component {

    render () {
        return (
            <div style={{width:'100%',padding:'10px',textAlign:'center'}}>
                Language:&nbsp;&nbsp;
                <select onChange={this.onSelect.bind(this)}>
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                </select>
            </div>
        );
    }

    onSelect(event) {
        this.props.changeLocale(event.target.value);
    }
}

export default harmonyConnect(Localization,
    (state) => {
        return {

        }
    },
    {
        changeLocale: changeLocale
    }
);