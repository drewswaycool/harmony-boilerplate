/**
 * Here you add all the apis urls defenition
 */

import request from './requests';
import { config } from '../config';

export default (baseURL = config.ROOT_SERVRE_URL) => {

    return {

        login: (data) => {
            return request({
                method: 'post',
                baseURL: baseURL,
                url: 'users/login',
                data: data
            });
        },

        createUser: (data) => {
            return request({
                method: 'post',
                baseURL: baseURL,
                url: '/users',
                data: data
            });
        },

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