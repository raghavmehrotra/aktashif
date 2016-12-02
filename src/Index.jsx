import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Hub from './components/Hub.jsx';
import Cluster from './components/Cluster.jsx';
import Book from './components/Book.jsx';
import Login from './components/facebookLogin.jsx'

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/:hubName" component={Hub}/>
    <Route path="/:hubName/:clusterName" component={Cluster}/>
    <Route path="/:hubName/:clusterName/:bookName" component={Book}/>
  </Router>), document.getElementById('content')
);
