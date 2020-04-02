import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import reducers from './store/reducers';

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk,logger)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


