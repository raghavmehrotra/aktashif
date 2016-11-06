import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'
import {Link} from 'react-router'

const Hub = React.createClass({

renderHubIcon: function() {
    const source = "src/images/" + this.props.params.hubName + ".png"
    return (
      <img className="hub-banner-icon" src={source}/>
    )
},
    
renderHubBanner: function() {
const description = data.getHubDescriptions(this.props.params.hubName)
return (
  <center>
    <div className="hub-banner">
      <div className="hub-banner-icon-container">
        {this.renderHubIcon()}
      </div>
      <div className="hub-banner-description">
        <p>
          {description}
        </p>
      </div>
    </div>
  </center>
)},

  renderClusters: function() {

  },
    
  render: function() {
    var linkName = '/' + this.props.params.hubName + '/sample-cluster'
    return (
      <div>
        <Header />
        {this.renderHubBanner()}
        <Link to={linkName}>A cluster</Link>
      </div>
    )
}
    
})

export default Hub;
