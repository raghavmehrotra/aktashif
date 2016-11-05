import React from 'react'

const Hub = React.createClass({

  render: function() {
    return (
      <h1>{this.props.params.hubName}</h1>
    )
  }
})

export default Hub;
