import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

export default React.createClass({

  renderHubIcon: function(name, caption) {
    const source = "src/images/hub-icons/" + name + ".png"
    return (
      <div key={name} className="hub-homescreen-image-container">
        <Link to={"/"+name}>
          <img className="hub-homescreen-image" src={source} />
        </Link>
        <p className="hub-homescreen-image-caption">{caption}</p>
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
    data.getFirebaseData()
    return (
      <center>
        <div className="hub-grid">
          {this.renderHubGrid()}
        </div>
      </center>
    )
  }
})
