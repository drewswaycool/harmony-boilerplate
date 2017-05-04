import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

export function connectWithReduxForm (component, mapStateToProps, mapDispatchToProps, reduxFormConfig) {
    return connect(mapStateToProps, mapDispatchToProps)(injectIntl(reduxForm(reduxFormConfig)(component)));
}

export function createField(component, requiredProps) {

    class CreateField extends Component {
        render() {
            const input = this.props;

            return (
                <Field
                    component={component}
                    {...this.props}
                    {...input}
                />
            )
        }
    }


    CreateField.propTypes = requiredProps;

    return CreateField;
}