import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Hubs from './components/Hubs.jsx'

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/hubs" component={Hubs} />
    </Route>
  </Router>), document.getElementById('content')
);

//
