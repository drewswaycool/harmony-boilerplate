import { renderComponent , expect, $ } from '../test_helper';
import App from '../../src/components/app';
import React from 'react';

describe('App defined', function () {
    it('should be rendered', function () {
        let component = renderComponent(App);
        expect(component).to.be.defined;
    });
});
