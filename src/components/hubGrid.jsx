import React from 'react'
import {Link} from 'react-router'

const hubNames = ["societies.png", "bte.png", "earthAndSky.png", "health.png", "fiction.png", "greats.png"]
const captions = ["Societies", "Business, Technology & Economics", "Earth and Sky", "Health and the Mind", "Fiction", "Great Ideas & Great People"]

export default React.createClass({

  renderHubIcon: function(name, caption) {
    const source = "src/images/" + name
    name=name.substring(0, name.length-4)
    return (
      <div key={name} className="hub-homescreen-image-container">
        <Link to={"/"+name}>
          <img className="hub-homescreen-image" src={source} />
        </Link>
        <center><p className="hub-homescreen-image-caption">{caption}</p></center>
      </div>
    )
  },

  renderHubGrid: function() {
    return hubNames.map((name, index) => {
      return this.renderHubIcon(name, captions[index])
    })
  },

  render: function() {
    return (
      <center>
        <div className="hub-grid">
          {this.renderHubGrid()}
        </div>
      </center>
    )
  }
})
