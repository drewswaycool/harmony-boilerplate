import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from '../base/features/harmony-navigation/reducers/reducer_navigation';
import user from '../base/features/harmony-user/reducers/reducer_user';
import posts from './posts/reducer_posts';
import i18n from '../base/features/harmony-i18n/reducers/reducer_i18n';

const rootReducer = combineReducers({
    posts		: posts,

    i18n		: i18n,
    navigation  : navigation,
    user		: user,
    form		: form,
});

export default rootReducer;
