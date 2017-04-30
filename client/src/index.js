import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import routes from './routes';
import rootSaga from './sagas';
import WSAction from './utils/redux-websocket-action';
import { config } from './config';

const sagaMiddleware = createSagaMiddleware();

/* -------- create the store with middleware ---------- */
const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware
)(createStore);
 
const store = createStoreWithMiddleware(reducers);

/* -------- run root saga ---------- */
sagaMiddleware.run(rootSaga);

/* -------- turn on WS actions ---------- */
const wsAction = new WSAction(store, config.ROOT_WS_URL, {
    retryCount:3,
    reconnectInterval: 3
});

wsAction.start();

/* -------- render application ---------- */
ReactDOM.render(
  <Provider store={store}>
          <Router history={browserHistory} >
              {routes}
          </Router>
  </Provider>
  , document.querySelector('.container'));
