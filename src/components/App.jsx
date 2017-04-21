import React from 'react';
import { Link } from 'react-router';
import HubGrid from './hubGrid.jsx'
import Header from './header.jsx'

const App = React.createClass({

    getInitialState() {
		return {
		  loggedIn: ''
		};
	 },

    getUserId: function(id) {
        console.log("from app, "+id)
		  this.setState({loggedIn: id})
	   },

  render: function() {
    const style = {
      "maxHeight": screen.height
    }
    // console.log(this.state.loggedIn)

    return (
      <div style={style}>
        <Header onLogin={this.getUserId} />
				{React.cloneElement(this.props.children, {userId: this.state.loggedIn})}
      </div>
    )
  }
})


App.propTypes = { children: React.PropTypes.object };

export default App;
