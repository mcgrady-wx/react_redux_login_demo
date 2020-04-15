import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import ShopPage from './components/shop/ShopPage';
import IndexPage from './components/IndexPage'
import Nav from './components/Nav'
import FlashMessagesList from './components/falsh/FlashMessagesList'
import requireAuth from "./utils/requireAuth" //高阶组件实现页面访问许可


function App() {
  return (
     	<Router>
     		<Nav/>
     		<FlashMessagesList />
     		<div className="container">
     			<Switch>
			      <Route exact path="/" component={ IndexPage }></Route>
			      <Route path="/signup" component={ SignupPage }></Route>
			      <Route path="/login" component={ LoginPage }></Route>
			      <Route path="/shop" component={ requireAuth(ShopPage) }></Route>
					</Switch>
				</div>
     	</Router>
  );
}

export default App;
