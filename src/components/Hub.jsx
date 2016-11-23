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
          <div className="hub-banner-icon-title">
            <h2> {this.props.params.hubName} </h2>
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
