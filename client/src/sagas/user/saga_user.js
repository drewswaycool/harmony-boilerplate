import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../../actions';
import { ROOT } from '../../routes';

export function* login(api, action) {

    try {
        const response = yield call(api.login, action.payload);
        yield put({type: ActionTypes.LOGIN_SUCCESS, details: response});
    } catch (e) {
        yield put({type: ActionTypes.LOGIN_ERROR, response: e});
    }

}

export function* createUser(api, action) {

    try {
        yield call(api.createUser, action.payload);
        yield put({type: ActionTypes.NAVIGATE_TO, path: ROOT});
    } catch (e) {
        yield put({type: ActionTypes.CREATE_USER_ERROR, response: e.data.message});
    }

}
