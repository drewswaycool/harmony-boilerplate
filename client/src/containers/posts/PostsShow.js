import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as actions from '../../actions/posts/actions_posts';

class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id);
    }

    render () {
        const { post } = this.props;
        if (!post) {
            return <div>Loading..</div>
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

    componentDidUpdate() {
        if(this.props.navigateTo) {
            this.props.initializePosts();
            browserHistory.push(this.props.navigateTo);
        }
    }
}

export default connect(
    (state) => {
        return {
            post: state.posts.get('post'),
            navigateTo: state.posts.get('navigateTo')
        }
    },
    {
        initializePosts: actions.initializePosts,
        fetchPost: actions.fetchPost,
        deletePost: actions.deletePost
    }
)(PostsShow);