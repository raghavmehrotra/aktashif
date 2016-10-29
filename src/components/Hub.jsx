import React from 'react'

const Hub = React.createClass({

  render: function() {
    return (
      <h1>{this.props.params.name}</h1>
    )
  }
})

export default Hub;
