import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation/reducer_navigation';
import user from './user/reducer_user';
import posts from './posts/reducer_posts';
import i18n from './i18n/reducer_i18n';

const rootReducer = combineReducers({
    form		: form,
    navigation  : navigation,
    user		: user,
    posts		: posts,
	i18n		: i18n
});

export default rootReducer;
