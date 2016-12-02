import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

const Header = React.createClass({

renderHubIcon: function(imageName) {
    const source = "src/images/hub-icons/" + imageName + ".png"
    return (
        <Link to={"/"+this.props.hub}> <img className="header-hub-icon" src={source}/> </Link>
    )
},
  
renderProfileImage: function() {
    const source = "src/images/" + data.getUser().image
    return (
      <Link to={"/profile"}> <img className="header-profile-image" src={source}/> </Link>
    )
},

render: function() {
    var hubIcon = <div/>
    if (!!this.props.hub) hubIcon = this.renderHubIcon(this.props.hub)
    return (
      <header className="persistent-header-container">
            <div className="header-profile-image-container">{this.renderProfileImage()}</div>
            <Link to="/" className="persistent-header-text">
                <h1>أكتشف</h1>
            </Link>
            <div className="header-hub-icon-container">{hubIcon}</div>
      </header>
    )}

})

export default Header
