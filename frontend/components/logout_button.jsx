const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');


const LogOutButton = React.createClass({

  handleLogout () {
    SessionActions.logOut();
    // check current route and redirect if on a sensitive page
  },

  render () {
    return (<button className="logout-button" onClick={ this.handleLogout }>Log Out</button>);
  }
});

module.exports = LogOutButton;
