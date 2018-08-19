import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import ConnectedIntlProvider from '../src/base/features/harmony-i18n/IntlProvider';
import {
  HashRouter,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

global.document = jsdom.jsdom('<!doctype html><html><body><div id="root"></div></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function getWrapper(ComponentClass, props = {}, state = {}) {
  const wrapper = mount(
    <Provider store={createStore(reducers, {})}>
      <ConnectedIntlProvider>
        <ComponentClass />
      </ConnectedIntlProvider>
    </Provider>
  );
  return wrapper;
}
function getRouteWrapper(ComponentClass, props = {}, state = {}) {
  const wrapper = mount(
    <Provider store={createStore(reducers, {})}>
      <ConnectedIntlProvider>
        <MemoryRouter initialEntries={['/']}>
          <ComponentClass />
        </MemoryRouter>
      </ConnectedIntlProvider>
    </Provider>
  );
  return wrapper;
}
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { getRouteWrapper, getWrapper, expect, $ };
