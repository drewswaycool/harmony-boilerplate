import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../../actions';
import { PORTAL } from '../../routes';

export function* fetchPosts(api) {

    try {
        const response = yield call(api.fetchPosts);

        if (response.data && response.data.length > 0) {
            yield put({type: ActionTypes.FETCH_POSTS_SUCCESS, posts: response.data});
        }

        else {
            yield put({type: ActionTypes.FETCH_POSTS_SUCCESS, message: response.data.message});
        }
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POSTS_ERROR, errorMessage: e});
    }

}

export function* fetchPost(api, action) {

    try {
        const response = yield call(api.fetchPost, action.payload);
        yield put({type: ActionTypes.FETCH_POST_SUCCESS, post: response.data[0]});
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POST_ERROR, errorMessage: e});
    }

}

export function* createPost(api, action) {

    try {
        // const response = yield call(api.createPost, action.payload);
        const response = yield call(api.createPostWithWS, action.payload);

        if (response.data.message === "Resource created") {
            yield put({type: ActionTypes.NAVIGATE_TO, path: PORTAL});
        }
        else {
            yield put({type: ActionTypes.CREATE_POST_ERROR, message: response.data.message});
        }
    } catch (e) {
        yield put({type: ActionTypes.CREATE_POST_ERROR, message: e});
    }

}

export function* deletePost(api, action) {

    try {
        yield call(api.deletePost, action.payload);
        yield put({type: ActionTypes.NAVIGATE_TO, path: PORTAL});
    } catch (e) {
        yield put({type: ActionTypes.DELETE_POST_ERROR, null});
    }

}