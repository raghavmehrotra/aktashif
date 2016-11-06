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

render: function() {
    var linkName = '/' + this.props.params.hubName + '/sample-cluster'
    return (
      <div>
        <Header />
        <h1>{this.props.params.hubName}</h1>
        {this.renderHubIcon()}
        <Link to={linkName} params={{"hubba": this.props.params.hubName}}>A cluster</Link>

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
    )
  },

  renderClusters: function() {

  },

  render: function() {
    console.log(this.props)
    return (
      <div>
        <Header />
        {this.renderHubBanner()}
      </div>
    )
}
    
})

export default Hub;
