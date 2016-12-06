import React from 'react'
import {Link} from 'react-router'
import * as data from '../accessAllData.jsx'

const HubGrid = React.createClass({

  getInitialState: function() {
    return {
      hubNames: [],
      hubCaptions: []
    }
	},

  componentWillMount: function() {
    var firebaseRef = data.getFirebaseReference("hubs")
    var names = []
    var captions = []
    var that = this

    firebaseRef.once("value", function(snapshot) {
      var hubData = snapshot.val()
      for(var hub in hubData) {
        names.push(hubData[hub].id)
        captions.push(hubData[hub].caption)
      }
      that.setState({
        hubNames: names,
        hubCaptions: captions
      })
    })
  },

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
    var hubNames = this.state.hubNames
    var captions = this.state.hubCaptions
    return hubNames.map((name, index) => {
      return this.renderHubIcon(name, captions[index])
    })
  },

  render: function() {
    data.getFirebaseReference()
    return (
      <center>
        <div className="hub-grid">
          {this.renderHubGrid()}
        </div>
      </center>
    )
  }
})

export default HubGrid;
