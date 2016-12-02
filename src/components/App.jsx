import React from 'react';
import { Link } from 'react-router';
import HubGrid from './hubGrid.jsx'
import Header from './header.jsx'

const App = React.createClass({
  
  render: function() {
    const style = {
      "maxHeight": screen.height
    }

    return (
      <div style={style}>
        <div className = "contact-us">!تواصل معنا</div>
        <Header user="user" />
        <HubGrid />
      </div>
    )
  }
})


App.propTypes = { children: React.PropTypes.object };

export default App;
