import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigation from './navigation/reducer_navigation';
import user from './user/reducer_user';
import posts from './posts/reducer_posts';

const rootReducer = combineReducers({
    form: form,
    navigation: navigation,
    user: user,
    posts: posts
});

export default rootReducer;
