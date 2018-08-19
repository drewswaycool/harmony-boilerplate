import { expect, $, getWrapper, getRouteWrapper } from '../test_helper';
import App from '../../src/components/app';
import Localization from '../../src/containers/localization/Localization';
import Login from '../../src/containers/user/Login';
import Register from '../../src/containers/user/Register';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import PostsIndex from '../../src/containers/posts/PostsIndex';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';


describe('App defined', function () {


    /*it('Localization has local class', () => {
        let wrapper = getWrapper(Localization);
        expect(wrapper.find('div').hasClass("locale")).to.be.true;
    });
    it('Should App Contains Localization', () => {
        let wrapper = getRouteWrapper(App);
        expect(wrapper.find(PostsIndex)).to.have.length(0);
        expect(wrapper.find(Localization)).to.have.length(1);
    });
    it('Should Register Not Add New User', () => {
        let wrapper = getRouteWrapper(Register);
        wrapper.find('form').simulate('submit');
        expect(wrapper.find('.error-label').at(0)).to.have.length(1);
    });*/
});
