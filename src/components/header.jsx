import React from 'react'
import {Link} from 'react-router'

const Header = React.createClass({

  render: function() {
    return (
      <header>
          <Link to="/" className="persistent-header">
            <h1>Aktashif | أكتشف</h1>
          </Link>
      </header>
    )
  }
})

export default Header
