import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'
import {Link} from 'react-router'
import FacebookComment from './FacebookComment.jsx'
import ClusterGrid from './clusterGrid.jsx'


const Hub = React.createClass({

  getInitalState: function() {
    return {
      renderBanner: true
    }
  },

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
          console.log("Hello")
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "http://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

  renderHubIcon: function() {
      const source = "src/images/hub-icons//" + this.props.params.hubName + ".png"
      return (
        <img className="hub-banner-icon" src={source}/>
      )
  },

  renderHubBanner: function() {
    // if(this.state!==null && this.state.renderBanner == false) return

    const description = data.getHubDescriptions(this.props.params.hubName)
    return (
      <center>
        <div className="hub-banner">
          <div className="hub-banner-icon-container">
            {this.renderHubIcon()}
          </div>
          <div className="hub-banner-icon-title">
            <h2>{this.props.params.hubName}</h2>
          </div>
          <div className="hub-banner-description">
            <p dir='rtl'>
              {description}
            </p>
          </div>
        </div>
      </center>
    )
  },
  renderClusters: function() {

  },

  renderFacebookComments: function() {
    return (
      <center><div className="fb-comments" data-numposts="5"></div></center>
    )
  },
  
  render: function() {
    var linkName = '/' + this.props.params.hubName + '/sample-cluster'
    var hubName = this.props.params.hubName
    return (
      <div>
        <Header />
        {this.renderHubBanner()}
        <ClusterGrid hub={hubName} />
        <FacebookComment />
      </div>
    )
}

})

export default Hub;
