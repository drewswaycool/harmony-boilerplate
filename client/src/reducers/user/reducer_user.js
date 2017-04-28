import { fromJS } from 'immutable';
import * as ActionTypes from '../../actions';

const INITIAL_STATE = fromJS({
    details: null,
    registerError: ''
});

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {

        case ActionTypes.LOGIN:
            return state.set('navTo', action.details);

        case ActionTypes.CREATE_USER_ERROR:
            return state.set('registerError', action.response);

        default:
            return state;

    }
}
