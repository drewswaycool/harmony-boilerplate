import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../../actions';
import { ROOT, PORTAL } from '../../routes';
import { setAuthToken } from '../../api/requests';

export function* login(api, action) {

    try {
        const response = yield call(api.login, action.payload);
        let AUTH_TOKEN = response.headers["x-auth"];

        if (AUTH_TOKEN) {
            response.data.Authorization = AUTH_TOKEN;
            setAuthToken(AUTH_TOKEN);

            yield put({type: ActionTypes.LOGIN_SUCCESS, details: response.data});
            yield put({type: ActionTypes.NAVIGATE_TO, path: PORTAL});
        }

        else {
            yield put({type: ActionTypes.LOGIN_ERROR, loginError: response.data.message});
        }

    } catch (e) {
        yield put({type: ActionTypes.LOGIN_ERROR, loginError: e});
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
