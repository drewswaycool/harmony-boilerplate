import React, { Component } from 'react';
import { harmonyConnectForm } from '../../base/features/harmony-redux-react-connect';
import * as actions from '../../actions/posts/actions_posts';

import { Link } from 'react-router';
import { PORTAL } from '../../routes';

import { Cor_Input, Cor_Textarea } from '../../components/core';

class PostsNew extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h3>Create A New Post</h3>

                <Cor_Input name="title" type="text" label="Title" />
                <Cor_Input name="categories" type="text" label="Categories" />
                <Cor_Textarea name="content" label="Content" />

                {this.props.message || ""}
                <br/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={PORTAL} className="btn btn-danger">Cancel</Link>

            </form>
        );

    }

    handleSubmit(props) {
        this.props.createPost(props);
    }

    validate(values) {
        const errors = {};

        if (!values.title) {
            errors.title = 'Enter a title';
        }

        if (!values.categories) {
            errors.categories = 'Enter categories';
        }

        if (!values.content) {
            errors.content = 'Enter some content';
        }

        return errors;
    }
}


export default harmonyConnectForm(PostsNew,
    (state) => {
        return {
            message: state.posts.get('message')
        }
    },
    {
        createPost: actions.createPost,
        initializePosts: actions.initializePosts
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content']
    }
);