import { fromJS } from 'immutable';
import * as ActionTypes from '../../../../actions';

const INITIAL_STATE = fromJS({
    navTo: null
});

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {

        case ActionTypes.NAVIGATE_TO:
            return state.set('navTo', action.path);

        case ActionTypes.RESET_NAVIGATE_TO:
            return state.set('navTo', null);

        default:
            return state;

    }
}
