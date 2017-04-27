/**
 * Here you add all the apis urls defenition
 */

import request from './requests';


export const REDUXBLOG_ROOT_URL = 'http://localhost:8080/api';

export default (baseURL = REDUXBLOG_ROOT_URL) => {

    return {

        fetchPosts: () => {
            return request({
                method: 'get',
                baseURL: baseURL,
                url: '/posts'
            });
        },


        fetchPost: (id) => {
            return request({
                method: 'get',
                baseURL: baseURL,
                url: '/posts/' + id
            });
        },

        createPost: (data) => {
            return request({
                method: 'post',
                baseURL: baseURL,
                url: '/posts',
                data: data
            });
        },

        deletePost: (id) => {
            return request({
                method: 'delete',
                baseURL: baseURL,
                url: '/posts/' + id
            });
        }

    }

};