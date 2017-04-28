import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* -------------- Components --------------- */
import App from './components/app';
import PostsIndex from './containers/posts/PostsIndex';
import PostsNew from './containers/posts/PostsNew';
import PostsShow from './containers/posts/PostsShow';
import Login from './containers/login/Login';
import Register from './containers/register/Register';

/* -------------- Routes Paths --------------- */
export const ROOT = "/";
export const REGISTER = "/register";
export const PORTAL = "/portal";
export const POSTS_NEW = "posts/new";
export const POSTS_SHOW = "posts/";

export default (
    <Route path={ROOT} component={App} >
        <IndexRoute component={Login} />
        <Route path={REGISTER} component={Register} />
        <Route path={PORTAL} component={PostsIndex} />
        <Route path={POSTS_NEW} component={PostsNew} />
        <Route path={POSTS_SHOW + ":id"} component={PostsShow} />
    </Route>
);



