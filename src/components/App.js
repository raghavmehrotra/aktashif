import React from 'react';
import { Link } from 'react-router';
import HubGrid from './hubGrid.jsx'

const App = ({ children }) => (
  <div>
    <header>
      <center>
        <Link to="/" className="persistent-header">
          <h1>Aktashif | أكتشف</h1>
        </Link>
      </center>
    </header>
    <section>
      <HubGrid />
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
