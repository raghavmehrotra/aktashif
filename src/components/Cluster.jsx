import React from 'react'

const Cluster = React.createClass({

  render: function() {
    return (
        <div>
            <h1>{this.props.params.clusterName}</h1>
            <p>bla bla</p>
        </div>
    )}
})

export default Cluster;