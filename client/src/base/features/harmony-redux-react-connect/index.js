import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import translator from '../../utils/translator';
import { connectWithReduxForm } from '../harmony-redux-form-field';

export function harmonyConnect(component, mapStateToProps, propsToDispatch) {
    return connect(mapStateToProps, propsToDispatch)(injectIntl(translator(component)));
}

export function harmonyConnectForm(component, mapStateToProps, propsToDispatch, formConfig) {
    return connectWithReduxForm(translator(component), mapStateToProps, propsToDispatch, formConfig);
}

