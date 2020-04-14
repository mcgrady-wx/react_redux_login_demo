import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import reducers from './store/reducers';

import setAuthorizationToken from "./utils/setAuthorizationToken"
import jwtDecode from "jwt-decode"//编译jwt数据
import {setCurrentUser} from "./store/actions/login"

const store=createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)))

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken)//设置axios请求头
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))//把jwt数据添加到redux
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


