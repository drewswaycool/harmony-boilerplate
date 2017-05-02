import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import translator from '../../utils/translator';
import { changeLocale } from '../../actions/i18n/actions_i18n';

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

export default connect(
    (state) => {
        return {

        }
    },
    {
        changeLocale: changeLocale
    }
)(injectIntl(Localization));