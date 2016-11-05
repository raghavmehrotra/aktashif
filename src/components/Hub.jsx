import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'

const Hub = React.createClass({

  renderHubIcon: function() {
    const source = "src/images/" + this.props.params.hubName + ".png"
    return (
      <img src={source}/>
    )
  },

  renderHubDescription: function() {
    
  },

  render: function() {
    return (
      <div>
        <Header />
        {this.renderHubIcon()}
      </div>
    )
  }
})

export default Hub;
