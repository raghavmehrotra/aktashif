import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component'

const Login = React.createClass({


  responseFacebook: function(response) {
      console.log(response);

      var userData = new XMLHttpRequest()
      userData.onreadystatechange = function() {
  			if(userData.readyState === 4 && userData.status === 200) {
  				console.log(userData.responseText)
  			}
  		}
      userData.open("GET", "https://graph.facebook.com/me?access_token="+response["accessToken"], true);
  		userData.send(null);
      //anything else you want to do(save to localStorage)...
  },

  render: function() {
    return (
      <div>
        <FacebookLogin socialId="1834161583465879"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    )
  }

})
export default Login;
