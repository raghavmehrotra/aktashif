import React from 'react'
import {Link} from 'react-router'
import Login from './facebookLogin.jsx'
import * as data from '../accessAllData.jsx'

const Header = React.createClass({

	getInitialState: function() {
    return {
			token: -1,
			userName: ""
    }
	},

renderHubIcon: function(imageName) {
    const source = "src/images/hub-icons/" + imageName + ".png"
    return (
        <Link to={"/"+this.props.hub}> <img className="header-hub-icon" src={source}/> </Link>
    )
},

	getUserId: function(token) {
		this.setState({token: token, userName: ""})

	},

	getUserName: function() {
    var that = this
		var userData = new XMLHttpRequest()
    userData.onreadystatechange = function() {
        if(userData.readyState === 4 && userData.status === 200) {
            const user = JSON.parse(userData.responseText)
            console.log("username")
            that.setState({token: -1, userName: user.name})
            that.props.onLogin(user.id)
        }
    }
    userData.open("GET", "https://graph.facebook.com/me?access_token="+this.state.token, true);
    userData.send(null);
},

render: function() {
    if(this.state.token != -1) this.getUserName()
    var hubIcon = <div/>
    // if (!!this.props.hub) hubIcon = this.renderHubIcon(this.props.hub)
		const greeting =  'مرحبًا' + ' ' + this.state.userName + '!'
    return (
			<div>
      <header className="persistent-header-container">
            <div className="header-profile-image-container"><Login onLogin={this.getUserId}/> </div>
            <Link to="/" className="persistent-header-text">
                <h1>أكتشف</h1>
            </Link>
            <div className="header-hub-icon-container">{hubIcon}</div>
      </header>
			<center dir='rtl' className="profile-welcome"> {greeting} </center>
				</div>
    )}

})

export default Header
