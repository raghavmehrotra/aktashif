import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

export default React.createClass({
  renderClusterIcon: function(name, url) {
    const source = "src/images/cluster-images/" + url + ".png"
    const hubName = this.props.hub
    return (
      <div key={name} className="cluster-icon-container">
        <Link to={"/"+hubName+'/'+url}>
          <img className="cluster-icon" src={source} />
        </Link>
        <p className="cluster-icon-caption">{name}</p>
      </div>
    )
  },

  renderClusterGrid: function() {
    var clusters = data.getClusters()
    return clusters.map((cluster) => {
      return this.renderClusterIcon(cluster.name, cluster.imageURL)
    })
  },

  render: function() {
    return (
      <center>
        <div className="cluster-grid">
          {this.renderClusterGrid()}
        </div>
      </center>
    )
  }
})
