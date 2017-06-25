// //main.js
// import React from 'react';
// import ReactDom from 'react-dom';
// import { Router, Route, IndexRoute, Redirect } from 'react-router';
// import { createBrowserHistory } from 'history';
// import Component1 from './components/Component';

// // 配置路由，并将路由注入到id为init的DOM元素中
// const history = createBrowserHistory();

// ReactDom.render(
// 	<Router history={history} >
// 			<Route path='/' component={Component1} />
// 	</Router>,
// 	document.getElementById('content')
// )

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import App from './container/App/app';

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)

const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

const Inbox = ({ match }) => {
	console.log(match);
	console.log();
	return <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>
  </div>
} 

ReactDOM.render(
  (<BrowserRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
    </App>
  </BrowserRouter>),
  document.getElementById('content')
);
