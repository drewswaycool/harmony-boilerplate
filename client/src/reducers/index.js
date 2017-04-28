import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import register from './register/reducer_register';
import login from './login/reducer_login';
import PostReducer from './posts/reducer_posts';

const rootReducer = combineReducers({
    register: register,
    login: login,
    posts: PostReducer,
    form: formReducer
});

export default rootReducer;
