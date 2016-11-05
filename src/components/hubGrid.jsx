import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

const hubNames = ["societies.png", "bte.png", "earthAndSky.png", "health.png", "fiction.png", "greats.png"]
const captions = ["Societies", "Business, Technology & Economics", "Earth and Sky", "Health and the Mind", "Fiction", "Great Ideas & Great People"]

export default React.createClass({

  renderHubIcon: function(name, caption) {
    const source = "src/images/" + name + ".png"
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
    var hubNames = data.getHubNames()
    var captions = data.getHubCaptions()
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
