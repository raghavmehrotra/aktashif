import React from 'react'
import Header from './header.jsx'
import BookGrid from './bookGrid.jsx'
import * as data from '../accessAllData.jsx'

const Cluster = React.createClass({

  render: function() {
    return (
        <div>
            <Header hub={this.props.params.hubName} />
            <h1 className="cluster-title">{this.props.params.clusterName}</h1>
            <p dir="rtl" className="cluster-description">{data.getClusterDescription(this.props.params.clusterName)}</p>
            <BookGrid />
        </div>
    )}
})

export default Cluster;