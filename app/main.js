//main.js
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import Component1 from './components/Component';

// 配置路由，并将路由注入到id为init的DOM元素中
const history = createBrowserHistory();

ReactDom.render(
	<Router history={history} >
			<Route path='/' component={Component1} />
	</Router>,
	document.getElementById('content')
)
