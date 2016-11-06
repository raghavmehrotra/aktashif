import React from 'react'
import {Link} from 'react-router'

const Header = React.createClass({
    
renderHubIcon: function(imageName) {
    const source = "src/images/" + imageName + ".png"
    return (
        <Link to={"/"+this.props.hub}> <img className="header-hub-icon" src={source}/> </Link>
    )
},

render: function() {
    var hubIcon =<div/>
    if (!!this.props.hub) hubIcon = this.renderHubIcon(this.props.hub)
    return (
      <header>
            <Link to="/" className="persistent-header">
                <h1>Aktashif | أكتشف</h1>
            </Link>
            <div className="header-hub-icon-container">{hubIcon}</div>       
      </header>
    )}

})

export default Header
