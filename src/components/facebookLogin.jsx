import React from 'react'
import {Link} from 'react-router'
import {FacebookLogin} from 'react-facebook-login-component'
import * as data from '../accessAllData.jsx'
import {hashHistory} from 'react-router'

const Login = React.createClass({
	
	getInitialState: function() {
    return {
			userId: -1
    }
	},

  responseFacebook: function(response) {
			var that = this
      var userData = new XMLHttpRequest()
      userData.onreadystatechange = function() {
  			if(userData.readyState === 4 && userData.status === 200) {
					const user = JSON.parse(userData.responseText)
					that.setState({userId: user.id})
					that.props.onLogin(response["accessToken"])
          
          //check if user exists...
          var firebaseRef = data.getFirebaseReference("users/"+user.id)
          firebaseRef.once("value", function(snapshot) {
              if(snapshot.val() === null) {
                  hashHistory.push("/register/"+user.id)
                  /*firebaseRef.set({
                      id: user.id,
                      name: user.name
                  })*/
              } else hashHistory.push("/register/"+user.id)
          })
          
  			}
  		}
      userData.open("GET", "https://graph.facebook.com/me?access_token="+response["accessToken"], true);
  		userData.send(null);
  },
	
	renderLogin: function() {
		if (this.state.userId != -1) {
			//get user's profile picture
			const imgSrc = "https://graph.facebook.com/"+this.state.userId+"/picture?type=normal"
			return(
				<Link to={"/profile/"+this.state.userId}> <img className="header-profile-image" src={imgSrc} /> </Link>
			)
		} else {
			return(
			<FacebookLogin socialId="1834161583465879"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="دخول فيسبوك"/>
			)
		}
	},

  render: function() {
    return (
      <div>
				{this.renderLogin()}
      </div>
    )
  }

})
export default Login;
