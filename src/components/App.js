import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Aktashif</h1>
      <Link to="/about">About</Link>
      <Link to="/hubs">Hubs</Link>
    </header>
    <section>
      {children || 'Welcome to Aktashif'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
