import React from 'react'
import {Link} from 'react-router'

const hubNames = ["societies.png", "bte.png", "earthAndSky.png", "health.png", "fiction.png", "greats.png"]
const captions = ["Societies", "Business, Technology & Economics", "Earth and Sky", "Health and the Mind", "Fiction", "Great Ideas & Great People"]

export default React.createClass({

  renderHubIcon: function(name) {
    const source = "src/images/" + name
    return (
      <div key={name} className="hub-homescreen-image">
        <img src={source} />
        <p>{name}</p>
      </div>
    )
  },

  renderHubGrid: function() {
    return hubNames.map((name) => {
      return this.renderHubIcon(name)
    })
  },

  render: function() {
    return (
      <div className="hub-grid">
        {this.renderHubGrid()}
      </div>
    )
  }
})
