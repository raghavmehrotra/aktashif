import React from 'react'
import {FBComments} from 'facebook-plugins'

const FacebookComment = React.createClass({

  componentDidMount: function() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '115517331888071',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use version 2.1
            });
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    
    componentDidUpdate: function() {
        FB.XFBML.parse();
    },
    
  render: function() {
    return (
        <center><div className="fb-comments" data-numposts="5"></div></center>
    )
}

})

export default FacebookComment;
  