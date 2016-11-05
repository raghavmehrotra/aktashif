import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Hub from './components/Hub.jsx';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/:hubName" component={Hub}></Route>
  </Router>), document.getElementById('content')
);

//
