import React, { Component } from 'react';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import { fetchPosts } from '../../actions/posts/actions_posts';
import { Link } from 'react-router';
import { POSTS_NEW, POSTS_SHOW } from '../../routes';
import { config } from '../../config';
import {injectIntl} from 'react-intl';
import translator from '../../utils/translator';
class PostsIndex extends Component {

    componentWillMount() {
		
        this.props.fetchPosts();
		
    }

    renderPosts() {
        if(this.props.posts) {
            return this.props.posts.map((post) => {
                return (
                    <li className="list-group-item" key={post._id}>
                        <Link to={POSTS_SHOW + post._id}>
                            <span className="pull-xs-right">{post.categories}</span>
                            <strong>{post.title}</strong>
                        </Link>
                    </li>
                );
            });
        }
        else if (this.props.message) {
            return (<div>{this.props.message}</div>);
        }

        else {
            return <div></div>
        }
    }

    handleWS(data) {
        this.props.fetchPosts();
    }


    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to={POSTS_NEW} className="btn btn-primary" >
                        {translator(this.props.intl,"addPost")}
                    </Link>
                </div>
                <h3>{translator(this.props.intl,"postsTitle")}</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            posts: state.posts.get('all'),
            message: state.posts.get('message')
        }
    },
    {
        fetchPosts
    }
)(injectIntl(PostsIndex));