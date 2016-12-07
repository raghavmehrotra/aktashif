import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Hub from './components/Hub.jsx';
import Cluster from './components/Cluster.jsx';
import Book from './components/Book.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/facebookLogin.jsx';
import HubGrid from './components/hubGrid.jsx';
import Register from './components/Register.jsx';
window.React = React;

render(
  (<Router history={hashHistory}>
    <Route component={App}>
        <Route path ="/" component={HubGrid} />
        <Route path="/profile/:userId" component={Profile}/>
        <Route path="/register/:userId" component={Register}/>
        <Route path="/:hubName">
				<IndexRoute component={Hub}/>
				<Route path=":clusterName">
					<IndexRoute component={Cluster}/>
					<Route path=":bookName" component={Book}/>
				</Route>
			</Route>
		</Route>
  </Router>), document.getElementById('content')
);
