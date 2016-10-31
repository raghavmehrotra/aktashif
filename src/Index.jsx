import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Hub from './components/Hub.jsx';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/:name" component={Hub}></Route>
  </Router>), document.getElementById('content')
);

//
