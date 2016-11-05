import React from 'react'
import {Link} from 'react-router'

const Hub = React.createClass({

  render: function() {
      var linkName = '/' + this.props.params.hubName + '/sample-cluster'
    return (
        <div>
            <h1>{this.props.params.hubName}</h1>
            <Link to={linkName}>A cluster</Link>
        </div>
    )}
})

export default Hub;
