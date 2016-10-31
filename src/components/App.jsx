import React from 'react';
import { Link } from 'react-router';
import HubGrid from './hubGrid.jsx'

const App = React.createClass({

  render: function() {
    const style = {
      "maxHeight": screen.height
    }

    return (
      <div style={style}>
        <header>
            <Link to="/" className="persistent-header">
              <h1>Aktashif | أكتشف</h1>
            </Link>
        </header>
        <HubGrid />
      </div>
    )
  }
})


App.propTypes = { children: React.PropTypes.object };

export default App;
