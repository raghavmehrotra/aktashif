import React from 'react'
import Header from './header.jsx'
import * as data from '../accessAllData.jsx'
import {Link} from 'react-router'

const Hub = React.createClass({

renderHubIcon: function() {
    const source = "src/images/" + this.props.params.hubName + ".png"
    return (
      <img src={source}/>
    )
},

render: function() {
    var linkName = '/' + this.props.params.hubName + '/sample-cluster'
    return (
      <div>
        <Header />
        <h1>{this.props.params.hubName}</h1>
        {this.renderHubIcon()}
        <Link to={linkName} params={{"hubba": this.props.params.hubName}}>A cluster</Link>
      </div>
    )
}
    
})

export default Hub;
