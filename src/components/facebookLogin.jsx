import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component'

const Login = React.createClass({


  responseFacebook: function(response) {
      console.log(response);
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
